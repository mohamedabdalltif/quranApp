import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';
import *as Animatable from 'react-native-animatable';

export default class Move extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>

                <View
                    style={{
                        flex: 1
                    }}>
 <StatusBar
        backgroundColor={'#6632BB'}
 

      /> 
                    <View
                        style={{
                            width: "100%",
                            height: 80,
                            backgroundColor: '#6632BB',
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center"


                        }}>

                        <Text
                            style={{
                                fontSize: 30,
                                color: "#fff",
                                textAlign: "center",

                            }}>
                            الرئيسيه
                        </Text>


                    </View>

                    <ImageBackground
                        source={require("../img/bg1.jpg")}
                        style={{
                            flex: 1
                        }}

                    >

                        <View
                            style={{
                                marginTop: 20,
                                alignItems: "center"
                            }}>

                            <Animatable.View
                                animation={'fadeInLeft'}
                                style={{
                                    width: "100%",
                                }}
                            >


                                <TouchableOpacity

                                    onPress={() => {
                                        this.props.navigation.navigate("Home")
                                    }}

                                >


                                    <LinearGradient
                                        colors={['#541960', '#884A93', '#A767B1']}

                                        style={
                                            {
                                                height: 80,
                                                width: "90%",
                                                backgroundColor: "#525580",
                                                margin: 20,
                                                borderRadius: 10,
                                                padding: 10,
                                                justifyContent: "center",
                                                alignItems: "center"

                                            }}>


                                        <Text style={{
                                            fontSize: 25,
                                            color: "#fff"

                                        }}>
                                            القرآن الكريم
                                        </Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            </Animatable.View>


                            <Animatable.View
                                animation={'fadeInRight'}
                                style={{
                                    width: "100%",
                                }}
                            >

                                <TouchableOpacity

                                    onPress={() => {
                                        this.props.navigation.navigate("Doaa")
                                    }}>

                                    <LinearGradient
                                        colors={['#541960', '#884A93', '#A767B1']}
                                        style={
                                            {
                                                height: 80,
                                                width: "90%",
                                                backgroundColor: "#525580",
                                                margin: 20,
                                                borderRadius: 10,
                                                padding: 10,
                                                justifyContent: "center",
                                                alignItems: "center"

                                            }}>






                                        <Text style={{
                                            fontSize: 25,
                                            color: "#fff"
                                        }}>

                                            الادعيه
                                        </Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            </Animatable.View>

                            <Animatable.View
                                animation={'fadeInLeft'}
                                style={{
                                    width: "100%",
                                }}
                            >


                                <TouchableOpacity

                                    onPress={() => {
                                        this.props.navigation.navigate("Masbaha")
                                    }}


                                >

                                    <LinearGradient



                                        colors={['#541960', '#884A93', '#A767B1']}
                                        style={
                                            {
                                                height: 80,
                                                width: "90%",
                                                backgroundColor: "#525580",
                                                margin: 20,
                                                borderRadius: 10,
                                                padding: 10,
                                                justifyContent: "center",
                                                alignItems: "center"

                                            }}>

                                        <Text style={{
                                            fontSize: 25,
                                            color: "#fff"
                                        }}>

                                            المسبحه
                                        </Text>


                                    </LinearGradient>
                                </TouchableOpacity>
                            </Animatable.View>





                        </View>







                    </ImageBackground>






                </View>







            </>
        )
    }

}