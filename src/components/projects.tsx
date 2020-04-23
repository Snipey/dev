import styled from "styled-components";


// Project Components
export const ProjectsContainer = styled.div`
	margin-top: 70px;
    position: relative;
    color: #666;
    font-size: 36px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
	margin-right: 2em;
	margin-left: 2em;
	padding: 5px;
	p {
		text-align: center;
		margin-bottom: 75px;
	}
	div.projects {
		display: flex;
		justify-content: center;
		
		width: 100%;
		@media only screen and (max-width: 1500px) {
			flex-direction: column;
		}
	}
	margin-bottom: 2em;
`;

export const ProjectsItem = styled.div`
	border-radius: 10px;
	background: #1F1F1F;
	margin-right: 10px;
	display: flex;
	width: 30%;
	flex-direction: column;
	align-items: center;
	img.notify {
		background: #3C60FF;
	}
	&:last-child {
		margin-right: 0px;
	}
	box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.1);
	@media only screen and (max-width: 850px) {
		margin-top: 1.6em;
		width: 100%;
	}
	@media only screen and (min-width: 850px) {
		margin-top: 2em;
		width: 100%;
	}
	@media only screen and (min-width: 1000px) {

	}
	@media only screen and (min-width: 1501px) {
		width: 30%;
	}
`;

export const ProjectsImage = styled.img`
	border: solid 3px #1C1C1C;
	border-radius: 100%;
	position: relative;
	background: #222;
	width: 100px;
	margin-top: -45px;
	margin-bottom: 7px;
	&:hover {
		border: solid 3px #666;
	}
`;

export const ProjectsTitle = styled.div`
	font-size: 23px;
	color: #FFF;
`;

export const ProjectsDescription = styled.div`
	font-size: 16px;
	font-weight: normal;
	padding: 10px;
	color: #666;
`;






