import { StyleSheet } from 'react-native';
export default StyleSheet.create(
{
    contenedorPrincipal:
    {
        flex:1,
        backgroundColor:'black'
    },
    SearchBar:
    {
        padding:10
    },
    contacts:
    {
        padding:10,
        flex:1,
    },
    Row_contact:
    {
        flexDirection:'row',
    },
    contact:
    {
        flex:.23,
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap: 'wrap',
        paddingVertical:5
    }
})