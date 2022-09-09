import React, { useState } from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import Tab from '../../components/common/tabOptions/Tab';
import Delivery from '../../components/Delivery/Delivery';
import DiningOut from '../../components/DiningOut/DiningOut';
import Nightlife from '../../components/NightLife/Nightlife';

const Homepage = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
      <div>
        <Header />
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* different screen */}
        {getCorrectScreen(activeTab)}
        <Footer />
      </div>
    );
};

const getCorrectScreen = (tab) => {
    switch (tab) {
      case 'Delivery':
        return <Delivery/>;
      case 'Dining Out':
        return <DiningOut/>;
      case 'Nightlife':
            return <Nightlife/>;
        default:
            return <Delivery />;
    }
}

export default Homepage;