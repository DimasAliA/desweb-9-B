import React from 'react';

const Story = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 p-1 mb-2">
         <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

const Stories = () => {
  const stories = [
    { name: 'Maulanafzr', image: '/images/wibu.jpg' },
    { name: 'Alma', image: '/images/wibu.jpg' },
    { name: 'Ghani', image: '/images/wibu.jpg' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow w-64">
      <h2 className="text-lg font-semibold mb-2">Stories</h2>
      <div className="flex items-center space-x-4 overflow-x-auto">
        {stories.map((story, index) => (
          <div key={index} className="flex-shrink-0">
            <Story image={story.image} name={story.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
