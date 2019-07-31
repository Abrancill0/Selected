import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import ViewMoreText from 'react-native-view-more-text';
import styles from '../styles/appstyle';
import stylesGuest from '../styles/GuestStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class guest_profile extends Component {
  render() {
    const guest = "Amanda Byrnes"
    const contacts = 499
    const posts = 37
    const location = "United States"
    const experience= "Tell us more about your life"
    const instagram="+ connect"
    const facebook='+ connect'
    const youtube='+ connect'
    const twitter='+ connect'

    return (
      <View style={styles.container}>
      <View style={styles.Header}>
          <Avatar
              large
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              style={styles.Avatar}
          />
          <View style={styles.NameContacReviewRating}>
            <View style={styles.Rol}>
              <Text style={styles.redTitle}>{guest}</Text>
              <Text style={styles.gray}>Guest</Text>
            </View>
            <View style={styles.rating}>
              <View style={styles.caja_columna}>
                <Text style={styles.littleWhite}>{contacts}</Text>
                <Text style={styles.littleWhite}>Contacts</Text>
              </View>
              <View style={styles.caja_columna}>
                <Text style={styles.littleWhite}>{posts}</Text>
                <Text style={styles.littleWhite}>Posts</Text>
              </View>
              <View style={styles.caja_columna}>
                <View style={stylesGuest.Row}>
                  <Icon color='white'name='map-marker-alt'/>
                  <Text style={styles.littleWhite}>Location</Text>
                </View>
                <Text style={styles.red}>{location}</Text>
              </View>
            </View>
          </View>
      </View>
      <Button title='Edit Profile' backgroundColor='black'color='white'style={styles.BorderTopBottom}/>
      <ScrollView>
      <View style={styles.About}>
        <Text style={styles.white}>About</Text>
        <ScrollView>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}>
              <Text style={styles.red}>
                {experience}
              </Text>
            </ViewMoreText>
        </ScrollView>
      </View>
      <View style={styles.CaracteristicasManager}>
        <View style={styles.CaracteristicaRow}>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Instagram</Text>
            <Text style={styles.red}>${instagram}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Facebook</Text>
            <Text style={styles.red}>{facebook}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Youtube</Text>
            <Text style={styles.red}>{youtube}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Twitter</Text>
            <Text style={styles.red}>{twitter}</Text>
          </View>
        </View>
      </View>
      <View style={stylesGuest.ButtonsPost}>
        <Text style={stylesGuest.whitePost}>Posts</Text>
        <View style={stylesGuest.Row}>
          <Icon size={20} color='white'name='list' onPress={() => console.log("Works!")} />
          <Icon size={20} color='white'name='th-large' onPress={() =>  console.log("Works!")}/>
        </View>
      </View>
      </ScrollView>
      </View>
    );
  }
  renderViewLess(onPress){
    return(
      <Text style={styles.red} onPress={onPress}>View less</Text>
    )
  }
  renderViewMore(onPress){
    return(
      <Text style={styles.red} onPress={onPress}>... More</Text>
    )
  }
}