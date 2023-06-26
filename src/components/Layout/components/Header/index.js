import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '../../../../assets/images';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from "../../../Popper"
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx("logo")}>
                <img src={images.logo}></img>
            </div>
            <Tippy
                interactive={true}
                // visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </h4>
                        </PopperWrapper>   
                    </div>
                )}
            >
                <div className={cx("search")}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx("action")}></div>
        </div>
    </header>
}

export default Header;