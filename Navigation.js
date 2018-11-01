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
import Register from './src/screens/Registro';
import Posted from './src/screens/Posted.js'
import PostDetail from './src/screens/PostDetail.js'
import SearchCast from './src/screens/Cast_Search.js'
import Chat from './src/screens/Chat.js';
import VerificarCuenta from './src/screens/VerificarCuenta.js';
import CambiarIdioma from './src/screens/CambiarIdioma';
import {createSwitchNavigator,createDrawerNavigator, createStackNavigator,createBottomTabNavigator,createTopTabNavigator} from 'react-navigation'
import Rating from './src/screens/Rating';




const AuthStackNavigator = createStackNavigator({
  SignIn:{screen:Login,
  navigationOptions:{
    header:null}
},
  Registro:{screen:Register,
    navigationOptions:{
      header:null}
  },

})

const AppTabNavigator = createBottomTabNavigator({
  Post: {screen:Posted,
  navigatioOptions:{
    tapBarLabel:Posted,
    tabBarIcon: ({tintColor}) => (
      <Icon
          name="google"
          color={tintColor}
          size={24}
      />)
  }},
  Chat: {screen:Chat},
  SearchCast: {screen:SearchCast,
    navigatioOptions:{
      tapBarLabel:SearchCast,
      tabBarIcon: ({tintColor}) => (
        <Icon
            name="google"
            color={tintColor}
            size={24}
        />)
    }},
    Profile: {screen:Model_profile,
      navigatioOptions:{
        tapBarLabel:Model_profile,
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="google"
              color={tintColor}
              size={24}
        />),
        
      }},
      
  },{
    tabBarOptions: {
      showIcon: true ,
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 12,
      },
      activeBackgroundColor:'#FA5F5A',
      style: {
        backgroundColor: 'black',
        activeBackgroundColor:'red'
      }},
      showIcon:true,
      showLabel:true
    })

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    navigationOptions:({navigation}) => ({
      title:'Selected',
      headerTintColor: '#FA5F5A',
      headerStyle: {
        backgroundColor: 'white',
      },
      
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}>
              <Icon name='md-menu' size={24} color='black'/>
          </View>
        </TouchableOpacity>
      )
    })
  },
  PostDetail:{
    screen:PostDetail,
    navigationOptions:{
      headerVisible:false,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
      },}
  },
  Verificar_Cuenta:VerificarCuenta,
  Cambiar_Idioma:CambiarIdioma,
})

const AppDrawerNavigator = createDrawerNavigator({
    Home:AppStackNavigator,
    'Details Rating': Rating,
    'Verificar Cuenta':VerificarCuenta,
    'Cambiar Idioma':CambiarIdioma,
},{
  navigationOptions:{
  header:true,
  headerStyle : {
    backgroundColor: 'black',
  }}
  
  
})

export default createSwitchNavigator({
  Auth:AuthStackNavigator,
  App:AppDrawerNavigator,

})