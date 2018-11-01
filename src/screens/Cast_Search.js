import React, {Component} from 'react';
import {Text, View, Image,ScrollView,ImageBackground,TouchableHighlight,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements'
import styles from '../styles/appstyle';
import TriangleUp from '../utils/TriangleUp';
import SearchCastStyle from '../styles/CastSearchStyle';

export default class Cast_Search extends Component{
    render(){
        var publicacion1 = 'LONDON`S CHOICE'
        var Location1 = 'LONDON, UK'
        var publicacion2 = 'L.A SPECIAL FOR YOU!'
        var Location2 = 'LOS ANGELES, CA'
        var publicacion3 = 'POPULAR IN YOUR CITY'
        var Location3 = 'NEW YORK, NY'
        var publicacion4 = 'HOLLYWOOD OPPORTUNITIES'
        var Location4 = 'LOS ANGELES, CA'
        var publicacion5 = 'LATIN BILLBOARD RED CARPET'
        var Location5 = 'MIAMI, FL'
        var publicacion6 = 'MODELS CALL'
        var Location6 = 'ATLANTA, GA'
        var publicacion7 = 'FASHION SHOW AUDITION'
        var Location7 = 'SANTA BARBARA, CA'
        return(
            <View style={styles.container}>
                    <ScrollView tyle={SearchCastStyle.Columna}>
                        <View style={SearchCastStyle.fila}>
                            <View style={SearchCastStyle.contenedorColumna}>
                                <View style={SearchCastStyle.contenedorLeftPantalla1}>
                                    <ImageBackground
                                        style={{flex:1,width: undefined, height: undefined}}
                                        source={require('../img/black.jpg')}>
                                        <View style={SearchCastStyle.contenedorInside}>
                                            <View style={SearchCastStyle.Titulos}>
                                                <Text style={styles.white}>{publicacion1}</Text>
                                                <Text style={{fontSize:10, color:'white'}}>{Location1}</Text>
                                            </View>
                                            <View style={SearchCastStyle.Nombres}>
                                                <View style={SearchCastStyle.Row}>
                                                    <Avatar
                                                        small
                                                        rounded
                                                        source={require("../img/elite.jpg")}
                                                        onPress={() => console.log("Works!")}
                                                        activeOpacity={0.7}
                                                    />
                                                    <Text style={{fontSize:16,color:'white'}}>ET Casting</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={SearchCastStyle.contenedorLeftPantalla1}>
                                    <ImageBackground
                                        style={{flex:1,width: undefined, height: undefined}}
                                        source={require('../img/film.jpg')}>
                                        <View style={SearchCastStyle.contenedorInside}>
                                            <View style={SearchCastStyle.Titulos}>
                                                <Text style={styles.white}>{publicacion2}</Text>
                                                <Text style={{fontSize:10, color:'white'}}>{Location2}</Text>
                                            </View>
                                            <View style={SearchCastStyle.Nombres}>
                                                <View style={SearchCastStyle.Row}>
                                                    <Avatar
                                                        small
                                                        rounded
                                                        source={require("../img/elite.jpg")}
                                                        onPress={() => console.log("Works!")}
                                                        activeOpacity={0.7}
                                                    />
                                                    <Text style={{fontSize:16,color:'white'}}>ET Casting</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>
                            <View style={SearchCastStyle.contenedorRigthPantalla1}>
                                    <ImageBackground
                                        style={{flex:1,width: undefined, height: undefined}}
                                        source={require('../img/espectacular.jpg')}>
                                        <View style={SearchCastStyle.contenedorInside}>
                                            <View style={SearchCastStyle.Titulos}>
                                                <Text style={styles.white}>{publicacion3}</Text>
                                                <Text style={{fontSize:10, color:'white'}}>{Location3}</Text>
                                            </View>
                                            <View style={SearchCastStyle.Nombres}>
                                                <View style={SearchCastStyle.Row}>
                                                    <Avatar
                                                        medium
                                                        rounded
                                                        source={require("../img/elite.jpg")}
                                                        onPress={() => console.log("Works!")}
                                                        activeOpacity={0.7}
                                                    />
                                                    <Text style={{fontSize:20,color:'white'}}>ET Casting</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                            </View>
                        </View>
                        <View style={SearchCastStyle.Rectangulo}>
                            <ImageBackground
                                style={{flex:1,width: undefined, height: undefined}}
                                source={require('../img/hollywood.jpg')}>
                                    <View style={SearchCastStyle.contenedorInside2}>
                                        <View style={SearchCastStyle.Nombres2}>
                                            <View>
                                                <Text style={styles.white}>{publicacion4}</Text>
                                                <Text style={{fontSize:10, color:'white'}}>{Location4}</Text>
                                            </View>
                                        </View>
                                    </View>
                            </ImageBackground>
                        </View>
                        <View style={SearchCastStyle.fila}>
                            <TouchableOpacity activeOpacity={.8} style={{flex:1}}>
                                <View style={SearchCastStyle.contenedorLeftPantalla2}>
                                        <ImageBackground
                                            style={{flex:1,width: undefined, height: undefined}}
                                            source={require('../img/black.jpg')}>
                                            <View style={SearchCastStyle.contenedorInside2}>
                                                <View style={SearchCastStyle.Nombres3}>
                                                    <View>
                                                        <Text style={styles.white}>{publicacion5}</Text>
                                                        <Text style={{fontSize:10, color:'white'}}>{Location5}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <View style={SearchCastStyle.contenedorColumna}>
                                <TouchableOpacity activeOpacity={.8} style={{flex:1}}>
                                    <View style={SearchCastStyle.contenedorRightPantalla2}>
                                        <ImageBackground
                                            style={{flex:1,width: undefined, height: undefined}}
                                            source={require('../img/film.jpg')}>
                                            <View style={SearchCastStyle.contenedorInside2}>
                                                <View style={SearchCastStyle.Nombres3}>
                                                    <View>
                                                        <Text style={styles.white}>{publicacion6}</Text>
                                                        <Text style={{fontSize:10, color:'white'}}>{Location6}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={.8} style={{flex:1}}>
                                    <View style={SearchCastStyle.contenedorRightPantalla2}>
                                        <ImageBackground
                                            style={{flex:1,width: undefined, height: undefined}}
                                            source={require('../img/espectacular.jpg')}>
                                            <View style={SearchCastStyle.contenedorInside2}>
                                                <View style={SearchCastStyle.Nombres3}>
                                                    <View>
                                                        <Text style={styles.white}>{publicacion7}</Text>
                                                        <Text style={{fontSize:10, color:'white'}}>{Location7}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                                <View style={SearchCastStyle.cuadros}>
                                    <View style={SearchCastStyle.circle} />
                                        <View style={SearchCastStyle.Row}>
                                            <TouchableOpacity activeOpacity={.8} style={SearchCastStyle.Touchabling}>
                                                <View style={SearchCastStyle.square1}>
                                                    <ImageBackground style={{flex:1,width: undefined, height: undefined}} source={require('../img/film.jpg')}>
                                                        <View style={SearchCastStyle.contenedorInside3}>
                                                            <Text style={{fontSize:20, color:'white'}}>Movies</Text>
                                                        </View>
                                                    </ImageBackground>
                                        
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={.8} style={SearchCastStyle.Touchabling}>
                                                <View style={SearchCastStyle.square2}>
                                                    <ImageBackground style={{flex:1,width: undefined, height: undefined}} source={require('../img/black.jpg')}>
                                                        <View style={SearchCastStyle.contenedorInside3}>
                                                            <Text style={{fontSize:20, color:'white'}}>COMMERCIALS</Text>
                                                        </View>   
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={SearchCastStyle.Row}>
                                            <TouchableOpacity activeOpacity={.8} style={{flex:1,width: undefined, height: undefined}}>
                                                <View style={SearchCastStyle.square3}>
                                                    <ImageBackground style={{flex:1,width: undefined, height: undefined}} source={require('../img/espectacular.jpg')}>
                                                        <View style={SearchCastStyle.contenedorInside3}>
                                                            <Text style={{fontSize:20, color:'white'}}>TV SHOWS</Text>
                                                        </View>   
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={.8} style={SearchCastStyle.Touchabling}>
                                                <View style={SearchCastStyle.square4}>
                                                <ImageBackground style={{flex:1,width: undefined, height: undefined}} source={require('../img/film.jpg')}>
                                                        <View style={SearchCastStyle.contenedorInside3}>
                                                            <Text style={{fontSize:20, color:'white'}}>SERIES</Text>
                                                        </View>
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={SearchCastStyle.circle}>
                                                    <Avatar
                                                        large
                                                        rounded
                                                        source={require("../img/elite.jpg")}
                                                        onPress={() => console.log("Works!")}
                                                        activeOpacity={0.7}
                                                    />
                                        </View>
                                </View>
                        <TouchableOpacity activeOpacity={.8} style={SearchCastStyle.Touchabling}>
                            <View style={SearchCastStyle.Rectangulo} >
                                <ImageBackground 
                                    style={{flex:1,width: undefined, height: undefined}}
                                    source={require('../img/hollywood.jpg')}>
                                        <View style={SearchCastStyle.contenedorInside2}>
                                            <View style={SearchCastStyle.Nombres2}>
                                                <View>
                                                    <Text style={styles.white}>{publicacion4}</Text>
                                                    <Text style={{fontSize:10, color:'white'}}>{Location4}</Text>
                                                </View>
                                            </View>
                                        </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity> 
                    </ScrollView>
                </View>
        );
    
    }
    
}