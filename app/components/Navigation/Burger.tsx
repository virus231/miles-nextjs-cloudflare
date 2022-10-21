import classNames from "classnames"
import styles from "./Navigation.module.scss"


type Props = {
    setOpen: () => void
}

export const Burger = ({setOpen}: Props) => {
    return (
        <button type="button"
            className={classNames(styles.navToggleBtn, "ms-auto")}
            onClick={setOpen}
        // className="nav-toggle-btn a-nav-toggle ms-auto"
        >
            <span className={classNames(styles.navToggle, "nav-toggle-sm")}>
                <span className={classNames(styles.stick, styles.stick1)}></span>
                <span className={classNames(styles.stick, styles.stick2)}></span>
                <span className={classNames(styles.stick, styles.stick3)}></span>
            </span>
        </button>
    )
}