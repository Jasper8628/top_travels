import './App.css';
import React, { useState } from 'react';
import Card from './components/card';
import * as _ from 'lodash';

function App() {
  const [slider, setSlider] = useState({
    skew: 0,
    value: 0,
    angle: 0,
    tan: 0,
    y: 0
  });
  const deb = _.debounce((e) => {
    if (e.deltaY > 0) {
      console.log(e.deltaY)
      const value = slider.value + 40
      const randian = Math.abs(Math.cos(value / 480 * Math.PI));
      const y = Math.sin(value / 540 * Math.PI + Math.PI / 2);
      setSlider({
        skew: 0,
        value: value,
        angle: -value - 165,
        tan: randian,
        y: y
      });
    } else {
      const value = slider.value - 40;
      const randian = Math.abs(Math.cos(value / 480 * Math.PI));
      const y = Math.sin(value / 540 * Math.PI + Math.PI / 2);
      setSlider({
        skew: 0,
        value: value,
        angle: -value - 165,
        tan: randian,
        y: y
      })
    }
  }, 50);
  const scrollHandler = (e) => {
    if (e.deltaY > 0) {
      console.log(e.deltaY)
      const value = slider.value + 30
      const randian = Math.abs(Math.cos(value / 480 * Math.PI));
      const y = Math.sin(value / 540 * Math.PI + Math.PI / 2);
      setSlider({
        skew: 1,
        value: value,
        angle: -value - 165,
        tan: randian,
        y: y
      });
    } else {
      const value = slider.value - 30;
      const randian = Math.abs(Math.cos(value / 480 * Math.PI));
      const y = Math.sin(value / 540 * Math.PI + Math.PI / 2);
      setSlider({
        skew: -1,
        value: value,
        angle: -value - 165,
        tan: randian,
        y: y
      })
    }
    deb(e)
  }
  return (
    <div className='container' onWheel={scrollHandler} >
      <Card skew={slider.skew} color='white' value={slider.value} />
      <Card skew={slider.skew} color='white' value={slider.value - 100} />
      <Card skew={slider.skew} color='white' value={slider.value - 200} />
      <Card skew={slider.skew} color='white' value={slider.value - 300} />
      <Card skew={slider.skew} color='white' value={slider.value - 400} />
      <Card skew={slider.skew} color='white' value={slider.value - 500} />
      <Card skew={slider.skew} color='white' value={slider.value - 600} />
      <Card skew={slider.skew} color='white' value={slider.value - 700} />
      <Card skew={slider.skew} color='white' value={slider.value - 800} />
      <Card skew={slider.skew} color='white' value={slider.value - 900} />
      <Card skew={slider.skew} color='white' value={slider.value - 1000} />
      <Card skew={slider.skew} color='white' value={slider.value - 1100} />
      <Card skew={slider.skew} color='white' value={slider.value - 1200} />
      <Card skew={slider.skew} color='white' value={slider.value - 1300} />
      <Card skew={slider.skew} color='white' value={slider.value - 1400} />
      <Card skew={slider.skew} color='white' value={slider.value - 1500} />
      <Card skew={slider.skew} color='white' value={slider.value - 1600} />
      <Card skew={slider.skew} color='white' value={slider.value - 1700} />
      <Card skew={slider.skew} color='white' value={slider.value - 1800} />
      <Card skew={slider.skew} color='white' value={slider.value - 1900} />
      <Card skew={slider.skew} color='white' value={slider.value - 2000} />
    </div>
  );
}

export default App;
