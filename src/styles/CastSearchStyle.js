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
        height:700,
    },
    contenedorColumna:{
        width:170,
        flexDirection:'column'
    },
    contenedorLeft1:{
        flex:.5,
        borderRightWidth: 5,
        borderRightColor: 'white',
        borderBottomWidth: 5,
        borderBottomColor: 'white',
    },
    contenedorInside:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,.2)',
    },
    contenedorLeft2:{
        flex:.5,
        borderRightWidth: 5,
        borderRightColor: 'white',
        borderBottomWidth: 5,
        borderBottomColor: 'white',
    },
    contenedorRigth:{
        flex:1,
        borderBottomWidth: 5,
        borderBottomColor: 'white',
    },
})