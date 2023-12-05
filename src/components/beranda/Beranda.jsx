import React from 'react';
import Sidebar from './Sidebar';
import StatusUpdate from './StatusUpdate';
import Stories from './Stories';
import Contacts from './Contacts';
import WeatherWidget from './WeatherWidget';
import HomePage from './Homepage';

function Beranda() {
  return (
    <div className="app-container flex" style={{ backgroundImage: 'url("/images/gunung.jpg")' }}>
      <div className="w-1/5">
        <Sidebar />
      </div>
      <main className="w-3/5">
        <div className="flex flex-col space-y-4">
          <HomePage />
          <StatusUpdate />
        </div>
      </main>
      <aside className="w-1/5 ml-4">
        <div className="flex flex-col space-y-4">
          <Contacts />
          <Stories />
          <WeatherWidget />
        </div>
      </aside>
    </div>
  );
}

export default Beranda;
