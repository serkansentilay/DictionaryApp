import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dictLength: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
        color: 'black',

    },
    wordContainer: {
        flexDirection: 'row',
        top: 20
    },
    wordInbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wordLeft: {
        fontSize: 25,
        color: 'red',
    },
    wordCenterEN: {
        fontSize: 25,
        color: 'blue',
    },
    wordCenterTR: {
        fontSize: 25,
        color: 'darkblue',
    },
    wordRight: {
        fontSize: 25,
        color: 'green',

    },

})