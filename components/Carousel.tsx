'use client';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

interface CarouselProps {
    slides: React.ReactNode[]
    options?: Parameters<typeof useEmblaCarousel>[0]
    autoplay?: boolean
    autoplayDelay?: number
    className?: string
}

export default function Carousel({
    slides,
    options,
    autoplay = true,
    autoplayDelay = 4000,
    className = ''
}: CarouselProps){
      const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : []
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      // will update this later for slide change
    })
  }, [emblaApi])

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="flex-[0_0_100%]" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}