import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View,StatusBar } from "react-native";


const User_details = ({ navigation, route }) => {
  const[All_address,setShow_All]=useState(false)
  const [user, setuser] = useState(
    route.params.user_obj
  )

  useEffect(()=>{
    navigation.setOptions({ title:route.params.title, headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff'  })
    },[])

  function renders(attribute_name, att_avlue) {
   return <View style={{ width: "100%", height: 50, backgroundColor: "red", flexDirection: "row",marginBottom:10 }}>
      <View style={{ width: "20%", height: "100%", backgroundColor: "orange", alignItems: "center", justifyContent: "center" }}>
        <Text>
          {attribute_name}
        </Text>
      </View>
      <View style={{ width: "80%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <Text>
          {att_avlue}
        </Text>

      </View>

    </View>
  }

  return (
    <>

      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ width: "95%", height: "100%", backgroundColor: "yellow" }}>
        <StatusBar
                        backgroundColor="#f4511e"
                        // barStyle={"dark-content"}
                        translucent={true}
                        

                    />
         
          <View style={{width:"100%",height:"25%",alignItems:"center",justifyContent:"center",marginBottom:"3%"}}>
             <View style={{width:150,height:150,backgroundColor:"green",borderRadius:75}}>

             </View>
          </View>

 <ScrollView contentContainerStyle={{paddingBottom:"25%"}}>

          {renders("NAME",user.user_name)}
          {renders("EMAIL",user.user_email)}
          {renders("PHONE",user.user_phone)}
          {user.user_addresses.length?
          !All_address?<>
          <TouchableOpacity
          disabled={user.user_addresses.length==1}
          onPress={()=>{
            setShow_All(true)
          }}
           style={{ width: "100%", height: 50, backgroundColor: "red", flexDirection: "row",marginBottom:10 }}>
      <View style={{ width: "20%", height: "100%", backgroundColor: "orange", alignItems: "center", justifyContent: "center" }}>
        <Text>
          ADDRESS
        </Text>
      </View>
      <View style={{ width: "80%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <Text style={{fontSize:15}}>
          {user.user_addresses[0].address_title}
        </Text>
        <Text style={{fontSize:12}}>
          {user.user_addresses[0].address_description}
        </Text>

      </View>

    </TouchableOpacity>
    </>:
          
            user.user_addresses.map((address,index)=>{
             
              return(
             <>

              <TouchableOpacity
              onPress={()=>{
                
                  setShow_All(false)
                }}
              disabled={index!=0}
               style={{ width: "100%", height: 50, backgroundColor: "red", flexDirection: "row",marginBottom:10 }}>
      <View style={{ width: "20%", height: "100%", backgroundColor: "orange", alignItems: "center", justifyContent: "center" }}>
        <Text>
          {"address "+(index+1)}
        </Text>
      </View>
      <View style={{ width: "80%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <Text style={{fontSize:15}}>
          {address.address_title}
        </Text>
        <Text style={{fontSize:12}}>
          {address.address_description}
        </Text>

      </View>

    </TouchableOpacity>

    </>) })
          
         
         :null}
          {renders("NUM OF ORDERS",user.user_numOf_order)}

          </ScrollView>

        </View>
      </View>



    </>
  )

}
export default User_details;