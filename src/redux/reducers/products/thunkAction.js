import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../../utils/config/api";
import useAxios from "../../../utils/config/UseAxios";


export const getProducts = createAsyncThunk(
  "auth/getProducts",
  async (type, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${API_BASE_URL}/products/all-products`,
        method: "get",
      });


      const res = response.data;
      return res.data
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


