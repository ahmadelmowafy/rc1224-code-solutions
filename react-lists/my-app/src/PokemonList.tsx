interface Pokemon {
  number: string;
  name: string;
}

type Props = {
  list: Pokemon[];
};

export function PokemonList({ list }: Props) {
  const listItems = list.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
