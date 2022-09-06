import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button, IconButton, Paper } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
const caruselArray = [
  { URL: "/pc.jpg", width: 640, height: 480 },
  { URL: "/keyboard.webp", width: 970, height: 647 },
  { URL: "/laptop.jpg", width: 970, height: 647 },
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <Paper
          variant="elevation"
          elevation={15}
          className="embla__slide paper_carousle"
        >
          <Image
            priority
            alt="photo of a laptop"
            src={caruselArray[0].URL}
            width={caruselArray[0].width}
            height={caruselArray[0].height}
            layout="responsive"
          />
        </Paper>
        <Paper variant="elevation" elevation={15} className="embla__slide">
          <Image
            priority
            alt="photo of a laptop"
            src={caruselArray[1].URL}
            width={caruselArray[1].width}
            height={caruselArray[1].height}
            layout="responsive"
          />
        </Paper>
        <Paper variant="elevation" elevation={15} className="embla__slide">
          <Image
            priority
            alt="photo of a laptop"
            src={caruselArray[2].URL}
            width={caruselArray[2].width}
            height={caruselArray[2].height}
            layout="responsive"
          />
        </Paper>
      </div>
    </div>
  );
}
