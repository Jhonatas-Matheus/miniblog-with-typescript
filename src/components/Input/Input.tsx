import React from "react";
import { Node } from "typescript";
import { StyledInput } from "./style";

type Props = {
  children?: React.ReactNode;
  title: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  onChange?: (e: any) => void;
  value?: string;
  name: string;
};

const Input = ({
  children,
  title,
  placeholder,
  type,
  required,
  onChange,
  value,
  name,
}: Props) => {
  return (
    <StyledInput>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        name={name}
      />
    </StyledInput>
  );
};

export default Input;
