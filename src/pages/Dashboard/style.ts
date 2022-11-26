import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
  }
  p {
    color: #aaa;
    margin-bottom: 1em;
  }
`;
export const StyledDashboardContainerNoPosts = styled.div`
  text-align: center;
  p {
    margin-bottom: 1.5em;
  }
  a {
    padding: 10px 25px;
  }
`;
export const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  width: 80%;
  padding: 10px;
`;
export const StyledPostRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  width: 80%;
  padding: 10px;
  p {
    color: #000;
  }

  div {
    button,
    a {
      margin: 0 5px;
      height: 30px;
      width: 100px;
      font-size: 0.7em;
      &:hover {
        color: #fff;
      }
    }
  }
`;
