import React from 'react';
import NavbarCustom from './Components/0_Navbar/Navbar';
import Hero from './Components/1_Hero/Hero';
import Services from './Components/2_Services/Services';
import Container from 'react-bootstrap/Container';
import StateProvider from './Context/StateProvider';
import ModalImg from './Ui/Modal/ModalImg';
import ScheduleDetail from './Components/3_ScheduleDetail/ScheduleDetail';
import AboutUs from './Components/4_AboutUs/AboutUs';
import Coupons from './Components/5_Coupons/Coupons';
import Reviews from './Components/6_Reviews/Reviews';
import Gallery from './Components/7_Gallery/Gallery';
import Contact from './Components/8_Contact/Contact';
import Footer from './Components/9_Footer/Footer';
import ModalFormDetail from './Ui/Modal/ModalForm';
import ModalFormQuestionaire from './Ui/Modal/ModalFormQuestionaire';

const App = () => (
  <StateProvider>
    <NavbarCustom />
    <Hero />
    <Container>
      <Services />
      <ScheduleDetail />
      <AboutUs />
      <Coupons />
      <Reviews />
      <Gallery />
      <Contact />
    </Container>
    <Footer />
    <ModalImg />
    {/* <ModalForm /> */}
    <ModalFormDetail />
    <ModalFormQuestionaire />
  </StateProvider>
);

export default App;
