import {Card, CardContent, CardHeader} from "@mui/material";
import CarouselCenterMode from "../app/components/carousel/CarouselCenterMode";

export default function Carousel() {
    return (
        <Card>
            <CardHeader title="Carousel Center Mode" subheader="Customs shape & icon button" />
    <CardContent>
        <CarouselCenterMode data={_carouselsExample} />
    </CardContent>
    </Card>
    )
}