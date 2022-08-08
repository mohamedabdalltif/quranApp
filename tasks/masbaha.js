
import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, Modal,StatusBar,
     TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';
import *as Animatable from 'react-native-animatable';
export default class Masbaha extends React.Component {

    constructor() {
        super()
        this.state = {
            init_number: 0,
            darkmode: false,
            saif: false,
            title: "",
            changedoaa: "",


        }
    }

    async setdata(number) {
        await AsyncStorage.setItem("bhbk", JSON.stringify(number))

    }


    async getdata() {
        var yoyo = await AsyncStorage.getItem("bhbk")
        yoyo = JSON.parse(yoyo)
        if (yoyo == null) {
            this.setState({ init_number: 0 })
        } else {
            this.setState({ init_number: yoyo })
        }



    }

    componentDidMount() {
        this.getdata()
        //this.setdata()
    }




    countplus() {
        let number = this.state.init_number
        number = number + 1
        if (number < 33) {
            this.setState({ title: "سبحان الله" })
        } else
            if (number < 66) {
                this.setState({ title: "الحمد لله " })
            } else
                if (number < 99) {
                    this.setState({ title: "لا اله الا الله " })
                }
                else {
                    this.setState({ title: "صلي علي محمد" })
                    number = 0

                }




        if (number == 33) {
            this.setState({ saif: true, changedoaa: "اللهم اسقي جدي عثمان من ماء الجنه" })

        }
        if (number == 66) {
            this.setState({ saif: true, changedoaa: "اللهم ارحم عمو عادل واذقه من سعاده الجنه" })

        }

        this.setState({ init_number: number })
        this.setdata(number)
    }





    render() {
        return (
            <>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#fff"


                    }}>
                          <StatusBar
        backgroundColor={'#6632BB'}
 

      /> 

                    <View
                        style={{
                            width: "100%",
                            height: 80,
                            backgroundColor: "#6632BB",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",


                        }}>


                        <Text
                            style={{
                                fontSize: 30,
                                color: "#fff",
                                textAlign: "center",
                                marginLeft: 10,
                                marginTop: 10
                            }}>
                            المسبحه
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack()
                            }}
                        >

                            <Icons
                                name='arrow-left' size={20} color="#fff" style={{
                                    marginTop: 10, marginRight: 20
                                }} />

                        </TouchableOpacity>
                    </View>
                    <ImageBackground
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        source={require("../img/ss.jpg")}>


                        <Text
                            style={{
                                fontSize: 50,
                                color: "#471B00",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {this.state.init_number}
                        </Text>
                        <Text
                            style={{
                                fontSize: 50,
                                color: "#fff",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {this.state.title}
                        </Text>

                        <Animatable.View
                            animation={'fadeInUp'}
                            style={{
                                height: "60%",
                                width: "100%",
                                justifyContent: "center"
                            }}
                        >

                            <TouchableOpacity
                                style={{
                                    padding: 30,
                                    flexDirection: "row",
                                    backgroundColor: "#525580",
                                    alignItems: "center",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    margin: 10,
                                    borderRadius: 30
                                }}
                                onPress={() => {
                                    this.countplus()
                                }}>

                                <Text
                                    style={{
                                        fontSize: 25,
                                        color: "#ddd",
                                        textAlign: "center"

                                    }

                                    }>
                                    سبح
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'center', fontSize: 30
                                        , marginLeft: 10
                                    }}>  💖
                                </Text>
                            </TouchableOpacity>

                        </Animatable.View>



                    </ImageBackground>
                </View>


                <Modal
                    visible={this.state.saif}
                    animationType="slide"
                    onRequestClose={() => {
                        this.setState
                            ({ saif: false })

                    }}
                    transparent={true}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "90%",
                            padding: 10,
                            backgroundColor: "#A785AC",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 40


                        }}>

                            <Text style=
                                {{
                                    fontSize: 25,
                                    margin: 10,
                                    Color: "#000"
                                }}>

                                {this.state.changedoaa}

                            </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#000",
                                    alignItems: "center",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    margin: 30,
                                    borderRadius: 30
                                }}
                                onPress={() => {
                                    this.setState({ saif: false })
                                }}>

                                <Text
                                    style={{
                                        fontSize: 30,
                                        color: "#FFF",
                                        textAlign: "center",
                                        padding: 10

                                    }

                                    }>
                                    اغلاق

                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </>
        )
    }

}
