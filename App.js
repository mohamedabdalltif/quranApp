import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'

// my love page
import Move from "./tasks/move";
import Doaa from "./tasks/doaa";
import Masbaha from "./tasks/masbaha";
import Splash from "./tasks/Splash";



const Stack = createNativeStackNavigator();
import { StatusBar } from "react-native";

import Colors from "./src/assets/constants/Color";


const App = () => {
  return (


    <NavigationContainer >
     
      <Stack.Navigator
        screenOptions={{ headerShown: false }}

        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Home" component={HomeScreen}
          options={{
            title: 'السور', headerStyle: {
              backgroundColor: Colors.purple2,

            },
            headerTitleAlign: "center",
            headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },


          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen}
          options={{
            title: 'Details', headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen name='Move' component={Move} />
        <Stack.Screen name='Doaa' component={Doaa} />

        <Stack.Screen name='Masbaha' component={Masbaha} />
        <Stack.Screen name='Splash' component={Splash} />




      </Stack.Navigator>

    </NavigationContainer>


  )
}
export default App;
