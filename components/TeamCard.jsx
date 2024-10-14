import React from 'react';

const ProfileCard = ({ imageUrl, name, title, institution }) => {
  return (
    <div className='py-4 w-[250px]'>
      <div className='flex flex-col items-center '>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-3/5 h-3/5 object-cover rounded-full" />
        ) : (
          <div className="w-3/5 h-3/5 bg-blue-200" />
        )}
      </div>
      <div className="mt-2 px-4 text-center">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-md text-gray-600 mb-1">{title}</p>
        <p className="text-sm text-gray-500">{institution}</p>
      </div>
    </div>
  );
};

export default ProfileCard;