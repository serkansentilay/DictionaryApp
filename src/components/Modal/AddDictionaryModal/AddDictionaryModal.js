import { Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./AddDictionarModal.style"
import { useDispatch } from "react-redux"
import { add } from '../../../context/dictionarySlice'

const AddDictionaryModal = (props) => {
    const { isModal, setModal } = props.modal
    const [en, setEn] = useState("")
    const [tr, setTr] = useState("")

    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(add({ en, tr }))
        setEn("")
        setTr("")
    }

    return (
        <Modal
            transparent
            animationType='slide'
            visible={isModal}
            onRequestClose={() => setModal(false)}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.closeBtn} onPress={() => setModal(false)}>
                    <Text style={styles.close}>X</Text>
                </TouchableOpacity>

                <TextInput value={en} onChangeText={setEn} placeholder='ENGLISH' style={styles.textInput} />
                <TextInput value={tr} onChangeText={setTr} placeholder='TURKCE' style={styles.textInput} />

                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.save}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default AddDictionaryModal

