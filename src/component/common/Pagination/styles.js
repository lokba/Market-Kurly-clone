import styled from "styled-components";


export const PageBtnBox = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom:120px;
    margin-top:38px;
    font-size:12px;
    font-weight:700;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width:34px;
        height:34px;
        border:1px solid #ddd;
        cursor:pointer;
    }

    div:hover{
        background-color:#f7f7f7;
    }

    .pageBtnOn{
        color:#5f0080;
        font-weight: 800;
    }
    .btntxt{
        padding-top:3px;
    }
`;
