import React from 'react';
import "./supportpage.css";

function Support() {
  const supportInfo = [
    {
      number: '01',
      title: 'Travel Requirements for Dubai',
      description: 'Find help with booking and travel plans, see what to expect along the journey to your destinations!'
    },
    {
      number: '02',
      title: 'Chauffeur Services at Your Arrival',
      description: 'Find help with booking and travel plans, see what to expect along the journey to your destinations!'
    },
    {
      number: '03',
      title: 'Multi-Risk Travel Insurance',
      description: 'Find help with booking and travel plans, see what to expect along the journey to your destinations!'
    }
  ];

  return (
    <div className='support-section container'>
      <div className='support-container'>
        <div className='titles-div'>
          <small>Travel Support</small>
          <h2>Plan Your Travel with Confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>

        <div className='info-div grid'>
          <div className='text-grid-div'>
            {supportInfo.map((info, index) => (
              <div className='single-info' key={index}>
                <span className='number'>{info.number}</span>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
              </div>
            ))}
          </div>

          <div className='img-div'>
            <img src='https://media.istockphoto.com/id/1324788761/photo/isla-mujeres-in-mexico-viewed-from-airplane-window.jpg?s=612x612&w=0&k=20&c=TYr74RmUsQoKbUmNFmEvstyrLuoZv17eIOPhqAKyhBM=' alt='Travel support' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
