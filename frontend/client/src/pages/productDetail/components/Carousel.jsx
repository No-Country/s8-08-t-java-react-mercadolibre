import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [indexImg, setIndexImg] = useState(0);
  const changeImg = i => {
    setIndexImg(i);
  };

  const RenderizarImg = () => {
    return <img className="max-h-96" src={images[indexImg]?.imageUrl} />;
  };

  useEffect(() => {
    RenderizarImg;
  }, [indexImg]);

  return (
    <div className="flex w-100 box-border">
      <div className="w-1/6">
        {images?.map(img => {
          if (images.indexOf(img) <= 6) {
            return (
              <div className="w-auto flex justify-center items-center" key={images.indexOf(img)}>
                <img
                  src={img.imageUrl}
                  alt={`Image - ${images.indexOf(img)}`}
                  className={`w-16 h-16 object-contain p-2 m-2 cursor-pointer rounded border border-grey hover:border-ligthblue`}
                  onMouseOver={() => changeImg(images.indexOf(img))}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="w-5/6 flex justify-center items-center">{RenderizarImg()}</div>
    </div>
  );
};
export default Carousel;
