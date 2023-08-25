import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    dictList: [
        {
            en: "Computer",
            tr: "Bilgisayar"
        },
        {
            en: "Pencil",
            tr: "Kalem",
        },
        {
            en: "Motherboard",
            tr: "Anakart"
        }

    ]
}

export const dictionaryList = createAsyncThunk('dictionaryList', async () => {
    const data = await AsyncStorage.getItem('dictionaryList')
        .then(st => JSON.parse(st))
    console.log("data", data)
    return data
})

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        add: (state, action) => {
            state.dictList.push(action.payload)
            AsyncStorage.setItem("dictionaryList", JSON.stringify(state.dictList))
            console.log("add state", state.dictList)

        }
    },
    extraReducers: (builder) => {
        builder.addCase(dictionaryList.fulfilled, (state, action) => {
            state.dictList = action.payload
            console.log("extraReducers state", state.dictList)
        })
    }

})

export const { add, checkAsync } = dictionarySlice.actions
export default dictionarySlice.reducer