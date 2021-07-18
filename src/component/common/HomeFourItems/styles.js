import styled from "styled-components";

export const HomeFourItemsBox = styled.div`
    .title{
        padding:79px 0 0;
        font-size:28px;
        font-weight:700;
        text-align:center
    }
    
    .items_list{

        width:1050px;
        margin:0 auto;
        margin-top:35px;

        overflow:hidden;
        position:relative;

        .itemBox{
            display:flex;
            width:2000px;
        }

        .item_ctrl_btn{
            display:flex;
            position:absolute;
            top:26%;

            .item_btn{
                z-index:700;
                border-radius:50%;
                width:60px;
                height:60px;
                background: white;
                opacity:1;
                display:flex;
                justify-content: center;
                align-items: center;
                font-size:40px;
                font-weight:400;
                color:gray;
                transition : opacity 0.4s;
            }

            .prev{
                margin-right:930px;
                padding-top:6px;
                padding-right:4px;
            }

            .next{
                padding-top:6px;
                padding-left:4px;
            }
        }
    }

    .item{
        width:249px;
        height:506px;
        margin-right:18px;
        font-size:16px;
        position:relative;
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

    .sub{
        font-size:16px;
        font-weight:400;
        text-align:center;
        padding-top:2px;
        padding-right:25px;
        color:#999;
        line-height:20px;
        margin-top:10px;
        cursor:pointer;
    }
`;
