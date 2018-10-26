import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import styleslocal from '../styles/LoginStyle';

export default class LoginView extends Component {

  render() {

    return (
      <View style={styles.container}>
      <View style={[styleslocal.boxContainer,styleslocal.box1]}>
          <Text style={styles.TitleBigWhite}>
            Selected
          </Text>
      </View>
      <View style={[styleslocal.boxContainer,styleslocal.box2]}>
          <Button style={[styleslocal.botonDesactivo,styleslocal.boton]}
                  title="Register"
                  color='#ecf0f1'
                  backgroundColor='black'
                  fontWeight='600'
                  fontSize={14} />
          <Button style={[styleslocal.boton,styleslocal.botonActivo]}
                  title="Login"
                  color='#c0392b'
                  backgroundColor='black'
                  fontWeight='900'
                  fontSize={14}/>
        </View>
        <View style={[styleslocal.boxContainer,styleslocal.box3]}>
          <TextInput style={styleslocal.CajaTexto}
              placeholder={'  Name'}
            
              placeholderTextColor='white'>
            </TextInput>
            <TextInput style={styleslocal.CajaTexto}
              placeholder={'  UserName'}
              placeholderTextColor='white'>
            </TextInput>
        </View>
        <View style={[styleslocal.boxContainer,styleslocal.box4]}>
        <Text style={styles.littleWhite}>
            Forgot your password? Reset
          </Text>
        </View>
        <View style={[styleslocal.boxContainer,styleslocal.box5]}>  
        
          <Button title='Next'
              fontSize= {20} fontWeight= '700'
              onPress={this._onPressButton}
              loadingProps={{ size: "large", color: "#ecf0f1" }}
              buttonStyle={{
                backgroundColor: "#e74c3c",
                width: 300,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('App')}/>    
        </View>
      </View>
      )
  }
}
