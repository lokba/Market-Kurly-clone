import styled, { css } from "styled-components";

export const SideMenuBox = styled.div`
    position:absolute;
    right:20px;
    z-index:10;
    width:80px;
    top:674px;
    font-size:12px;
    transition: top 0.2s;

    ${props => props.sub &&
        css`
            top:230px;
        `
    }
    
    ${props => props.find &&
        css`
            top:230px;
        `
    }

    .side_menu_img{
        padding-bottom:7px;
    }

    .side_menu_img img{
        width:80px;
        height:120px;
        cursor: pointer;
    }

    .side_menu_box{
        height:29px;
        border:1px solid #ddd;
        display:flex;
        justify-content: center ;
        align-items: center;
        cursor: pointer;
    }
    .side_menu_box:hover{
        color:#5f0080;
    }

    .recent_good{
        margin-top:6px;
        border:1px solid #ddd;
        height:143px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .ico_side{
        width:12px;
        height:18px;
    }
    .ico_side img{
        width:12px;
        height:18px;
        cursor: pointer;
    }

    .recent_good_txt{
        padding-bottom:6px;
        padding-top:8px;
    }

    .recent_img{
        width:60px;
        height:77.23px;
    }

    .recent_img img{
        width:60px;
        height:77.23px;
        padding-bottom:4px;
        cursor: pointer;
    }
`;