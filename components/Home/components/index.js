import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import FoodInfo from './FoodInfo';
// import { data } from '../../../constants/SampleData';
import { getFoodData } from '../../../action/homeActions';

export default function InnerComponents() {
  const [foodInfo, setFoodInfo] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await getFoodData("/home");
      setFoodInfo({ ...response });
    }
    getData();
  }, []);
  return (
    <>
      <main style={{ margin: "0 15px" }}>
        <section className="items">
          <Breadcrumb />
          {
            Object.keys(foodInfo).length ? <FoodInfo foodData={foodInfo} /> : null
          }
        </section>
      </main>
    </>
  );
}
