import React, {Component} from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2"/>
                      </div>
                      <div className="timeline-label">
                        <h2>Full stack developer @ Yes Education Sydney <span>2017-2019</span></h2>
                        <p>Developing pinxed.com, a multi-tenant CRM
                          cloud-software for Yes Education and its partners in the
                          education sector.
                          Trained and leaded 3 interns in Web Development.
                          Administered ccompany network for 30+ staffs in 6
                          oversea offices.
                          Also worked as a freelancer, developing websites and
                          React components
                          Liaise with clients from non-technical background and
                          develop new functions based on requirement.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2"/>
                      </div>
                      <div className="timeline-label">
                        <h2>Master of Commerce (Accounting) @ The University of Sydney<span>2014-2016</span></h2>
                        <p>
                          Accounting, law, business, economics, statistics.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2"/>
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of International Studies @ The University of Nottingham <span>2010-2014</span></h2>
                        <p>
                          Political science, history, French.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
