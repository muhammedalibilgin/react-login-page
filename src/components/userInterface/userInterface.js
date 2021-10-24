import React from "react";

import Navbar from "./navbar";
// import Sidebar from "./sidebar";
import MiniDrawer from "./MiniDrawer";
// import { color } from "@mui/system";

function userInterface() {
      return (
            <div>
                  <MiniDrawer Navbar={Navbar} />
            </div>
      );
}

export default userInterface;
