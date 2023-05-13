import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Name: '', Job_Position: '',
  Number: '', Email: '', Address: '', Web_Link: '',
  About: '',
  Hobbies: ['', '', '', ''],
  Skills: [
    { skil: '', expertise: '' },
    { skil: '', expertise: '' },
    { skil: '', expertise: '' },
    { skil: '', expertise: '' },
    { skil: '', expertise: '' },
  ],

  Languages: [
    { lan: '', expertise: '' },
    { lan: '', expertise: '' },
    { lan: '', expertise: '' },
    { lan: '', expertise: '' },
    { lan: '', expertise: '' },
  ],

  Education: [
    { edu_start_year: '', edu_end_year: '', Degree: '', Details: '' },
    { edu_start_year: '', edu_end_year: '', Degree: '', Details: '' },
  ],

  Experience: [
    { Exp_start_year: '', Exp_end_year: '', Company: '', Details: '' },
    { Exp_start_year: '', Exp_end_year: '', Company: '', Details: '' },
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer