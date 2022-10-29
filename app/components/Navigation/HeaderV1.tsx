import { useState } from "react";
import {RightMenu} from "../RightMenu";

export const HeaderV1 = () => {
    const [open, setOpen] = useState<boolean>(false);

    return <>
        <header className="rel">
            <div className="container-fluid">
                <div className="header-content d-flex flex-wrap align-items-center">
                    <div className="logo">
                        <a href="index.html" title="">
                            <img src="/static/images/logo2.png" alt=""/>
                        </a>
                    </div>
                    <div className="mile-right ms-auto">
                        <button className="nav-toggle-btn a-nav-toggle ms-auto">
                            <span className="nav-toggle-title">Menu</span>
                            <span className="nav-toggle nav-toggle-sm">
                                <span className="stick stick-1"/>
                                <span className="stick stick-2"/>
                                <span className="stick stick-3"/>
                            </span>
                        </button>
                        <a href="#" title="" className="btn-default no-bg">
                            Let’s talk
                            <i className="lni lni-comments"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <RightMenu isOpen={open} closeMenu={() => setOpen(!open)}/>
    
    </> 
}