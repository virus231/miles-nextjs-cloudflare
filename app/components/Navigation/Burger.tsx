import classNames from 'classnames';
import styles from './Navigation.module.scss';

type Props = {
    setOpen: () => void;
    isTitleMenu?: boolean;
};

export const Burger = ({ setOpen, isTitleMenu = false }: Props) => {
    return (
        <button
            type="button"
            className={classNames(styles.navToggleBtn, 'ms-auto')}
            onClick={setOpen}
            // className="nav-toggle-btn a-nav-toggle ms-auto"
        >
            {isTitleMenu && <span className="nav-toggle-title">Menu</span>}
            <span className={classNames(styles.navToggle, 'nav-toggle-sm')}>
                <span className={classNames(styles.stick, styles.stick1)}></span>
                <span className={classNames(styles.stick, styles.stick2)}></span>
                <span className={classNames(styles.stick, styles.stick3)}></span>
            </span>
        </button>
    );
};
