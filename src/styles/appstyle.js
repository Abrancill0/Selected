import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    container: {
        paddingTop:20,
        flex: 1,
        backgroundColor: 'black',
      },
      littleWhite:{
        color:'white',
        fontSize:11
      },
      TitleBigWhite:{
        color:'white',
        fontSize:45,
      },
      Avatar:{
        borderRadius: 2,
        borderWidth: 0.3,
        borderColor:'#d6d7da'
      },
      Header: {
        marginTop:30,
        marginHorizontal:30,
        flexDirection: 'row',
        height:130, 
        
      },
      NameContacReviewRating:{
        flex:1,
        flexDirection:'column',
        padding:5,
        
      },
      redTitle: {
        color:'#FA5F5A',
        fontSize: 25
      },
      gray: {
        fontSize:12,
        color:'gray'
      },
      rating: {
        marginTop:.1,
        flexDirection: 'row',
        flex:1,
      },
      buttonHeader:{
        paddingTop:5,
        flex:1,
        alignItems:'flex-end',
        
      },
      caja_columna:{ 
        padding:3,
        alignItems: 'center',
        flexDirection:'column',
        
      },
      Caracteristicas:{
        marginHorizontal:20,
        flexDirection:'column',
        height:150,
        backgroundColor:'black'
      },
      CaracteristicaRow:{
        flexDirection:'row',
        justifyContent: 'space-between',
        flex:1,
        borderRadius: 2,
        borderWidth: 0.3,
        borderBottomColor: '#d6d7da',
        borderTopColor: '#d6d7da',
        
      },
      CaracteristicaRowButtons:{

        backgroundColor:'black',
        alignItems:'center',
        flexDirection:'row',
        flex:1,
        borderRadius: 2,
        borderWidth: 0.3,
        borderBottomColor: '#d6d7da',
        borderTopColor: '#d6d7da',
        
      },
      red:{
        color:'#FA5F5A'
      },
      white:{
        color:'white'
      },
      Experience:{
        marginHorizontal:20,
        flexDirection:'column',
        backgroundColor:'black',
        borderRadius: 2,
        borderWidth: 0.3,
        borderBottomColor: '#d6d7da',
      },
      carrusel1:{
        marginHorizontal:20,
        height:170,
        backgroundColor:'black'
      },
      slide: {
        width: 320,
        height: 200,
        paddingHorizontal: 20
        // other styles for the item container
    },
    slideInnerContainer: {
        width: 280,
        flex: 1
        // other styles for the inner container
    },
    littleWhite:{
        color:'white',
        fontSize:12
      },
      CaracteristicasManager:{
        marginHorizontal:20,
        flexDirection:'column',
        height:50,
        backgroundColor:'black',
        borderRadius: 2,
        borderWidth: 0.3,
        borderBottomColor: '#d6d7da',
        borderTopColor: '#d6d7da',
        height:45
      },
      Rol:{
        borderRadius: 2,
        borderWidth: 0.3,
        borderBottomColor: '#d6d7da',
      },
      BorderTopBottom:{
        borderRadius: 2,
        borderWidth: 0.3,
        borderBottomColor: '#d6d7da',
        borderTopColor: '#d6d7da',
        height:45,
        marginHorizontal:20
      },
      black:{
        color:'black'
      },
      About:{
        marginHorizontal:20,
        flexDirection:'column',
        backgroundColor:'black'
      },
});
