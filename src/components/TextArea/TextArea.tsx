import React from "react";
import { StyledTextArea } from "./style";

type Props = {
  children: React.ReactNode;
};

const TextArea = ({ children }: Props) => {
  return <StyledTextArea>{children}</StyledTextArea>;
};

export default TextArea;
