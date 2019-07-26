import React, {Component} from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">A brief introduction</h2>
                      <p>Until 2017, I had no knowledge or education in programming;
                        but the recent 2 years I made myself a passionate, self-taught
                        full-stack developer, with knowledge in IT and real business
                        issues.
                      </p>
                      <p>
                        Moving to React and VueJS, Front-end development is
                        increasingly a time-consuming process, which is why I would
                        like to join a larger team to make more production-grade web
                        applications.
                      </p>
                      <p>
                        I have PR work right and am available to start immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb"/>
                </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites
                      using JavaScript, Typescript, React, VueJS, HTML, CSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3"/>
                </span>
                  <div className="desc">
                    <h3>Network management</h3>
                    <p>
                      As someone who started tinkering with computers since the age of 2,
                      I have good grasp over networking and software
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data"/>
                </span>
                  <div className="desc">
                    <h3>DevOps</h3>
                    <p>
                      Developed and deployed my projects by me - using Docker, AWS, Ubuntu
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
