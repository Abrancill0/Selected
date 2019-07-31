import { StyleSheet } from 'react-native';
export default StyleSheet.create({

    container:{
        backgroundColor: 'black',
    },
    Header: {
        marginTop:30,
        paddingHorizontal:15,
        flexDirection: 'row',
      },
    TypeOwner:{
        flex:1,
        flexDirection:'column',
        padding:5,
      },
    WhiteTitle: {
        color:'white',
        fontSize: 25
      },
    RowCastingOwner:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    RowTypeOwner:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        width:180
    },
    CastImage:{
        paddingTop:5,
        height:250
    },
    Row:{
        padding:5,
        flexDirection:'row',
        
    },
    Row2:{
        padding:5,
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
    },
    RowDescription:{
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    caracteristicas:{
        marginRight:10,
        color:'gray',
        fontSize:16,
        fontWeight:'600',
    },
    black: {
        fontSize:8,
        color:'black'
      },
      black2: {
        fontSize:12,
        color:'black'
      },
      white: {
        fontWeight:'600',
        fontSize:16,
        color:'white',
        textDecorationLine:'underline'
      },
    Cast_description: {
        marginHorizontal:10,
        
    },
    gray:{
        color:'gray',
        fontWeight:'600',
        fontSize:16,

    }


})