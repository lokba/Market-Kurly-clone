import styled from "styled-components";


export const SearchBox = styled.div`
    width:100%;
`;



export const SearchHeader = styled.div`
    width:100%;
    border-bottom: 1px solid #f7f7f7;
    padding-bottom:120px;

    .search_tit{
        width:1050px;
        margin:0 auto;
        padding: 55px 0 46px;
        font-weight: 800;
        font-family: noto sans;
        font-size: 30px;
        color: #333;
        line-height: 50px;
        text-align: center;
    }

    .search_bar{
        width:1050px;
        margin:0 auto;
        border-top: 2px solid #5f0080;
        border-bottom: 1px solid #5f0080;
        height:98px;

        font-size: 14px;
        display:flex;
        /* align-items: center; */

        .search_bar_txt{
            width: 210px;
            height: 95px;
            padding: 38px 0 0 27px;
            font-weight: 700;
            color: #333;
            line-height: 18px;
        }

        input{
            margin: 25px 20px 0 0;
            float: left;
            width: 603px;
            height: 45px;
            margin-right: 20px;
            padding-left: 20px;
            border: 1px solid #ccc;
            font-size: 14px;
            color: #333;
        }

        .searchBtn{
            margin: 25px 20px 0 0;
            width: 175px;
            height: 45px;
            background-color: #5f0080;
            color: #fff;
            line-height: 45px;
            text-align:center;
        }
    }
    .goodsList{
        width:1050px;
        margin:0 auto;
            .search_result{
                padding: 132px 12px 12px 28px;
                border-bottom: 1px solid #ccc;
                font-size: 13px;
                color: #333;

                strong{
                    font-weight:700;
                }
            }
            .list_goods{
                padding:0 29px;
                .inner_listgoods{
                    .lists{
                        li{
                            width: 100%;
                            height: auto;
                            padding: 100px 0;
                            font-weight: 700;
                            font-size: 14px;
                            color: #4c4c4c;
                            text-align: center;
                        }
                    }
                }
            }
        }
`;
