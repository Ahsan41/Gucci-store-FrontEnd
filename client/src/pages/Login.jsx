import styled from "styled-components";
import {mobile} from "../responsive.js";
import { useState } from "react";
import { login } from "../Redux/apiCall.js";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice.js";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "73%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled{
    color:green;  
    cursor:not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
 color:red
`

const Login = () => {
  const [username,setusername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const {isfetching , error} = useSelector((state)=> state.user)

  const handlCLick = async (e)=>{
    e.preventDefault();
    dispatch(loginStart())
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { username, password })
      dispatch(loginSuccess(res.data))
     console.log("helooo", res.data)
    } catch (error) {
      console.log(error);
      dispatch(loginFailure())
      console.log(error);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="name" 
          onChange={(e)=>setusername(e.target.value)}
          />
          <Input placeholder="password" 
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          />
          <Button onClick={handlCLick} disabled={isfetching}>LOGIN</Button>
          {error && <Error>Something went Wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;