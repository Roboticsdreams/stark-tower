import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <span className="heading-meta">Projects</span>
                                        <div className="about-desc">
                                            <h4><b>Rules (athenaCollector - RCM)</b></h4>
                                            <p>Rules help to create, format and submit error free claim to payer without any rejections. They also reduce the total turnaround time of claim billing process. Some rules are context specific where as others are global rules(which apply to all contexts).</p>
                                            <h4><b>Coding Services (athenaCollector)</b></h4>
                                            <p>Coding services improve the medical billing process and keep claims error-free with the help of expert medical billing teams that reduce work and hassle for optimal financial results. This service team and network intelligence help minimize the administrative and medical billing work. So that we get paid faster, with far less work.</p>
                                            <h4><b>Practice Structure & Posting (athenaCollector)</b></h4>
                                            <p>Practice Structure improves the flexibility of provider/clients. This service team will help to create/modify the structure/code based on practice level. We need not force any clients to change their existing processes and adoption of new software is a seamless experience. Remittance and Posting teamwork with payer to get their money and posted in providers buckets. We have a lot of important areas such as getting the remit files from payer, working with data entry and posting the claims and depositing the money to provider account etc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}
