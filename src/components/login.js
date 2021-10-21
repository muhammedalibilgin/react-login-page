import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@mui/material/Avatar";

function Login() {
      return (
            <form className="loginCont">
                  <Avatar sx={{ m: 1, bgcolor: "blueviolet" }}>
                        <LockOutlinedIcon />
                  </Avatar>

                  <Typography component="h1" variant="h6">
                        Log In
                  </Typography>

                  <TextField id="LoginEmail" fullWidth autoFocus margin="normal" type="email" label="Email Adress*" variant="outlined" />

                  <TextField id="loginPassword" fullWidth margin="normal" type="password" label="Password*" variant="outlined" />

                  <Button id="loginButton" variant="contained">
                        LOGIN
                  </Button>

                  <Typography sx={{ mt: 10 }} variant="body2">
                        {"Copyright © "} Helpimal.com {new Date().getFullYear()}{" "}
                  </Typography>
            </form>
      );
}

export default Login;
