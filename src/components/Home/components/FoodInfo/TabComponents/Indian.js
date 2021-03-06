import React, { useEffect } from 'react';
import Accordion from '../../../../../common/Accordion';
import Cart from '../../../../../common/Cart/Cart';
import { cartOptions } from '../../../../../constants/SampleData';
import Label from '../../../../../common/Label';
import Button from '../../../../../common/Button';
import AddMinusButton from '../../../../../common/AddMinusButton';
import { getFoodData } from '../../../../../action/homeActions';

export default function Indian(props) {
    const { dataInd, setDataInd } = props;
    useEffect(() => {
        async function getData() {
            const response = await getFoodData("/home/food/indian");
            if (response && response.length) {
                setDataInd([...response]);
            }
        }
        if (!dataInd.length) {
            getData();
        }
    }, [dataInd.length, setDataInd]);
    return (
        <>
            <div className="cart-section flex-row" style={{ margin: "40px" }}>
                <div className="cart-section-left" style={{ marginRight: 20, flex: "1 1 60%" }}>
                    {
                        dataInd.length ? (
                            <>
                                <Accordion
                                    title="Drumstick Chicken Gravy"
                                    options={dataInd}
                                    show={true}
                                />
                                <Accordion
                                    title="Drumstick Chicken Gravy"
                                    options={dataInd}
                                />
                                <Accordion
                                    title="Drumstick Chicken Gravy"
                                    options={dataInd}
                                />
                            </>
                        )
                            :
                            null
                    }
                </div>
                <div className="cart-section-right">
                    {
                        dataInd.length ? (
                            <>
                                <Cart>
                                    <Cart.Header>
                                        <Label as="h3">Cart</Label>
                                        <Label as="p" className="accordian-header-lbl">
                                            {`${cartOptions.length} items`}
                                        </Label>
                                    </Cart.Header>
                                    <Cart.Content>
                                        {cartOptions.map(eachCartOption => (
                                            <Cart.CartItem>
                                                <AddMinusButton value={eachCartOption.value} />
                                                <div
                                                    className="flex-col"
                                                    style={{ marginLeft: 14, marginRight: 25 }}
                                                >
                                                    <Label as="h5">{eachCartOption.name}</Label>
                                                    {eachCartOption.desc && (
                                                        <Label>{eachCartOption.desc}</Label>
                                                    )}
                                                </div>
                                                <Label styles={{ whiteSpace: "nowrap" }}>
                                                    {eachCartOption.tag}
                                                </Label>
                                            </Cart.CartItem>
                                        ))}
                                    </Cart.Content>
                                    <Cart.Footer>
                                        <div className="flex-justify-sb" style={{ margin: "16px 0" }}>
                                            <Label as="h5">Total</Label>
                                            <Label>70.00 Rs</Label>
                                        </div>
                                        <Button type="custom" styles={{ width: "100%", height: 50 }}>Check Out</Button>
                                    </Cart.Footer>
                                </Cart>
                            </>
                        )
                            :
                            null
                    }
                </div>
            </div>
        </>
    );
}
