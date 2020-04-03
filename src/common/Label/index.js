import React from 'react'

function Label({ as: Tag, size, styles, children, className, ...rest }) {
    return (
        <Tag {...rest} className={className} style={{ fontSize: size, ...styles }}>{children}</Tag>
    );
}

Label.defaultProps = {
    as: 'p',
    styles: {},
    children: null
};

export default Label;
