import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import styles from '../styles/appstyle';
import RatingStyles from '../styles/RatingStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Estrellas extends Component{
    render(){
    const {cal} =this.props
      return(
        <View style={{width:200}}>
            <View style={{height:30,flexDirection:'row',justifyContent:'space-between'}}>
                <Icon name='star' color='black' size={20} color='#FA5F5A'/>
                <Icon name='star' color='black' size={20} color='#FA5F5A'/>
                <Icon name='star' color='black' size={20} color='#FA5F5A'/>
                <Icon name='star' color='black' size={20} color='#FA5F5A'/>
                <Icon name='star' color='black' size={20} color='#FA5F5A'/>
                <Text style={{fontSize:14}}>..................</Text>
                <Text>({cal})</Text>
            </View>
        </View>
      )
    }
  }