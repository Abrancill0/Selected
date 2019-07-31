import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        backgroundColor:'black'
      },
    Columna:{
        flex:1,
    },
    imagen:{
        padding:10,
        height:200
    },
    Description:{
        padding:10,
        height:140,
        justifyContent:'space-between',
    },
    Owner:{
        flexDirection:'row',
        left:30,
    },
    Buttons:{
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    whiteButtons:{
        borderRadius:5,
        borderColor:'black'
    }
})