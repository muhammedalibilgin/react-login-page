import { useState } from "react";

import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Login({ addLoginForm }) {
      const [form, setForm] = useState({ email: "", password: "" });

      const handleSubmit = (e) => {
            console.log("form=>", form);
            addLoginForm(form);
      };

      return (
            <form className="loginCont">
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
                  <Button onClick={(e) => handleSubmit()} id="loginButton" variant="contained">
                        LOGIN
                  </Button>

                  <Typography sx={{ mt: 10 }} variant="body2">
                        {"Copyright © "} Helpimal.com {new Date().getFullYear()}{" "}
                  </Typography>
            </form>
      );
}

export default Login;
