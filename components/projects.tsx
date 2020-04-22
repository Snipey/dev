import styled from "styled-components";


// Project Components
export const ProjectsContainer = styled.div`
	margin-top: 270px;
    position: relative;
    color: #666;
    font-size: 36px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    flex: auto;
    flex-direction: row;
	padding: 5px;
	p {
		text-align: center;
		width: 100%;
		margin-bottom: 75px;
	}
	div.projects {
		display: flex;
	}
	margin-bottom: 2em;
`;

export const ProjectsItem = styled.div`
	border-radius: 10px;
	background: #1F1F1F;
	width: 435px;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:last-child {
		margin-right: 0px;
	}
	box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.1);
`;

export const ProjectsImage = styled.img`
	border: solid 3px #1C1C1C;
	border-radius: 100%;
	position: relative;
	width: 100px;
	margin-top: -60px;
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






