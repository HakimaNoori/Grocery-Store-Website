import React from 'react';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import WhereToBuy from './Components/WhereToBuy/WhereToBuy';

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy/>
    </main>
  );
};

export default App;