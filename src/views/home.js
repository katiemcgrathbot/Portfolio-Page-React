import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-links-container">
            <a href="#img" className="home-link navbar-Link">
              About
            </a>
            <a href="#stats" className="home-link1 navbar-Link">
              Stats
            </a>
            <a href="#faq" className="home-link2 navbar-Link">
              FAQ
            </a>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="card-Heading home-heading">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link3 navbar-Link">About</span>
              <span className="home-link4 navbar-Link">Experience</span>
              <span className="home-link5 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-container2">
        <div className="home-hero">
          <img
            id="img"
            alt="image"
            src="/playground_assets/katie%20mcgrath%20bot%20header-1500w.png"
            className="home-image"
          />
        </div>
      </div>
      <h1 id="about1" className="home-text">
        This is the Katie McGrath bot page.
      </h1>
      <div className="home-features">
        <span id="about" className="home-text01">
          The bot was created to keep old Katie content circulating, as
          everyone&apos;s favorite Irish hermit shows up maybe once in a blue
          moon.
        </span>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container">
            <h1 id="stats" className="home-text02">
              This is how far along I am on uploading pictures to the
              repository.
            </h1>
          </div>
          <div className="home-content-container">
            <div className="home-about-1">
              <span className="home-text03">
                <span>
                  Photoshoots
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text05">100%</span>
                <br></br>
                <span>
                  Red Carpets and Events
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text08">0%</span>
                <br></br>
                <span>
                  Supergirl
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text11">12.5%</span>
                <br></br>
                <span>
                  Merlin
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text14">25%</span>
                <br></br>
                <span>
                  Dracula
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text17">40%</span>
                <br></br>
                <span>
                  Slasher
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text20">25%</span>
                <br></br>
                <span>
                  Secret Bridesmaids’ Business
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text23">0%</span>
                <br></br>
                <span>
                  Frontier
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text26">0%</span>
                <br></br>
                <span>
                  Labyrinth
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text29">0%</span>
                <br></br>
              </span>
            </div>
            <div className="home-about-11">
              <span className="home-text31">
                <span>
                  Dates
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text33">0%</span>
                <br></br>
                <span>
                  Jurassic World
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text36">0%</span>
                <br></br>
                <span>
                  W.E.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text39">0%</span>
                <br></br>
                <span>
                  Leading Lady
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text42">0%</span>
                <br></br>
                <span>
                  Buttons
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text45">0%</span>
                <br></br>
                <span>
                  The Throwaways
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text48">0%</span>
                <br></br>
                <span>
                  A Princess for Christmas
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text51">0%</span>
                <br></br>
                <span>
                  {' '}
                  0%Freakdog (Red Mist)
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text54">0%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <h1 id="faq" className="home-text55">
        <span>
          I&apos;ve been getting some DMs so
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>here&apos;s a FAQ.</span>
      </h1>
      <div className="home-faqs">
        <div className="home-content-container1">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">How did you set up the bot?</span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer">
                <span className="card-Text">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  I use “Cheap Bots, Done Quick!” (as you can tell by the links
                  on the tweets). This is what the tracery stuff looks like:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>&#123;</span>
                <br></br>
                <span> &quot;origin&quot;: [&quot;#something#&quot;],</span>
                <br></br>
                <span>
                  &quot;something&quot;: [“Image 1 caption.
                  https://image.one/linktorepository”, “Image 2 caption.
                  https://image.two/linktorepository”]
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  &#125;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                Are you looking for new admins?
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer1">
                <span>
                  Not something I’ve even considered, this is just a fun little
                  project to work on in my free time.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text71 card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                “Hi Katie!” or any variation of that:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer2">
                <span>
                  I’m not Katie McGrath, I’m not associated with Katie McGrath,
                  I just think she’s cool.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="card-Text"></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://twitter.com/katiemcgrathbot"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link7"
            >
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon4">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
