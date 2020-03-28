import React from "react";
import userQuery from "../../queries/currentUser";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import userLogout from "../../mutations/logout";

export const Header = () => {
  const { data, loading, error } = useQuery(userQuery);
  const [logoutUser] = useMutation(userLogout, {
    refetchQueries: [{ query: userQuery }]
  });

  const onLogoutClick = () => {
    logoutUser();
  };

  const renderButtons = () => {
    if (loading) return <div />;
    if (!!data.user) {
      return (
        <li>
          <a onClick={() => onLogoutClick()}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};
