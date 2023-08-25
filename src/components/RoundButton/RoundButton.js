import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./RoundButton.style"
import AddDictionaryModal from '../Modal/AddDictionaryModal/AddDictionaryModal'

const RoundButton = (props) => {
    const { setModal } = props.modal

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
            <AddDictionaryModal {...props} />
        </View>
    )
}

export default RoundButton

