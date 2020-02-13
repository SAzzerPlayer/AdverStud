import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        height,
        width,
        padding:24,
        paddingTop:0,
        alignItems:'center'
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign:"center",
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    scroll:{
        //marginTop:24
    },
    empty:{
        //width:'15%'
    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:24,
        marginTop:90
    },
    add:{
        padding:16,
        borderWidth:1,
        borderColor:"green",
        borderRadius:16,
        height:32,
        justifyContent: 'center'
    },
    addText:{
        color: 'green',
        fontWeight: '100'
    }
})
