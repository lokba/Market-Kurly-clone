import styled from "styled-components";

export const CartBox = styled.div`
    width:100%;

    .cartBox_tit{
        width:1050px;
        margin:0 auto;
        text-align:center;
        padding:55px 0 46px;
        font-weight:800;
        font-size:30px;
        color:#333;
        line-height:50px;
    }

    .cartContentBox{
        width:1050px;
        margin:0 auto;
        display:flex;
        margin-bottom:54px;
        justify-content: space-between;
    }

    .cartItemContent{
        width:742px;
    }

    .select_ctrl{
        display:flex;
        align-items: center;
        padding:18px 10px 17px 2px;
        font-size:14px;
    }


    .select_ctrl>img{
        width:24px;
        height:24px;
        margin-right:12px;   
    }

    .bar{
        width:1px;
        height:14px;
        margin:0 21px 0 20px;
        background-color:#ddd;
    }

    .show_cart_list{
        height:255px;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .applyBorder{
        border-top:1px solid #333;
        border-bottom:1px solid #f4f4f4;
    }


    .cartInfoContent{
        width:284px;
    }

    .cartInfoBox{
        margin-top:59.67px;
        padding:23px 19px 20px;
        border:1px solid #f2f2f2;

    }
    .cartInfo_tit{
        display:flex;
        align-items: center;
    }

    .cartInfo_tit>img{
        width:20px;
        height:20px;
        margin-bottom:5px;
    }
    .cartInfo_tit>div{
        padding-left:4px;
        font-size:16px;
        font-weight:700;
    }

    .cartInfo_sub{
        padding-top:11px;
        font-weight:700;
        line-height: 24px;;
    }

    .addr{
        width:100%;
        height:36px;
        border:1px solid #5f0080;
        border-radius:3px;
        background:#fff;
        outline:none;
        padding:0 14px;
        margin-top:17px;
        display:flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
    }

    .addr>div{
        font-size:12px;
        color:#666;
        line-height:34px;
        font-weight:700;
        color:#5f0080;
    }


    .price_lists_box{
        padding:23px 19px 20px;
        background-color:#fafafa;
        border:1px solid #f2f2f2;
    }

    .price_item{
        display :flex;
        justify-content: space-between;
        font-weight:400;
        font-size:16px;
        padding-top:9px;
        height:36px;
    }

    .total_price_item{
        margin-top:11px;
        padding-top:17px;
        border-top:1px solid #f2f2f2;
        display :flex;
        justify-content: space-between;
        align-items: center;
    }

    .total_price_item span{
        font-size:22px;
        font-weight:700;
    }

    .storeBtn{
        margin-top:20px;
        color:#fff;
        height :56px;
        line-height: 54px;
        background-color: #ddd;
        width:100%;
        border:0;
        border-radius:6px;
        font-size:16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .guide{
        padding-top:34px;
    }

    .guide>li{
        padding-top:6px;
        /* display:flex; */
        font-size:12px;
        color:#666;
        line-height:18px;
        display:flex;
    }
    .guide>li>div{
        margin-left :3px;
    }
`;
