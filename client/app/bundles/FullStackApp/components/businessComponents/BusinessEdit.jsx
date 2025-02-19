import React from 'react';
import EditFounders from '../foundersComponents/EditFounders';

const BusinessEdit = ({
  business,
  editSubmitCallback,
  id,
  cancelEditCallback,
  addFounderCallback,
  founders
}) => {
  const editSubmit = ev => {
    ev.preventDefault();
    let name;
    let shortdesc;
    let longdesc;
    let location;
    let founded;
    let city;
    let state;
    if (!ev.target[0].value) {
      name = business.name;
    } else {
      name = ev.target[0].value;
    }

    if (!ev.target[1].value) {
      shortdesc = business.shortdesc;
    } else {
      shortdesc = ev.target[1].value;
    }

    if (!ev.target[2].value) {
      longdesc = business.longdesc;
    } else {
      longdesc = ev.target[2].value;
    }

    if (!ev.target[3].value) {
      city = business.location.split(',')[0];
    } else {
      city =
        ev.target[3].value.charAt(0).toUpperCase() +
        ev.target[3].value.slice(1);
    }

    if (!ev.target[4].value) {
      state = business.location.split(',')[1];
    } else {
      state = ev.target[4].value.toUpperCase();
    }

    if (!ev.target[5].value) {
      founded = business.founded;
    } else {
      founded = ev.target[5].value;
    }

    let editBody = {
      name,
      shortdesc,
      longdesc,
      location: `${city}, ${state}`,
      founded
    };
    return editSubmitCallback(editBody, id);
  };

  return (
    <div className='singleView'>
      <div>
        <form onSubmit={editSubmit}>
          <label>Business</label>
          <input placeholder={business.name} />
          <label>Tagline</label>
          <input placeholder={business.shortdesc} />
          <label>Description</label>
          <textarea placeholder={business.longdesc} />
          <label>
            City
            <input placeholder={business.location.split(',')[0]} />
          </label>
          <label>
            State
            <input
              placeholder={business.location.split(',')[1]}
              maxLength='2'
              width='2'
            />
          </label>
          <label>Founded</label>
          <input type='date' />

          <button style={{ marginLeft: '75%', width: '20%' }} type='submit'>
            Edit Entry
          </button>
        </form>
      </div>
      <EditFounders
        businessid={business.id}
        addFounderCallback={addFounderCallback}
        founders={founders}
      />
      <button onClick={() => cancelEditCallback()}>Cancel Edit</button>
    </div>
  );
};

export default BusinessEdit;
