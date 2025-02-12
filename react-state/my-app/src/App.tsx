import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/cool-car.jpg', '/cool-cat.jpg'];
const captions = [
  'A Beautiful Image of Space',
  'A Very Cool Car',
  'A Very Awesome Cat',
];
const descriptions = [
  'This is a very beautiful image of space!',
  'This is a picture of a very cool car!',
  'This is a picture of a very awesome cat!',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
