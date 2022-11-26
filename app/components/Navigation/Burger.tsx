type Props = {
    setOpen: () => void;
    isText?: boolean;
    className?: string;
};

export const Burger = ({ setOpen, isText = false }: Props) => {
    return (
        <button type="button" onClick={setOpen} className="nav-toggle-btn a-nav-toggle ms-auto">
            {isText && <span className="nav-toggle-title">Menu</span>}
            <span className="nav-toggle nav-toggle-sm">
                <span className="stick stick-1" />
                <span className="stick stick-2" />
                <span className="stick stick-3" />
            </span>
        </button>
    );
};
