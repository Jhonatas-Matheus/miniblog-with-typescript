import React, { FormEventHandler } from "react";
import { EventHandler } from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { useAuthentication } from "./../../hooks/useAuthentication";
import { StyledContainerRegister } from "./style";
type Props = {};

const Register = (props: Props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    const user = {
      displayName,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }
    const res = await createUser(user);
    console.log(res);
  };
  return (
    <>
      <StyledContainerRegister>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <Form onSubmit={handleSubmit}>
          <Input
            title="Nome:"
            required
            type="text"
            name="displayName"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
          <Input
            title="Email:"
            required
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            title="Senha:"
            required
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            title="Confirmação de senha:"
            required
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {!loading && (
            <Button mode="main" type="submit">
              Cadastrar
            </Button>
          )}
          {loading && (
            <Button mode="main" type="button" disabled={true}>
              Aguarde
            </Button>
          )}
        </Form>
      </StyledContainerRegister>
    </>
  );
};

export default Register;
