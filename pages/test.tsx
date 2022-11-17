// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function TestPage() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            slidesPerView={3}
            navigation
            style={{
                height: '100vh'
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide style={{ backgroundColor: 'red' }}>Slide 1</SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'blue' }}>Slide 2</SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'green' }}>Slide 3</SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'yellow' }}>Slide 4</SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'orange' }}>Slide 5</SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'aliceblue' }}>Slide 6</SwiperSlide>
        </Swiper>
    );
}
