import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Paper } from "@mui/material";

import Image from "next/image";

export default function EmblaCarousel({ propData }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <Paper variant="outlined">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {propData.map((e, id) => (
            <Box className="embla__slide" key={id}>
              <Image
                priority
                alt={e.title}
                src={e.URL}
                width={e.width}
                height={e.height}
                layout="responsive"
              />
            </Box>
          ))}
        </div>
      </div>
    </Paper>
  );
}
