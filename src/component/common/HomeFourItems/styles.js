import styled from "styled-components";

export const HomeFourItemsBox = styled.div`
    .title{
        padding:79px 0 0;
        font-size:28px;
        font-weight:700;
        text-align:center;
    }

    .cursor_tit{
        cursor:pointer;
    }
    .items_list{
        display:flex;
        justify-content: center;
        margin-left:18px;
        margin-top:35px;
        
    }

    .item{
        width:249px;
        /* width:267px; */
        height:506px;
        margin-right:18px;
        font-size:16px;
        position:relative;
        overflow:hidden;
    }

    .item img{
        height:320px;
        width:249px;
        position:relative;
        cursor: pointer;
        /* overflow:hidden; */
    }

    .item img:hover{
        transform: scale(1.02);
        transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    }

    .item_title{
        line-height:23px;
        cursor:pointer;
        margin:8px 0;
    }

    .rate{
        color:#fa622f;
        font-weight:800;
        padding-right:8px;
        line-height:20px;
    }

    .after_price{
        font-weight:800;
    }

    .before_price{
        padding-top:5px;
        font-size: 14px;
        text-decoration: line-through;
        color:#999;
        line-height: 18px;
    }

    .sticker{
        position:absolute;
        top:0;
        z-index:1;
        background-color:rgb(189,118,225);
        opacity: 0.9;
        width:67.52px;
        height:32px;
        font-size:14px;
        color:#ffffff;
        font-weight:700;
        line-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    } 

    .t7_sub{
        font-size:16px;
        font-weight:400;
        text-align:center;
        padding-top:2px;
        padding-right:25px;
        color:#999;
        line-height:20px;
        margin-top:10px;
    }
`;
