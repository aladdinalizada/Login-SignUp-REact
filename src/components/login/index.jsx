import React from "react";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Link, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  // Yup validation schema
  const validationSchema = yup.object({
    username: yup
      .string("Enter your Username")
      .min(2, "Username should be of minimum 2 characters length")
      .required("Username is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  // Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // Handle login (Check if user exists in LocalStorage)
  const handleLogin = () => {
    console.log("Login", formik.values);
  };
  return (
    <div className="loginPage">
      <form onSubmit={formik.handleSubmit}>
        <h1>Login </h1>

        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="button"
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </form>
      <br />
      <NavLink
        to="/signup"
        style={{ textDecoration: "none", color: "#2196f3" }}
      >
        I don't have a account
      </NavLink>
    </div>
  );
};

export default LoginPage;
