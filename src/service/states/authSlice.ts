import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  access_token: string;
  expires_at: number;
  token_type: string;
}

// 认证token
const authSlice = createSlice({
  name: "auth",
  initialState: { access_token: "", expires_at: 0, token_type: "Bearer" },
  reducers: {
    setAuth: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.access_token = action.payload.access_token;
      state.expires_at = action.payload.expires_at + Date.now();
      state.token_type = action.payload.token_type;
    },
  },
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
