import React, { useState } from "react";
import { AuthForm } from "../components/authForm";
import login from "../../mutations/login";
import { useMutation } from "@apollo/react-hooks";
import userQuery from "../../queries/currentUser";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { error }] = useMutation(login,{
    refetchQueries: [{ query: userQuery }]
  });

  function onSubmit() {
    loginUser({
      variables: {
        email: email,
        password: password
      }
    });
  }

  return (
    <div>
      <h3>Login</h3>
      <div className="row">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
          className="col s4"
        >
          <div className="input-field">
            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="btn">submit</button>
        </form>
      </div>
      {!!error &&
        error.graphQLErrors.map(e => {
          return (
            <div className="errors">
              <div>{e.message}</div>
            </div>
          );
        })}
    </div>
  );
};
export default LoginForm;
