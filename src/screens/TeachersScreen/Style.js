import {StyleSheet,Dimensions} from 'react-native';

const {height,width} = Dimensions.get("window");

export default StyleSheet.create({
   screen:{
       width,
       height,
       padding: 24,
       alignItems: 'center',
   },
    empty:{
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:"center",
        width:"65%",
        marginBottom:24,
        marginTop:90
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
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign:"center"
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign:"center"
    }

});
