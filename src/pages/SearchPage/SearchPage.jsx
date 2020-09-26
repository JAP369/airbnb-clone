import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';

import './SearchPage.css';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 Stays．26 August to 30 August．2 Guest</p>
        <h1>Stays Nearby</h1>
        <Button variant='outlined'>Cancellation</Button>
        <Button variant='outlined'>Flexibility</Button>
        <Button variant='outlined'>Type of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms & Beds</Button>
        <Button variant='outlined'>More Filters</Button>
      </div>
      <SearchResult
        img='https://media-cdn.tripadvisor.com/media/photo-s/14/e1/33/ea/cheong-fatt-tze-the-blue.jpg'
        location='Heart of Hong Kong'
        title='Stay at this wonderful spacious mansion...'
        desc='3 Guest﹒12 Bedrooms﹒18 Beds﹒6 Bathrooms﹒Wifi﹒Open & Close Kithcen﹒Balcony﹒Rooftop﹒Swimming Pool﹒Free Parking'
        star={4.99}
        price='HK$6699 / night'
        total='HK$10000 total'
      />
      <SearchResult
        img='https://media-cdn.tripadvisor.com/media/photo-s/14/e1/33/ea/cheong-fatt-tze-the-blue.jpg'
        location='Heart of Hong Kong'
        title='Stay at this wonderful spacious mansion...'
        desc='3 Guest﹒12 Bedrooms﹒18 Beds﹒6 Bathrooms﹒Wifi﹒Open & Close Kithcen﹒Balcony﹒Rooftop﹒Swimming Pool﹒Free Parking'
        star={5}
        price='HK$6699 / night'
        total='HK$10000 total'
      />
      <SearchResult
        img='https://media-cdn.tripadvisor.com/media/photo-s/14/e1/33/ea/cheong-fatt-tze-the-blue.jpg'
        location='Heart of Hong Kong'
        title='Stay at this wonderful spacious mansion...'
        desc='3 Guest﹒12 Bedrooms﹒18 Beds﹒6 Bathrooms﹒Wifi﹒Open & Close Kithcen﹒Balcony﹒Rooftop﹒Swimming Pool﹒Free Parking'
        star={5}
        price='HK$6699 / night'
        total='HK$10000 total'
      />
    </div>
  );
}

export default SearchPage;
