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
        maxWidth:'100%',
        textAlign:'center'
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
    },
    header:{
       flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        marginBottom:16
    },
    delete:{
       padding:16,
        borderWidth:1,
        borderColor:'red',
        height:32,
        borderRadius:16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteText:{
       color: 'red'
    },
    edit:{
        width:32,
        height:32
    }
});
