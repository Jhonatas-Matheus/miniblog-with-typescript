import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { StyledContainerHome, StyledNoPostList } from "./style";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PostDetail, {
  iPostDetailProps,
} from "../../components/PostDetail/PostDetail";

type Props = {};

const Home = (props: Props) => {
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };
  console.log(loading);
  return (
    <StyledContainerHome>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <Input
          title=""
          type="text"
          placeholder="Ou busque por tags..."
          name="searchtags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button mode="dark" type="submit">
          Pesquisar
        </Button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <StyledNoPostList>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/crate">Criar primeiro post</Link>
          </StyledNoPostList>
        )}
        {posts &&
          posts.map((post: iPostDetailProps) => (
            <PostDetail key={post.id} post={post} />
          ))}
      </div>
    </StyledContainerHome>
  );
};

export default Home;
