import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import Users from './src/screens/Users'
import ordered_item from './src/screens/ordered_item'
import User_details from './src/screens/User_details'
const Stack=createNativeStackNavigator();
import {StatusBar} from "react-native";
import Seif from './src/screens/Seif';
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
    // screenOptions={{headerShown:false,headerTitleAlign:"center", headerStyle: {
    //         backgroundColor: '#f4511e',
            
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //        },
          
           
         
        
    // }}  
    
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
{/* 
<Stack.Screen name="ordered" component={ordered_item}  
        options={{ title: 'ordered'}}
             /> */}
    </Stack.Navigator>

  </NavigationContainer>


)
}
export default App;

// // import * as React from 'react';
// import { View, Text,StatusBar } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // import {StatusBar} from "react-native";

     


// function HomeScreen() {
//   return (
    
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <StatusBar
//   backgroundColor="#f4511e"
//   // barStyle={"dark-content"}
//   // translucent={true}
//   />
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'My home',
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerBlurEffect:"systemUltraThinMaterialDark",
//             headerTransparent:true,
//             presentation:"transparentModal"
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

