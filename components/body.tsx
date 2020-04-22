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
  justify-items: center;
  @media only screen and (min-width: 850px) {

  }
  @media only screen and (min-width: 1000px) {

  }
  @media only screen and (min-width: 1300px) {

  }

  @media only screen and (min-width: 1500px) {

  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;