import React from 'react';
import Label from '../../../../../common/Label';

export default function MenuBar() {
    return (
        <>
            <div className="dish-option-bar">
                <Label className="menu-items" size={16} as="h3">Chicken Starters</Label>
                <Label className="menu-items" size={16} as="h3">Mutton Starters</Label>
            </div>
        </>
    );
}
