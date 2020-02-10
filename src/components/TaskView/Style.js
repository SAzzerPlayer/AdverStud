import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    description:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    p:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    date:{
        color: 'red',
        fontWeight: 'bold'
    }
})
