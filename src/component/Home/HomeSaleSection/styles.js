import styled from "styled-components";

export const HomeSaleBox = styled.div`
    background :#f7f7f7;

    .title{
        padding:79px 0 35px;
        font-size:28px;
        font-weight:700;
        text-align:center;
        cursor:pointer;
    }

    .items_list{
        display:flex;
        justify-content: center;
        margin-left:18px;
    }

    .item{
        width:338px;
        height:538px;
        margin-right:18px;
        text-align:center;
        overflow: hidden;
    }
    .item img{
        width:338px;
        height:338px;
        cursor: pointer;
    }
    .item img:hover{
        transform: scale(1.02);
        transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    }
    .title{
        line-height:28px;
        cursor:pointer;
        font-size:18px;
        margin:8px 0;
        font-weight:700;
    }

    .sub{
        font-size:16px;
        cursor: pointer;
        color:#999999;
    }


`;
