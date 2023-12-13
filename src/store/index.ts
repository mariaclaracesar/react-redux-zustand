import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustand"],

  reducers: {
    // acoes que a interface pode fazer no nosso estado
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

// store - estado global - toda a aplicação vai ter acesso
export const store = configureStore({
  // reducer - informaçõees que vamos compartilhar entre todos os componentes da nossa aplicação
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
