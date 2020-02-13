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
    empty:{
        height: 32,
        width: '25%'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom:24
    },
    add:{
        padding: 16,
        borderRadius: 16,
        height:32,
        borderColor: 'green',
        borderWidth:1,
        justifyContent: 'center'
    },
    addText:{
        color:"green",
        fontWeight: '200'
    },
    h1:{
       fontSize:20,
        fontWeight: 'bold'
    },
    h2:{
       fontSize:16,
        fontWeight: 'bold',
        marginBottom:24
    }

});
