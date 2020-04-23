import styled from "styled-components";

export const IndexBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 100;
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