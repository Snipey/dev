import styled from "styled-components";

export const SocialContainer = styled.ul`
	padding-top: 20px;
	text-align: center;
	padding-inline-start: 0px;
	li {
		border-radius: 100%;
		background: #232323;
		padding: 15px;
		vertical-align: middle;
	}
	a {
		margin-right: 15px;
		&:last-child {
			margin-right: 0px;
		}
	}
`;
export const SocialItem = styled.li`
	zoom: 1;
	display: inline-block;
	margin-right: 15px;
	&:last-child {
		margin-right: 0px;
	}
	width: 20px;
	height: 20px;
	&:hover {
		background: #FFFFFF;
		color: #0D0D0D;
	}

`;