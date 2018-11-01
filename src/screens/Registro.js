import React, {Component} from 'react';
import {StyleSheet, View,Text,TextInput,ScrollView} from 'react-native';
import {Button,CheckBox} from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import AwesomeAlert from 'react-native-awesome-alerts';
//import { Actions } from 'react-native-router-flux'; // New code

export default class Registro extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
        TypeUser: undefined,
        items: [
            {
                label: 'Guest',
                value: 'Guest',
            },
            {
                label: 'Talent',
                value: 'Talent',
            },
            {
                label: 'Agency',
                value: 'Agency',
            },
        ],
        
    };
}

componentDidMount() {
    // if the component is using the optional `value` prop, the parent
    // has the abililty to both set the initial value and also update it
    setTimeout(() => {
        this.setState({
            TypeUser: 'Guest',
        });
      
    }, 1000);

}

_onPressButton() {
  
console.warn('',this.props)
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
          <Button style={[styles.boton,styles.botonActivo]}
                  title="Register"
                  color='#c0392b'
                  backgroundColor='black'
                  fontWeight='600'
                  fontSize={14} />
          <Button style={[styles.botonDesactivo,styles.boton]}
                  title="Login"
                  color='#ecf0f1'
                  backgroundColor='black'
                  fontWeight='900'
                  fontSize={14}
                  onPress={() => this.props.navigation.navigate('SignIn')}
                  />
        </View>
        <View style={[styles.boxContainer,styles.box3]} >
          <Text style={styles.subtitle}>
            Profile Type:
          </Text>
          <RNPickerSelect 
                    placeholder={{
                        label: 'Select...',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            TypeUser: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.TypeUser}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />
        </View>
        <View style={[styles.boxContainer,styles.box4]}>
          <TextInput style={styles.CajaTexto}
              placeholder={'  Name'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  UserName'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Email'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
            </TextInput>
            <TextInput style={styles.CajaTexto}
              placeholder={'  Password'}
              placeholderTextColor='white' 
              //color='#ecf0f1'
               >
          </TextInput>
        </View>
        <View style={[styles.boxContainer,styles.box5]}>
          <View>
            <Text style={styles.subtitle_1}>
                  Date of Birth:
            </Text>
            <TextInput style={styles.CajaTextoPequena}
                placeholder={'  11/20/1993'}
                placeholderTextColor='white' 
                //color='#ecf0f1'
                 >
            </TextInput>
          </View>
          <View>
            <Text style={styles.subtitle_1}>
                  Sex:
            </Text>
            <TextInput style={styles.CajaTextoPequena}
                placeholder={'  Male'}
                placeholderTextColor='white' 
                //color='#ecf0f1' 
                >
            </TextInput>
          </View>
        </View>
        <View style={[styles.boxContainer,styles.box6]}>  
        <CheckBox 
          containerStyle={{backgroundColor:'transparent',borderColor:'black', padding:0, margin:-7 }} />
          <Text style={styles.subtitle2} >
            I have read and accept the therms and condition
          </Text>
        </View>
        <View style={[styles.boxContainer,styles.box7]}>  
        
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
              onPress={() => {
              const value = this.state.TypeUser;
                if (value=='Guest')
                {
                  return this.props.navigation.navigate('App')
                }
                else if (value=='Talent')
                {
                  return this.props.navigation.navigate('RegisterTalent1')
                }
                else if (value=='Agency')
                {
                  return this.props.navigation.navigate('RegisterAgency')
                }
              }}
              />    
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
    flexDirection: 'row',
    marginHorizontal:70,
    justifyContent: 'space-around',
    alignItems: 'flex-start' 
  },
  box3:{
    flex:1,
    flexDirection: 'row',
    marginHorizontal:60,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  box4:{
   
    justifyContent: 'space-between',
    flex:4,
  },
  box5:{
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1,
   
  },
  box6:{
      flexDirection:'row',
      marginTop:20,
      marginHorizontal:50,
      flex:1,
      //backgroundColor:'yellow',
      alignItems: 'flex-end'
    
    },
  box7:{
      marginTop:20,
       flexDirection:'row',
       justifyContent: 'center',
       flex:2,
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
    marginTop:15,
  },
  subtitle_1:{
    color:'white',
    marginTop:15,
    justifyContent:'flex-start'
  },
  subtitle2:{
    color:'white',
    fontSize:10
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
