import { useRef } from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import {Box, Paper, Link, CardContent, Typography} from '@mui/material';
import Image from "../image";
import Carousel, { CarouselArrows, CarouselDots } from '.';
import Iconify from '../iconify';
import { bgGradient } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

type Props = {
    data: {
        id: string;
        title: string;
        image: string;
        description: string;
    }[];
};

export default function CarouselCenterMode({ data }: Props) {
    const carouselRef = useRef<Carousel | null>(null);

    const theme = useTheme();

    const carouselSettings = {
        slidesToShow: 3,
        dots: false,
        centerMode: false,
        centerPadding: '60px',
        rtl: Boolean(theme.direction === 'rtl'),
        ...CarouselDots({
            rounded: true,
            sx: { mt: 3 },
        }),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' },
            },
        ],
    };

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <Box
            // sx={{
            //     overflow: 'hidden',
            //     position: 'relative',
            //     '& .slick-list': {
            //         borderRadius: 2,
            //         // boxShadow: (theme) => theme.customShadows.z16,
            //     },
            // }}
        >
            <CarouselArrows
                // icon="noto:rightwards-hand"
                onNext={handleNext}
                onPrevious={handlePrev}
                // sx={{
                //     top: '10%',
                //     zIndex: 9,
                //     color: "#ccc",
                //     marginTop: theme.spacing(-2.5),
                // }}
            >
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {data.map((item) => (
                        // <Box key={item.id}>
                            <CarouselItem key={item.id} item={item} />
                        // </Box>
                    ))}
                </Carousel>
            </CarouselArrows>
        </Box>
    );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
    title: string;
    description: string;
    image: string;
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
    const theme = useTheme();

    const { image, title } = item;

    return (
        <Paper
            className="project-slide"
            // sx={{
            //     borderRadius: 2,
            //     overflow: 'hidden',
            //     position: 'relative',
            // }}
        >
            <Image className="w-100" alt={title} src={image} ratio="1/1" />
            <div className="project-slide-info">
                <h3>
                    <a href="17_portfolio_single_layout_1.html" title="">
                        Taskly Dashboard
                    </a>
                </h3>
                <p>
                    BibliU is a digital platform that provides university
                    students with personalized learning pathways..
                </p>
            </div>
            <span className="category">Website SEO</span>
            <a href="#" title="" className="share">
                <i className="lni lni-share"/>
            </a>
        </Paper>
    );
}
