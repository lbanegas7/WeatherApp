import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface autocompleteState {
  value: [string],
  isLoading: boolean,
  error: string
}

const initialState: autocompleteState = {
  value: [''],
  isLoading: false,
  error: ''
}

export const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
    loadingFindCities: (state) => {
      state.isLoading = true
    },
    setCities: (state, action: PayloadAction<{value: string}>) => {
      state.value.push(action.payload.value)
      state.isLoading = false 
    },
    setError: (state, action: PayloadAction<{error:string}>) =>{
      state.error = action.payload.error
    }
  },
})

export const { loadingFindCities, setCities, setError } = autocompleteSlice.actions
