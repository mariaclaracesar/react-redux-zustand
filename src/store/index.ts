import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustand"],

  reducers: {},
});

export const store = configureStore({
  // reducer - informaçõees que vamos compartilhar entre todos os componentes da nossa aplicação
  reducer: {
    todo: todoSlice.reducer,
  },
});
