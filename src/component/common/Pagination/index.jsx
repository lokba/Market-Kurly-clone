import React from 'react';
import { PageBtnBox } from './styles';

const Pagination = () => {
    return (
        <PageBtnBox>
            <div><img alt="" src="/images/goods/special/icon_beforebefore.png" /></div>
            <div><img alt="" src="/images/goods/special/icon_before.png" /></div>
            <div className="btntxt">1</div>
            <div className="btntxt">2</div>
            <div className="btntxt">3</div>
            <div className="btntxt">4</div>
            <div><img alt="" src="/images/goods/special/icon_after.png" /></div>
            <div><img alt="" src="/images/goods/special/icon_afterafter.png" /></div>
        </PageBtnBox >
    );
};

export default Pagination;