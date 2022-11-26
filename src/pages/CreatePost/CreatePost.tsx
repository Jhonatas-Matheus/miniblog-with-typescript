import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { UserContext } from "../../context/UserContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { StyledCreatePostContainer } from "./style";

type Props = {};

const CreatePost = (props: Props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<any>([]);
  const [formError, setFormError] = useState("");
  const { user } = useContext(UserContext);
  const { insertDocument, loading, error } = useInsertDocument("posts");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormError("");
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }
    const tagsArray = tags
      .split(",")
      .map((tag: string) => tag.trim().toLowerCase());
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }
    console.log(tagsArray);
    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user?.uid,
      createdBy: user?.displayName,
    });
    if (formError) return;
    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user?.uid,
      createdBy: user?.displayName,
    });
    navigate("/");
  };
  return (
    <StyledCreatePostContainer>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhar o seu conhecimento!</p>
      <Form onSubmit={handleSubmit}>
        <Input
          title="Título:"
          name="text"
          type="text"
          required
          placeholder="Pense num bom título..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          title="URL da imagem:"
          type="text"
          name="image"
          required
          placeholder="Insira uma imagem que representa seu post"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <Input
          title="Conteúdo:"
          name="body"
          required
          placeholder="Insira o conteúdo do post"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <Input
          title="Tags:"
          type="text"
          name="tags"
          placeholder="Insira as tags separadas por vírgula"
          onChange={(e) => setTags(e.target.value)}
          value={tags}
        />
        {!loading && (
          <Button mode="main" type="submit">
            Criar post!
          </Button>
        )}
        {loading && (
          <Button mode="main" type="submit" disabled>
            Carregando...
          </Button>
        )}
      </Form>
    </StyledCreatePostContainer>
  );
};

export default CreatePost;
