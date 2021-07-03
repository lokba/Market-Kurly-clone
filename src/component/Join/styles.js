import styled from "styled-components";

export const JoinBox = styled.div`
    width:100%;

    .registerForm{
        width:640px;
        margin:0 auto;
        padding-top:64px;
        padding-bottom:120px;
    }

    .register_tit{
        font-size:30px;
        line-height:20px;
        text-align:center;
        font-weight :900;
        padding-bottom:36px;
    }
    .necessary{
        text-align:right;
        font-size:12px;
        color:#666;
        line-height:17px;
        padding-bottom:10px;
    }
    .must_input{
        color:#ee6a7b;
        padding-right:2px;
    }
    .form_box{
        border-top: 2px solid #333;
    }

    .write_form{
        display:flex;
        flex-direction:column;
    }

    .form_list{
        display:flex;
        width:100%;
        font-size:14px;
        line-height: 20px;
        height:64px;
    }

    .form_list_title{
        width:159px;
        padding:29px 0 0 20px;
        font-weight:700;
    }

    .form_list>input{
        width:332px;
        height:44px;
        border:1px solid #ccc;
        border-radius:3px;
        background:#fff;
        outline:none;
        padding:0 14px;
        margin-top:19px;
        margin-bottom:10px;
    }

    .overlap_btn{
        width:120px;
        margin-left:10px;
        color:#5f0080;
        background:#fff;
        border:1px solid #5f0080;
        border-radius:3px;
        height:44px;
        display:flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        margin-top:19px;
    }

    #verify{
        border:1px solid #ddd;
        background-color: #fff;
        color:#ddd;
    }

    #addrInfo{
        height:102px;
    }

    .addr{
        width:332px;
        height:44px;
        border:1px solid #5f0080;
        color:#5f0080;
        border-radius:3px;
        background:#fff;
        outline:none;
        padding:0 14px;
        margin-top:19px;
        margin-bottom:10px;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .addr_search>span{
        font-size:12px;
        color:#666;
        line-height:18px;
    }

    .gender_item{
        width:332px;
        height:44px;
        margin-top:19px;
        margin-bottom:10px;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    .gender_item>li{
        display:flex;
        align-items: center;
    }
    .choiceBox{
        display: inline-block;
        width:24px;
        height:24px;
        border:1px solid #ddd;
        background-color:#fff;
        border-radius:100%;
        margin-right:12px;
        cursor:pointer;
        position:relative;
    }
    .checked{
        background-color:#5f0080;
    }

    .checked::after{
        content:"";
        position:absolute;
        left:50%;
        top:50%;
        width:10px;
        height:10px;
        margin:-5px 0 0 -5px;
        border-radius:100%;
        background-color:#fff;
    }

    .birth_date{
        width:332px;
        height:44px;
        border:1px solid #ccc;
        border-radius:3px;
        background:#fff;
        outline:none;
        padding:0 14px;
        margin-top:19px;
        margin-bottom:10px;
        display:flex;
        align-items: center;
    }

    .birth_date>input{
        width:84px;
        height:40px;
        border:0;
        text-align:center;
    }

    .bend_bar{
        width:22px;
        height:100%;
        font-size:14px;
        color:#ccc;
        line-height:42px;
        text-align:center;
    }

    .addInfo_item{
        width:332px;
        height:44px;
        margin-top:19px;
        margin-bottom:10px;
        display:flex;
        align-items: center;
    }
    .addInfo_item>li{
        display:flex;
        align-items: center;
        width:184.55px;
        
    }

    .addInfo_list input{
        width:332px;
        height:44px;
        border:1px solid #ccc;
        border-radius:3px;
        background:#fff;
        outline:none;
        padding:0 14px;
        margin-bottom:10px;
    }
    .last_list{
        margin-bottom:30px;
    }

    .addInfo_hidden>div{
        font-size:12px;
    }
    #hidden_open{
        height:auto;
    }

    .agreeBox{
        border-top:1px solid #333;
        border-bottom:1px solid #f4f4f4;
    }

    .agree_list{
        display:flex;
        width:100%;
        font-size:14px;
        line-height: 20px;
        height:auto;
    }

    .agree_list_title{
        width:159px;
        padding:29px 0 0 20px;
        font-weight:700;
    }

    .agree_item{
        width:481px;
        padding:0 14px;
        margin-top:29px;
        margin-bottom:19px;
    }

    .agree_item>li{
        display:flex;
    }

    .agree_item img{
        width:24px;
        height:24px;
        margin-right:12px;
    }

    .agree_all{
        padding-bottom:10px;
    }
    .agreeAll{
        font-size:18px;
        font-weight:700;
        padding-bottom:4px;
    }

    .agreeAll_sub{
        font-size:12px;
        color:#666;
        line-height:17px;
    }
    .viewTerm{
        margin:8px 0;
    }
    .viewTermItem{
        display:flex;
        width:100%;
        align-items: center;
        justify-content: space-between;
    }
    .agreeItem_stress{
        color:#999999;
    }

    .link_term{
        cursor:pointer;
        color:#5f0080;
    }

    .benefit_item{
        display:flex;
        flex-direction: column;
    }

    .benefit_topItem{
        display:flex;
        align-items: center;
        margin:8px 0;
    }

    .agreeType{
        display:flex;
        align-items: center;
        padding:3px 0px 2px 24px;
    }

    .agreeType >span{
        margin-right:80px;
    }


    .agreeType_sub{
        margin-left:60px;
        display:flex;
        align-items: center;
    }

    .agreeType_sub>img{
        width:16px;
        height:20px;
    }

    .agreeType_sub>div{
        color:#5f0080;
        padding-top:8px;
    }


    .btnBox{
        display:flex;
        flex-direction: column;   
        margin-top:40px;
        align-items: center;
    }
    .btnBox>a{
        display:block;
    }

    .btnBox span{
        display:block;
        border:1px solid #5f0081;
        height:56px;
        width:240px;
        border-radius:3px;
        text-align:center;
        font-size:16px;
        font-weight:500;
        line-height: 51px;
        cursor:pointer;
        
    }

    .registerBtn{
        background-color:#5f0080;
        color:white;
        margin-bottom:10px;
    }
`;
