import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {Button} from 'react-native-elements'

export default class ExperienciaView extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer,styles.box1]}>
          <Text style={styles.titulo}>
            Selected
          </Text>
        </View>
        <View style={[styles.boxContainer,styles.box2]}>
          <Text style={styles.subtitle}>
            Welcome to Selected!
          </Text>
          <Text style={styles.subtitle2}>
            Your account has been succesfuly created.
          </Text>
        </View>
        <View style={[styles.boxContainer,styles.box3]}>
          <Text style={styles.subtitle3}>
            To start Casting
          </Text>
          <Text style={styles.subtitle3}>
            Complete you profile by clicking Next.
          </Text>
        </View>
        <View style={[styles.boxContainer,styles.box4]}>
          <Button title='Skip' fontSize={20}
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            
            buttonStyle={{
              backgroundColor: "#535c68",
              width: 300,
              height: 50,
              borderColor: "#bdc3c7",
              borderWidth: 2,
              borderRadius: 5
            }} 
            />
          <Button title='Next' fontSize={20}
           loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
           fontWeight= '700'
            buttonStyle={{
              backgroundColor: "#e74c3c",
              width: 300,
              height: 50,
              borderColor: "#bdc3c7",
              borderWidth: 2,
              borderRadius: 5
            }}
           />
        </View>
        <View style={[styles.boxContainer,styles.box5]}>          
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
    flex:3,
    //backgroundColor:'blue',
    justifyContent: 'center'
  },
  box4:{
   // backgroundColor:'white',
    justifyContent: 'space-around',
    flex:2,
  },
  box5:{
  //  backgroundColor:'blue',
    flexDirection:'row',
    justifyContent: 'flex-start',
    flex:1,
  },
  titulo:{
    fontSize: 70,
    fontWeight: '900',
    color:'white',
    marginTop:40,
},
  subtitle:{
    fontSize: 25,
    fontWeight: '600',
    color:'#ff7979'
},
  subtitle2:{
    fontSize:13,
    fontWeight: '600',
    color:'#ff7979'
},
subtitle3:{
    fontSize:15,
    fontWeight: '700',
    color:'white'
}
});
