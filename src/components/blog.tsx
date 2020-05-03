import styled from "styled-components";

export const BlogBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  
  @media only screen and (max-width: 850px) {
    grid-template-columns: 100%;
	}
	@media only screen and (min-width: 850px) {
    grid-template-columns: 100%;
	}
	@media only screen and (min-width: 1000px) {
    grid-template-columns: 50% 50%;
	}
	@media only screen and (min-width: 1501px) {
    grid-template-columns: 33% 33% 33%;
	}
  grid-template-rows: auto;
  margin-right: 10%;
  margin-left: 10%;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;

export const BlogTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 75px;
  font-weight: bold;
  font-family: Poppins;
  margin-bottom: 2.1em;
`;
export const BlogPost = styled.div`
  display: flex;
  border-radius: 10px;
  margin-top: 10px;
  margin: 25px;
  background-color: ${(props) => props.theme.color};
  flex-direction: column;
  align-items:center;
  flex: 1;
  text-align: center;
  color: ${(props) => props.theme.text};
  font-family: Poppins;
  &:hover {
    background-color: ${(props) => props.theme.darker};
  }
  img {
    width: 100%;
    height: 275px;
    border-radius:10px 10px 0px 0px;
  }
  h3 {
    font-size: 22px;
  }
  p {
    font-family: Noto Mono;
    font-size: 1.1em;
    padding: 5px;
  }
  box-shadow: 3px 3px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const BlogWrapper = styled.div`
  height: 522px;
  @media only screen and (max-width: 850px) {
    margin-bottom: -405px;
	}
	@media only screen and (min-width: 850px) {
    margin-bottom: -405px;
	}
	@media only screen and (min-width: 1000px) {
    margin-bottom: -305px;
	}
	@media only screen and (min-width: 1501px) {
    margin-bottom: -205px;
	}
  
  background-position: center; 
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/bg.jpg");
  &::after {
    display: block;
    margin-top: 430px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #0D0D0D 100%);
    height: 100px;
    width: 100%;
    content: '';
  }
`;