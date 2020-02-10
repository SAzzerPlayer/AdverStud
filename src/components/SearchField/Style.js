import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        width:'100%',
        height:64,
        marginBottom: 24,
        borderWidth: 1,
        borderRadius:32,
        borderColor: 'gray',
        paddingRight:16,
        paddingLeft:16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        flex:1
    },
    text:{
        fontSize:14
    },
    icon:{
        width:24,
        height:24,
        tintColor: 'gray'
    }
})
