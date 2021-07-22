import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import profile from '../assets/images/profile.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Needon.kr" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Needon.kr</h2>
                </header>
                <p>
                  <ul className="index_icons">

                    {/* name */}
                    <li>
                      <a
                        href="https://github.com/k4584587"
                        className="icon fa-user alt"
                      >
                        <span className="label">GitHub</span>
                      </a>
                      <span>Kim Hyun Woo (김현우)</span>
                    </li>

                    {/* github */}
                    <li>
                      <a
                        href="https://github.com/k4584587"
                        className="icon fa-github alt"
                      >
                        <span className="label">GitHub</span>
                      </a>
                      <span><a href="https://github.com/k4584587">k4584587</a></span>
                    </li>

                    <li>
                      <a href="https://blog.needon.kr" className="icon fa-pencil alt">
                        <span className="label">Blog</span>
                      </a>
                      <span><a href="https://blog.needon.kr">Blog (Tistory)</a></span>
                    </li>
                  </ul>
                </p>
                <ul className="actions">
                  <li>
                    {/* <Link to="/generic" className="button">
                      Learn More
                    </Link> */}
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={profile} alt="" />
              </span>
            </div>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Needon Server Status</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>


          </section>


        </div>
      </Layout>
    )
  }
}

export default Index
