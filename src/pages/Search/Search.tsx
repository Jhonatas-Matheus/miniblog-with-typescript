import React from "react";
import { Link } from "react-router-dom";
import PostDetail, {
  iPostDetailProps,
} from "../../components/PostDetail/PostDetail";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { StyledContainerSearch } from "./style";

type Props = {};

const Search = (props: Props) => {
  const query = useQuery();
  const search = query.get("q"); // O get é uma função proveniente do URLSearchParams

  const { documents: posts } = useFetchDocuments("posts", search);
  console.log(posts);
  return (
    <StyledContainerSearch>
      <h1>Resultados encontrados para: {search}</h1>
      <div>
        {posts && (posts.length === 0 || posts === null) && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/">Voltar</Link>
          </>
        )}
        {posts &&
          posts.map((post: iPostDetailProps) => (
            <PostDetail key={post.id} post={post} />
          ))}
      </div>
    </StyledContainerSearch>
  );
};

export default Search;
