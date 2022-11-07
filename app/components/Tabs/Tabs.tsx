import { useState } from "react";
import {Tab, Tabs as TabsMain} from "react-bootstrap"
import { TabContent } from "./TabContent";

type Props = {
    tabItems: string[]
}

export const Tabs = (props: Props) => {
    const [key, setKey] = useState<string>('all');

    const {tabItems} = props

    return <TabsMain
        activeKey={key}
        onSelect={(k) => setKey(k || "")}
        className="nav nav-tabs"
        id="myTab"
        role="tabList"
    >
        {tabItems.map((item: string, index) => {
            return <Tab key={index} className="nav-item" eventKey={item} title={item.toUpperCase()}>
                <TabContent content={item} />
            </Tab>
        })}
    </TabsMain>
}
