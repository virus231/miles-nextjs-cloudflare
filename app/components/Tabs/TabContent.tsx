import { carouselsExample } from "../../../pages";
import CarouselCenterMode from "../carousel/CarouselCenterMode";

type Props = {
    content: {
        id: string;
        title: string;
    };
};

export const TabContent = (props: Props) => {
    const { content } = props;
    return (
        <div className="tab-content" id="myTabContent">
            <div
                className="tab-pane fade show active"
                id={content.title.toLowerCase()}
                role="tabpanel"
                aria-labelledby={`${content.title.toLowerCase()}-tab`}
            >
                <div className="row projects-sliders">
                    <CarouselCenterMode data={carouselsExample} />
                </div>
            </div>
        </div>
    );
};
