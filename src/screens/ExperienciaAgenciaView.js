import React, {Component} from 'react';
import {StyleSheet, View,Text,TextInput} from 'react-native';
import {Button,Avatar} from 'react-native-elements'

export default class ExperienciaAgenciaView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer,styles.box1]}>
          <Text style={styles.titulo}>
            Selected
          </Text>
        </View>
        <View style={[styles.boxContainer,styles.box2]}>
            <Avatar
                xlarge
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.warn("Works!",'')}
                activeOpacity={0.7}
            />
        </View>
        <View style={[styles.boxContainer,styles.box3]}>
            <Text style={styles.subtitle}>
                Account
            </Text>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Speciality'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
        </View>
        <View style={[styles.boxContainer,styles.box4]}>
            <Text style={styles.subtitle}>
                Info
            </Text>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Representative'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Phone Number'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
        </View>
        <View style={[styles.boxContainer,styles.box5]}>  
        <Button title='Next' style={styles.next}
            fontSize= {23} fontWeight= '700'
            backgroundColor='#e74c3c' 
            onPress={()=>this.props.navigation.navigate('App')}/>        
        </View>
      </View>
    )
  }
}


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
    flex:2,
  //  backgroundColor:'yellow',
  },
  box2:{
    flex:3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
   // backgroundColor:'green',
    alignItems: 'center' 
  },
  box3:{
    flex:2,
    //backgroundColor:'blue',
    justifyContent: 'center'
  },
  box4:{
   // backgroundColor:'white',
    justifyContent: 'space-between',
    flex:2,
  },
  box5:{
  //  backgroundColor:'blue',
    flexDirection:'row',
    justifyContent: 'flex-start',
    flex:2,
  },
  titulo:{
    fontSize: 70,
    fontWeight: '900',
    color:'white',
    marginTop:40,
},
  subtitle:{
    color:'white',
    width:300,
  },
  CajaTexto:{
    width:300,
    height: 45,
    marginTop: 6,
    borderColor: '#c0392b',
    borderWidth: 1,
    marginBottom: 10,
  },
  next:{
    width:350,
    height:55,
    borderColor: '#bdc3c7',
    borderRadius:5,
    borderWidth: 2,
  },
});
