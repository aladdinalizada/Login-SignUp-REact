import React from "react";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
const LoginPage = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your Username")
      .email("Username a valid email")
      .required("Username is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
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
  const handleLogin = () => {
    console.log("Login", formik.values);
  };
  return (
    <div className="loginPage">
      <form onSubmit={formik.handleSubmit}>
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
          type="submit"
          onClick={() => handleLogin()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
