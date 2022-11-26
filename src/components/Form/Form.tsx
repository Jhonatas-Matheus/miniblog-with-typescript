import React from "react";
import { StyledForm } from "./style";

type Props = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({ children, onSubmit }: Props) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
