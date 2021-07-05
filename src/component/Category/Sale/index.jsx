import React from 'react';
import HeaderContainer from '../../../container/HeaderContainer';
import Footer from '../../common/Footer/index';
import GoodListsContent from '../../common/GoodListsContent/index';
import GoodListsHeader from '../../common/GoodListsHeader/index';
import Pagination from '../../common/Pagination/index';
import SideMenu from '../../common/SideMenu/index';
import { MainBnr, MainBnrLink, SaleBox } from './styles';

const Sale = ({ title, items }) => {

    return (
        <SaleBox>
            <HeaderContainer />
            <SideMenu sub />
            <MainBnr>
                <MainBnrLink>
                    <img alt="" src="/images/goods/cheap/banner.png" />
                </MainBnrLink>
            </MainBnr>
            <GoodListsHeader title={title} />
            <GoodListsContent items={items} />
            <Pagination />
            <Footer />
        </SaleBox >

    );
}


export default Sale;