import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Button } from '@material-ui/core';

//DATE PICKER COMPONENT
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setStartDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleAltIcon />
      </h2>
      <input type='number' min={0} defaultValue={2} />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;
