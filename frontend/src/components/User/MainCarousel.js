import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
    return (
        <Carousel className='#f2f2f2'>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703930188975_web.jpg"
                    alt="First slide"
                    style={{ borderRadius: "15px" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703746841318_satindersartajweb.jpg"
                    alt="Second slide"
                    style={{ borderRadius: "15px" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703662030488_hccweb.jpg"
                    alt="Third slide"
                    style={{ borderRadius: "15px" }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MainCarousel;