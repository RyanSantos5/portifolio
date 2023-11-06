import { useEffect, useState } from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Job from '../components/Job';
import Contact from '../components/Contact';
import Pilares from '../components/Pilares';
import Statistics from '../components/Statistics';
import PilaresDetail from '../components/PilaresDetail';


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Pilares />
      <Statistics />
      {/* <PilaresDetail /> */}
      <About />
      <Job />
      {/* <Gallery />  */}
      <Contact />
    </div>
  );
}

export default Home;