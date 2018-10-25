import React, {Component} from 'react';
import {TouchableOpacity,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Guest from './src/screens/guest_profile.js';
import Model_profile from './src/screens/model_profile.js';
import Manager_profile from './src/screens/talentmanager_profile.js';
import Registro from "./src/screens/Registro.js"
import Experiencia from "./src/screens/ExperienciaAgenciaView.js"
import Casting_detail from './src/screens/casting_detail.js';
import Login from './src/screens/LoginView';
import Posted from './src/screens/Posted.js'
import SearchCast from './src/screens/Cast_Search.js'
import {createSwitchNavigator,createDrawerNavigator, createStackNavigator,createBottomTabNavigator} from 'react-navigation'



const AuthStackNavigator = createStackNavigator({
  Posted:Posted,
  SignIn:Login,
  SignIn:Login

})

const AppTabNavigator = createBottomTabNavigator({
  Post: {screen:Posted,
  navigatioOptions:{
    tapBarLabel:Posted,
    tabBarIcon:({tintColor})=>(
      <Icon name='post' color={tintColor} size={24}/>
    )
  }},
  Profile: {screen:Model_profile,
    navigatioOptions:{
      tapBarLabel:Model_profile,
      tabBarIcon:({tintColor})=>(
        <Icon name='md-contact' color={tintColor} size={24}/>
      )
    }},
  SearchCast: {screen:SearchCast,
    navigatioOptions:{
      tapBarLabel:SearchCast,
      tabBarIcon:({tintColor})=>(
        <Icon name='post' color='black' size={24}/>
      )
    }}
  },{
    initialRouteName:'Post',
    order:['Post','SearchCast','Profile'],
    })

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    navigationOptions:({navigation}) => ({
      title:'Selected',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}>
              <Icon name='md-menu' size={24}/>
          </View>
        </TouchableOpacity>
      )
    })
  },
})

const AppDrawerNavigator = createDrawerNavigator({
  Posted:AppStackNavigator,
  SearchCast: SearchCast
})
export default createSwitchNavigator({
  AuthLoading: Login,
  Auth:AuthStackNavigator,
  App:AppDrawerNavigator

})