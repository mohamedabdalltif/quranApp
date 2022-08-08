



import React, { Component } from 'react';
import { Text, StyleSheet, View, } from 'react-native';

export default class App extends Component {



    render() {
        return (
            <>
                <Text

                    // numberOfLines={20}
                    style={styles.textstyle}    > Thank you engineer
                </Text>


                <Text style={styles.textstyle} > Thank you

                    <Text style={{ fontSize: 28, color: "#f00" }}
                    > verrrry much ya Hasndsa

                        <Text style={{ fontSize: 30, textAlign: 'center', margin: 33, color: "#845ec2" }}
                        > Hasndsa shokrann
                        </Text>

                    </Text>

                </Text>



                <Text style={{ fontSize: 37, textAlign: 'center', margin: 22, Color: "#0f0" }}
                >  hi

                </Text>

                <Text style={{ fontSize: 24, textAlign: 'justify', margin: 22, color: "#b041ff" }}>
                shkraً lt3b 7drtkwany br5m dymaًwbstghby la sory ho albrmgh ally ghbyh msh ana ، 
                almhm bgd shkraً lykwlmsa3dtkwyarb mtzh8sh mny lan ghbyh 3l6ol
                </Text>



                <Text style={{ fontSize: 33, marginRight: 30, textAlign: 'center', color: "#810541" }}>
                    Hasndsaaaa
                </Text>

                <Text style={{ fontSize: 22, margin: 20, textAlign: 'justify', color: "#461B7E" }}
                > alhkr bta3na msh hfdl a8ol shkraً ktyr 
                bs bgd atshrft bm3rftkwlsh algaywhtzh88 mnywmn ghba2y brdyoa

                </Text>

            </>
        );
    }
}


const styles = StyleSheet.create({
    textstyle: {
        fontSize: 29,
        // fontWeight: '700',
        color: '#0f0',
        textAlign: 'center'
        // lineHeight: 100,
        // letterSpacing: 120,
        // textDecorationLine: 'underline line-through',
        // width: 60,
        // margin: 70,
        //marginTop: 330,
        //marginBottom: 450,



    }

})