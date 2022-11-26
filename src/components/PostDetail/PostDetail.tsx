import React from "react";
import {
  StyledCreatedByContainer,
  StyledPostDetailContainer,
  StyledTagsContainer,
} from "./style";
export interface iPostDetailProps {
  id?: string;
  image?: string;
  title?: string;
  createdBy?: string;
  body?: string;
  tags?: string[];
}
type Props = {
  post: iPostDetailProps;
};

const PostDetail = ({ post }: Props) => {
  return (
    <StyledPostDetailContainer>
      <img src={post.image} alt="" />
      <h2>{post.title}</h2>
      <StyledCreatedByContainer>por: {post.createdBy}</StyledCreatedByContainer>
      <StyledTagsContainer>
        {post?.tags?.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </StyledTagsContainer>
    </StyledPostDetailContainer>
  );
};

export default PostDetail;
