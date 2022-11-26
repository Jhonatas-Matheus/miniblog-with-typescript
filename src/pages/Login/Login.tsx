import React from "react";
import { useState, useEffect, useContext } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { useAuthentication } from "../../hooks/useAuthentication";
import { StyledContainerLogin } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../../context/UserContext";
import { StyledDashboardContainer } from "../Dashboard/style";

type Props = {};

const Login = (props: Props) => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, loading: pageLoading } = useContext(UserContext);
  const {
    login,
    error: authError,
    loading: loginLoading,
  } = useAuthentication();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    const user = {
      email,
      password,
    };
    const res = await login(user);
  };
  if (pageLoading) {
    <StyledDashboardContainer>
      <p>Carregando...</p>
    </StyledDashboardContainer>;
  }
  if (user) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <StyledContainerLogin>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <Form onSubmit={handleSubmit}>
        <Input
          title="Email:"
          type="email"
          placeholder="Digite seu e-mail."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <Input
          title="Password"
          placeholder="Digite sua senha."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="Pssword"
        />
        {loginLoading && (
          <Button mode="main" type="submit" disabled>
            Carregando...
          </Button>
        )}
        {!loginLoading && (
          <Button mode="main" type="submit">
            Entrar
          </Button>
        )}
      </Form>
    </StyledContainerLogin>
  );
};

export default Login;
