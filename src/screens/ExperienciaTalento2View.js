import React, {Component} from 'react';
import {StyleSheet, View,Text,TextInput,ScrollView} from 'react-native';
import {Button,CheckBox} from 'react-native-elements'
import { Actions } from 'react-native-router-flux'; // New code

export default class ExperienciaTalento2View extends Component {
  constructor(props) {
    super(props);

}

  render() {
    return (
      <ScrollView style={styles.container} >
        <View style={[styles.boxContainer,styles.box1]}>
          <Text style={styles.titulo}>
            Selected
          </Text>
        </View>
        <View style={[styles.boxContainer,styles.box2]}>
      
        <Text style={styles.subtitle}>Info</Text>
       
       
        <TextInput style={styles.CajaTexto}
              placeholder={'  Skin Color'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Eyes Color'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
        <Text style={styles.subtitle} >Hair</Text>
        <TextInput style={styles.CajaTexto}
              placeholder={'  Hair Color'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Hair Type'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Hair Lenght'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
        <Text style={styles.subtitle_1}>Add more information</Text>
        </View>  
       <View style={[styles.boxContainer, styles.box]}>
       <Button title='Next'
              fontSize= {20} fontWeight= '900'
              onPress={this._onPressButton}
              loadingProps={{ size: "large", color: "#ecf0f1" }}
              buttonStyle={{
                backgroundColor: "#e74c3c",
                width: 300,
                height: 45,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5
              }}
              onPress={()=>this.props.navigation.navigate('App')}/>  
              
       </View>
    
      </ScrollView>
    )
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 12,
      paddingHorizontal: 10,
      marginTop:6,
      borderWidth: 1,
      borderColor: '#c0392b',
      borderRadius: 4,
      height:35,
      backgroundColor: 'black',
      width:150,
      color: 'white',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'column',
  },
  boxContainer:
  {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1:{
    flex:1,
  },
  box2:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    
    alignItems: 'center'
  },

  botonActivo:{
    backgroundColor:'#000000',
    borderColor: '#c0392b',
    borderWidth: 3
  },
  botonDesactivo:{
    borderColor: 'black',
    borderWidth: 3
  },
  titulo:{
    fontSize: 40,
    fontWeight: '900',
    color:'white',
    marginTop:10,
},
  subtitle:{
    color:'white',
    width:300,
    marginBottom:15,
  },
  subtitle_1:{
    color:'white',
    marginTop:15,
    marginBottom:15,
    justifyContent:'flex-start'
  },
  subtitle2:{
    color:'white',
    fontSize:10,
    justifyContent: 'flex-start',
   
  },
  CajaTexto:{
    width:300,
    height: 45,
    marginTop: 6,
    borderColor: '#c0392b',
    borderWidth: 1,
    marginBottom: 5,
  },
  CajaTextoPequena:{
    width:130,
    height: 45,
    borderColor: '#c0392b',
    borderWidth: 1,
  },

});
