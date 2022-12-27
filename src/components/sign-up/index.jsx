import React, { useEffect, useState } from "react";
import * as yup from "yup";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./signup.css";
const SignUpPage = () => {
  // Yup validation schema
  const validationSchema = yup.object({
    username: yup
      .string("Enter your Username")
      .required("Username is required"),
    surname: yup
      .string("Enter your Surname")
      .required("Surname is required")
      .min(2, "Surname should be of minimum 2 characters length"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    country: yup
      .string("Enter your Country")
      .required("Country is required")
      .max(30, "Country should be of 30 characters length"),
    city: yup
      .string("Enter your City")
      .required("City is required")
      .max(30, "City should be of 30 characters length"),
  });
  // Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      surname: "",
      password: "",
      country: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // Fetch Countries
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    (async () => {
      const req = await fetch("https://restcountries.com/v2/all");
      const resp = await req.json();
      setCountries(resp);
    })();
  }, []);
  // console.log(countries);
  // Handle Sugn UP (Added input data  in LocalStorage)
  const handleSignUp = () => {
    console.log("SignUp", formik.values);
  };
  return (
    <div id="signUpPage">
      <form>
        <div
          className="name_surname"
          style={{ display: "flex", columnGap: "20px" }}
        >
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
            id="surname"
            name="surname"
            label="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
        </div>

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

        <TextField
          fullWidth
          id="repassword"
          name="Re-password"
          label="Re-password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <FormControl fullWidth>
          <InputLabel id="country">Select Country</InputLabel>
          <Select
            labelId="country"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
          >
            {countries.map((country, i) => (
              <MenuItem key={i} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="city">Select City</InputLabel>
          <Select
            labelId="city"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          >
            {countries.map((country, i) => (
              <MenuItem key={i} value={country.capital}>
                {country.capital}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          fullWidth
          color="warning"
          variant="containeds"
          type="submit"
          onClick={() => handleSignUp()}
        >
          Sign Up
        </Button>
      </form>
      <Link to="/login" variant="body2">
        Do you have a Accaunt?
      </Link>
    </div>
  );
};

export default SignUpPage;
