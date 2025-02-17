import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner title={items[currentIndex]} />
      <PrevButton onHandlePrevClick={handlePrevClick} />
      <Indicators
        onHandleIndicatorClick={handleIndicatorClick}
        count={items.length}
        current={currentIndex}
      />
      <NextButton onHandleNextClick={handleNextClick} />
    </div>
  );
}

type BannerProps = {
  title: string;
};
function Banner({ title }: BannerProps) {
  return <h1>{title}</h1>;
}

type NextButtonProps = {
  onHandleNextClick: () => void;
};
function NextButton({ onHandleNextClick }: NextButtonProps) {
  return <button onClick={onHandleNextClick}>Next</button>;
}

type PrevButtonProps = {
  onHandlePrevClick: () => void;
};
function PrevButton({ onHandlePrevClick }: PrevButtonProps) {
  return <button onClick={onHandlePrevClick}>Prev</button>;
}

type IndicatorsProps = {
  count: number;
  current: number;
  onHandleIndicatorClick: (i: number) => void;
};
function Indicators({
  count,
  current,
  onHandleIndicatorClick,
}: IndicatorsProps) {
  const forLoopButtons = [];

  for (let i = 0; i < count; i++) {
    forLoopButtons.push(
      <button
        style={{
          backgroundColor: current === i ? 'lightblue' : 'white',
          color: 'black',
        }}
        onClick={() => onHandleIndicatorClick(i)}
        key={i}>
        {i}
      </button>
    );
  }
  return <div>{forLoopButtons}</div>;
}
