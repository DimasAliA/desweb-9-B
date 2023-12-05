// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faCompass,
  faBookmark,
  faEnvelope,
  faBell,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white p-5 fixed">
      <div className="flex items-center space-x-4 mb-6">
        <img
          className="h-12 w-12 rounded-full"
          src="path_to_your_profile_image"
          alt="User profile"
        />
        <span className="font-semibold text-lg">Felix Dean</span>
      </div>

      <div className="mb-6">
        <input
          className="w-full p-2 rounded-full text-sm placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-blue-500"
          type="search"
          placeholder="Search..."
        />
      </div>

      <nav className="mb-6">
        <ul>
            {[
                { name: 'Home', icon: faHouseUser },
                { name: 'Explore', icon: faCompass },
                { name: 'Saved', icon: faBookmark },
                { name: 'Messages', icon: faEnvelope },
                { name: 'Notifications', icon: faBell }
            ].map((item) => (
                <li key={item.name} className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer" style={{ textAlign: 'left' }}>
                    <FontAwesomeIcon icon={item.icon} className="mr-4" />
                    {item.name}
                </li>
            ))}
        </ul>
    </nav>

      <div className="mt-auto">
        <div className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer mb-4">
          <FontAwesomeIcon icon={faCog} className="mr-4" />
          Settings
        </div>
        <div className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
          Logout
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-6">
        Privacy · Terms · Advertising · Cookies
      </div>
    </aside>
  );
};

export default Sidebar;
