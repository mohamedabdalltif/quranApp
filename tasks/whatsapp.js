import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TouchableOpacity, Icon } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome5";

export default class map extends React.Component {

    constructor() {
        super()
        this.state = {
            arr: [
                {
                    name: "saifooooo",
                    massage:"hjovpohvb",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                ,Date:"20:10 am",
           
              
                }, {
                    name: "ayyyyyyyya",
                    massage:"hovcv",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                   ,Date:"2 pm",
                   
                  
                }, {name:  "himoo",
                massage:"you are the bestt",
              
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,Date:"yesterday",
                    
             
                }, {
                    name: "monaaa",
                    massage:"gffuiolkn",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,Date:"18:01 am"
              
                }, {
                    name: "koky",
                    massage:"oigfcvbn?",
                    photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                    ,Date:"18:01 am",
                
                },{
                    name: "saifooooo",
                    massage:"gffuiolkn",
                     photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                ,Date:"20:10 am",
               
                },{
                    name: "saifooooo",
                    massage:"gffuiolkn"
                    , photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                ,Date:"20:10 am",
              
          
                },{
                    name: "saifooooo",
                    massage:"you"
                    , photo: 'https://th.bing.com/th/id/OIP.poaNfelS1UjV8I6D8IR9WAAAAA?pid=ImgDet&w=460&h=287&rs=1.jpg'
                ,Date:"20:10 am",
              
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
                            backgroundColor: "green",
                            justifyContent: "space-between",
                            flexDirection:"row",
                            alignItems:"center"
                       

                        }}>
                        
                        <Text
                            style={{
                                fontSize: 25,
                                color: "#fff",
                                textAlign: "right",
                                marginLeft:20
                            }}>
                          WhatsApp
                        </Text>
                        <View
                        style={{
                            flexDirection:"row",
                            
                        }}>
                      
                        <Icons
                            name='search' size={20} color="#fff" />
                              <Icons
                            name='bars' size={20} color="#fff"style={{
                                marginRight: 10, marginLeft:10
                            }}   />

                    </View>
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            alignItems: "center",
                           
                        }}>
                        {this.state.arr.map((item) => (
                            <View
                                style={{
                                    
                                    width: "100%",
                                    backgroundColor: "#fff",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 10,
                                    justifyContent: "space-between",
                                    borderBottomWidth:.5,
                                    borderBottomColor:"#050"

                                }}>
                                    <View
                                    style={{
                                        flexDirection:"row",
                                        
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
                              <View
                             style={{
                                   marginLeft:15
                             }}>
                                <Text
                                    style={{
                                        fontSize: 25,
                                      marginRight:5,
                                      fontWeight:"bold"
                                    }}>
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        
                                    }}>
                                   {item.massage}
                                </Text>
                                </View>
                              
                               </View>
                                <Text
                                    style={{
                                        fontSize: 25,
                                        marginRight: 10
                                    }}>
                                   {item.Date}
                                </Text>
                               
                               
                            </View>


                        ))}
                      

                    </View>










                </View>
                
            </>
        )
    }

}
