import styled from "styled-components";

export const HomeKurlyRecipeBox = styled.div`

    .title{
        padding:79px 0 35px;
        font-size:28px;
        font-weight:700;
        text-align:center;
        cursor:pointer;
    }

    .items_list{
        /* display:flex; */
        /* justify-content: center; */

        width:1050px;
        margin:0 auto;
        height:303px;

        position:relative;
        overflow:hidden;

        .kurlyItemBox{
            display:flex;
            width:2000px;
            transition: transform 0.5s;


            .item{
                width:338px;
                height:225px;
                margin-right:18px;
                text-align: center;
            }

            .item img{
                width:338px;
                height:225px;
                cursor:pointer;
            }

            .item_title{
                line-height:23px;
                cursor:pointer;
                margin:8px 0;
            }
        }

        .item_ctrl_btn{
            display:flex;

            .item_btn{
                z-index:100;
                border-radius:50%;
                width:50px;
                height:50px;
                background: white;
                display:flex;
                justify-content: center;
                align-items: center;
                font-size:30px;
                font-weight:400;
                color:gray;
                cursor:pointer;
            }

            .prev{
                position:absolute;
                top:29%;
                left:0;
                margin-left:5px;
                padding-top:6px;
                padding-right:4px;
            }

            .next{
                position:absolute;
                top:29%;
                right:0.5%;
                padding-top:6px;
                padding-left:4px;
                
            }
        }
    }
`;
