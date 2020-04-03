import React, { Fragment, useState } from 'react';
import BasicInfo from "./BasicInfo"
import { tabsetData } from '../../../../constants/tabConstants';
import Tab from '../../../../common/Tabs';
import Tabsets from './TabComponents';

export default function FoodInfo(props) {
    const { foodData } = props;
    const [compIndex, setCompIndex] = useState(0)
    const onChangeTab = (index) => () => {
        setCompIndex(index)
    }
    return (
        <>
            <div className="content-body">
                <div class="food-info">
                    <BasicInfo foodData={foodData} />
                </div>
                <div className="dishes">
                    <div class="tab">
                        {
                            tabsetData.length ?
                                tabsetData.map((eachTab, tabIndex) => {
                                    let active = tabIndex === compIndex ? "active" : ""
                                    return (
                                        <Fragment key={`tab${tabIndex}`}>
                                            <Tab key={`${eachTab}${tabIndex}`} className={`tablinks div ${active}`} tabObj={eachTab} index={tabIndex} onChangeTab={onChangeTab} />
                                        </Fragment>
                                    )
                                })
                                :
                                null
                        }
                    </div>
                    <Tabsets compIndex={compIndex} />
                </div>
            </div>
        </>
    );
}
