import styled from "styled-components";

export const GoodListsContentBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:1050px;
    padding-left:35px;
    margin:0 auto;

    .item{
        width:308px;
        /* height:643px; */
        height:610px;
        margin-right:28px;
        margin-top:25px;
        font-size:20px;
        position:relative;
        overflow:hidden;
    }

    .good{
        width:308px;
        height:396px;
        position:relative;
        cursor: pointer;
    }

    .good:hover{
        transform: scale(1.02);
        transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    }
    .cart_box{    
        position: absolute;
        z-index: 100;
        top:335px;
        right: 15px;
        width: 45px;
        height:45px;
    }

    .cart{
        width:45px;
        height:45px;
        background-image: url("../../imgs/ico_cart.svg");
        cursor:pointer;
    }

    .item_title{
        line-height:23px;
        cursor:pointer;
        margin:15px 0;
    }

    .rate{
        color:#fa622f;
        font-weight:800;
        padding-right:8px;
        line-height:20px;
        font-size:18px;
    }

    .after_price{
        font-weight:800;
        font-size:18px;
    }

    .before_price{
        padding-top:8px;
        font-size: 16px;
        text-decoration: line-through;
        color:#999;
        line-height: 18px;
    }

    .item_txt{
        padding-top:13px;
        font-size:13px;
        color:#999;
        line-height:19px;
    }

`;

