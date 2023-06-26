import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} alt="Hoa"/>
            <div className={cx("info")}>
                <p className={cx("name")}>Dao le phuong hoa</p>
                <span className={cx("username")}>ditcommehoa</span>
            </div>
        </div>
     );
}

export default AccountItem;