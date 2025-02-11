import './Image.css';

type Props = {
  imgSrc: string;
};

export function Image({ imgSrc }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imgSrc} alt="space-image" />
      </div>
    </div>
  );
}
