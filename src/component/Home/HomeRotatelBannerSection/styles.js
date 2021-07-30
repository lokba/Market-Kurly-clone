import styled from "styled-components";

export const HomeRotateBannerBox = styled.div`
	width:100%;
	overflow :hidden;
	padding:0 10px;
	cursor:pointer;

	.imgBox{
		width:100%;
		display:flex;
		justify-content:center;
		overflow:hidden;
		position:relative;

		.imgItem{
			display:flex;
			animation: fade-in 1s;
		}

		.imgDelete{
			display:none;
		}

		@keyframes fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		.bnr_ctrl{
		display:flex;
		position:absolute;
		top:43%;

		.bnr_btn{
			z-index:100;
			border-radius:50%;
			width:60px;
			height:60px;
			background: gray;
			opacity:0.2;
			display:flex;
			justify-content: center;
			align-items: center;
			font-size:40px;
			font-weight:600;
			color:white;
			transition : opacity 0.4s;
		}

		.prev{
			margin-right:1200px;
			padding-top:6px;
			padding-right:4px;
		}

		.next{
			padding-top:6px;
			padding-left:4px;
		}
	}
	
	}
`;
