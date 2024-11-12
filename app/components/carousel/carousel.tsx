'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Swiper as SwiperType } from 'swiper/types';
import { dataProduct } from './data';
import { ProductCard } from './product-card';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Flex, Typography } from 'antd';
import { Arrow } from './arrow-icon';
import { Navigation } from 'swiper/modules';


export const Carousel = memo(() => {
  const [currentBlock, setCurrentBlock] = useState(1);
  const totalBlocks = Math.ceil(dataProduct.length / 4);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const goToBlock = useCallback((blockIndex: number) => {
    if (swiperRef.current) {
      const slideIndex = (blockIndex - 1) * 4;
      swiperRef.current.slideTo(slideIndex);
      setCurrentBlock(blockIndex);
    }
  }, []);

  const goNext = useCallback(() => {
    if (currentBlock < totalBlocks) {
      goToBlock(currentBlock + 1);
    }
  }, [currentBlock, totalBlocks, goToBlock]);
  
  const goPrev = useCallback(() => {
    if (currentBlock > 1) {
      goToBlock(currentBlock - 1);
    }
  }, [currentBlock, goToBlock]);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        const newBlockIndex = Math.floor(swiperRef.current.activeIndex / 4) + 1;
        setCurrentBlock(newBlockIndex);
      }
    };
  
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', handleSlideChange);
    }
  
    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', handleSlideChange);
      }
    };
  }, []);
  
  return (<Flex vertical gap={20} align="start" className="w-full" style={{position: 'relative'}}>
      <Typography.Title level={2}>Просмотренные товары</Typography.Title>
      <Swiper
        onSwiper={handleSwiper}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroupSkip={4}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={(swiper) => setCurrentBlock(Math.floor(swiper.activeIndex / 4) + 1)}
      >
        {dataProduct.map(p => (
          <SwiperSlide key={p.id}>
            <ProductCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex style={{ position: 'absolute', top: '10px', right: '10px' }} gap={8} align='center'>
        <div className="swiper-button-prev"><Arrow /></div>
        <Typography.Text className='text-24'>{currentBlock}</Typography.Text> /
        <Typography.Text className='text-18' style={{color: '#5e5e5f'}}>{totalBlocks}</Typography.Text>
        <div className="swiper-button-next"><Arrow /></div>
      </Flex>
    </Flex>
  );
});