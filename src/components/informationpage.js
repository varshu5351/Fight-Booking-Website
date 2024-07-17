import React from 'react';
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs';
import { RxCalendar } from 'react-icons/rx';
import "./informationpage.css";

const Info = () => {
  const cardData = [
    {
      icon: <RxCalendar className='ico' />,
      title: 'Book & Relax',
      description: 'You can also call airlines from your phone and book a flight ticket!'
    },
    {
      icon: <BsShieldCheck className='ico' />,
      title: 'CheckList',
      description: 'Ensure everything is in order with our comprehensive travel checklist.'
    },
    {
      icon: <BsBookmarkCheck className='ico' />,
      title: 'Save More',
      description: 'Take advantage of our special deals and save more on your travels.'
    }
  ];

  return (
    <div className='info-section'>
      <div className='info-container container'>
        <div className='title-div flex'>
          <h2>Travel To Make Memories All Around The World</h2>
          <button className='button-view'>View All</button>
        </div>

        <div className='cards-div grid'>
          {cardData.map((card, index) => (
            <div className='single-card grid' key={index}>
              <div className='icon-div'>
                {card.icon}
              </div>
              <span className='card-title'>{card.title}</span>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
