import styled from "styled-components";

export const HomeInstaReviewBox = styled.div`

    .title{
        padding:79px 0 35px;
        font-size:28px;
        font-weight:700;
        text-align:center;
    }
    
    .items_list{
        /* display:flex; */
        /* justify-content: center; */

        width:1050px;
        margin:0 auto;
        position:relative;
        overflow:hidden;

        .instaItemBox{
            display:flex;
            width:2000px;
            transition: transform 0.5s;
            
            .item{
                width:175px;
                height:175px;
            }

            .item img{
                width:175px;
                height:175px;
                cursor: pointer;
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
                top:35%;
                left:0;
                margin-left:5px;
                padding-top:6px;
                padding-right:4px;
            }

            .next{
                position:absolute;
                top:35%;
                right:0.5%;
                padding-top:6px;
                padding-left:4px;
            }
        }


    }

    .subinfo{
        margin:39px 0 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight:700;
        font-size:16px;
        line-height:29px;

        .question{
            font-weight:400;
            color:#999;
        }

        .comment{
            cursor:pointer;
        }
    }


`;