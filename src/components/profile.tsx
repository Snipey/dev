import styled from "styled-components";


// Profile Components
export const ProfileSubItem = styled.p`
  display: flex;
  align-items: stretch; /* Default */
  justify-content: center;
  width: 100%;
  margin: 0;
  color: rgb(138, 138, 138);
  padding: 0;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
`;

export const ProfileItem = styled.p`
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const ProfileImage = styled.img`
  align-items: center;
  border-radius: 100%;
  border: solid 7px #FFF;
  width: 165px;
  height: 165px;
  background: #FFFFFF;
  margin-bottom: 10px;
  box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.6);
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 2em;
  @media only screen and (min-width: 1500px) {
    padding-top: 222px;
	}
  background-position: center; 
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/bg.jpg");
  &::after {
    display: block;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #0D0D0D 100%);
    margin-top: -270px;
    height: 100px;
    width: 100%;
    content: '';
  }
`;