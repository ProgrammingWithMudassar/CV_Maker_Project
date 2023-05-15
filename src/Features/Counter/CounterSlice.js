import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Name: '', Job_position: '',
  Number: '', Email: '', Address: '', Web_Link: '',
  About: '',
  Hob1: '', Hob2: '', Hob3: '', Hob4: '',
  skill1: '', skill2: '', skill3: '', skill4: '',skill5: '',
  skill_exp1: '', skill_exp2: '', skill_exp3: '', skill_exp4: '',skill_exp5: '',
  Language1: '', Language2: '', Language3: '',
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
    UpdateState: (state, action) => {
      const payload = action.payload;

      state.Name = payload.Name;
      state.Job_position = payload.Job_position;
      state.Number = payload.Number;
      state.Email = payload.Email;
      state.Address = payload.Address;
      state.Web_Link = payload.Web_Link;
      state.About = payload.About;
      state.Hob1 = payload.Hob1;
      state.Hob2 = payload.Hob2;
      state.Hob3 = payload.Hob3;
      state.Hob4 = payload.Hob4;
      state.skill1 = payload.skill1;
      state.skill2 = payload.skill2;
      state.skill3 = payload.skill3;
      state.skill4 = payload.skill4;
      state.skill5 = payload.skill5;
      state.skill_exp1 = payload.skill_exp1;
      state.skill_exp2 = payload.skill_exp2;
      state.skill_exp3 = payload.skill_exp3;
      state.skill_exp4 = payload.skill_exp4;
      state.skill_exp5 = payload.skill_exp5;
      state.Language1 = payload.Language1;
      state.Language2 = payload.Language2;
      state.Language3 = payload.Language3;
      state.Edu1_start_year = payload.Edu1_start_year;
      state.Edu1_end_year = payload.Edu1_end_year;
      state.Edu1_degree = payload.Edu1_degree;
      state.Edu1_details = payload.Edu1_details;
      state.Edu2_start_year = payload.Edu2_start_year;
      state.Edu2_end_year = payload.Edu2_end_year;
      state.Edu2_degree = payload.Edu2_degree;
      state.Edu2_details = payload.Edu2_details;
      state.Exp1_start_year = payload.Exp1_start_year;
      state.Exp1_end_year = payload.Exp1_end_year;
      state.Exp1_compnay_name = payload.Exp1_compnay_name;
      state.Exp1_details = payload.Exp1_details;
      state.Exp2_start_year = payload.Exp2_start_year;
      state.Exp2_end_year = payload.Exp2_end_year;
      state.Exp2_compnay_name = payload.Exp2_compnay_name;
      state.Exp2_details = payload.Exp2_details;
      state.Exp3_start_year = payload.Exp3_start_year;
      state.Exp3_end_year = payload.Exp3_end_year;
      state.Exp3_compnay_name = payload.Exp3_compnay_name;
      state.Exp3_details = payload.Exp3_details;

    },

    ClearFormData:(state)=>{
      state.Name = ''
      state.Job_position = '';
      state.Number = '';
      state.Email = '';
      state.Address = '';
      state.Web_Link = '';
      state.About = '';
      state.Hob1 = ''
      state.Hob2 = ''
      state.Hob3 = ''
      state.Hob4 = ''
      state.skill1 = '';
      state.skill2 = '';
      state.skill3 = '';
      state.skill4 = '';
      state.skill5 = '';
      state.skill_exp1 = '';
      state.skill_exp2 = '';
      state.skill_exp3 = '';
      state.skill_exp4 = '';
      state.skill_exp5 = '';
      state.Language1 = '';
      state.Language2 = '';
      state.Language3 = '';
      state.Edu1_start_year = '';
      state.Edu1_end_year = '';
      state.Edu1_degree = '';
      state.Edu1_details = '';
      state.Edu2_start_year = '';
      state.Edu2_end_year = '';
      state.Edu2_degree = '';
      state.Edu2_details = '';
      state.Exp1_start_year = '';
      state.Exp1_end_year = '';
      state.Exp1_compnay_name = '';
      state.Exp1_details = '';
      state.Exp2_start_year = '';
      state.Exp2_end_year = '';
      state.Exp2_compnay_name = '';
      state.Exp2_details = '';
      state.Exp3_start_year = '';
      state.Exp3_end_year = '';
      state.Exp3_compnay_name = '';
      state.Exp3_details = '';

    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { UpdateState, incrementByAmount, ClearFormData } = counterSlice.actions

export default counterSlice.reducer