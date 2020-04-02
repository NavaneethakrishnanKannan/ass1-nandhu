export const themeChanger = () => {
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