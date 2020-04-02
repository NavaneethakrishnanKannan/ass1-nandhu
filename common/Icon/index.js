import React from 'react'
import PropTypes from 'prop-types'

function Icon({ className, name, size, styles, ...rest }) {
    return (
        <i {...rest} className={`fa ${name} ${className}`} style={{ ...styles, fontSize: size }} />
    );
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    styles: PropTypes.shape({})
};

Icon.defaultProps = {
    name: 'fa-plus',
    size: 12,
    styles: {}
};

export default Icon;

