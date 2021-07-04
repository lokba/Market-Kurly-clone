import React from 'react';
import HeaderContainer from '../../../container/HeaderContainer';
import Footer from '../../common/Footer/index';
import { CheapBox } from './styles';

const Event = ({ events }) => {
    return (
        <CheapBox>
            <HeaderContainer />
            <section className="bnr_lists">
                <ul className="lists">
                    {
                        events.map(event => (
                            <li className="list">
                                <a href="/shop/goods/event">
                                    <img alt="" src={event.imgURL} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <Footer />
        </CheapBox>

    );
}

export default Event;