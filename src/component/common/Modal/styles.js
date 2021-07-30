import styled from "styled-components";

export const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    
    background-color: rgba( 0,0,0, 0.5 );
    z-index:1000;
    display:flex;
    justify-content:center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width:440px;
    height:330px;
    background :white;
    opacity:1;
    padding:0 30px;
    z-index:9999;
    border-radius:12px;

    .modal_content{
        padding-top:30px;
        min-height:148px;
        font-size:14px;

        .modal_tit{
            padding-top :11px;
        }
        .modal_sub{
            margin-top:7px;
            display:flex;
            justify-content: space-between;

            align-items: center;
            .modal_price{
                display:flex;
                .modal_after_price{
                    padding-right:6px;
                    font-weight:800;
                }

                .modal_before_price{
                    color:#999;
                    text-decoration:line-through;
                    font-weight:400;
                }
            }

            .ctrl_store{
                display:flex;
                border:1px solid #F2F2F2;
                align-items: center;
                justify-content: center;
                div{
                    width:28px;
                    height:28px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    font-size:15px;
                    font-weight:600;
                    padding-top:4px;
                }

                .store_btn{
                    cursor:pointer;
                    font-size:20px;
                }            
            }
        }
    }

    .total_price_content{
        padding-top:20px;
        font-size:16px;
        .total_info{    
            display:flex;
            justify-content: space-between;

            .total_tit{
                font-weight:700;
            }

            .total_sub{
                .total_price {
                    strong{
                        font-size:24px;
                        font-weight:800;
                    }
                }
            }
        }
        .total_point{
            padding-top:6px;
            display:flex;
            justify-content: flex-end;
            align-items: center;
            font-size:14px;

            .point_btn{
                width: 38px;
                height: 20px;
                margin-right: 2px;
                border: 1px solid #e8a828;
                border-radius: 10px;
                background-color: #ffbf00;
                font-weight: 700;
                font-size: 11px;
                color: #fff;
                line-height: 18px;
                text-align: center;
                vertical-align: 1px;
            }
        }
    }

    .modal_btnBox{
        padding: 20px 0 30px;
        display:flex;
        justify-content: space-between;

        .modalBtn{
            width:184px;
            height:54px;
            font-size:16px;
            border-radius:3px;
            display:flex;
            justify-content: center;
            align-items:center;
            cursor:pointer;
        }

        .cancelBtn{
            border: 1px solid #ddd;
        }
        .cartBtn{
            background-color: #5f0080;
            color:white;

        }
    }

`;

