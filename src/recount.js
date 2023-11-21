import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Appel à une API externe pour récupérer des données
    fetch('https://reqres.in/api/users?per_page=20')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }, []);

  return (
    <div>
      {users ? (
        <ul>
          {users.map(item => (
            <li key={item.first_name}>{item.last_name}</li>
          ))}
        </ul>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};