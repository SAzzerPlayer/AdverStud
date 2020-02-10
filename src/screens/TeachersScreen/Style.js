import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
   screen:{
       width,
       height,
       padding: 24,
       alignItems: 'center',
       paddingTop:90
   },
    h1:{
       fontSize:20,
        fontWeight: 'bold',
        marginBottom:24
    },
    h2:{
       fontSize:16,
        fontWeight: 'bold',
        marginBottom:24
    }

});
