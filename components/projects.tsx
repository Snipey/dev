import styled from "styled-components";


// Project Components
export const ProjectsContainer = styled.div`

    margin-top: 270px;
	position: relative;
	color: #666;
	font-size: 36px;
	font-weight: bold;
	font-family: 'Poppins', sans-serif;
	padding: 5px;
	p {
		text-align: center;
		width: 100%;
	}
	div.projects {
		display: flex;
		flex:1 1 auto;
		margin-right: 24px;
	}
`;

export const ProjectsItem = styled.div`
	border-radius: 10px;
	background: blue;
	width: 435px;
	height: 275px;
	margin-bottom: 20px;
`;