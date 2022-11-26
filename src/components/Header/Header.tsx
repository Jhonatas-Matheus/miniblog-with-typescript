import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink, StyleedHeaderContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { signOut } from "firebase/auth";
import Button from "../Button/Button";
type Props = {};

const Header = (props: Props) => {
  const { user, auth } = useContext(UserContext);
  return (
    <StyleedHeaderContainer>
      <nav>
        <StyledNavLink to="/" end>
          Mini <span>Blog</span>
        </StyledNavLink>
        <ul>
          <li>
            <StyledNavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "true" : "false")}
            >
              Home
            </StyledNavLink>
          </li>
          {!user && (
            <>
              <li>
                <StyledNavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "true" : "false")}
                >
                  Entrar
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "true" : "false")}
                >
                  Cadastrar
                </StyledNavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <StyledNavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? "true" : "false")}
                >
                  Novo post
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? "true" : "false")}
                >
                  Dashboard
                </StyledNavLink>
              </li>
            </>
          )}
          <li>
            <StyledNavLink
              to="/about"
              className={({ isActive }) => (isActive ? "true" : "false")}
            >
              Sobre
            </StyledNavLink>
          </li>
          {user && (
            <li>
              <button onClick={() => signOut(auth)}>Sair</button>
            </li>
          )}
        </ul>
      </nav>
    </StyleedHeaderContainer>
  );
};

export default Header;
