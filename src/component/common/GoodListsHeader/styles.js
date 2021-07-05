import styled from "styled-components";

export const GoodListsHeaderBox = styled.div`
    width:1021px;
    margin:0 auto;
    padding-top:26px;
    padding-left:20px;

    .tit{
        padding-bottom:10px;
        height:50px;
        display:flex;
        align-items: flex-end;
        font-size:14px;
        font-weight:700;
    }

    .inner_info{
        display:flex;
        align-items: center;
        font-size:12px;
    }

    .inner_txt{
        width:870px;
        height:28px;
        display:flex;
        align-items: center;
    }

    .inner_txt>span{
        display:inline-block;
        display:flex;
        align-items: center;
        width:67.97px;
        height:28px;
        padding-bottom:7px;
        padding-left:12px;
        border-bottom:1px solid #5f0080;
        font-weight:700;
        color:#5f0080;
    }

    .ctrl{
        width:100px;
        height:33px;
        display:flex;
        justify-content: flex-end;
        cursor:pointer;
        padding-top:5px;
        position:relative;
    }

    .ctrl_tit{
        font-size: 12px;
        padding-top:1px;
        cursor: pointer;
    }

    .ctrl_tit_on{
        color:#5f0080;
    }
    
    .ctrl_on{
        color:#5f0080;
    }

    .ctrl img{
        width:10px;
        height:10px;
        margin-left:6px;
        display: flex;
    }

    .category_box{
        /* display:none; */
        width:98px;
        height:264px;
        position:absolute;
        z-index:10;
        top:30px;
        right:-12px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
    }

    .onView{
        display:block;
    }
    .offView{
        display:none;
    }

    .ctrl_category{
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        padding-top:5px;
        text-align:right;
    }

    .ctrl_category>li{
        height:44px;
        width:100%;
        padding:13px 13px 11px 0;
    }

    .ctrl_category>li:hover{
        color :#5f0080;
        font-weight: 700;
    }
`;
