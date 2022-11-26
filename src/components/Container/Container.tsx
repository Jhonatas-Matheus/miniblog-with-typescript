import React from "react";
import { StyledContainer } from "./style";

type Props = {
  children: React.ReactNode;
  mode?: string;
};

const Container = ({ mode, children }: Props) => {
  return <StyledContainer mode={mode}>{children}</StyledContainer>;
};

export default Container;
