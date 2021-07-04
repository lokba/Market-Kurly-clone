import React from 'react';
import Footer from '../../common/Footer/index';
import GoodListsContent from '../../common/GoodListsContent/index';
import GoodListsHeader from '../../common/GoodListsHeader/index';
import Header from '../../common/Header/index';
import Pagination from '../../common/Pagination/index';
import SideMenu from '../../common/SideMenu/index';
import { NewBox } from './styles';

const New = ({ items, title }) => {


    return (
        <NewBox>
            <Header />
            <SideMenu />
            <GoodListsHeader title={title} />
            <GoodListsContent items={items} />
            <Pagination />
            <Footer />
        </NewBox>
    );
}

export default New;