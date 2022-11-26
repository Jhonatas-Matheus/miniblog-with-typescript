import React from "react";
import { iStyledButtonProp, StyledButton } from "./style";

type Props = {
  children: React.ReactNode;
  mode: "main" | "dark" | "outline" | "danger";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ children, type, mode, disabled, onClick }: Props) => {
  return (
    <StyledButton
      mode={mode}
      type={type}
      disabled={disabled ? disabled : false}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
