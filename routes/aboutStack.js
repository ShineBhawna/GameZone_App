import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons'

console.error = (error) => error.apply;
const AboutStack = createStackNavigator();

export default function AboutScreen ({navigation}) {
  return (
      <AboutStack.Navigator
        initialRouteName='About'
        screenOptions={{ 
          gestureEnabled: false,
          headerTintColor:'#333',
          headerStyle:{
            backgroundColor:'#eee', 
            height:118
          },
          headerTitleAlign: "center" 
        }}
      >
        <AboutStack.Screen
          name='About'
          component={About}
          options={{
            headerTitle: ()=> <Header navigation={navigation} title={'About'}/>,
            // headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#eee' color='#333' style={{marginLeft:5}} onPress={()=>navigation.openDrawer()}/>)
        }}
        />
      </AboutStack.Navigator>
  )
}