import React, {Component} from 'react';
import {Text, View,TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import { Button } from 'react-native-elements'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import styles from '../styles/appstyle';
import styleslocal from '../styles/LoginStyle';
import colors from '../styles/colors';

export default class PresentationScreen extends Component {

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
                  <Text style={{color:'white', textAlign: 'center',fontSize:RFValue(48)}}>Connecting the <Text style={{color:'#F64648'}}>Entertainment</Text> World</Text>
              </View>
              <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                <View style={{margin:5,flex:1,flexDirection:'row'}}>
                  <Button title='Register' 
                      backgroundColor='#F64648' 
                      containerViewStyle={{flex:1,width:undefined,height:undefined}}
                    />
                </View>
                <View style={{margin:5,flex:1,flexDirection:'row'}}>
                  <Button title='Login' 
                      backgroundColor='rgba(52, 52, 52, 0.2)' 
                      containerViewStyle={{flex:1,width:undefined,height:undefined}}
                      onPress={() => this.props.navigation.navigate('SignIn')}/>
                </View>
              </View>
          </View>
        </ImageBackground>

      </View>
      
      )
  }
}
