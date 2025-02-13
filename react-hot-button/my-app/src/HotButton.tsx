type Props = {
  clicks: number;
  onButtonClick: () => void;
};

export function HotButton({ clicks, onButtonClick }: Props) {
  let temperatureClass = '';

  if (clicks < 3) {
    temperatureClass = 'cold';
  } else if (clicks < 6) {
    temperatureClass = 'cool';
  } else if (clicks < 9) {
    temperatureClass = 'tepid';
  } else if (clicks < 12) {
    temperatureClass = 'warm';
  } else if (clicks < 15) {
    temperatureClass = 'hot';
  } else {
    temperatureClass = 'nuclear';
  }

  return (
    <>
      <button
        onClick={onButtonClick}
        className={`hot-button ${temperatureClass}`}>
        Hot Button
      </button>
      <p>Clicks: {clicks}</p>
    </>
  );
}
