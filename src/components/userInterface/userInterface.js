import React from "react";

import Navbar from "./navbar";
import MiniDrawer from "./MiniDrawer";

function userInterface() {
      return (
            <div>
                  <MiniDrawer Navbar={Navbar} />
            </div>
      );
}

export default userInterface;
