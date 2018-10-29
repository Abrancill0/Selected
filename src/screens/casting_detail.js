import React, {Component} from 'react';
import {Platform, Text, View,ScrollView} from 'react-native';
import {Avatar,Badge,Button,CheckBox} from 'react-native-elements'
import styles from '../styles/appstyle';
import stylesCast from '../styles/CastingStyle.js';
const IS_ANDROID = Platform.OS === 'android';

import Icon from 'react-native-vector-icons/FontAwesome5'


export default class casting_detail extends Component{
  
  render() {

    const casting_agency = "Elite"
    const contacts = 311
    const reviews = 36
    const rating = 9.1
    const project_title = "Be Modern"
    const production_type = "Photoshop"
    const location = "Miami,FL"
    const casting_available = "June 10"
    const payment = "1.500$/2.500$"
    const shooting_date = "Sat, June 24"
    const artist_type = "MODEL"
    const sex = "MALE"
    const age = "31/40YEARS"
    const origin_location = "NEW YORK"
    const skin = 'WHITE'
    const hair = 'BROWN'
    const eyes = 'BLUE'
    const weight ="70/93Kgs"
    const casting_detail= "Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos ipsum dolor."
    return (
    <View style={styles.container}>
        <View style={styles.Header}>
            <Avatar
                large
                rounded
                source={require("../img/elite.jpg")}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <View style={styles.NameContacReviewRating}>
              <View style={styles.Rol}>
                <Text style={styles.redTitle} >{casting_agency}</Text>
                <Text style={styles.gray}>Casting Agency</Text>
              </View>
              <View style={styles.rating}>
                <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>{contacts}</Text>
                  <Text style={styles.littleWhite}>Contacts</Text>
                </View>
                <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>{reviews}</Text>
                  <Text style={styles.littleWhite}>Reviews</Text>
                </View>
                <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>{rating}</Text>
                  <Text style={styles.littleWhite}>Rating</Text>
                </View>
                <Button 
                        rounded 
                        backgroundColor= 'white' 
                        title='Edit Profile'
                        textStyle={{color:'black',fontSize:8}}
                        buttonStyle={{height:32, width:78}}
                />
                </View>
            </View>
        </View>
        <ScrollView>
        <View style={stylesCast.CaracteristicasAgencia}>
          <View style={styles.CaracteristicaRow}>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Project Title</Text>
              <Text style={styles.red}>{project_title}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Production Type</Text>
              <Text style={styles.red}>{production_type}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Location</Text>
              <Text style={styles.red}>{location}</Text>
            </View>
          </View>
        </View>
        <View style={stylesCast.castingDetails}>
          <Text style={styles.white}>Casting Details</Text>
                <Text style={styles.red}>
                  {casting_detail}
                </Text>
        </View>
        <View style={stylesCast.CaracteristicasAgencia}>
          <View style={styles.CaracteristicaRow}>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Casting Available</Text>
              <Text style={styles.red}>{casting_available}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Payment</Text>
              <Text style={styles.red}>{payment}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Shooting Date</Text>
              <Text style={styles.red}>{shooting_date}</Text>
            </View>
          </View>

        </View>
        <View style={stylesCast.castingDetails}>
          <Text style={styles.white}>Casting Requirements</Text>   
          <View style={stylesCast.Casting_requirements}>
            <View style={stylesCast.caja_row1}>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='star'/>
                    <Text style={styles.whiteMayus}>{artist_type}</Text>
                </View>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='user' />
                    <Text style={styles.whiteMayus}>{sex}</Text>
                </View>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='calendar' />
                    <Text style={styles.whiteMayus}>{age}</Text>
                </View>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='location-arrow' />
                    <Text style={styles.whiteMayus}>{origin_location}</Text>
                </View>
            </View>
            <View style={stylesCast.caja_row1}>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='child'/>
                    <Text style={styles.whiteMayus}>{skin}</Text>
                </View>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='paint-brush' />
                    <Text style={styles.whiteMayus}>{hair}</Text>
                </View>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='eye' />
                    <Text style={styles.whiteMayus}>{eyes} </Text>
                </View>
                <View style={stylesCast.caja_row}>
                    <Icon color='white'name='weight' />
                    <Text style={styles.whiteMayus}>{weight}</Text>
                </View>
            </View>
           </View>
        </View>
        <View style={stylesCast.TermsConditions}>
                <Text style={styles.white}>Terms and Conditions</Text> 
                <CheckBox
                    center
                    title='Check here to indicate that you have read and agree to the Terms and Conditions of the Selected Online Casting Submission Agreement'
                    checked={true}
                    containerStyle={{backgroundColor: 'black',borderColor: 'black'}}
                    textStyle={{color:'#FA5F5A', fontSize:10}}
                    checkedColor='#FA5F5A'
                />
                <Button
                    title ='SUBMIT CASTING' 
                    rounded
                    backgroundColor='#FA5F5A'
                />

        </View>
        
        
      </ScrollView>
    </View>
    );
  }
  
}
