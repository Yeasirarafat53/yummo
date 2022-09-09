import React from 'react';
import ExploreSection from '../common/exploreSection/ExploreSection';
import Filters from '../common/Filters/Filters';
import './Delivery.css';
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/TopBrands';
import { restaurants } from './../../data/restaurants';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fa-solid fa-sliders f-icon absolute-center"></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Rating: 4.0+',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Pure Veg',
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-arrow-up-short-wide absolute-center"></i>,
    title: 'Delivery Time',
  },
  {
    id: 6,
    title: 'Great Offers',
  },
];

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurant in Dhaka"
      />
    </div>
  );
};

export default Delivery;
