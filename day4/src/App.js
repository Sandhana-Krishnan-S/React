import React from 'react'
import PropsClass from './components/PropsClass';
import PropsFun from './components/PropsFun';
import StateClass from './components/StateClass';

function App() {
  return (
    <div className='App'>
      <PropsClass Name = 'Sandu' Class = 'IT-C' />
      <PropsFun Hobby = 'Sketching' />
      <StateClass />
    </div>
  )
}

export default App;
