import styled from "styled-components";

export const FooterBox = styled.div`
    .type{
        padding-top:29px;
        padding-bottom:20px;
        height:302px;
        width:1050px;
        margin:0 auto;
        display:flex;
        
    }

    .call{
        width:534px;
        /* height:302px; */
    }
    .title{
        font-size:20px;
        padding-bottom:2px;
        line-height:24px;
    }
    .call_info{
        display:flex;
        padding-top:20px;
    }

    .phone{
        width:140px;
        height:40px;
        margin-right:16px;
        font-weight:800;
        font-size:28px;
        padding-top:4px;
    }

    .call_list{
        display:flex;
        flex-direction: column;
        font-size:14px;
    }
    .call_list div{
        display:flex;
        align-items: center;
    }
    .place{
        height:22px;
    }
    .time{
        color:#999;
        height:22px;
    }
    .box{
        width:140px;
        height:40px;
        margin-right:16px;
        border:1px solid #e3e3e3;
        border-radius:3px;
        font-weight:700;
        font-size:14px;
        line-height:22px;
        display:flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
    }

    .info{
        font-size:14px;
        line-height:20px;
        color:#999;
    }

    .menu{
        padding-bottom:29px;
        color:#333;
        line-height:18px;
        cursor:pointer;
    }
    .menu span{
        padding-right:16px;
    }

    .stress{
        color:#5f0080;
        cursor:pointer;
    }
    .copyright{
        padding-top:16px;
    }

    .sns{
        padding-top:16px;
    }

    .sns a{
        display:inline-block;
        width:30px;
        height: 30px;
        margin-right:10px;
    }
    .sns a img{
        width:100%;
        height:100%;
        cursor:pointer;
    }

    footer{
        width:1050px;
        margin:0 auto;
        border-top:1px solid #eee;
        padding-bottom:60px;
        display:flex;
    }

    .footer_link{
        display:flex;
        padding-top:19px;
        padding-right:45.08px;
        cursor:pointer;
    }

    .link_img{
        width:34px;
        height:34px;
        margin-right:10px;
    }

    .link_img img{
        width:100%;
        height:100%;
    }

    .payments{
        width:102px;
        height:34px;
        margin-right:10px;
    }

    .payments img{
        width:100%;
        height:100%;
    }

    .txt{
        padding-top:1px;
        font-size:10px;
        color:#999;
        line-height:16px;
    }
`;

