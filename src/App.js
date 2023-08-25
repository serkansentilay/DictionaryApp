import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Word from './components/Word/Word'
import RoundButton from './components/RoundButton/RoundButton'
import { useDispatch } from "react-redux"
import { dictionaryList } from './context/dictionarySlice'

const App = () => {
  const [isModal, setModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dictionaryList())
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Word />
      <RoundButton modal={{ isModal, setModal }} />
    </View>

  )
}

export default App
