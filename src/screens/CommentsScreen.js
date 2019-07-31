import React, {Component} from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import stylesPostDetail from '../styles/StylePostDetail'
import { Button } from 'react-native-elements';
import Comment from '../components/CommentCaja';

export default class CommentScreen extends Component{

    
    render(){
        return(
            <ScrollView style={stylesPostDetail.container}>
                <Comment/>
            </ScrollView>
        );
    }
}