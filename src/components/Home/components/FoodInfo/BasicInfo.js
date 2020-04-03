import React from 'react';
// import foodImage from "../../../../assets/img/food.png"
import Ratings from './Ratings';
import PriceInfo from './PriceInfo';
import Label from '../../../../common/Label';

export default function BasicInfo(props) {
  const { foodData } = props;
  return (
    <>
      <div class="item-info">
        <div class="img-and-ratings">
          <figure class="food-image">
            <img src={require(`../../../../assets/img/${foodData.image}`)} alt="food-img" />
          </figure>
          <div class="item-details">
            <div class="dish-info">
              <Label size={24} as="h3">{foodData.title}</Label>
              <Label size={14}>{foodData.desc}</Label>

              {/* <h1>SS Hyderabad Biriyani</h1> */}
              {/* <p>North Indian, Chinese</p> */}
            </div>
            <div class="ratings">
              <Ratings {...props} />
            </div>
          </div>
        </div>
        <div class="food-details">
          <PriceInfo />
        </div>
      </div>
    </>
  );
}
