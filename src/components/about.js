import React, { Component } from 'react'

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
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>“A Techy guy who is fashinate of solving real time complex problem via digitial world with computer vision. Active participant of geeks of geeks and HackerRank.</p><p>I first became interested in sustainability because I wanted to work with a company whose mission is to promote a new textile economy — one that will protect the future of our planet. When I learned that the fashion industry will consume a quarter of the world’s annual carbon budget by 2050, I decided to organize a campus fundraising event to help fight textile waste.</p><p>We raised more than $10,000 and donated an entire truck of unwanted clothing to a local homeless shelter. It was one of my proudest accomplishments. At my last job, I helped develop a new technology that turns cotton waste into new materials that can be used for many industrial purposes.</p><p>I’m very excited about this opportunity at your company because it would allow me to use my knowledge and experience to educate people about how their actions — like their shopping habits and what brands they support — can make a serious impact on our environment.” </p>
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
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Problem Solving</h3>
                                        <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Database/NoSQL</h3>
                                        <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
