import styled from "styled-components";

export const StyledPostDetailContainer = styled.div`
  margin-bottom: 2em;
  img {
    min-width: 600px;
    max-width: 600px;
  }
  h2 {
    margin-bottom: 0.4em;
  }
`;
export const StyledTagsContainer = styled.div`
  margin-bottom: 1.2em;
  display: flex;
  p {
    margin-right: 0.5em;
  }
  span {
    font-weight: bold;
  }
`;
export const StyledCreatedByContainer = styled.p`
  font-style: italic;
  color: #444;
  font-size: 0.8em;
  margin-bottom: 1em;
`;
