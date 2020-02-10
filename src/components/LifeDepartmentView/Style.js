import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        backgroundColor: 'snow',
        width:'100%',
        marginBottom:24,
        borderRadius:32,
        padding:12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center"
    },
    image:{
        marginTop:24,
        marginBottom:24,
        marginRight:12,
        width:128,
        height:128,
        backgroundColor:"gray",
        borderRadius:32
    },
    h1:{
        fontSize:16,
        fontWeight: 'bold',
        maxWidth:"75%",
        marginBottom:16
    },
    h2:{
        fontSize:14,
        fontWeight: '200',
        marginBottom: 8
    }
})
