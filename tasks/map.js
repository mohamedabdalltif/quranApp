import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TouchableOpacity, Icon } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome5"
export default class map extends React.Component {

    constructor() {
        super()
        this.state = {
            arr: [
                {
                    name: "zidann"
                    , photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                ,age:"20",
                address:"jtkk"
                }, {
                    name: "ayyyyyyyya",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,age:"30",
                    address:"jtr"
                }, {
                    name: "iiiiiii",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,age:"50",
                    address:"jtrjkk"
                }, {
                    name: "hhhh",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,age:"10",
                    address:"jtrjkk"
                }, {
                    name: "bnnh",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,age:"30",
                    address:"jtrjkk"
                }
            ]
        }
    }


    render() {
        return (
            <>
                <View
                    style={{
                        flex: 1
                    }}>
                    <View
                        style={{
                            width: "100%",
                            height: 80,
                            backgroundColor: "#ff0",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center"

                        }}>
                        <Icons
                            name='arrow-left' size={20} color="#050" style={{
                                marginTop: 5, marginLeft: 20
                            }} />
                        <Text
                            style={{
                                fontSize: 25,
                                color: "#050",
                                textAlign: "center",

                            }}>
                            CONTACTS
                        </Text>
                        <Icons
                            name='bars' size={20} color="#050" style={{
                                marginTop: 5, marginRight: 20
                            }} />

                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            alignItems: "center"
                        }}>
                        {this.state.arr.map((item) => (
                            <View
                                style={{
                                    height: 60,
                                    width: "80%",
                                    backgroundColor: "#f005",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 10,
                                    justifyContent: "space-between"
                                }}>
                                <Image
                                    style={{
                                        height: 40,
                                        width: 60,
                                        marginLeft: 5,
                                        borderRadius: 20
                                    }}
                                    source={{
                                        uri: item.photo
                                    }}
                                />

                                <Text
                                    style={{
                                        fontSize: 30,
                                        marginRight: 20
                                    }}>
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 30,
                                        marginRight: 20
                                    }}>
                                   {item.age}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 30,
                                        marginRight: 20
                                    }}>
                                   {item
                                   .address}
                                </Text>
                            </View>


                        ))}

                    </View>










                </View>







            </>
        )
    }

}