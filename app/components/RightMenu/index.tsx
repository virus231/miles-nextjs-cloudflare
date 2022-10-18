import {NextLink} from "../BaseNextLink";
import styles from "./RightMenu.module.scss"
import classNames from "classnames";
import { menus } from "../../_mock/menu-config";


type Props = {
    isOpen: boolean;
    closeMenu: () => void;
}

export const RightMenu = ({isOpen = false, closeMenu}: Props) => {

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
                menus.map((menu, index) => (
                    <li key={menu.name} className={styles.menuItemHasChildren}>
                        <div>
                            {menu.name}
                        </div>
                        <ul>
                            {menu.children.map((child, index) => (
                                <li key={child.name}>{child.name}</li>
                            ))}
                        </ul>
                    </li>
                ))
            }
        </ul>
    </div>

}