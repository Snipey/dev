import styled from "styled-components";

export const IndexBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const IndexContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;