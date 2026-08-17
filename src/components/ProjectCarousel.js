import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ProjectCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isVideo = props.imgs[activeIndex]?.type === "youtube";

  return (
    <Carousel
      className={`project-carousel ${isVideo ? "video-active" : ""}`}
      interval={null}
      activeIndex={activeIndex}
      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
    >
      {props.imgs.map((img, index) => (
        <Carousel.Item key={index}>
          {img.type === "youtube" ? (
            <div className="video-wrapper">
              <div className="ratio ratio-16x9 video-inner">
                <iframe
                  className="w-100"
                  src={`https://www.youtube.com/embed/${img.content}`}
                  title="Test video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <img
              className="d-block w-100"
              src={img.content}
              alt={`Slide ${index + 1}`}
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectCarousel;