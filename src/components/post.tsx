import styled from "styled-components";

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
  height: 100%;
`;
export const PostImage = styled.img`
 width: 100%;
 height: 470px;
`;

export const PostHeader = styled.div`
 width: 80%;
 margin-bottom: 35px;
 border-size: 2px;
 border-bottom: solid;
 border-color: rgb(150,150,150, 0.7);
 h1 {
   padding-left: 15px;
 }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #0F0F0F;
  margin-right: 15%;
  margin-left: 15%;
  padding-left: 100px;
  padding-right: 100px;
  color: white;
  font-family: 'Jost';
  font-size: 18px;
  blockquote {
    display: block;
    border-size: 2px;
    border-style: hidden hidden hidden solid;
    padding-left: 15px;
    border-color: lightblue;
  }
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(29,29,29, 0.5);
  }
  a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.hover};
    }
  }
`;