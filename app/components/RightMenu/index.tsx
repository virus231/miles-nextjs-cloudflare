import {NextLink} from "../BaseNextLink";
import styles from "./RightMenu.module.scss"
import classNames from "classnames";
import { rightMenu } from "../../_mock/menu-config";
import { useState } from "react";


type Props = {
    isOpen: boolean;
    closeMenu: () => void;
}

export const RightMenu = ({isOpen = false, closeMenu}: Props) => {
    const [openCollapse, setOpenCollapse] = useState({
        name: "",
        isOpen: false
    });

    const onClick = (menu: any) => {
        setOpenCollapse({
            name: menu.name,
            isOpen: !openCollapse.isOpen
        })
    } 

    return <div className={classNames(styles.responsiveMenu, {
        [styles.active]: isOpen
    })}>
        <div className={classNames(styles.repHeader)}>
            <div className={classNames(styles.repLogo)}>
                <img src="/static/images/logo2.png" alt="" />
            </div>
            <div onClick={closeMenu} className={classNames(styles.closeMenu)}>
                <i className="lni lni-close"></i>
            </div>
        </div>
        <div className={classNames(styles.searchBox)}>
            <form>
                <input type="text" name="search" placeholder="Search" />
                <button type="submit"><i className="lni lni-search-alt"></i></button>
            </form>
        </div>
        <ul className={styles.mobileMenu}>
            {
                rightMenu.map((menu) => (
                    <li key={menu.name} className={classNames(styles.menuItemHasChildren, {
                        [styles.active]: openCollapse.name === menu.name && openCollapse.isOpen
                    })}>
                        <div onClick={() => onClick(menu)}>
                            {menu.name}
                        </div>
                        <ul style={{
                            display: openCollapse.name === menu.name && openCollapse.isOpen ? "block" : "none",
                            // transform: "translateY(-3rem)",
                            // transition: "all 0.5s ease-in-out",
                            // transitionDelay: "0.4s",
                        }}>
                            {menu.children.map((child, index) => (
                                <li key={child.name} onClick={() => {
                                    closeMenu();
                                    setOpenCollapse({
                                        name: "",
                                        isOpen: false
                                    })
                                }}>
                                    <NextLink href={child.href}>
                                        {child.name}
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
            }
        </ul>
    </div>

}