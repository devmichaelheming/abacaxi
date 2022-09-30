import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
// import Modal from "../elements/Modal";
// import Image from "../elements/Image";

import ImgOne from "../../assets/images/gado1.png";
import ImgTwo from "../../assets/images/gado2.png";
import ImgThree from "../../assets/images/gado3.png";
// import Video1 from "../../../assets/images/video1.mp4";
// import Video2 from "../../../assets/images/video2.mp4";
// import Video3 from "../../../assets/images/video3.mp4";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  // const [, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  const outerClasses = classNames(
    "feature section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Titulo estático",
    paragraph: "Esta seção está em desenvolvimento",
  };

  const items = [
    <div
      style={{
        display: "flex",
        height: "340px",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 4px",
      }}
    >
      <img src={ImgOne} />
    </div>,
    <div
      style={{
        display: "flex",
        height: "340px",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 4px",
      }}
    >
      <img src={ImgTwo} />
    </div>,
    <div
      style={{
        display: "flex",
        height: "340px",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 4px",
      }}
    >
      <img src={ImgThree} />
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <AliceCarousel
              controlsStrategy="alternate"
              infinite
              autoPlay
              autoPlayInterval={2000}
              mouseTracking
              items={items}
              responsive={responsive}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
