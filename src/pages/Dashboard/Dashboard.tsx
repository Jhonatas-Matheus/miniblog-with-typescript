import React from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {
  StyledDashboardContainer,
  StyledDashboardContainerNoPosts,
  StyledPostHeader,
  StyledPostRow,
} from "./style";
import Login from "../Login/Login";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { Link } from "react-router-dom";
import { iPostDetailProps } from "../../components/PostDetail/PostDetail";
import { StyledLink } from "../../components/Link/style";
import Button from "../../components/Button/Button";
type Props = {};

const Dashboard = (props: Props) => {
  const { user, loading } = useContext(UserContext);
  const uid = user?.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  // console.log(loading);
  if (loading) {
    return (
      <StyledDashboardContainer>
        <p>Carregando...</p>
      </StyledDashboardContainer>
    );
  }
  return (
    <StyledDashboardContainer>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <StyledDashboardContainerNoPosts>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create">Criar primeiro post</Link>
        </StyledDashboardContainerNoPosts>
      ) : (
        <StyledPostHeader>
          <span>Título</span>
          <span>Ações</span>
        </StyledPostHeader>
      )}
      {posts?.map((post: iPostDetailProps) => (
        <StyledPostRow key={post.id}>
          <p>{post.title}</p>
          <div>
            <StyledLink to={`/posts/${post.id}`}>Ver</StyledLink>
            <StyledLink to={`/posts/edit/${post.id}`}>Editar</StyledLink>
            <Button
              mode="danger"
              type="button"
              onClick={() => deleteDocument(post.id)}
            >
              Excluir
            </Button>
          </div>
        </StyledPostRow>
      ))}
    </StyledDashboardContainer>
  );
};

export default Dashboard;
