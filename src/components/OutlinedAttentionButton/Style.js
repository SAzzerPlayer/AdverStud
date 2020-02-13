import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    button:{
        width:'100%',
        height:64,
        marginBottom: 24,

    },
    text:{
        fontSize:14
    },
    gradient:{
        flex:1,
        maxHeight:64,
        borderRadius:32,
        borderWidth:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft:16,
        paddingRight:16,
        //shadowBox:"0px 4px 4px rgba(0,0,0,0.25)"
        shadowOffset:{
            width:0,
            height:4
        },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    active:{
        width:32,
        height:32,
        backgroundColor:'white',
        borderRadius:16,
        opacity:0.75
    }
});
