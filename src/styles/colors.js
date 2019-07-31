import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
black: {
    color:'black',
    fontWeight:'600',
    fontSize:RFValue(14),
  },
  whiteTitle: {
    color:'white',
    fontSize:RFValue(25),
  },
  white: {
    color:'white',
    fontWeight:'600',
    fontSize:RFValue(14),
  },
  white_underline: {
    color:'white',
    fontWeight:'600',
    fontSize:RFValue(14),
    textDecorationLine:'underline'
  },
  gray:{
    color:'gray',
    fontWeight:'600',
    fontSize:RFValue(14),
  },
  littleGray:{
    color:'gray',
    fontWeight:'600',
    fontSize:RFValue(10),
  },
  red: {
      color:'#F64648',
      fontWeight:'600',
      fontSize:RFValue(14),
  }
})