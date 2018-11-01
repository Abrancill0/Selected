import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import stylesCastNow from '../styles/PostCastNowStyle'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/Foundation'
import Posted from './Posted';
import PostDetail from './PostDetail'
import { withNavigation } from 'react-navigation';
class PostCastNowBox extends Component{
    render(){
        const {casting_owner,time_ago,type_cast,sex,time,location,project_title,likes,coments,description}=this.props.campos_cast
        return(
            <View style={stylesCastNow.container}>
                <View style={stylesCastNow.Header}>
                    <Avatar
                        medium
                        rounded
                        source={require("../img/elite_black.jpg")}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        style={styles.Avatar}
                    />
                    <View style={stylesCastNow.TypeOwner}>
                            <View style={stylesCastNow.RowCastingOwner}>
                                <Text style={stylesCastNow.BlackTitle}>{casting_owner}</Text>
                                <Icon size={25} color='#FA5F5A'name='download-cloud'/>
                            </View>
                            <View style={stylesCastNow.RowTypeOwner}>
                                <Text style={styles.gray}>Casting Agency ·</Text>
                                <Icon size={12} color='gray'name='clock'/>
                                <Text style={styles.gray}>{time_ago} ago </Text>
                            </View> 
                    </View>
                </View>
                <View style={stylesCastNow.CastImage}>
                <Image source={require('../img/elite_cast.jpg')}style={{flex:1, height: undefined, width: undefined}}/>
                </View>
                <View style={stylesCastNow.Row}>
                    <View style={stylesCastNow.caracteristicas}>
                        <Icon2 size={10} color='#FA5F5A'name='star'/>
                        <Text style={stylesCastNow.black}>{type_cast}</Text>
                        <Icon2 size={10} color='#FA5F5A'name='female'/>
                        <Text style={stylesCastNow.black}>{sex}</Text>
                        <Icon2 size={10} color='#FA5F5A'name='calendar-o'/>
                        <Text style={stylesCastNow.black}>{time} YEARS</Text>
                        <Icon3 size={10} color='#FA5F5A'name='location-pin'/>
                        <Text style={stylesCastNow.black}>{location}</Text>
                    </View>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PostDetail')}>
                        <Text style={stylesCastNow.black}>MORE DETAILS</Text>
                    </TouchableHighlight>
                </View>
                <View style = {stylesCastNow.Cast_description} >
                    <View style = {stylesCastNow.RowDescription}>
                        <Text> Project Title: </Text>
                        <Text style={stylesCastNow.gray}> {project_title}</Text>
                    </View>
                    <View style = {stylesCastNow.RowDescription}>
                        <Text> Description: <Text style={stylesCastNow.gray}>{description}</Text></Text>
                    </View>
                </View>
                <View style={stylesCastNow.Row2}>
                    <View style={stylesCastNow.buttons1}>
                                    <Button
                                            icon={{name: 'heart-o', type:'font-awesome' ,color:'black',size:12}}
                                            title ={likes}
                                            color = 'black' 
                                            fontWeight='900'
                                            buttonStyle={{height:20, width:45,borderWidth:1,borderColor:'gray',padding:3}}
                                            fontSize={10}
                                            backgroundColor='white'
                                            style={stylesCastNow.boxbutton}
                                        />
                                    <Button
                                            icon={{name: 'comment-o', type:'font-awesome' ,color:'black',size:12}}
                                            title ={coments}
                                            color = 'black' 
                                            fontWeight='900'
                                            backgroundColor='white'
                                            buttonStyle={{height:20, width:45,borderWidth:1,borderColor:'gray',padding:3}}
                                            fontSize={10}
                                            style={stylesCastNow.boxbutton}
                                        />
                                    <Button
                                            icon={{name: 'share', type:'foundation' ,color:'black',size:13, }}
                                            color = 'black' 
                                            fontWeight='900'
                                            backgroundColor='white'
                                            buttonStyle={{height:20, width:35,padding:3,borderWidth:1,borderColor:'gray'}}
                                            fontSize={10}
                                            style={stylesCastNow.boxbutton}
                                        />
                    </View>
                    <View style={stylesCastNow.buttons}>
                            <Button
                                    icon={{name: 'film', type:'font-awesome' ,color:'white',size:9, }}
                                    title ='CAST NOW' 
                                    rounded
                                    fontWeight='900'
                                    backgroundColor='#FA5F5A'
                                    buttonStyle={{height:20, width:85,padding:3,borderRadius:6}}
                                    fontSize={8}
                                />
                                
                    </View>
                </View>
            </View>
        );
        
    }
}
export default withNavigation(PostCastNowBox);