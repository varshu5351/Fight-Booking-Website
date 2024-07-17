import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';
import "./searchpage.css";

function Search() {
  const [flightClass, setFlightClass] = useState('Economy');
  const [location, setLocation] = useState('');
  const [travelers, setTravelers] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleClassChange = (flightClass) => {
    setFlightClass(flightClass);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log({ flightClass, location, travelers, checkIn, checkOut });
  };

  return (
    <div className='search'>
      <div className='sectioncontainer'>
        <div className='sectioncontainergrid'>
          <div className='buttonsflex'>
            {['Economy', 'Business Class', 'First Class'].map((cls) => (
              <div
                key={cls}
                className={`singlebutton ${flightClass === cls ? 'active' : ''}`}
                onClick={() => handleClassChange(cls)}
              >
                <span>{cls}</span>
              </div>
            ))}
          </div>
          <div className='all'>
            <div className='sreachsinputflex'>
              <div className='icondiv'>
                <HiOutlineLocationMarker className='icon' />
              </div>
              <div className='texts'>
                <h4>Location</h4>
                <input
                  type='text'
                  placeholder='Where do you want to go?'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className='sreachsinputflex'>
              <div className='icondiv'>
                <RiAccountPinCircleLine className='icon' />
              </div>
              <div className='texts'>
                <h4>Travelers</h4>
                <input
                  type='text'
                  placeholder='Add guests'
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                />
              </div>
            </div>
            <div className='sreachsinputflex'>
              <div className='icondiv'>
                <RxCalendar className='icon' />
              </div>
              <div className='texts'>
                <h4>Check In</h4>
                <input
                  type='date'
                  placeholder='Add Date'
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
            </div>
            <div className='sreachsinputflex'>
              <div className='icondiv'>
                <RxCalendar className='icon' />
              </div>
              <div className='texts'>
                <h4>Check Out</h4>
                <input
                  type='date'
                  placeholder='Add Date'
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>
            <button className='srchbut' onClick={handleSearch}>Search Flight</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
