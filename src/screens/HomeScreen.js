import QuranKemenag from "quran-kemenag";
import React from "react";
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Box, Circle, Col, Line, Padder, Row, ScaledText } from "urip-rn-kit";
import Colors from "../assets/constants/Color";
import Images from "../assets/images/index";
import AntDesign from "react-native-vector-icons/AntDesign"
import Octicons from "react-native-vector-icons/Octicons"
// import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, Stack, Center, Heading, NativeBaseProvider } from "native-base"

const HomeScreen = ({ navigation }) => {
    const [ListOfSurah, setListOfSurah] = React.useState([]);

    const [ShowSearchBar, setShowBar] = React.useState(false)
    const [SearchText, setSearchText] = React.useState("")

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const quran = new QuranKemenag();
        const data = await quran.getListSurah()

        // console.log(data)
        setListOfSurah(data)
    }

    return (
        <>
            {/* 
<NativeBaseProvider>

<VStack space={4} alignItems="center">
     
      <Center w="100%" h="20" bg={Colors.purple2}  />
      
    </VStack>
   

</NativeBaseProvider> */}

            <SafeAreaView>
                <View style={{ width: "100%", height: 55, backgroundColor: Colors.purple2, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => {
                            setShowBar(!ShowSearchBar)
                        }

                        }
                        style={{ width: "20%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                        {ShowSearchBar ? <AntDesign name="close" size={20} color={"#fff"} /> :
                            <AntDesign name="search1" size={20} color={"#fff"} />
                        }



                    </TouchableOpacity>
                    {ShowSearchBar ?
                        <View style={{ width: "80%", height: "80%", paddingHorizontal: "5%", justifyContent: "center" }}>
                            <TextInput
                                onChangeText={(value) => {
                                    setSearchText(value)
                                    // console.log(SearchText)
                                }}
                                textAlign="center"
                                value={SearchText}
                                placeholder="???????? ?????? ????????????"
                                style={{ width: "100%", height: "90%", backgroundColor: "#fff", borderRadius: 12, fontSize: 15 }} />
                        </View>
                        :
                        <>
                            <View>
                                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
                                    ??????????
                                </Text>
                            </View>
                            <TouchableOpacity style={{ width: "20%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                            <Octicons name="three-bars" size={30} color={"#fff"} />
                            </TouchableOpacity>
                        </>
                    }

                </View>
                <FlatList

                    data={ListOfSurah}
                    keyExtractor={s => `${s.surah_id}`}
                    renderItem={({ item, index }) => {
                        const onPress = () => {
                            // alert(JSON.stringify(item))
                            navigation.navigate('Details', { surahNumber: item.surah_id })
                        }
                        return (
                       
                           item.surah_name.includes(SearchText)||item.surah_name_arabic.includes(SearchText)?(
                            <SurahItem key={index} data={item} SearchKey={SearchText} onPress={onPress} />
                            )
                            :(<></>)
                        )
                            
                    }}
                />
            </SafeAreaView>
        </>)

}



const SurahItem = (props) => {
    return (
        // props.data.surah_name.includes(props.SearchKey)?(
        <Col onPress={() => { props.onPress() }}>
            <Padder horizontal={10}>
                <Row height={60}>
                    <Col justifyCenter>
                        <Box backgroundImage={Images.num_bg}
                            height={35}
                            width={35}
                            justifyCenter
                            alignCenter
                        >
                            <ScaledText size={13}>
                                {props.data.surah_id}
                            </ScaledText>

                        </Box>

                    </Col>
                    <Col size={3} justifyCenter>
                        <ScaledText size={18}>
                            {props.data.surah_name}
                        </ScaledText>
                        <ScaledText color={Colors.grey2}>
                            {`${props.data.surah_verse_count} verses`}
                        </ScaledText>
                    </Col>
                    <Col size={3} justifyCenter alignEnd >
                        <ScaledText color={Colors.purple1} size={20} >
                            {props.data.surah_name_arabic}
                        </ScaledText>
                    </Col>

                </Row>
                <Line size={1} color={Colors.grey2} />
            </Padder>
        </Col>
        // ):(<></>)
                    
    )

}

export default HomeScreen;