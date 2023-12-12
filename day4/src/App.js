import React from 'react'
import PropsClass from './components/PropsClass';
import PropsFun from './components/PropsFun';
import StateClass from './components/StateClass';
import StateFun from './components/StateFun';
import StateWirhObj from './components/StateWirhObj';
import Parent from './components/ParentChild';
import Dynamic from './components/Dynamic';
import TwoWay from './components/TwoWay';
import DefaultProps from './components/DefaultProps';

function App() {
  return (
    <div className='App'>
      <PropsClass Name = 'Sandu' Class = 'IT-C' />
      <PropsFun Hobby = 'Sketching' />
      <StateClass />
      <StateFun />
      <StateWirhObj />
      <Parent />
      <Dynamic />
      <TwoWay />
      <DefaultProps />
      <DefaultProps name = "Sandu" />
    </div>
  )
}

export default App;
