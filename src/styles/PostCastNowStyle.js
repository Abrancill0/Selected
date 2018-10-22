import { StyleSheet } from 'react-native';
export default StyleSheet.create({

    container:{
        backgroundColor: 'white',
    },
    Header: {
        marginTop:30,
        marginHorizontal:20,
        flexDirection: 'row',
      },
    TypeOwner:{
        flex:1,
        flexDirection:'column',
        padding:5,
      },
    BlackTitle: {
        color:'black',
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
        padding:3,
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
    },
    RowDescription:{
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    caracteristicas:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
        flex:1,
    },
    black: {
        fontSize:10,
        color:'black'
      },
      black2: {
        fontSize:12,
        color:'black'
      },
      white: {
        fontSize:12,
        color:'white'
      },
    Cast_description: {
        marginHorizontal:10,
        
    },
    gray:{
        color:'gray'
    },
    buttons1:{
        flexDirection:'flex-start',
        flexDirection:'row',
        justifyContent:'space-between',
        flex:11
    },
    boxbutton:{
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:5
    },


})