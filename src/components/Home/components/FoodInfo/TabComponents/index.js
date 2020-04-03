import React, { useState, useEffect } from 'react';
import Indian from './Indian';
import Biryani from './Biryanis';
import BBQ from './BBQ';
import QuickBites from './QuickBites';
import MenuBar from '../MenuBar';

const components = [Indian, Biryani, BBQ, QuickBites];

export default function Tabsets(props) {
    const { compIndex } = props;
    const [dataInd, setDataInd] = useState([]);
    const [dataBiryani, setDataBiryani] = useState([]);
    const [dataBBQ, setDataBBQ] = useState([]);
    const [dataQuickBites, setDataQuickBites] = useState([]);
    useEffect(() => {
        setComponentIndex(compIndex)
    }, [compIndex]);

    const [componentIndex, setComponentIndex] = useState(compIndex);
    const RenderComponent = components[componentIndex]
    return (
        <>
            <div className="tabcontent">
                <MenuBar />
                <RenderComponent {...props}
                    dataInd={dataInd} setDataInd={setDataInd}
                    dataBiryani={dataBiryani} setDataBiryani={setDataBiryani}
                    dataBBQ={dataBBQ} setDataBBQ={setDataBBQ}
                    dataQuickBites={dataQuickBites} setDataQuickBites={setDataQuickBites}
                />
            </div>
        </>
    );
}
Tabsets.defaultProps = {
    componentIndex: 0,
};
