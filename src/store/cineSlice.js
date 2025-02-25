import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salaActual: "Sala 1",
  salas: {
    "Sala 1": Array(10).fill(false), 
    "Sala 2": Array(40).fill(false),
  },
};

const cineSlice = createSlice({
  name: "cine",
  initialState,
  reducers: {
    cambiarSala: (state, action) => {
      state.salaActual = action.payload;
    },
    seleccionarAsiento: (state, action) => {
      const index = action.payload;
      state.salas[state.salaActual][index] = !state.salas[state.salaActual][index];
    },
  },
});

export const { cambiarSala, seleccionarAsiento } = cineSlice.actions;
export default cineSlice.reducer;
