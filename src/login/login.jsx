import React from "react";
import { Unauthenticated } from "./unauthenticated";
// import { Authenticated } from "./authenticated";

import { AuthState } from "./authState";


export function Login({userName, authState, onAuthChange}) {
  return (
    <main class="container-fluid bg-secondary text-center">
      <div>
        <h2>Welcome to Make a Match</h2>
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
