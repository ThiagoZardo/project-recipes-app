import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Profile</h3>
        <Header />
      </header>
      <Footer />
    </div>
  );
}

export default Profile;
