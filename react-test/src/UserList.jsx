import { useEffect, useState } from 'react';
import { fetchUsers } from './api.js';

export default function UserList({ search }) {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchUsers(search).then((data) => setUsers(data));
  });

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Cliccato {count} volte</button>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
