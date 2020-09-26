import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card
          src='https://skift.com/wp-content/uploads/2019/12/airbnb-plus-room-cape-town-1024x684.jpg'
          title='title1'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price='$111/night'
        />
        <Card
          src='https://gritdaily.com/wp-content/uploads/2019/11/Lyric-New-Orleans-3-Bed-3-Bath-Apartment.jpg'
          title='title2'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price='$111/night'
        />
        <Card
          src='https://luxus-plus.com/wp-content/uploads/2019/08/airbnb-luxe-luxury-1024x683.jpg'
          title='title3'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price='$111/night'
        />
      </div>
      <div className='home__section'>
        <Card
          src='https://gritdaily.com/wp-content/uploads/2019/11/Lyric-New-Orleans-3-Bed-3-Bath-Apartment.jpg'
          title='title4'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price='$111/night'
        />
        <Card
          src='https://skift.com/wp-content/uploads/2019/12/airbnb-plus-room-cape-town-1024x684.jpg'
          title='title5'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price='$111/night'
        />
        <Card
          src='https://luxus-plus.com/wp-content/uploads/2019/08/airbnb-luxe-luxury-1024x683.jpg'
          title='title6'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price='$111/night'
        />
      </div>
    </div>
  );
}

export default Home;
