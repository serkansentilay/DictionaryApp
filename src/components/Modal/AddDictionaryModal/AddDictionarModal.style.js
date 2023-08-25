import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 30,
    },
    closeBtn: {
        alignSelf: 'flex-end',
    },
    close: {
        color: 'red',
        fontSize: 30,
    },
    saveBtn: {
        backgroundColor: 'gray',
        width: '100%',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20
    },
    save: {
        color: 'green',
        fontSize: 30,
    },
    textInput: {
        height: 50,
        borderBottomWidth: 1,
        width: '80%',
        fontSize: 20,
        padding: 5,
        margin: 5
    }

})