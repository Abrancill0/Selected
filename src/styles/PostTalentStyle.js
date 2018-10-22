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
        width:130
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
    buttons2:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:.5
    },
    buttons1:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:.6
    },
    boxbuttons:{
        alignItems:'center'
    },
    boxbuttonsComment:{
        padding:7,
        marginHorizontal:7,
        flexDirection:'row',
        width:50,
        borderRadius: 2,
        borderWidth: 0.9,
        borderBottomColor: 'black',
        justifyContent:'space-between'
    },
    boxbuttonsCast:{
        padding:7,
        marginHorizontal:7,
        flexDirection:'row',
        width:100,
        borderRadius: 2,
        borderWidth: 0.9,
        borderColor: '#FA5F5A',
        backgroundColor:'#FA5F5A',
        justifyContent:'space-between'
    },
    boxbuttonsShare:{
        justifyContent:'center',
        padding:7,
        marginHorizontal:7,
        flexDirection:'row',
        width:40,
        borderRadius: 2,
        borderWidth: 0.9,
        borderBottomColor: 'black',
        
        
    },
    boxbuttonsHeart:{
        padding:7,
        marginHorizontal:7,
        flexDirection:'row',
        width:50,
        borderRadius: 2,
        borderWidth: 0.9,
        borderColor: '#FA5F5A',
        backgroundColor:'#FA5F5A',
        justifyContent:'space-between'
    },


})