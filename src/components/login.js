import { useState } from "react";
import * as React from "react";
import { userSchema } from "./validations/uservalidations";

import { useHistory } from "react-router-dom";

import users from "./user.json";

import Button from "@mui/material/Button";

import { TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

let currentAccount;

function Login({ authorized, setAuthorized }) {
      const [form, setForm] = useState({ email: "", password: "" });
      const [messa, setMessa] = useState("");
      const [isvalid, setIsValid] = useState(false);

      const inputLoginUsername = document.querySelector("#LoginEmail");
      const inputLoginPin = document.querySelector("#loginPassword");

      let history = useHistory();

      const validationUser = async (e) => {
            e.preventDefault();

            const isvalid = await setIsValid(userSchema.isValid(form));
            console.log(isvalid);

            userSchema.validate(form).catch((err) => {
                  console.log(err.errors);
            });

            userSchema.validate(form).catch((err) => {
                  console.log(err.errors);
                  return setMessa(err.errors);
            });
      };

      // const isvalid = userSchema.isValid(form);
      // console.log(isvalid);
      // console.log(form);

      const handleSubmit = (e) => {
            e.preventDefault();

            currentAccount = users.find((acc) => acc.email === inputLoginUsername.value);

            if (currentAccount?.password === inputLoginPin.value) {
                  e.preventDefault();

                  history.push("/userInterface");
                  setAuthorized(true);
            } else {
                  // alert("E-mail ya da Şifreyi Hatalı Girdiniz!");
            }
      };

      return (
            <form
                  onSubmit={function (e) {
                        handleSubmit(e);
                        validationUser(e);
                  }}
                  className="loginCont"
            >
                  <img src="https://helpimal.com/assets/favicon.png" alt="" width="80" />

                  <Avatar sx={{ m: 1, bgcolor: "blueviolet" }}>
                        <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h6">
                        Log In
                  </Typography>
                  <TextField
                        onChange={(x) => setForm({ ...form, [x.target.name]: x.target.value })}
                        id="LoginEmail"
                        fullWidth
                        autoFocus
                        margin="normal"
                        type="email"
                        name="email"
                        label="Email Adress*"
                        variant="outlined"
                  />
                  <TextField
                        onChange={(x) => setForm({ ...form, [x.target.name]: x.target.value })}
                        id="loginPassword"
                        fullWidth
                        margin="normal"
                        type="password"
                        name="password"
                        label="Password*"
                        variant="outlined"
                  />
                  {<div className="error">{messa}</div>}
                  <Button type="submit" id="loginButton" variant="contained">
                        LOGIN
                  </Button>

                  <Typography sx={{ mt: 10 }} variant="body2">
                        {"Copyright © "} Helpimal.com {new Date().getFullYear()}{" "}
                  </Typography>
            </form>
      );
}

export default Login;
