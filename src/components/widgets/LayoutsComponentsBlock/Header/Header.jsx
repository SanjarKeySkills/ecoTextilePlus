import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../../../assets/ecotextile_logo.png";
import burgerButton from "../../../../assets/ui/burgerBtn.svg";
import arrowPopUp from "../../../../assets/ui/arrowBtn.svg";

const arrLinks = [
    { to: "/", label: "ГЛАВНАЯ" },
    { to: "/mission", label: "МИССИЯ" },
    { to: "/team", label: "КОМАНДА" },
    { to: "/gallery", label: "ГАЛЕРЕЯ" },
    { to: "/gallery", label: "ВАКАНСИИ" },
    { to: "/contacts", label: "КОНТАКТЫ" },
];
const arrLan = [
    { to: "/", label: "KG" },
    { to: "/", label: "EN" },
    { to: "/", label: "RU" },
];
const arrForRecycle = [
    { to: "/", label: "СИНТЕТИКА" },
    { to: "/", label: "ХЛОПЧАТОБУМАЖНАЯ ТКАНЬ" },
    { to: "/", label: "ПОЛИСТЕР" },
    { to: "/", label: "ТРИКОТАЖ" },
];
const arrForProduct = [
    { to: "/", label: "УТЕПЛИТЕЛИ" },
    { to: "/", label: "ПАНЕЛИ УТЕПЛИТЕЛИ" },
    { to: "/", label: "СТРОИТЕЛЬНЫЕ ПЕРЧАТКИ" },
    { to: "/", label: "ТЕХНИЧЕСКИЕ ТКАНИ" },
];

const HeaderMobileMenu = (props) => {
    const { isOpenPopUp, togglePopup } = props;
    const handlePopUpLinkClick = () => togglePopup(); // Закрытие адаптивного popUp меню
    return (
        <div
            className={styles.containerPopUp}
            style={{ display: isOpenPopUp ? "block" : "none" }}>
            <div className={styles.wrapperPopUp}>
                <div className={styles.arrowWrapper}>
                    <img src={arrowPopUp} alt="arrow" onClick={togglePopup} />
                </div>
                <ul className={styles.listTopPopUp}>
                    {arrLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.wrapperBottomPopUp}>
                <ul className={styles.listBottomPopUp}>
                    {arrLan.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} onClick={handlePopUpLinkClick}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState(false);
    const togglePopup = () => setOpenPopUp(!isOpenPopUp);
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.headerContaner}>
                <div className={styles.headerUp}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="main"
                            className={styles.logoHeader}
                        />
                    </Link>
                    <div className={styles.listNavbarWrapper}>
                        <ul className={styles.listNavbar}>
                            {arrLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.lans}>
                        {arrLan.map((link) => (
                            <div key={link.to}>
                                <Link to={link.to} className={styles.lan}>
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdownButton}>
                            МЫ ПЕРЕРАБАТЫВАЕМ
                        </Link>

                        <div className={styles.dropdownContent}>
                            {arrForRecycle.map((link) => (
                                <Link
                                    key={link.to}
                                    className={styles.dropdownLink}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdownButton}>
                            МЫ ПРОИЗВОДИМ
                        </Link>

                        <div className={styles.dropdownContent}>
                            {arrForProduct.map((link) => (
                                <Link
                                    key={link.to}
                                    className={styles.dropdownLink}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <p>
                        Кыргызская Республика <br />
                        г.Бишкек ул. Ахунбаева 169 <br />7 этаж, кабинет 1
                    </p>
                    <p>
                        +996 552 702 740 <tr />
                    </p>
                    <a href="/">askatmazhitov@gmail.com</a>
                    <a href="/contact" className={styles.contactBtn}>
                        СВЯЗАТЬСЯ С НАМИ
                    </a>
                </div>
            </div>
            <div className={styles.headerMobile}>
                <Link to="/">
                    <img src={logo} alt="main" />
                </Link>
                <img src={burgerButton} alt="burger" onClick={togglePopup} />
                <HeaderMobileMenu
                    isOpenPopUp={isOpenPopUp}
                    togglePopup={togglePopup}
                />
            </div>
            <div className={styles.headerMobile}>
                <Link to="/">
                    <img src={logo} alt="main" />
                </Link>
                <img src={burgerButton} alt="burger" onClick={togglePopup} />
                <HeaderMobileMenu
                    isOpenPopUp={isOpenPopUp}
                    togglePopup={togglePopup}
                />
            </div>
        </div>
    );
};

export default Header;
