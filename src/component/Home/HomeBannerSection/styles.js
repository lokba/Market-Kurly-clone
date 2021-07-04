import styled, { css } from "styled-components";

export const HomeBannerBox = styled.div`
    display: flex;
    justify-content: center;
    height:140px;
    /* height:160px; */

    ${props => props.foot &&
        css`
            height:160px;
        `
    }

    .main_bnr_link{
        width:1050px;
    }

    .main_bnr_link img{
        width:100%;
        height:100%;
        cursor:pointer;
    }

`;
