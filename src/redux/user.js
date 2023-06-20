const { createSlice } = require("@reduxjs/toolkit");

let user = createSlice({
  name:'user',
  initialState:{ people:'peopl01',age:20},
  reducers:{
    chagneAge(state,action){
      state.age += action.payload;
    }
  }
})

export let {chagneAge} = user.actions;

export default user;