import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../../utils/config/api";
import useAxios from "../../../utils/config/UseAxios";


export const signUp = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${API_BASE_URL}/auth/signup`,
        method: "post",
        data: data,
      });


      toast.success('Account created successfully, proceed to login')
      return response.data;
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data;
        console.log('err', err)

        const msg = error.response.data.message[0] || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${API_BASE_URL}/auth/login`,
        method: "post",
        data: data,
      });


      const authData = response;
      toast.success('Welcome back, Login success.')
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(authData.data.data));
        localStorage.setItem("token", authData.data.token);
      }
      return authData.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data 
        console.log('err', err)

        const msg = error.response.data.message || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


