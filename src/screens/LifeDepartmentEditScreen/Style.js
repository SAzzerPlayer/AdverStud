import {StyleSheet,Dimensions} from 'react-native';

const {height,width} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        height,
        width,
        padding:24,
        paddingTop:0
    },
    h1:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:90,
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight:'bold',
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
    multiInput:{
        width:'100%',
        borderWidth:1,
        borderColor: 'gray',
        borderRadius: 24,
        height:256,
        padding:8,
        paddingRight:16,
        backgroundColor: 'snow'
    },
    empty:{
        height:100
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
    datePicker:{
        textAlign:'center',
        padding:16,
        borderRadius: 24,
        borderWidth:1,
        height:48,
        backgroundColor:'snow',
        justifyContent:'center'
    }

})
