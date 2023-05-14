import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Name: '', Job_Position: '',
  Number: '', Email: '', Address: '', Web_Link: '',
  About: '',

  Hob1: '', Hob2: '', Hob3: '', Hob4: '',

  skill1: '', skill2: '', skill3: '', skill4: '',
  skill_exp1: '', skill_exp2: '', skill_exp3: '', skill_exp4: '',

  Language1: '', Language2: '', Language3: '', Language4: '', Language5: '',
  Language1_Exp: '', Language2_Exp: '', Language3_Exp: '', Language4_Exp: '', 
  Language5_Exp: '',

  Edu1_start_year: '', Edu1_end_year: '', Edu1_degree: '', Edu1_details: '',
  Edu2_start_year: '', Edu2_end_year: '', Edu2_degree: '', Edu2_details: '',


  Exp1_start_year: '', Exp1_end_year: '', Exp1_compnay_name: '', Exp1_details: '',
  Exp2_start_year: '', Exp2_end_year: '', Exp2_compnay_name: '', Exp2_details: '',
  Exp3_start_year: '', Exp3_end_year: '', Exp3_compnay_name: '', Exp3_details: '',

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