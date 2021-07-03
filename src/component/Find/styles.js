import styled from "styled-components";

export const FindBox = styled.div`
    width:100%;

    .findForm{
        width:340px;
        margin:0 auto;
        padding-top:90px;
        padding-bottom:120px;
    }


    .find_tit{
        font-size:20px;
        line-height:20px;
        text-align:center;
        font-weight :800;
        padding-bottom:36px;
    }

    .write_form{
        display:flex;
        flex-direction:column;
    }
    .form_tit{
        margin-bottom:7px;
        font-size:12px;
        line-height: 18px;
        font-weight:700;
    }

    .upper{
        margin-top:11px;
    }

    .write_form>input{
        height:54px;
        padding:0 19px;
        border:1px solid #ccc;
        border-radius:3px;
        font-size:14px;
        line-height:20px;
        outline:none;
        background-color:#fff;
    }


    .btnBox{
        display:flex;
        flex-direction: column;   
        margin-top:30px;
    }
    .btnBox>a{
        display:block;
    }

    .btnBox span{
        display:block;
        border:1px solid #5f0081;
        height:54px;
        border-radius:3px;
        text-align:center;
        font-size:16px;
        font-weight:500;
        line-height: 51px;
        cursor:pointer;
        
    }

    .loginBtn{
        background-color:#5f0080;
        color:white;
        margin-bottom:10px;
    }

`;
