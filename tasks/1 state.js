
import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground ,TouchableOpacity} from 'react-native';

export default class darkmode extends React.Component {

  constructor(){
    super()
    this.state={                    
      init_number:0,
      darkmode:false
    }
  }


  render() {
    return (
      <>
    
      <View
      style={{
        flex:1,
      backgroundColor:this.state.darkmode==false?"#f558":"#000",
  

      }}>

         <Text
      style={{
        fontSize:20,
        color:"#0f0",
        margin:20
      }
        
      }>
     {this.state.init_number}
      </Text>
    <TouchableOpacity
    style={{
      height:100,
      width:100,
      backgroundColor:"#520",
      alignItems:"center",
      alignSelf:"center",
      justifyContent:"center",
      margin:30,
      borderRadius:30
    }}
    onPress={()=>{
      let number=this.state.init_number
      number=number+1
      this.setState({ init_number:number})
    }}>
      
      <Text
      style={{
        fontSize:30,
        color:"#0f0",
       
      }
        
      }>
        سبحان الله

      </Text>

    </TouchableOpacity> 




    <TouchableOpacity
    style={{
      height:150,
      width:200,
      backgroundColor:"#520",
      alignItems:"center",
      alignSelf:"center",
      justifyContent:"center",
      margin:30,
      borderRadius:30
    }}
    onPress={()=>{
      this.setState({
        darkmode:!this.state.darkmode
      })
    }}>
      
      <Text
      style={{
        fontSize:20,
        color:"#0f0",
       
      }}>
        لا اله الا الله

      </Text>

      <Text
      style={{
        fontSize:40,
        color:"#0f0"
      }}>
   {this.state.darkmode==true ?
    "ON" :"OFF"}
      </Text>

    </TouchableOpacity> 




    <TouchableOpacity
    style={{
      height:100,
      width:100,
      backgroundColor:"#520",
      alignItems:"center",
      alignSelf:"center",
      justifyContent:"center",
      margin:30,
      borderRadius:30
    }}
    onPress={()=>{
      var oldnumber=this.state.init_number
      oldnumber=oldnumber-1
      this.setState({init_number:oldnumber})
     
    }}>
      
      <Text
      style={{
        fontSize:20,
        color:"#0f0",
       
      }
        
      }>
    الله اكبر 

      </Text>

    </TouchableOpacity>

      </View>
    
      </>
      )
  }

  }