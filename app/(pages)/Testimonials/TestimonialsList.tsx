'use client';

import { memo, useCallback, useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function VideoTestimonialSlider({ data }: any) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePlay = useCallback((index: number) => {
    setActiveVideo(index);
    swiperRef.current?.autoplay?.stop();
  }, []);

  const handlePause = useCallback(() => {
    setActiveVideo(null);
    swiperRef.current?.autoplay?.start();
  }, []);

  return (
    <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} modules={[Navigation, Pagination, Autoplay]} navigation={false} pagination={{ clickable: true }} autoplay={{ delay: 7000, disableOnInteraction: false }} spaceBetween={30} slidesPerView={1}>
      {data?.map((testimonial: any, i: number) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full md:w-1/2 flex justify-center">
              <video controls poster={testimonial?.thumbnail?.url} className={`w-full md:w-auto h-64 md:h-96 object-cover transition-transform duration-300 ${activeVideo === i ? 'scale-110 z-50 relative' : ''}`} onPlay={() => handlePlay(i)} onPause={handlePause}>
                <source src={testimonial?.video?.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <div className="bg-secondary-50 relative text-gray-900 p-10 rounded-xl rounded-bl-none shadow-md">
                <p className="mb-3 text-xl italic">"{testimonial?.text}"</p>
                <p className="font-semibold text-lg">{testimonial?.name}</p>
                <p className="text-lg text-primary-900">{testimonial?.designation}</p>
                <div className="absolute top-24 -left-2 w-4 h-4 bg-secondary-50 rotate-45 -translate-y-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(VideoTestimonialSlider);
