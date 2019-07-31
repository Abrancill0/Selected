import React, {Component} from 'react';
import {Text, View,TextInput,ScreenHeight,ImageBackground,Image,Dimensions} from 'react-native';
import { Button } from 'react-native-elements'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styles from '../styles/appstyle';
import styleslocal from '../styles/LoginStyle';

export default class LoginView extends Component {

  render() {
    let ScreenHeight = Dimensions.get("window").height;


    return (
      <View style={{height: ScreenHeight,backgroundColor:'black'}}>

          <ImageBackground source={require('../img/7420.jpg')} style={{ flex: 1, width: undefined, height: undefined}}>
          <View style={{flex:1,padding:30}}>
              <View style={{flex:.8}}>
                  <Image source={require('../img/logo_selected_blanco.png')}style={{flex:1, height: undefined, width: undefined}} resizeMode="contain"/>
              </View>
              <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>

              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{margin:5,flex:1,flexDirection:'row'}}>
                  <Button title='Login' 
                      backgroundColor='#F64648' 
                      containerViewStyle={{flex:1,width:undefined,height:undefined}}
                      onPress={() => this.props.navigation.navigate('App')}
                    />
                </View>
              </View>
          </View>
        </ImageBackground>

      </View>
      )
  }
}
