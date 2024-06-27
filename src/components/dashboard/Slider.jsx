import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CourseCard } from '../CourseCard.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../index.css';

export function Slider() {
    return (
        <>
            <section>
            
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide><CourseCard title="Web Design" /></SwiperSlide>
                    <SwiperSlide><CourseCard title="Web Development" /></SwiperSlide>
                    <SwiperSlide><CourseCard title="Web Design" /></SwiperSlide>
                    <SwiperSlide><CourseCard title="Web Development" /></SwiperSlide>
                    <SwiperSlide><CourseCard title="Web Development" /></SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};


