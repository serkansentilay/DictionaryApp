import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Deniyoruz = () => {
    const [value, setValue] = useState("")

    const handleSave = () => {
        AsyncStorage.setItem("store", JSON.stringify(value))
        Alert.alert("kaydedildi")
    }

    useEffect(() => {
        AsyncStorage.getItem("store").then(sess => {
            sess && setValue(JSON.parse(sess))
        })
    }, [])

    return (
        <View>
            <Text>value: {value}</Text>
            <TextInput value={value} onChangeText={setValue} placeholder='text somth.' />
            <Button title="save" onPress={() => handleSave()} />
        </View>
    )
}

export default Deniyoruz

const styles = StyleSheet.create({})