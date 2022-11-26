import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { StyledEditPostContainer } from "./style";
import { UserContext } from "./../../context/UserContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

type Props = {};

const EditPost = (props: Props) => {
  let { id: postId } = useParams();
  const { document: post } = useFetchDocument("posts", postId ? postId : "");
  const [title, setTitle] = useState<string | undefined>("");
  const [image, setImage] = useState<string | URL | undefined>("");
  const [body, setBody] = useState<string | undefined>("");
  const [tags, setTags] = useState<undefined | string>("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setImage(post?.image);
      setBody(post?.body);
      const textTags: Array<string | undefined> | undefined | string =
        post?.tags?.join(", ");
      setTags(textTags);
    }
  }, [post]);
  // console.log(post?.image);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { updateDocument } = useUpdateDocument("posts");
  const handleSubmit = (e: any) => {
    e.preventDefaul();
    setFormError("");
    try {
      if (image instanceof URL) {
        new URL(image);
      }
    } catch (error) {
      setFormError("A imagem precisa ser uma URL");
    }
    const tagsArray = tags?.split(",").map((tag: string) => tag.trim());
    const data = {
      title,
      image,
      body,
      tags: tagsArray,
    };
    if (postId) {
      updateDocument(postId, data);
      // navigate("/dashboard");
    }
  };
  return (
    <StyledEditPostContainer>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere os dados do post</p>
          <Form onSubmit={(e: any)=>handleSubmit(e)}>
            <Input
              title="Título:"
              placeholder="Digite um novo título."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
            />
            <Input
              title="URL da imagem:"
              placeholder="Insira a url de uma nova imagem."
              name="image"
              value={image instanceof URL ? image.toString() : ""}
              onChange={(e) => setImage(e.target.value)}
            />
            <Button mode="main" type="submit">
              Editar Post
            </Button>
          </Form>
        </>
      )}
    </StyledEditPostContainer>
  );
};

export default EditPost;
