import React, { useState } from "react";

export const AuthForm = props => {
  return (
    <div className="row">
      <form className="col s4">
        <div className="input-field">
          <input
            placeholder="Email"
            value={props.email}
            onChange={e => props.setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
          />
        </div>
        <button onClick={props.submit} className="btn">
          submit
        </button>
      </form>
    </div>
  );
};
