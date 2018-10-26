import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import { Button,SearchBar,Avatar } from 'react-native-elements'
import styles from '../styles/appstyle';
import styleslocal from '../styles/LoginStyle';
import {createTabNavigator} from 'react-navigation'
import ChatStyle from '../styles/ChatStyle'

  
class Contacts extends React.Component {
    render() {
      return (
        <View style={ChatStyle.contenedorPrincipal}>
            <View style={ChatStyle.SearchBar}>
                <SearchBar
                        inputStyle={{color:'white'}}
                        icon={{color:'white'}}
                        containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 5}}
                        placeholder='Search' 
                        placeholderTextColor='white'/>
            </View>
            <View style={ChatStyle.contacts}>
                <View style={ChatStyle.Row_contact}>
                    <View style={ChatStyle.contact}>
                            <Avatar
                                medium
                                rounded
                                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                            <Text style={{color:'white',fontSize:11}}>Richard Parker</Text>
                    </View>
                </View>
            </View>
        </View>
      );
    }
  }

class Chats extends React.Component {
    render() {
      return (
        <View style={ChatStyle.contenedorPrincipal}>
            
        </View>
      );
    }
  }

  class Projects extends React.Component {
    render() {
      return (
        <View style={ChatStyle.contenedorPrincipal}>

        </View>
      );
    }
  }
  
  export default createTabNavigator(
    {
        Contacts: { screen: Contacts },
        Chats: { screen: Chats },
        Projects: { screen: Projects}
    },
    {
        tabBarPosition:'top',
        tabBarOptions: {
            activeTintColor: 'white',
            labelStyle: {
              fontSize: 16,
            },
            activeBackgroundColor:'black',
            showIcon:true,
            style: {
                    backgroundColor: 'white',
                    height:35,
                }
            }
    })