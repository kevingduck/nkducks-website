import * as React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';
import * as styles from './index.module.css';
import { navigate } from 'gatsby';

const IndexPage = () => {
  
  const goToOrder = () => {
    navigate('/order');  // Assuming there's an order page
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxHeight={'5000px'}
        image={'/nkducks-kitchen-banner.jpg'}  // Use the appropriate path to the NK Ducks Kitchen image
        title={''}
        subtitle={''}
        ctaText={''}
        ctaAction={goToOrder}
      />

      {/* Menu Container */}
      <div className={styles.menuContainer}>
        <Title name={'Menu'} />
        <ul>
            <li>Salads</li>
            <li>Fufu with tilapia light soup</li>
            <li>Kenkey with fried fish</li>
            <li>Fante kenkey with fried fish</li>
            <li>Special Waakye</li>
            <li>Jollof rice</li>
            <li>Chicken wings with chips</li>
            <li>Fried rice with chicken</li>
            <li>Banku with Grilled tilapia</li>
            <li>Spaghetti noodles</li>
        </ul>
      </div>

      {/* Contact Container */}
      <div className={styles.contactContainer}>
        <Title name={'Contact Us'} />
        <p>ORDER NOW: 0245908222</p>
        <p>Located at: 9 Comm, 18-20 washing Bay</p>
        <p>Catering for parties, weddings, engagements, funerals, and more.</p>
      </div>

    </Layout>
  );
};

export default IndexPage;
