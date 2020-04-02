import React, { useState } from 'react';
import AccordionList from './AccordionList';
// import { accordionOptions } from '../../constants/dataConstants';
// import { colorConstants } from '../../constants/appConstants';
import IconButton from '../IconButton';
import Label from '../Label';

function Accordion({ show, title, options }) {
    const [shouldOpen, setOpen] = useState(show);

    return (
        <div className="ac-wrapper accordion">
            <div className="ac-header" onClick={() => setOpen(!shouldOpen)}>
                <Label as='h3'>{title}</Label>
                <IconButton
                    iconName={shouldOpen ? 'fa-chevron-down' : 'fa-chevron-up'}
                    className="accordian-btn-icon"
                    iconClass="accordian-icon-secondary"
                    size={12}
                    // buttonColor={colorConstants.white}
                    // iconColor={colorConstants.black}
                // styles={{padding: 8}}
                />
            </div>
            {
                shouldOpen &&
                <ul className="ac-content">
                    {
                        options.map((eachOption, i) => {
                            return (
                                <AccordionList {...eachOption} />
                            );
                        })
                    }
                </ul>
            }
        </div>
    );
}

Accordion.defaultProps = {
    show: false,
    title: "Title",
    // options: accordionOptions
};

export default Accordion;
