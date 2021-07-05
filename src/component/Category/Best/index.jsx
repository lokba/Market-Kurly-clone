import React from 'react';
import HeaderContainer from '../../../container/HeaderContainer';
import Footer from '../../common/Footer/index';
import GoodListsContent from '../../common/GoodListsContent/index';
import GoodListsHeader from '../../common/GoodListsHeader/index';
import Pagination from '../../common/Pagination/index';
import SideMenu from '../../common/SideMenu/index';
import { BestBox } from './styles';

const Best = ({ items, title }) => {

    return (
        <BestBox>
            <HeaderContainer />
            <SideMenu sub />
            <GoodListsHeader title={title} />
            <GoodListsContent items={items} />
            <Pagination />
            <Footer />
        </BestBox>
    );
};

export default Best;