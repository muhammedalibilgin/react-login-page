import React from "react";

import users from "../user.json";

function userInterface() {
      return (
            <div>
                  <h1>hello users:</h1>
                  {users.map((x) => (
                        <h3 key={x.id}>{x.email}</h3>
                  ))}
            </div>
      );
}

export default userInterface;
