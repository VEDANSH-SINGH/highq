import React from "react";
import "../css/Carousel.css";
class HeroCarausel extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      animating: false,
      animationDirection: "",
      animationDuration: 300,
      currentSlide: 0,
      slides: [
        {
          title: "Product1",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/02/10/03/12/winter-2054297__480.jpg",
          description: "description",
          details: {
            Rating: "stars to be printed here",
            Reviews: "some commments",
            Time_Ago: "SOME YEARS",
          },
        },
        {
          title: "Product2",
          imageUrl:
            "https://cdn.pixabay.com/photo/2020/04/18/14/58/money-5059442__480.jpg",
          description: "description",
          details: {
            Rating: "stars to be printed here for product 2",
            Reviews: "some commments product 2",
            Time_Ago: " posted product 2",
          },
        },
      ],
    };

    this.changeSlide = this.changeSlide.bind(this);
  }

  fireAnims(duration) {
    this.setState({
      animating: true,
      animationDirection: "out",
    });
    // halfway
    setTimeout(() => {
      this.setState({
        animating: true,
        animationDirection: "in",
      });
    }, duration / 2);
    // done
    setTimeout(() => {
      this.setState({
        animating: false,
        animationDirection: "",
      });
    }, duration);
  }

  changeSlide(dir) {
    const currentSlide = this.state.currentSlide;
    const slides = this.state.slides;

    if (dir === "right") {
      if (currentSlide < slides.length - 1) {
        this.fireAnims(this.state.animationDuration * 2);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide + 1,
          });
        }, this.state.animationDuration);
      }
    } else {
      if (currentSlide > 0) {
        this.fireAnims(this.state.animationDuration * 2);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide - 1,
          });
        }, this.state.animationDuration);
      }
    }
  }

  determineDir(delta) {
    if (delta > 0) {
      return "right";
    } else {
      return "left";
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }
  render() {
    let classes = ["slideshow"];
    if (this.state.animating) {
      classes.push(
        "slideshow--animated slideshow--" + this.state.animationDirection
      );
    } else {
      classes = ["slideshow"];
    }
    return (
      <div className={classes.join(" ")}>
        <Slide
          title={this.state.slides[this.state.currentSlide].title}
          image={this.state.slides[this.state.currentSlide].imageUrl}
          description={this.state.slides[this.state.currentSlide].description}
          details={this.state.slides[this.state.currentSlide].details}
          count={this.state.currentSlide + 1}
          changeSlide={this.changeSlide}
          slideLength={this.state.slides.length}
        />
      </div>
    );
  }
}

class Slide extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="slide">
        {/*<div className="slide__decorative-sidebar">
          <img src="https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378__480.jpg" />
        </div>*/}
        <div className="slide__info">
          <div className="slide__info__text">
            <h1 className="slide__info__title">{this.props.title}</h1>
            <p className="slide__info__description">{this.props.description}</p>
          </div>
          <img
            src={this.props.image}
            alt={this.props.title}
            className="slide__info__image"
          />
          <div className="slide__arrows">
            <a
              className={
                this.props.count > 1
                  ? `slide__arrows__arrow`
                  : `slide__arrows__arrow slide__arrows__arrow--disabled`
              }
              onClick={(e) => this.props.changeSlide("left")}
            >
              {`<`}
              {/* shrug */}
            </a>
            <a
              className={
                this.props.count < this.props.slideLength
                  ? `slide__arrows__arrow`
                  : `slide__arrows__arrow slide__arrows__arrow--disabled`
              }
              onClick={(e) => this.props.changeSlide("right")}
            >
              {`>`}
            </a>
          </div>
        </div>

        <div className="slide__next">
          <span>Next: Factors</span>
        </div>

        <div className="slide__details">
          <div className="slide__details__title">Discover the details</div>

          <div className="slide__details__block slide__details__block--temp">
            <h3 className="slide__details__subtitle">Ratings</h3>
            <p className="slide__details__block__description">
              {this.props.details.Rating}
            </p>
          </div>

          <div className="slide__details__block slide__details__block--water">
            <h3 className="slide__details__subtitle"> Reviews</h3>
            <p className="slide__details__block__description">
              {this.props.details.Reviews}
            </p>
          </div>

          <div className="slide__details__block slide__details__block--nutrition">
            <h3 className="slide__details__subtitle">Time</h3>
            <p className="slide__details__block__description">
              {this.props.details.Time_Ago}
            </p>
          </div>
        </div>

        {/*<div className="slide__count">
          <p className="slide__count__title">Product</p>
          <span className="slide__count__count">
            0<span>{this.props.count}</span>
          </span>
        </div>*/}
      </div>
    );
  }
}
export default HeroCarausel;
