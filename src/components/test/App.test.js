import React from 'react';
import { render } from '@testing-library/react';
import { RxLightningBolt } from 'react-icons/rx';
import { GiPopcorn, GiBrain } from 'react-icons/gi';
import App from '../../App';

jest.mock('../elements/sound/Alarm.mp3', () => './__mocks__/Alarm.mock.mp3');

const mapControl = [
  { menu: 'Long Pause', icon: <RxLightningBolt size={18} /> },
  { menu: 'Short Pause', icon: <GiPopcorn size={18} /> },
  { menu: 'Focus', icon: <GiBrain size={18} /> },
];

test('renders the App component', () => {
  render(<App mapControl={mapControl} />);
});
