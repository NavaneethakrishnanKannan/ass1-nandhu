import React, { useState } from 'react';
// import logo from "../../assets/img/logowebwhite.svg"
// import search from "../../assets/img/search.svg"
import IconButton from '../IconButton';
import Button from '../Button';
import Icon from '../Icon';
import Label from '../Label';
import { themeChanger } from '../../constants/themeChanger';

export default function Header() {
    const [themeIcon, setThemeIcon] = useState("fa-moon-o");
    const handleChangeTheme = async () => {
        const icon = await themeChanger();
        // const logoImg = await getLogo();
        // console.log(logoImg)
        setThemeIcon(icon)
        // setLogo(logoImg)
    };
    return (
        <>
            <nav className="flex-center" style={{ margin: "0 15px" }}>
                <div class="logo flex-center">
                    <img src={require(`../../assets/img/${themeIcon === "fa-sun-o" ? "logoBlack.svg" : "logowebwhite.svg"}`)} alt="app-logo" />
                </div>
                <div class="header-items flex-center">
                    <div class="first-block flex-center">
                        <button className="btn-custom">Todays Special</button>
                        <Button className="btn-search" type="search">
                            <Icon name="fa-search" size={18} />
                            <Label as="span" size={14} styles={{ marginLeft: 5 }}>
                                Search
                            </Label>
                        </Button>
                        <Button className="btn-search" type="search">
                            <Icon name="fa-gift" size={18} />
                            <Label as="span" size={14} styles={{ marginLeft: 5 }}>
                                Offers
                            </Label>
                        </Button>
                    </div>
                    <div class="second-block flex-center">
                        {/* <Button className="btn-search ml-15" type="search" > */}
                        <Icon name="fa-angle-down" size={18} styles={{ float: "right" }} />
                        <Label as="span" size={14} styles={{ marginLeft: 5 }}>
                            Merhaba, Setan
                            </Label>
                        {/* </Button> */}
                        <Label className="ml-15">|</Label>
                        <div className="header-custom-option ml-15" size={14} style={{ marginLeft: 5 }}>
                            Kart Bakiyeniz
                            <br />
                            {/* <h3 className="custom-header-tags">17600TL</h3> */}
                            <Label className="custom-header-tags" as="h3" styles={{ color: "#3DC629" }}>17600TL</Label>
                        </div>
                        <IconButton
                            iconName={'fa fa-shopping-bag'}
                            buttonColor="#3DC629"
                            iconColor={"white"}
                            size={18}
                            className={"cart-icon ml-15"}
                            iconClass="cart-icon-pos"
                        />
                        <div className="header-custom-option ml-15" size={14} style={{ marginLeft: 5 }}>
                            Toplam Tutar
                            <br />
                            <Label className="custom-header-tags" as="h3" styles={{ color: "#3DC629" }}>27,90 TL</Label>
                        </div>
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
                </div>
            </nav>
        </>
    );
}
