import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import stylesCastNow from '../styles/PostCastNowStyle'
import likeStyle from '../styles/likeStyle'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/Foundation'
import colors from '../styles/colors'
import { withNavigation } from 'react-navigation';
class Like extends Component{
    render(){
        const {number}=this.props.likes_number
        return(
            <TouchableHighlight>
                <TouchableOpacity activeOpacity={.8} style={{flex:1,width: undefined, height: undefined}}>
                    <View style={likeStyle.container}>
                        <Icon3 size={26} color='#F64648'name='heart'style={{margin:5}}/>
                        <View style={{margin:5,fontSize:14}}>
                            <Text style={colors.white}>{number}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </TouchableHighlight>
        );
        
    }
}
export default withNavigation(Like);