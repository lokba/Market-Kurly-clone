import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, Container } from './styles';


const Item = ({ item }) => {
    return (
        <Card>
            <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={`${item.imgURL}`}
                alt="homeBannerImage"
            />
        </Card>
    );
};

const HomeRotateBannerSection = ({ rotateImgs }) => {

    return (
        <Container>
            <Carousel
                fullHeightHover={false}
                animation="slide"
                timeout={400}
                indicators={false}
            >
                {rotateImgs.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </Carousel>
        </Container>
    );
};

export default HomeRotateBannerSection;
