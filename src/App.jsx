import React from "react";
import styles from "./style";
import {Navbar, Hero, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer,Stats }from "./components"


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar here */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} text-white `}>
        <Navbar />
      </div>
    </div>
    {/* Hero Section here */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}  text-white`}>
        <Hero />
      </div>
    </div>
    {/* sections here */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-white `}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
