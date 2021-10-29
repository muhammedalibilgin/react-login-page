import { Redirect } from "react-router-dom";

import Navbar from "./navbar";
import MiniDrawer from "./MiniDrawer";

function UserInterface({ authorized }) {
      if (!authorized) {
            return <Redirect to="/#" />;
      }

      return (
            <div>
                  <MiniDrawer Navbar={Navbar} />
            </div>
      );
}

export default UserInterface;
