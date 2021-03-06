import React from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
    const { signInWithEmail, authError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmail(data.email, data.password, history, location)
    };

    return (
        <Box>
            <Container>
                <Typography variant="h4" sx={{ my: 2 }}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        id="standard-basic-1"
                        label="Email"
                        type="email"
                        variant="standard"
                        {...register("email", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.email?.type === 'required' && "**Email is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-2"
                        label="password"
                        type="password"
                        variant="standard"
                        {...register("password", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.password?.type === 'required' && "** Password is required"}
                        </p>
                    }
                    <Button type="submit" variant="contained" sx={{ width: "50%" }}>Login</Button>
                </form>
                {
                    authError && <h4 style={{ color: 'red' }}>{authError.split(':')[1]}</h4>
                }
                <h4>Not registered? Please <Link to="/register">Register</Link></h4>
            </Container>

        </Box>
    );
}

export default Login;