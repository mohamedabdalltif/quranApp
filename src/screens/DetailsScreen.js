import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import QuranKemenag from "quran-kemenag";
import { Box, Circle, Col, Gap, ImgIcon, Line, Padder, Row, ScaledText } from "urip-rn-kit";
import Icons from "../assets/icons/index";
import Colors from "../assets/constants/Color";
import Images from "../assets/images/index";
import Sound from "react-native-sound";
import Share from 'react-native-share';
// import SoundPlayer from 'react-native-sound-player'
var whoosh

const DetailsScreen = ({ navigation, route }) => {
    const [surah, setSurah] = React.useState(null)
    const [verses, setVerses] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [SoundPlayIndex, setSoundPlayIndex] = React.useState(0)
    React.useEffect(() => {
        const { surahNumber } = route.params;
        getData(surahNumber)




    }, [])


    const shareText = async (msg) => {
        const shareOptions = {
            message: msg,


            failOnCancel: false,
        };

        try {
            const ShareResponse = await Share.open(shareOptions);
            setResult(JSON.stringify(ShareResponse, null, 2));
        } catch (error) {
            console.log('Error =>', error);
            setResult('error: '.concat(getErrorString(error)));
        }
    };



    const PlaySound = (item, index) => {
        setSoundPlayIndex(index)
        let data = verses
        data[index].loading = true
        setVerses([...data])
        whoosh = new Sound(item.verse_audio, Sound.MAIN_BUNDLE, (error) => {


            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // if (global.sound) global.sound.stop();
            // global.sound = whoosh;

            data[index].playedSound = true
            data[index].loading = false

            // setLoading(false)
            setVerses([...data])


            whoosh.play((success) => {
                // alert("mo")
                if (success) {
                    data[index].playedSound = false
                    setVerses([...data])
                    setSoundPlayIndex(0)
                    // console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            }
            );





        }
        );


    }

    const Stop = (item, index) => {
        let data = verses
        whoosh.stop(() => {
            data[index].playedSound = false
            setVerses([...data])
            setSoundPlayIndex(0)

        })
    }

    const StopAndPlay = (item, index) => {
        let data = verses
        whoosh.stop(() => {
            data[SoundPlayIndex].playedSound = false
            setVerses([...data])

            PlaySound(item, index)

        })
    }






    const getData = async (surah_id) => {
        const quran = new QuranKemenag();
        const data = await quran.getSurah(surah_id);
        setSurah(data)
        setVerses(data.verses || []);
        // console.log(data)
    }
    return (
        <SafeAreaView>

            <Row height={50} style={{ paddingHorizontal: 15 }}>
                <Col justifyCenter alignCenter>
                    <ImgIcon onPress={() => {
                        navigation.goBack()
                    }} source={Icons.back} size={35} tintColor={Colors.grey2} />
                </Col>
                <Col size={25} justifyCenter >
                    {/* <ScaledText size={20} style={{textAlign:"center"}} bold color={Colors.purple1}>
                        {surah ? surah.surah_name_arabic : ""}
                    </ScaledText> */}

                </Col>
            </Row>
            <Padder horizontal={20}>
                <Box justifyCenter alignCenter borderRadius={10} height={100} fullWidth backgroundImage={Images.bg}>
                    <ScaledText color={Colors.white} size={20} bold >
                        {surah ? surah.surah_name_arabic : ""}
                    </ScaledText>
                    {/* <ScaledText color={Colors.white} size={18}>
                        {surah ? surah.surah_name_bahasa : ""}
                    </ScaledText> */}
                    <ScaledText color={Colors.white} size={13}>
                        {surah ? `${surah.surah_verse_count} أية` : ""}
                    </ScaledText>
                </Box>
            </Padder>
            <Gap size={20} vertical />
            <FlatList
                data={verses}
                keyExtractor={v => v.verse_id}
                renderItem={({ item, index }) => {
                    const onPress = (data) => {
                        if (data == "") {
                            if (SoundPlayIndex == 0)
                                PlaySound(item, index)
                            else if (index == SoundPlayIndex) {

                                Stop(item, index)
                            }
                            else {
                                //  alert("mo")
                                StopAndPlay(item, index)
                            }
                        }
                        else {
                            // alert(JSON.stringify(verses))
                            shareText(item.verse_arabic)
                        }

                    }

                    return <VerseItem key={index} data={item} onPress={onPress} />
                }}
                ListFooterComponent={<Gap vertical size={200} />}
            />

        </SafeAreaView>
    )

}


const VerseItem = (props) => {
    return (
        <Padder horizontal>
            <Col>
                <Row>
                    <Col>
                        <Padder horizontal>
                            <Box borderRadius={10} fullWidth color={Colors.grey3} height={45}>
                                <Row>
                                    <Col size={3} justifyCenter>
                                        <Padder horizontal>
                                            <Circle size={30} color={Colors.purple1}>
                                                <ScaledText color={Colors.white}>
                                                    {props.data.verse_number}
                                                </ScaledText>
                                            </Circle>
                                        </Padder>
                                    </Col>
                                    <Col justifyCenter>
                                        <Row alignCenter justifyEnd>
                                            {props.data.loading ?
                                                <ActivityIndicator color={Colors.purple1} size={25} />
                                                :
                                                <ImgIcon

                                                    key={props.verse_id}
                                                    onPress={() => { props.onPress("") }}
                                                    source={!props.data.playedSound ? Icons.play : Icons.pause}
                                                    tintColor={Colors.purple1}
                                                    size={30}
                                                />}
                                            <ImgIcon
                                                onPress={() => {
                                                    props.onPress("share")
                                                }}
                                                source={Icons.share}
                                                tintColor={Colors.purple1}
                                                size={25}
                                            />

                                            <Gap />
                                        </Row>
                                    </Col>
                                </Row>
                            </Box>
                        </Padder>
                    </Col>
                </Row>
                <Row justifyEnd>
                    <Padder all>
                        <ScaledText size={22}>{props.data.verse_arabic}</ScaledText>
                    </Padder>
                </Row>
                {/* <Row>
                    <Padder horizontal>
                        <ScaledText size={14}>{props.data.verse_bahasa}</ScaledText>
                    </Padder>
                </Row> */}
                <Gap vertical />
                <Line />
                <Gap vertical />
            </Col>
        </Padder>

    )
}

export default DetailsScreen;



