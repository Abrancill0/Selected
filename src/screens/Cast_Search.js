import React, {Component} from 'react';
import {Text, View, Image,ScrollView,ImageBackground} from 'react-native';
import {Avatar} from 'react-native-elements'
import styles from '../styles/appstyle';
import SearchCastStyle from '../styles/CastSearchStyle';

export default class Cast_Search extends Component{
    render(){
        return(
            <View style={styles.container}>
                    <ScrollView tyle={SearchCastStyle.Columna}>
                        <View style={SearchCastStyle.fila}>
                            <View style={SearchCastStyle.contenedorColumna}>
                                <View style={SearchCastStyle.contenedorLeft1}>
                                    <ImageBackground
                                        style={{flex:1,width: undefined, height: undefined}}
                                        source={require('../img/black.jpg')}>
                                        <View style={SearchCastStyle.contenedorInside}>
                                            
                                        </View>

                                    </ImageBackground>
                                </View>
                                <View style={SearchCastStyle.contenedorLeft2}>
                                    <ImageBackground
                                        style={{flex:1,width: undefined, height: undefined}}
                                        source={require('../img/film.jpg')}>
                                        <View style={SearchCastStyle.contenedorInside}>
                                            
                                        </View>


                                    </ImageBackground>
                                </View>
                            </View>
                            <View style={SearchCastStyle.contenedorRigth}>
                                    <ImageBackground
                                        style={{flex:1,width: undefined, height: undefined}}
                                        source={require('../img/espectacular.png')}>
                                        <View style={SearchCastStyle.contenedorInside}>
                                            
                                        </View>

                                    </ImageBackground>
                            </View>
                        </View>
                    </ScrollView>
                </View>
        );
    }
}