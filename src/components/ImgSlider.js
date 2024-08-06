import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };



  
  return (
    <Carousel {...settings}>
      <Wrap>
        <Link to="/detail/yWLJaa3VSUVZ2md6Zu3T">
          <Banner>
            <img src="/images/slider-raya.jpg" alt="Slider" />
          </Banner>
          <Content to="/detail/yWLJaa3VSUVZ2md6Zu3T">
            <h1>Raya</h1>
            <h3>2021 • 1h 52m </h3>
            <h3> Family, Fantasy, Animation, Action-Adventure</h3>
          </Content>
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/detail/M0SooRzLmd5ZArTerczL">
          <Banner>
            <img src="/images/slider-scales.jpg" alt="Slider" />
          </Banner>
          <Content to="/detail/M0SooRzLmd5ZArTerczL">
            <h1>Assembled</h1>
            <h3>2021 • 1 season </h3>
            <h3> Docuseries, Anthology</h3>
          </Content>
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/detail/3tyMxFC6xQfVctXmaJa4">
          <Banner>
            <img src="/images/slider-badging.jpg" alt="Slider" />
          </Banner>
          <Content to="/detail/3tyMxFC6xQfVctXmaJa4">
            <h1>Burrow</h1>
            <h3>2021 • 6m </h3>
            <h3>Family,Animation</h3>
          </Content>
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/detail/OZEAicFUw8m9Tg8X0weh">
          <Banner>
            <img src="/images/slider-faws.jpg" alt="Slider" />
          </Banner>
          <Content to="/detail/OZEAicFUw8m9Tg8X0weh">
            <h1>The falcon and the winter soldier</h1>
            <h3>2021 • 1 season </h3>
            <h3>Science Fiction, Action-Adventure</h3>
          </Content>
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/detail/iqmmrrhS8uqYxdpnBm3M">
          <Banner>
            <img src="/images/slider-badag.jpg" alt="Slider" />
          </Banner>
          <Content to="/detail/iqmmrrhS8uqYxdpnBm3M">
            <h1>Onward</h1>
            <h3>2020• 1h 42m </h3>
            <h3>kids,Family,Animation,Fantasy</h3>
          </Content>
        </Link>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  cursor: pointer;
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(158, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      transition-duration: 300ms;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

const Banner = styled.div`
  height: 100%;
  border: 4px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  transition: 0.5s;

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px) {
    height: 250px;
    position: relative;
  }

  @media (max-width: 480px) {
    height: 220px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      object-position: 75% 0%;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    left: 35px;
  }

  @media (max-width: 480px) {
    left: 25px;
    width: 70%;
  }

  h1 {
    @media (max-width: 640px) {
      font-size: 25px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  h3 {
    margin-top: 10px;

    @media (max-width: 640px) {
      margin-top: 6px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;
export default ImgSlider;
