import React from 'react';

export default function Tab({ key, className, tabObj, index, onChangeTab, ...rest }) {
    return (
        <>
            <div key={key} className={className} onClick={onChangeTab(index)}>{tabObj.title}</div>
        </>
    );
}
