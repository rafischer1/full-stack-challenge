import React from 'react';
import BusinessesList from './BusinessesList';

const Businesses = ({ businesses, viewItemCallback }) => {
  if (businesses.length === 0) {
    return <div>Loading...✨</div>;
  } else {
    return (
      <span>
        {businesses.map((x, y) => (
          <BusinessesList
            id={y}
            key={y}
            item={x}
            viewItemCallback={viewItemCallback}
          />
        ))}
      </span>
    );
  }
};

export default Businesses;
