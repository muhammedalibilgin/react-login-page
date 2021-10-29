import React from "react";

function error404() {
      return (
            <div>
                  <h1>Sayfa Bulunamadı!</h1>
                  <br />
                  <a className="error-a" href="/">
                        Anasayfa
                  </a>
            </div>
      );
}

export default error404;
