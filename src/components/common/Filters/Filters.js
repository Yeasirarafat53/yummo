import React from 'react';
import './filter.css';
import FilterItem from './FilterItem/FilterItem';

const Filters = ({filtersList}) => {
    return (
      <div className="filters">
        {filtersList &&
          filtersList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id} />;
          })}
      </div>
    );
};

export default Filters;