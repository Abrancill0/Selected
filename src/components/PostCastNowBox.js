import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight,TouchableOpacity,ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import styles from '../styles/appstyle';
import stylesCastNow from '../styles/PostCastNowStyle'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'
import colors from '../styles/colors'
import Likes from './like'
import Comments from './CommentsNumber'
import { withNavigation } from 'react-navigation';

class PostCastNowBox extends Component{
    render(){
        const {casting_owner,time_ago,type_cast,sex,time,location,project_title,likes,coments,description}=this.props.campos_cast
        const like_properties ={
            number:likes}
        const comment_properties ={
                number:coments}

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
                                <Text style={colors.whiteTitle}>{casting_owner}</Text>
                                <Icon3 size={26} color='#fff' name='dots-three-horizontal'/>
                            </View>
                            <View style={stylesCastNow.RowTypeOwner}>
                                <Text style={colors.littleGray}>Casting Agency ·</Text>
                                <Icon size={12} color='gray'name='clock'/>
                                <Text style={colors.littleGray}>{time_ago} ago </Text>
                            </View> 
                    </View>
                </View>
                <View style={stylesCastNow.CastImage}>
                <Image source={require('../img/elite_cast.jpg')}style={{flex:1, height: undefined, width: undefined}}/>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <View style={{padding:5,flexDirection:'row',marginTop:10,justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
                                        <Likes likes_number={like_properties} />
                                        <Comments comments_number={comment_properties}/>
                        </View>
                        <View style={{flex:4,flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                                <Button
                                        title ='Cast Now' 
                                        rounded
                                        fontWeight='600'
                                        backgroundColor='#F64648'
                                        buttonStyle={{paddingHorizontal:5,paddingVertical:3, borderRadius:4,alignSelf:'baseline',flexWrap:'wrap',marginLeft:10}}
                                        fontSize={16}
                                />
                                <View style={{marginLeft:10}}>
                                    <TouchableHighlight>
                                        <TouchableOpacity activeOpacity={.8} style={{flex:1,width: undefined, height: undefined}}>
                                            <Icon2  size={26} color='white'name='md-share-alt'/>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </View>
                                
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,marginTop:10}}>
                        <ScrollView horizontal={true}>
                            <View>
                                <Text style={colors.gray}>{type_cast}</Text>
                            </View>
                            <View style={{marginLeft:5}}>
                                <Text style={colors.gray}>{sex}</Text>
                            </View>
                            <View style={{marginLeft:5}}>
                                <Text style={colors.gray}>{time} Years</Text>
                            </View>
                            <View style={{marginLeft:5}}>
                                <Text style={colors.gray}>{location}</Text>
                            </View>
                        </ScrollView>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('PostDetail')}>
                            <Text style={colors.red}>More </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{marginTop:10}}>
                        <View style = {{flexDirection:'row',flexWrap: 'wrap'}}>
                            <Text style={colors.white_underline}> {project_title}</Text>
                        </View>
                        <View style = {{flexDirection:'row',flexWrap: 'wrap',marginTop:5}}>
                            <Text style={colors.gray}>{description}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
        
    }
}
export default withNavigation(PostCastNowBox);