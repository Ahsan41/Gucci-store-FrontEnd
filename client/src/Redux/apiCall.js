import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch,user)=>{
        dispatch(loginStart())
        try {
            const res = await axios.post("http://localhost:5000/auth/login" , user)
            dispatch(loginSuccess(res.data) )
            console.log(res.data);
        } catch (error) {
            dispatch(loginFailure())
        }
}