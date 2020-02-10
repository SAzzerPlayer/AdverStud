import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    button:{
        width:'50%',
        height:32,
        marginBottom:24
    },
    text:{
        fontSize:14
    },
    gradient:{
        flex:1,
        maxHeight:32,
        borderRadius:16,
        justifyContent: 'center',
        alignItems: 'center',
        //shadowBox:"0px 4px 4px rgba(0,0,0,0.25)"
        shadowOffset:{
            width:0,
            height:4
        },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }
});
//export const gradientColors = ['rgba(255,255,255,0.05) -119.83%','#FCD404'];
export const gradientColors = ['#FCD404','#FCD404'];
