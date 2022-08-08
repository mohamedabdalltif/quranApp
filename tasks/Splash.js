import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome5"

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Move")

        }, 5000);
    }
    render() {
        return (
            <>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: 'center'

                    }}>



                    <Image
                        style={{
                            width: "95%",
                            height: 400,
                            resizeMode: "contain",


                        }}
                        source={
                            require("../img/Quran-PhotoRoom.png")
                        }

                    />


                    <Text style={{ fontSize: 22, color: "#000", textAlign: 'center', fontWeight: "bold" }}>
                        Designed by : Aya Hashem

                    </Text>


                </View>



























            </>
        )
    }

}