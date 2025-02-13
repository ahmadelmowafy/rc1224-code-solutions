/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { PokemonList } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(): void {
    setPokedex([...pokedex, { number: '051', name: 'Ahmad' }]);
  }

  function handleUpdate(): void {
    const fakePokemon = { number: '039', name: 'Donkey Kong' };
    const fakeList = pokedex.map((pokemon) =>
      pokemon.number === fakePokemon.number ? fakePokemon : pokemon
    );
    setPokedex(fakeList);
  }

  function handleRemove(): void {
    const shortList = pokedex.filter((pokemon) => pokemon.number !== '007');
    setPokedex(shortList);
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
