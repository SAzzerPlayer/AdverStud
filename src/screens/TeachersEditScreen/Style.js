import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        height,
        width,
        padding: 24,
        paddingTop: 0
    },
    h1:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:90,
        textAlign:"center",
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        marginBottom:8
    },
    inputView:{
        flexDirection: 'column',
        marginBottom:24
    },
    input:{
        width:'100%',
        borderWidth:1,
        borderColor: 'gray',
        borderRadius: 24,
        height:48,
        padding:8,
        paddingRight:16,
        backgroundColor: 'snow'
    },
    pickerView:{
        flexDirection: 'row',
        justifyContent: "space-around",
        padding:16,
        paddingTop:0,
        paddingBottom:24
    },
    photo:{
        width:128,
        height:128,
    },
    empty:{
        height:100
    }
});
