"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type RandomUser = {
  id: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  job: string;
};

const RandomUserCarousel = () => {
  const [users, setUsers] = useState<RandomUser[]>([]);

  useEffect(() => {
    const jobDescriptions = ['Writer', 'Designer', 'Animator', 'Code', 'Tester'];

    const fetchRandomUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        const randomUsers: RandomUser[] = response.data.results.map((user: any, index: number) => ({
          id: user.login.uuid,
          name: user.name,
          picture: user.picture,
          job: jobDescriptions[index], // Assigning different job descriptions
        }));
        setUsers(randomUsers);
      } catch (error) {
        console.error('Error fetching random users:', error);
      }
    };

    fetchRandomUsers();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {users.map(user => (
        <div key={user.id} className="border border-gray-200 p-4 rounded-md shadow-md flex flex-col items-center w-80 sm:w-auto">
          <div className="flex-shrink-0 transition duration-300 ease-in-out hover:scale-110">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} loading="lazy" className="rounded-lg w-64 h-64" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold">{`${user.name.first} ${user.name.last}`}</h2>
            <p className="text-gray-600">{user.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomUserCarousel;


