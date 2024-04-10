import React from "react";

import Button from "react-bootstrap/Button";
import { MessageDialog } from "./messageDialog";
import e from "express";

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const userName = document.querySelector("#userName")?.value;
    const password = document.querySelector("#userPassword")?.value;
    const response = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      localStorage.setItem("userName", userName);
      window.location.href = "play.html";
    } else {
      const body = await response.json();
      const modalEl = document.querySelector("#msgModal");
      modalEl.querySelector(".modal-body").textContent = `Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }

  return (
    <>
      {/* Displayed when needing authentication */}

      <div id="loginControls" style="display: none">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input
            className="form-control"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="userPassword"
            placeholder="password"
          />
        </div>
        <Button variant="primary" onClick={() => loginUser()}>
          Login
        </Button>
        <Button variant="primary" onClick={() => createUser()}>
          Create
        </Button>
      </div>

      {
        // Error dialog
      }
      
      <MessageDialog message={displayError} onHide={() = setDisplayError(null)}/>
    </>
  );
}
