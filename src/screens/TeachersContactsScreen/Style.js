import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
   screen:{
       width,
       height,
       padding:24,
       alignItems:'center',
       paddingTop:90
   },
    h1:{
       fontSize:18,
        fontWeight:'bold',
        marginBottom:24,
        maxWidth:'90%'
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        marginBottom:24,
        maxWidth:'90%'
    },
    photo:{
       height:196,
        width:196,
        backgroundColor:'gray',
        borderRadius:30,
        marginBottom:24
    },
    numberText:{
       letterSpacing: 1
    }
});
