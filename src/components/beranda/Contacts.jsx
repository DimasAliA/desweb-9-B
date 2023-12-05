// Contacts.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ name, onOptionsClick }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md">
      <div className="flex items-center space-x-3">
        <div className="rounded-full bg-gray-300 h-8 w-8"></div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <button onClick={onOptionsClick}>
        <FontAwesomeIcon icon={faEllipsisV} className="text-gray-600" />
      </button>
    </div>
  );
};

const Contacts = () => {
  const contacts = [
    'Alma',
    'Maulanafzr',
    'Ghani',
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow w-64">
      <div className="flex items-center bg-gray-100 p-2 rounded-md mb-4">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
        <input
          className="bg-transparent p-1 w-full text-sm focus:outline-none"
          type="search"
          placeholder="Search contacts"
        />
      </div>
      <div className="mb-4">
        {contacts.map((contact, index) => (
          <Contact key={index} name={contact} onOptionsClick={() => console.log('Options clicked for', contact)} />
        ))}
      </div>
      <button className="flex items-center justify-center w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
        <FontAwesomeIcon icon={faPlus} className="text-white mr-2" />
        <span>Add Contact</span>
      </button>
    </div>
  );
};

export default Contacts;
