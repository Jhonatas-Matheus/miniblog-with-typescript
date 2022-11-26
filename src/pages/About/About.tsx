import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React JS no front-end e
        Firebase no back-en.
      </p>
      <Link to="/posts/create">Criar post</Link>
    </div>
  );
};

export default About;
