import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./Word.style"
import { useSelector, useDispatch } from "react-redux"

const Word = () => {
    const [index, setIndex] = useState(0)
    const dictionary = useSelector(state => state.dictionary)

    const move = (type) => {
        if (type === "next") {
            if (index + 1 === dictionary.length) {
                return
            }
            setIndex(prev => prev + 1)
        } else {
            if (index === 0) {
                return
            }
            setIndex(prev => prev - 1)
        }
    }

    console.log("----", dictionary.length)
    return (
        <View style={styles.container}>
            <Text style={styles.dictLength}>{index + 1} of {dictionary.length}</Text>
            <View style={styles.wordContainer}>
                <View style={styles.wordInbox}>
                    <TouchableOpacity onPress={() => move("back")}>
                        <Text style={styles.wordLeft}>BACK</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.wordInbox, { flex: 2 }]}>
                    <Text style={styles.wordCenterEN}>{dictionary[index].en}</Text>
                    <Text style={styles.wordCenterTR}>{dictionary[index].tr}</Text>
                </View>
                <View style={styles.wordInbox}>
                    <TouchableOpacity onPress={() => move("next")}>
                        <Text style={styles.wordRight}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Word
