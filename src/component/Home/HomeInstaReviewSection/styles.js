import styled from "styled-components";

export const HomeInstaReviewBox = styled.div`

    .title{
        padding:79px 0 35px;
        font-size:28px;
        font-weight:700;
        text-align:center;
    }
    
    .items_list{
        display:flex;
        justify-content: center;
    }

    .item{
        width:175px;
        height:175px;
    }

    .item img{
        width:100%;
        height:100%;
        cursor: pointer;
    }

    .subinfo{
        margin:39px 0 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight:700;
        font-size:16px;
        line-height:29px;
    }

    .question{
        font-weight:400;
        color:#999;
    }

    .comment{
        cursor:pointer;
    }
`;