import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import stylesCastNow from '../styles/PostCastNowStyle'
import commentStyle from '../styles/commentsStyle'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Foundation'
import colors from '../styles/colors'
import { withNavigation } from 'react-navigation';
class comments extends Component{
    render(){
        const {number}=this.props.comments_number
        return(
                <TouchableOpacity activeOpacity={.8} style={{flex:1,width: undefined, height: undefined}} onPress={() => this.props.navigation.navigate('CommentScreen')}>
                    <View style={commentStyle.container}>
                        <Icon4 size={26} color='#fff'name='comment'style={{margin:5}}/>
                        <View style={{margin:5,fontSize:14}}>
                            <Text style={colors.white}>{number}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        );
        
    }
}
export default withNavigation(comments);