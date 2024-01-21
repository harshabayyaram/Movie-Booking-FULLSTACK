import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
    return (
        <Carousel className=''>
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
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1705299541982_vitrossdesktop.jpg"
                    alt="Second slide"
                    style={{ borderRadius: "15px" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1704879476287_vitrossdesk.jpg"
                    alt="Third slide"
                    style={{ borderRadius: "15px" }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MainCarousel;