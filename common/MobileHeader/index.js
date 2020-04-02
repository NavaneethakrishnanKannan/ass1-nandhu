import React, { useState } from 'react';
import logo from "../../assets/img/logo.png"
import IconButton from '../IconButton';
import { themeChanger } from '../../constants/themeChanger';

export default function MobileHeader() {
    const [themeIcon, setThemeIcon] = useState("fa-moon-o");
    const handleChangeTheme = () => {
        const icon = themeChanger();
        setThemeIcon(icon)
    }
    return (
        <>
            <nav className="flex-center mobile-container" style={{ margin: "0 15px" }}>
                <div class="logo flex-center">
                    <img className="mobile-logo" src={logo} alt="app-logo" />
                </div>
                <div class="second-block flex-center">
                    <IconButton
                        onClick={handleChangeTheme}
                        iconName={themeIcon}
                        buttonColor="#EDEFF4"
                        iconColor={"black"}
                        size={16}
                        className={"cart-icon ml-15"}
                        iconClass="cart-icon-pos"
                    />
                </div>
            </nav>
        </>
    );
}
