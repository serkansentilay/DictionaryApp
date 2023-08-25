import { View } from 'react-native'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './context/store'
import Word from './components/Word/Word'
import RoundButton from './components/RoundButton/RoundButton'

const App = () => {
  const [isModal, setModal] = useState(false)
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Word />
        <RoundButton modal={{ isModal, setModal }} />
      </View>
    </Provider>
  )
}

export default App
