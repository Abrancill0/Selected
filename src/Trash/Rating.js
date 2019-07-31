import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import { Button, Avatar} from 'react-native-elements'
import RatingStyles from '../styles/RatingStyles.js'

export default class Rating extends Component {

  render() {
    const Name ='Ozmariel Villalobos'
    const Rol = 'Host Actress'
    const contacts = 500
    const reviews = 136
    const rating = 9.7
    return (
      <View style={RatingStyles.container}>
          <View style={{height:140,paddingHorizontal:3,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
              <Button title='View Profile' 
                  buttonStyle={{borderRadius:5,borderWidth:1,padding:3}} 
                  color='black' boderColor='gray' 
                  backgroundColor='white'/>
              <Avatar
                        avatarStyle={{width:120,height:120,borderRadius:60}}
                        source={require("../img/David-Gandy1.jpg")}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
              <Button title='Edit Profile' 
                  buttonStyle={{borderRadius:5,borderWidth:1,padding:3}} 
                  color='black' boderColor='gray' 
                  backgroundColor='white'/> 
          </View>
          <View style={{justifyContent:'center',alignItems:'center',height:70}}>
            <Text style={{color:'#FA5F5A',fontSize:16}}> {Name}</Text>
            <Text> {Rol}</Text>
          </View>
          <View style={{height:50,flexDirection:'row'}}>
            <View style={RatingStyles.boxes}>
              <Text>{contacts}</Text>
              <Text>Contacts</Text>
            </View>
            <View style={RatingStyles.CentralBox}>
              <Text>{reviews}</Text>
              <Text>Reviews</Text>
            </View>
            <View style={RatingStyles.boxes}>
              <Text>{rating}</Text>
              <Text >Rating</Text>
            </View>
          </View>
          <View style={RatingStyles.Cals}>
          </View>
      </View>
      )
  }
}
