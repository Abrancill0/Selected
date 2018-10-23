import { StyleSheet } from 'react-native';
export default StyleSheet.create({

    boxContainer:
  {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1:{
    flex:1,
  },
  box2:{
    flex:1,
    flexDirection: 'row',
    marginHorizontal:70,
    justifyContent: 'space-around',
    alignItems: 'flex-start' 
  },
  box3:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box4:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box5:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  botonActivo:{
    backgroundColor:'#000000',
    borderColor: '#c0392b',
    borderWidth: 3
  },
  botonDesactivo:{
    borderColor: 'black',
    borderWidth: 3
  },
  
  CajaTexto:{
    width:300,
    height: 45,
    marginTop: 6,
    borderColor: '#c0392b',
    borderWidth: 1,
    marginBottom: 5,
  },
  CajaTextoPequena:{
    width:130,
    height: 45,
    borderColor: '#c0392b',
    borderWidth: 1,
    
  },

  
})