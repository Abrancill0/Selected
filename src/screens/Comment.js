import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { Avatar} from 'react-native-elements'
import StyleComment from '../styles/StyleComment'

export default class Comment extends Component{
    render(){
        const Name = 'Aisha';
        const Days = 2;
        const Comment = 'Looking for profession all models to shoot a commercial for a shoe factoryLooking for profession all models to shoot a commercial for a shoe factoryLooking for profession all models to shoot a commercial for a shoe factoryLooking for profession all models to shoot a commercial for a shoe factory'
        return(
                <View style={StyleComment.containerComment}>
                    <View style={{flex:.15, justifyContent:'space-between'}}>
                        <Avatar
                            medium
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <View style={StyleComment.Comment}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text>{Name}</Text>
                            <Text style={{fontSize:12, color:'gray'}}>{Days} days ago</Text>
                        </View>
                        <View style={{paddingTop:5}}>
                            <Text >{Comment}</Text>
                        </View>
                    </View>
                </View>
        );
    }
}