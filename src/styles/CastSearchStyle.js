import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    contenedorPrincipal:{
        paddingTop:20,
      },
    Columna:{
        flex:1,
    },
    fila:{
        flexDirection:'row',
        height:650,
    },
    contenedorColumna:{
        width:170,
        flexDirection:'column'
    },
    contenedorLeftPantalla1:{
        flex:.5,
        borderRightWidth: 2,
        borderRightColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    contenedorInside:{
        flex:1,
        backgroundColor: 'rgba(0,2,.7,.2)',
        justifyContent:'space-between'
    },
    contenedorInside2:{
        flex:1,
        backgroundColor: 'rgba(0,2,.7,.2)',
        justifyContent:'flex-end'
    },
    contenedorRigthPantalla1:{
        flex:1,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    Titulos:{
        padding:10,
        color:'white',
        backgroundColor: 'rgba(5,.9,.9,.5)',
    },
    Titulos2:{
        padding:5,
        color:'white',
        backgroundColor: 'rgba(5,.9,.9,.5)',
        justifyContent:'flex-end',
    },
    Nombres:{
        flex:.1,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingLeft:10,
        padding:10,
        backgroundColor: 'rgba(5,.9,.9,.5)',
    },
    Nombres2:{
        flex:.2,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingLeft:10,
        padding:10,
        backgroundColor: 'rgba(5,.9,.9,.5)',
    },
    Nombres3:{
        flex:.07,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingLeft:10,
        padding:10,
        backgroundColor: 'rgba(5,.9,.9,.5)',
    },
    Row:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    Rectangulo:{
        flexDirection:'row',
        height: 125,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    contenedorLeftPantalla2:{
        flex:1,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderRightWidth: 2,
        borderRightColor: 'white',
    },
    contenedorRightPantalla2:{
        flex:.5,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    square1:{
        flex:.5,
        height: 150,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderRightWidth: 2,
        borderRightColor: 'white',
    },
    square2:{
        flex:.5,
        height: 150,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        
    },
    square3:{
        flex:.5,
        height: 150,
        borderRightWidth: 2,
        borderRightColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    square4:{
        flex:.5,
        height: 150,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    contenedorInside3:{
        flex:1,
        backgroundColor: 'rgba(0,2,.7,.7)',
        justifyContent:'center',
        alignItems:'center'
    },

    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
      },
      starfive: {
        width: 150,
        ...StyleSheet.absoluteFillObject,
        left:100,
        top:200,
        
      },
      starfiveTop: {
        position: 'absolute',
        top: -45,
        left: 37,
      },
      starfiveBefore: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        top: 0,
        borderStyle: 'solid',
        borderRightWidth: 100,
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderBottomWidth: 70,
        borderLeftWidth: 100,
        borderLeftColor: 'transparent',
        transform: [
          { rotate: '35deg'}
        ]
        
      },
      starfiveAfter: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: -25,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderRightWidth: 100,
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderBottomWidth: 70,
        borderLeftWidth: 100,
        borderLeftColor: 'transparent',
        transform: [
          { rotate: '-35deg'}
        ],
      },
      cuadros:{
          alignContent:'center',
          justifyContent:'center'
      },
      circle: {
        width: 80,
        height: 80,
        borderRadius: 100/2,
        borderWidth: 2,
        borderColor:'white',
        backgroundColor: 'black',
        ...StyleSheet.absoluteFillObject,
        left:150,
        top:100,
        alignContent:'center',
        justifyContent: 'center',
        alignItems:'center'
    },
    Touchabling:{
        flex:1,
        width: undefined, 
        height: undefined,
    }

})