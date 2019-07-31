import React, {Component} from 'react';
import {TouchableOpacity,View,Text,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon4 from 'react-native-vector-icons/Feather'


import Guest from './src/screens/GuestProfileScreen.js';
import Model_profile from './src/screens/ModelProfileScreen.js';
import Manager_profile from './src/screens/TalentManagerProfileScreen.js';
import Registro from "./src/screens/RegistroScreen.js"
import Experiencia from "./src/screens/ExperienciaAgenciaView.js"
import Casting_detail from './src/screens/CastingDetailScreen.js';
import Login from './src/screens/LoginViewScreen';
import Register from './src/screens/RegistroScreen';
import Home from './src/screens/HomeScreen.js';
import NewPost from './src/screens/NewPostScreen.js'
import PostDetail from './src/screens/PostDetailScreen.js'
import CommentScreen from './src/screens/CommentsScreen.js'
import SearchCast from './src/screens/SearchCastScreen.js'
import ChatScreen from './src/screens/ChatScreen.js';
import CambiarIdioma from './src/screens/CambiarIdiomaScreen';
import PresentationScreen from './src/screens/PresentationScreen';
import {createSwitchNavigator,createDrawerNavigator,createAppContainer, createStackNavigator,createBottomTabNavigator,createTopTabNavigator} from 'react-navigation'
import { Drawer } from 'react-native-router-flux';
import colors from './src/styles/colors.js';



const AuthStackNavigator = createStackNavigator({
  PresentationScreen:{screen:PresentationScreen,
    navigationOptions:{
      header:null}
  },
  SignIn:{screen:Login,
  navigationOptions:{
    header:null,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
      },}
},
  Registro:{screen:Register,
    header:null,
    navigationOptions:{
      headerVisible:true}
  },

})

const AppTabNavigator = createBottomTabNavigator(
  {
    Home:{screen:Home,navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <View style={{flexDirection:'column',width:50}}>
          <Icon2
              name="home-currency-usd"
              color={tintColor}
              size={24}
              style={{alignSelf:'center',shadowOpacity:.1}}>
          </Icon2>
         </View>)
    })},
    SearchCast:{screen:SearchCast,navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <View style={{flexDirection:'column',width:50}}>
          <Icon
              name="md-search"
              color={tintColor}
              size={24}
              style={{alignSelf:'center',shadowOpacity:.1}}>
          </Icon>
         </View>)
  })},
  NewPost:{screen:NewPost,navigationOptions: () => ({
    tabBarIcon: ({tintColor}) => (
      <View style={{flexDirection:'column',width:50}}>
        <Icon3
            name="plus-square-o"
            color={tintColor}
            size={24}
            style={{alignSelf:'center',shadowOpacity:.1}}>
        </Icon3>
       </View>)
})},
  Model_profile:{screen:Model_profile,navigationOptions: () => ({
    tabBarIcon: ({tintColor}) => (
      <View style={{flexDirection:'column',width:50}}>
        <Icon3
            name="user-circle"
            color={tintColor}
            size={24}
            style={{alignSelf:'center',shadowOpacity:.1}}>
        </Icon3>
      </View>)
  })},
    ChatScreen:{screen:ChatScreen,navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <View style={{flexDirection:'column',width:50}}>
          <Icon4
              name="message-circle"
              color={tintColor}
              size={24}
              style={{alignSelf:'center',shadowOpacity:.1}}>
          </Icon4>
         </View>)
  })}},
    {tabBarOptions:{showLabel:false,activeBackgroundColor:'black',inactiveTintColor: 'gray',activeTintColor:'#FA5F5A',style:{backgroundColor:'#000'}}},
    {initialRouteName:'Home'},
    )
    

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    navigationOptions:({navigation}) => ({
      headerTintColor: '#FA5F5A',
      headerStyle: {
        backgroundColor: 'black',
      },
      
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}>
              <Icon name='md-menu' size={24} color='white'/>
          </View>
        </TouchableOpacity>
      )
    })
  },
  CommentScreen:{
    screen:CommentScreen,
    navigationOptions:{
      headerVisible:true,
      title:'Comments',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
      },
    },
  },
  PostDetail:{
    screen:PostDetail,
    navigationOptions:{
      headerVisible:true,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
      },}
  },
  Cambiar_Idioma:CambiarIdioma,
})

const AppDrawerNavigator = createDrawerNavigator({
    Home:AppStackNavigator,
    'Language':CambiarIdioma,
},{
  drawerBackgroundColor:'#000',
  contentComponent:() => (
    <View style={{flex:1}}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <Text style={colors.white}>Home </Text>
        </SafeAreaView>
    </View>
  ),
}
)


const SwitchApp  = createSwitchNavigator({
  Auth:AuthStackNavigator,
  App:AppDrawerNavigator,
})

const ContainerApp = createAppContainer(SwitchApp);



export default ContainerApp;