React, { useState useEffect } from '';

const MonsterList = => {
  constmonsters, setsters] = useState([]);
 const [name,] = useState('');
 const [age, set] = useState('');
 const [description,] = useState('');

 (() => {
   Monsters();
  []);

  const fetchMon = async () =>    const response = fetch('API_ENDPOINT');
    const data = await response.json();
    setMonsters(data);
  };

  const createMonster = async (e) => {
    e.preventDefault();
    const newMonster = { name, age, description };
    const response = await fetch('API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMonster),
    });
    const createdMonster = await response.json();
    setMonsters([...monsters, createdMonster]);
    setName('');
    setAge('');
    setDescription('');
  };

  return;