import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView, Image,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import stylesCastNow from '../styles/PostTalentStyle'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon4 from 'react-native-vector-icons/Foundation'

export default class PostTalentBox extends Component{
    render(){
        const {user,talent,time_ago,type_talent,likes,coments,description}=this.props.campos_talent
        return(
            <View style={stylesCastNow.container}>
                <View style={stylesCastNow.Header}>
                    <Avatar
                        large
                        rounded
                        source={require("../img/David-Gandy1.jpg")}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        style={styles.Avatar}
                    />
                    <View style={stylesCastNow.TypeOwner}>
                            <View style={stylesCastNow.RowCastingOwner}>
                                <Text style={stylesCastNow.BlackTitle}>{talent}</Text>
                                <Icon size={25} color='#FA5F5A'name='download-cloud'/>
                            </View>
                            <View style={stylesCastNow.RowTypeOwner}>
                                <Text style={styles.gray}>{type_talent} ·</Text>
                                <Icon size={12} color='gray'name='clock'/>
                                <Text style={styles.gray}>{time_ago} ago </Text>
                            </View> 
                    </View>
                </View>
                <View style={stylesCastNow.CastImage}>
                <Image source={require('../img/David-gandy2.jpg')}style={{flex:1, height: undefined, width: undefined}}/>
                </View>
                <View style = {stylesCastNow.Cast_description} >
                    <View style = {stylesCastNow.RowDescription}>
                        <Text> {user} <Text style={stylesCastNow.gray}>{description}</Text></Text>
                    </View>
                </View>
                <View style={stylesCastNow.Row2}>
                    <View style={stylesCastNow.buttons2}>
                        <View style={stylesCastNow.boxbuttons}>
                            <View style={stylesCastNow.boxbuttonsHeart}>
                                <Icon2 size={15} color='white'name='heart-o'/>
                                <Text style={stylesCastNow.white}>{likes}</Text>
                            </View>
                        </View>
                        <View style={stylesCastNow.boxbuttons}>
                            <View style={stylesCastNow.boxbuttonsComment}>
                                <Icon2 size={15} color='#FA5F5A'name='comment-o'/>
                                <Text style={stylesCastNow.black2}>{coments}</Text>
                            </View>
                        </View>
                        <View style={stylesCastNow.boxbuttons}>
                            <View style={stylesCastNow.boxbuttonsShare}>
                                <Icon4 size={15} color='#FA5F5A'name='share'/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>



        );
    }
}