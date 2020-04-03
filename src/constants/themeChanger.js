export const themeChanger = async () => {
    let elem = document.getElementById('root');
    if (!elem.className.includes("dark")) {
        elem.className = "dark";
        return "fa-sun-o";
    } else {
        elem.className = "";
        return "fa-moon-o";
    }
};
export const getThemeIcon = () => {
    let elem = document.getElementById('root');
    if (!elem.className.includes("dark")) {
        return "fa-moon-o"//fa-moon-o
    } else {
        return "fa-sun-o"
    }
}
export const getLogo = async () => {
    let elem = document.getElementById('root');
    if (!elem.className.includes("dark")) {
        elem.className = "dark";
        return "logowebblack.svg";
    } else {
        elem.className = "";
        return "logowebwhite.svg";
    }
}