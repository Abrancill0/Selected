import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import VerificarCuentaStyles from '../styles/VerificarCuentaStyles.js'

export default class CambiarIdioma extends Component {

  render() {

    return (
      <View style={VerificarCuentaStyles.container}>
        <View style={VerificarCuentaStyles.Text}>
            <Text>Este cambio solo afecta al texto predefinido en la aplicación. Las publicaciones, casting e información general quedaran en su estado como fueron capturados</Text>
        </View>
        <View>
            <Text style={VerificarCuentaStyles.Text}>Si existe un texto mal escrito en tu idioma de origen, porfavor reportalo al correo correciones@select.com y lo adecuaremos a la brevedad</Text>
        </View>
        <View style={VerificarCuentaStyles.Button2}>
            <Button buttonStyle={{borderWidth:1,borderColor:'black'}} color='black' title='Idioma actual Español' backgroundColor='white'/>
        </View>
        <View style={VerificarCuentaStyles.Button2}>
            <Button title='Enviar verificación' backgroundColor='#66656A'/>
        </View>
      </View>
      )
  }
}
