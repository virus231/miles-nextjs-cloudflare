import { Tab } from "react-bootstrap"
import { _carouselsExample } from "../../../pages";
import CarouselCenterMode from "../carousel/CarouselCenterMode";

type Props = {
    content: string
}

export const TabContent = (props: Props) => {
    const {content} = props
    return <div className="tab-content" id="myTabContent">
        <div
            className="tab-pane fade show active"
            id={content.toLowerCase()}
            role="tabpanel"
            aria-labelledby={`${content.toLowerCase()}-tab`}
        >
            <div className="row projects-sliders">
                <CarouselCenterMode data={_carouselsExample} />
            </div>
        </div>
    </div>

}