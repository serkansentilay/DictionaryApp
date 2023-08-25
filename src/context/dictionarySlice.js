import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: [
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
    ],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { add } = dictionarySlice.actions
export default dictionarySlice.reducer