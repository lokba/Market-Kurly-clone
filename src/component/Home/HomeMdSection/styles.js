import styled from "styled-components";

export const HomeMdBox = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;

    .title{
        padding:79px 0 35px;
        font-size:28px;
        font-weight:700;
        text-align:center;
    }

    .btn{
        width:516px;
        height:56px;
    }

    .btn button{
        width:100%;
        height:100%;
        border:1px solid #e3e3e3;
        background-color:white;
        font-size:16px;
        border-radius: 3px;
        cursor:pointer;
    }

    .list_category{
        width:1050px;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        margin-bottom:20px;
    }
    .list_category li{
        display:flex;
        margin-right:10px;
        margin-bottom:15px;
    }

    .menu{
        padding:0 20px;
        /* display:inline-block; */
        border-radius: 20px;
        height:40px;
        background-color:#f7f7f7;
        font-size:14px;
        line-height: 18px;
        display:flex;
        align-items: center;
    }

    .menu:hover{
        /* color:white; */
        color:#5f0080;
        /* background-color:#5f0080; */
        font-weight:700;
    }

    .menu_on{
        color:white;
        background-color:#5f0080;
        font-weight:700;
    }
`;
