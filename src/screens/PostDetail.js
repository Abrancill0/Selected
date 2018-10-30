import React, {Component} from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import stylesPostDetail from '../styles/StylePostDetail'
import { Button } from 'react-native-elements';
import Comment from '../screens/Comment';

export default class PostDetail extends Component{

    
    render(){
        const Title_Publication ='Model MakeUp';
        const Description ='Looking for profession all models to shoot a commercial for a shoe factory ooking for profession all models to shoot a commercial for a shoe factory ooking for profession all models to shoot a commercial for a shoe factory ooking for profession all models to shoot a commercial for a shoe factory'
        const Days =2;
        const Owner = 'Elite Model Miami';
        const COMMENTS = 2;
        return(
            <ScrollView style={stylesPostDetail.container}>
                <View style={stylesPostDetail.imagen}>
                    <Image source={require('../img/elite_cast.jpg')}style={{flex:1, height: undefined, width: undefined, borderRadius:5}}/>
                </View>
                <View style={stylesPostDetail.Description}>
                    <Text style={{fontSize:18,}}>{Title_Publication}</Text>
                    <Text >{Description}</Text>
                </View>
                <View style={stylesPostDetail.Owner}> 
                    <Text style={{fontSize:12, color:'gray'}}>{Days} day ago</Text>
                    <Text style={{fontSize:12, color:'#76C1E9'}}> by {Owner} </Text>
                </View>
                <View style={stylesPostDetail.Buttons}>
                    <View style={{flexDirection:'row'}}>
                        <Button style={{height:35, width:80}} title ='LIKE' fontSize={14} backgroundColor='#36CD66' buttonStyle={{padding:3}}></Button>
                        <Button style={{height:35, width:100}} title ={COMMENTS+' COMMENTS'} fontSize={12} backgroundColor='white' color='black' buttonStyle={{padding:3,borderWidth:1,borderColor:'gray'}}></Button>
                    </View>
                    <Button style={{height:35, width:35}}  title ='...' fontSize={14} backgroundColor='white'color='black' buttonStyle={{padding:3,borderWidth:1,borderColor:'gray'}}></Button>
                </View>
                <Comment/>
            </ScrollView>
        );
    }
}