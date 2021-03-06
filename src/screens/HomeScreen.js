import React, {Component} from 'react';
import {View,ListView,ScrollView} from 'react-native';
import PostCastNowBox from '../components/PostCastNowBox'
import PostTalentBox from '../components/PostTalentBox.js'
import AppStyle from '../styles/appstyle'
import {createStackNavigator,createSwitchNavigator} from 'react-navigation'


export default class Posted extends Component{
    
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const cast ={
                casting_owner:'Elite Model',
                time_ago :'2 min',
                type_cast:'Commercial',
                sex:'Female',
                time:"18/30",
                location:"New York",
                project_title:'NY Shoe Factory',
                likes:'94',
                coments:'18',
                description:'Looking for profession all models to shoot a commercial for a shoe factory',
                
            }
        const talent ={
                user:'davidgandy',
                talent:'David Gandy',
                time_ago:'9 min',
                type_talent:'Model',
                likes:'3k',
                coments:'72',
                description:'Thanks to "THE RAKE" maagazine for this cover, so happy for the result. #blessed'}
        const casts = Array(5).fill(cast)
        const talents = Array(5).fill(talent)
        this.state = {
          dataSource: ds.cloneWithRows(casts),
          dataSource2: ds.cloneWithRows(talents),
        };
      }

    render(){
        return(
            <View style={{paddingTop:10,flex: 1,backgroundColor: 'black',}}>
                 <ListView
                dataSource={this.state.dataSource}
                renderRow={(cast,i)=> {
                        for(i=1;i<3;i++)
                        {
                            if(i==1)
                            {
                                return <PostCastNowBox campos_cast={cast}/>
                            }else if(i==2)
                            {
                                return <PostTalentBox campos_talent={talent}/>
                            }
                        }     
                }}
            />
            </View>
           
        );
    }
}