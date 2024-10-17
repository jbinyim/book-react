import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getBestseller, BookI } from "../api";
import styled from "styled-components";

const SlideBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 100%;
    box-shadow: 0px 0px 5px #444;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Slide = () => {
  const { data, isLoading, error } = useQuery<BookI>({
    queryKey: ["bestseller"],
    queryFn: getBestseller,
  });

  console.log(data?.item);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <SlideBox>
        <Swiper
          loop={true}
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.item.map((item) => (
            <SwiperSlide key={item.itemId}>
              <Img src={item.cover} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideBox>
    );
  }
};

export default Slide;
