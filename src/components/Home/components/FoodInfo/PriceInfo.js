import React from 'react';
import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';
import Label from '../../../../common/Label';
import Image from '../../../../common/Image';

export default function PriceInfo() {
    return (
        <>
            <div class="share">
                <Button className="btn-fav share-btns mr-15">
                    <Icon
                        name="fa-heart"
                        className="icon-fav"
                    />
                    <Label as="span" className="lbl-fav">
                        Favourite
                    </Label>
                </Button>
                <Button className="btn-fav share-btns mr-15">
                    <Label as="span" className="lbl-fav">
                        Paylas
                    </Label>
                </Button>
                <Button className="btn-fb share-btns">
                    <Icon
                        name="fa-facebook-official"
                        className="icon-fb"
                    />
                    <Label as="span" className="lbl-fav">
                        Facebook
                    </Label>
                    <Label as="span" className="lbl-fav" styles={{ marginLeft: 5 }}>
                        (1.2K)
                    </Label>
                </Button>
            </div>
            <div class="general-info">
                <div className="flex-center">
                    {/* <Icon name="fa-plus" className="mr-15" size={14} /> */}
                    <Image className="wallet-img" src={require("../../../../assets/img/wallet.svg")} alt="wallet"/>
                    <div className="flex-center flex-col">
                        <Label as="h4" size={16}>24TL</Label>
                        <Label as="p" size={10}>Min. Paket Tutan</Label>
                    </div>
                </div>
                <div className="flex-center">
                <Image className="wallet-img" src={require("../../../../assets/img/helmet.svg")} alt="wallet"/>
                    <div className="flex-center flex-col">
                        <Label as="h4" size={16}>45dk</Label>
                        <Label as="p" size={10}>Min. Paket Tutan</Label>
                    </div>
                </div>
                <div className="flex-center schedule">
                    <Icon name="fa-plus" className="mr-15" size={14} />
                    
                    <div className="flex-center flex-col">
                        <Label as="h4" size={16}>45dk</Label>
                        <Label as="p" size={10}>Min. Paket Tutan</Label>
                    </div>
                </div>
            </div>
        </>
    );
}
