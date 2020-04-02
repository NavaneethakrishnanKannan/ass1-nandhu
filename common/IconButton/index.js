import React from 'react';
import Icon from '../Icon'
import { NOOP } from '../../constants/eventHandlerConstants';
// import { colorConstants } from '../../constants/appConstants';

function IconButton({ className, iconClass, iconName, size, buttonColor, iconColor, onClick, styles, ...rest }) {
    return (
        <div {...rest} className={`${className}`} onClick={onClick} style={{ ...styles, background: buttonColor }} >
            <Icon className={iconClass} name={iconName} size={size} styles={{ color: iconColor }} />
        </div>
    )
}

IconButton.defaultProps = {
    iconName: 'fa-plus',
    size: 24,
    styles: {},
    onClick: NOOP,
};

export default IconButton
