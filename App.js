import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'

const Stack=createNativeStackNavigator();
import {StatusBar} from "react-native";

import  Colors  from "./src/assets/constants/Color";


const App=()=>{
return(

 
  <NavigationContainer >
     <StatusBar
  backgroundColor={Colors.purple2}
  barStyle={"dark-content"}
  translucent={true}
  

/>
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
   
    
    >
    <Stack.Screen
     name="Home" component={HomeScreen}
     options={{ title: 'السور', headerStyle: {
              backgroundColor: Colors.purple2,
            
            },
            headerTitleAlign:"center",
            headerShown:true,
            headerTintColor: '#fff',
            headerTitleStyle: {
                      fontWeight: 'bold',
                     },
                    
            
             }}
              /> 
         <Stack.Screen name="Details" component={DetailsScreen}  
        options={{ title: 'Details', headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff', }}
             />

    </Stack.Navigator>

  </NavigationContainer>


)
}
export default App;
