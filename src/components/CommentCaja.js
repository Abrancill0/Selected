import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { Avatar} from 'react-native-elements'
import colors from '../styles/colors';

export default class CommentCaja extends Component{
    render(){
        const Name = 'Aisha';
        const Days = 2;
        const Comment = 'Looking for profession all models to shoot a commercial for a shoe factoryLooking for profession all models'
        return(
                <View style={{borderWidth:1,flexDirection:'row',padding:8,}}>
                    <View style={{flex:2, justifyContent:'space-between'}}>
                        <Avatar
                            medium
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <View style={{flex:8}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={colors.white}>{Name}</Text>
                            <Text style={colors.gray}>{Days} days ago</Text>
                        </View>
                        <View style={{paddingTop:5}}>
                            <Text style={colors.gray}>{Comment}</Text>
                        </View>
                    </View>
                </View>
        );
    }
}