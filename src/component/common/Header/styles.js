import styled from "styled-components";

export const HeaderBox = styled.div`
    width:1050px;
    margin:0 auto;

    #userMenu{
        display:flex;
        justify-content: space-between;
        height:36.99px;
        align-items:center;
    }

    #userMenu a img{
        width:135px;
        height:21.99px;
        cursor:pointer;
    }

    #menu_lists{
        display:flex;
        font-size:12px;
        height:36.99px;

    }

    #register{
        padding:0 11px 0 10px;
        color:#5f0080;
        display:flex;
        align-items: center;
    }

    #register li{
        cursor: pointer;
    }
    #register li::after{
        content:"";
        float: right;
        width: 1px;
        height: 10px;
        margin-left:12px;
        background-color: #d8d8d8;
    }

    .register_link{
        color:#5f0080;
    }

    #login{
        display:flex;
        align-items: center;
    }
    #login li{
        cursor:pointer;
    }

    #login li::after{
        content:"";
        float: right;
        width: 1px;
        height: 10px;
        margin-left:12px;
        background-color: #d8d8d8;
        margin-right:16px;
    }

    #info{
        display:flex;
        align-items: center;
        position:relative;
    }

    #info img{
        width:7.99px;
        margin-left:5px;
        height:5px;
        margin-top:-3px;
    }

    .subinfo{
        position:absolute;
        display:none;
        border:1px solid gray;
        top:34px;
        right:0;
        width: 102px;
        padding: 3px 0;
        line-height:12px;
        border: 1px solid #ddd;
        background-color: #fff;
        z-index:1;
    }

    .subinfo li{
        padding: 7px 9px;
        cursor:pointer;
    }

    .logoArea{
        display:flex;
        justify-content: center;
    }
    #logo{
        width:103px;
        height:63px;
        text-align: center;
        
    }

    #logo img{
        width:103px;
        height:79px;
        margin-top:-13px;
        cursor:pointer;
    }

`;

export const NavBox = styled.div`
    display:flex;
    align-items: center;
    width:1050px;
    margin:0 auto;
    /* margin-top:25px; */
    margin-top:10px;
    height:55px;
    text-align:center;
    position:relative;


    #category{
        display:flex;
        align-items: center;
        font-size:16px;
        width:168px;
        cursor:pointer;
        height:55px;
    }

    .category_info{
        display:flex;
        align-items: center;
        width:168px;
        height:55px;
    }
    
    /* 변경사항------------------------------ */
    .category_info>img{
        width:16px;
        height:14px;
        margin-right:14px;
        margin-bottom:3px;
    }
    /* 변경사항------------------------------ */

    .gnb_menu{
        position:absolute;
        display:none;
        left:0;
        top:55px;
        /* width:440px; */
        /* width:219px; */
        z-index:200;
        color:black;
        border:1px solid #ddd;
        background:white;
        overflow:hidden;
        transition:width 0.2s;
    }
    .gnb_menu>ul>li{
        display:flex;
    }
    .inner_menu{
        display:flex;
        width:219px;
        height:39px;
        font-size:14px;
        align-items: center;
        padding: 0 4px 0 10px;

    }
    .inner_menu:hover{
        color:#5f0080;
        font-weight:600;
        background-color:#f7f7f7;
        
    }
    .i_menu_img{
        width:24px;
        height:24px;
        margin-right:10px;
    }

    .sub_menu{
        position:absolute;
        top:0;
        left:219px;
        width:219px;
        height:100%;
        z-index:500;
        color:black;
        display:none;
        background:#f7f7f7;
        overflow:hidden;

    }

    .sub_menu > li{
        display:flex;
        height:39px;
        font-size:14px;
        align-items: center;
        padding: 0 4px 0 20px;
        z-index:600;
        transition:opacity 5s;
    }

    .sub_menu>li:hover{
        color:#5f0080;
        font-weight:600;
        text-decoration: underline;
        text-underline-position: under;
    }
    #new{
        width:124px;
    }

    #best{
        width:116px;
    }

    #sale{
        width:124px;
    }
    #event{
        width:116px;
    }
    #search{
        display: flex;
        margin-left:14px;
    }
    .menu_on{
        color:#5f0080;
        font-weight: 700;
    }


    #search input{
        width:242px;
        height:36px;
        border-radius:18px;
        background-color:#f7f7f7;
        border:1px solid #f7f7f6;
        font-weight:400;
        font-size:12px;
        outline :none;
        padding-left:15px;
    }
    #search{
        position:relative;
    }
    #search img{
        width:30px;
        height:30px;
        position:absolute;
        right:3px;
        top:5px;
        cursor: pointer;
        
    }

    #location img{
        width:36px;
        height:36px;
        position:absolute;
        right:61px;
        top:10px;
    }

    #location{
        height:55px;
        width:70px;
    }

    .location_subinfo{
        position: absolute;
        z-index: 1;
        right: 55px;
        top:55px;
        width:330px;
        display:none;
        padding: 20px 18px 19px 20px;
        border: 1px solid #ddd;
        background-color: #fff;
        text-align:left;
        font-size:16px;
        font-weight:700;
        line-height:24px;
    }

    .location_subinfo span{
        color:#5f0080;
    }

    .location_btn_box{
        display:flex;
        margin-top:17px;
    }
    .locationBtn{
        font-size:12px;
        text-align:center;
        border-radius:3px;
        line-height:32px;
        border:1px solid #5f0080;
        cursor:pointer;
    }

    .location_loginBtn{
        width:104px;
        color:#5f0080;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-right:7px;
        
    }
    .location_addressBtn{
        display:flex;
        width:158px;
        align-items: center;
        justify-content: center;
        background-color:#5f0080;
        color:white;
    }

    .location_addressBtn img{
        width:20px;
        height:20px;
    }

    #cart img{
        position:absolute;
        width:36px;
        height:36px;
        right:0;
        top:10px;
        cursor: pointer;
    }

    .menu{
        cursor:pointer;
    }
    .menu:hover{
        color:#5f0080;
        text-decoration: underline;
        text-underline-position: under;
        font-weight:700;
    }
`;
