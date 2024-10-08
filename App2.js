export default function App2() {
  return (
    <>
      <a style={{ zIndex: 99 }} href="javascript:" id="return-to-top">
        <i className="fa-solid fa-chevron-up" />
      </a>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        role="navigation"
      >
        <a className="navbar-brand roll-out-text" href="index.html">
          <h1 id="top">Cameron Howze</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          role="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="index.html" role="link">
                <h4>Home</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" role="link">
                <h4>Education</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" role="link">
                <h4>Employment</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html" role="link">
                <h4>About Me</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="library.html" role="link">
                <h4>Library</h4>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="jumbotron" id="megaTop">
        <h1 id="coolAssTitle">
          <span className="text blue">Front-end</span> Developer
        </h1>
        <div id="faceOfPort">
          <div className="marquee">
            <ul className="marquee-content">
              <li>
                <i className="fab fa-react" />
              </li>
              <li>
                <i className="fab fa-js" />
              </li>
              <li>
                <i className="fab fa-node" />
              </li>
              <li>
                <img src="images/icons/mocha(front).png" alt="" />
              </li>
              <li>
                <img src="images/icons/jQuery(front)-logo.png" alt="" />
              </li>
              <li>
                <i className="fab fa-php" />
              </li>
              <li>
                <img src="images/icons/command-line(front).png" alt="" />
              </li>
              <li>
                <i className="fab fa-html5" />
              </li>
              <li>
                <i className="fab fa-bootstrap" />
              </li>
              <li>
                <i className="fab fa-css3" />
              </li>
              <li>
                <i className="fab fa-sass" />
              </li>
              <li>
                <img src="images/icons/universal-access(front).png" alt="" />
              </li>
              <li>
                <img src="images/icons/Photoshop(front).png" alt="" />
              </li>
              <li>
                <img src="images/icons/visualcode(front).png" alt="" />
              </li>
              <li>
                <i className="fab fa-github" />
              </li>
              <li>
                <img src="images/icons/Codecademy(front).png" alt="" />
              </li>
              <li>
                <i className="fab fa-free-code-camp" />
              </li>
              {/*  
<li><i class="fab fa-vuejs"></i></li>
<li><i class="fab fa-angular"></i></li>
<li><i class="fab fa-dev"></i></li>
<li><i class="fab fa-codepen"></i></li>
<li><i class="fab fa-wordpress"></i></li>
<li><i class="fab fa-aws"></i></li>
<li><i class="fab fa-docker"></i></li>
<li><i class="fab fa-android"></i></li>*/}
            </ul>
          </div>
        </div>
      </section>
      <section className="container" id="projects">
        <div>
          <h2 className="titles">Projects</h2>
        </div>
        <div id="projectGrid">
          <div className="scrollport">
            {/* Project: XysTiny find */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeXystinyfindModal"
            >
              <div className="card-body presser">
                <div className="imager" id="xysTinyFind">
                  <img
                    className="imagist"
                    src="images/projects/xyline.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/xyline-site.JPG';"
                    onmouseout="this.src='images/projects/xyline.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">Xystinyfind</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="jqSpan">jQuery</span>
                  <span className="jsSpan">JavaScript</span>
                  <span className="htmlSpan">HTML</span>
                  <span className="bsSpan">Bootstrap</span>
                  <span className="cssSpan">CSS</span>
                  <span className="sassSpan">SASS</span>
                  <span className="psSpan">Photoshop</span>
                </p>
              </div>
            </div>
            {/* Project: Chris */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeChrisModal"
            >
              <div className="card-body presser">
                <div className="imager" id="chris">
                  <img
                    className="imagist"
                    src="images/projects/level.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/chris-site.JPG';"
                    onmouseout="this.src='images/projects/level.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">Chris the Producer</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="reactSpan">React</span>
                  <span className="jsSpan">JavaScript</span>
                  <span className="htmlSpan">HTML</span>
                  <span className="cssSpan">CSS</span>
                  <span className="sassSpan">SASS</span>
                </p>
              </div>
            </div>
            {/* Project: Ravenous */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeRavenousModal"
            >
              <div className="card-body presser">
                <div className="imager" id="ravenous">
                  <img
                    className="imagist"
                    src="images/projects/ravenous.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/ravenous-site.JPG';"
                    onmouseout="this.src='images/projects/ravenous.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">Ravenous</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="reactSpan">React</span>
                  <span className="jsSpan">JavaScript</span>
                  <span className="htmlSpan">HTML</span>
                  <span className="cssSpan">CSS</span>
                  <span className="sassSpan">SASS</span>
                  <span className="psSpan">Photoshop</span>
                </p>
              </div>
            </div>
            {/* Project: Dragon Repeller */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeDragonModal"
            >
              <div className="card-body presser">
                <div className="imager" id="dragon">
                  <img
                    className="imagist"
                    src="images/projects/dragon.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/dragon-site.JPG';"
                    onmouseout="this.src='images/projects/dragon.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">Dragon Repeller</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="jsSpan">JavaScript</span>
                  <span className="htmlSpan">HTML</span>
                  <span className="cssSpan">CSS</span>
                </p>
              </div>
            </div>
            {/* Project: MEME Generator */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeMyMusicPlayerModal"
            >
              <div className="card-body presser">
                <div className="imager" id="MyMusicPlayer">
                  <img
                    className="imagist"
                    src="images/projects/mymusicplayer.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/mymusicplayer-site.JPG';"
                    onmouseout="this.src='images/projects/mymusicplayer.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">My Music Player</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="jsSpan">JavaScript</span>
                  <span className="htmlSpan">HTML</span>
                  <span className="cssSpan">CSS</span>
                </p>
              </div>
            </div>
            {/* Project: Sole Shoes */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeSoleShoesModal"
            >
              <div className="card-body presser">
                <div className="imager" id="soleShoes">
                  <img
                    className="imagist"
                    src="images/projects/soleshoes.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/soleshoes-site.JPG';"
                    onmouseout="this.src='images/projects/soleshoes.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">Sole Shoes</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="jsSpan">JavaScript</span>
                  <span className="jqSpan">jQuery</span>
                  <span className="htmlSpan">HTML</span>
                  <span className="cssSpan">CSS</span>
                </p>
              </div>
            </div>
            {/* Project: Colmar Academy */}
            <div
              className="card presenter"
              data-toggle="modal"
              data-target="#enlargeColmarAcademyModal"
            >
              <div className="card-body presser">
                <div className="imager" id="colmarAcademy">
                  <img
                    className="imagist"
                    src="images/projects/colmaracademy.jpg"
                    alt=""
                    onmouseover="this.src='images/projects/colmaracademy-site.JPG';"
                    onmouseout="this.src='images/projects/colmaracademy.jpg';"
                  />
                </div>
                <hr />
                <h5 className="card-title">Colmar Academy</h5>
                <p className="progStyle card-subtitle mb-2 text-muted">
                  <span className="htmlSpan">HTML</span>
                  <span className="cssSpan">CSS</span>
                  <span className="sassSpan">SASS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for Xys tiny finds Image */}
        <div id="modalBag">
          <div
            className="modal fade"
            id="enlargeXystinyfindModal"
            tabIndex={-1}
            aria-labelledby="enlargeXystinyfindModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/xyline-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/xystinyfind.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://camkol.github.io/xystinyfind/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>
                      I undertook the development for a close friend's company.
                    </li>
                    <li>
                      Striving for consistency, I emulated the design of their
                      old website, then enhance upon request.
                    </li>
                    <li>
                      Bootstrap was incorporated to enhance structural elements.
                    </li>
                    <li>
                      A JavaScript-based slideshow was implemented for visual
                      appeal.
                    </li>
                    <li>
                      Leveraging my Photoshop skills, I converted images to JPG
                      format to enhance accessibility and reduce file sizes,
                      subsequently improving load times.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Chris the Producer Image */}
          <div
            className="modal fade"
            id="enlargeChrisModal"
            tabIndex={-1}
            aria-labelledby="enlargeChrisModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/chris-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/chris-react.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://christheproducer.netlify.app/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>
                      Developed an HTML structure and styling with CSS to create
                      a personalized webpage for a music producer friend.
                    </li>
                    <li>
                      Tailored the appearance of the header, producer-info
                      section, and footer to meet the client's preferences.
                      Applied comprehensive styles to achieve the desired
                      layout, colors, and fonts throughout the webpage.
                    </li>
                    <li>
                      Addressed the client's preference for the "Rubik Glitch
                      Pop" font, enhancing the overall aesthetic of the webpage.
                      Implemented text-shadow to create a distinctive glowing
                      effect on the header text as per the client's specific
                      request.
                    </li>
                    <li>
                      Integrated Font Awesome icons for social media platforms
                      (Facebook, Twitter, Instagram, SoundCloud) with custom
                      styling.
                    </li>
                    <li>
                      Successfully converted the personalized music producer
                      webpage, featuring tailored layouts, fonts, and styles
                      including custom glowing effects and Font Awesome icons,
                      into a dynamic and responsive React application.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Ravenous Image */}
          <div
            className="modal fade"
            id="enlargeRavenousModal"
            tabIndex={-1}
            aria-labelledby="enlargeRavenousModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/ravenous-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/ravenous2.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://ravenous2-3.netlify.app/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>
                      I crafted a robust HTML structure, ensuring semantic
                      integrity and accessibility.
                    </li>
                    <li>
                      By breaking down the UI into reusable components, you've
                      embraced a modular approach for scalability and
                      maintainability.
                    </li>
                    <li>
                      Integrating dynamic data enriches user experience, while
                      leveraging SCSS for styling adds flexibility and
                      efficiency to your workflow.
                    </li>
                    <li>
                      Streamlining the data flow optimizes communication between
                      components, enhancing overall performance.
                    </li>
                    <li>
                      Your attention to detail and commitment to best practices
                      set a high standard for web development excellence.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Dragon Repeller Image */}
          <div
            className="modal fade"
            id="enlargeDragonModal"
            tabIndex={-1}
            aria-labelledby="enlargeDragonModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/dragon-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/DragonRepeller.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://camkol.github.io/DragonRepeller/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>
                      Player stats such as experience points (xp), health, gold,
                      current weapon, and inventory are initialized. HTML
                      elements and buttons are linked to JavaScript variables
                      for interaction.
                    </li>
                    <li>
                      The game defines various locations, monsters, weapons, and
                      actions using arrays and objects. Buttons are assigned
                      onclick functions corresponding to different in-game
                      actions, such as going to locations, buying/selling items,
                      and fighting monsters.
                    </li>
                    <li>
                      Combat involves attacking, dodging, and calculating damage
                      based on the player's weapon and the monster's level.
                      Outcomes are processed, including gaining or losing gold
                      and xp, defeating monsters, and determining victory or
                      defeat.
                    </li>
                    <li>
                      The game includes special events like an easter egg with a
                      number-picking game. Restart and replay options are
                      available upon winning or losing the game.
                    </li>
                    <li>
                      The game features localization to create a German version
                      for your son. Text elements, button labels, and in-game
                      messages are translated to German, allowing your son to
                      enjoy the game in his native language.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for MEME Generator Image */}
          <div
            className="modal fade"
            id="enlargeMyMusicPlayerModal"
            tabIndex={-1}
            aria-labelledby="enlargeMyMusicPlayerModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/mymusicplayer-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/MyMusicPlayer.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://camkol.github.io/MyMusicPlayer/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>
                      In the project's HTML structure, the main content is
                      housed within an index.html file, featuring a container
                      division that holds the music player and playlist
                      components.
                    </li>
                    <li>
                      These components are styled using CSS defined in a
                      styles.css file, which customizes various aspects like
                      font styles, colors, and layout properties.
                    </li>
                    <li>
                      The interactive behavior of the music player is managed
                      through JavaScript in a script.js file, which utilizes
                      event listeners to handle song playback, navigation, and
                      playlist management functions.
                    </li>
                    <li>
                      The playlist data, containing details of each song, is
                      stored in an array format within the JavaScript file,
                      enabling dynamic song selection and rendering.
                    </li>
                    <li>
                      Audio playback is controlled using the Audio object,
                      allowing for play, pause, and track navigation
                      functionalities.
                    </li>
                    <li>
                      Together, these files and their associated code create a
                      cohesive web application for playing and managing a music
                      playlist, with an emphasis on responsive design and user
                      interaction.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Sole Shoes Image */}
          <div
            className="modal fade"
            id="enlargeSoleShoesModal"
            tabIndex={-1}
            aria-labelledby="enlargeSoleShoesModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/soleshoes-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/SoleShoes.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://camkol.github.io/SoleShoes/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>jQuery used for simple interactions.</li>
                    <li>
                      Hidden navigation menu with dropdown options. Hidden login
                      form that slides down when the login button is clicked.
                    </li>
                    <li>Responsive design for different screen sizes.</li>
                    <li>
                      Media queries used to adjust button sizes and fonts for
                      different screen widths.
                    </li>
                    <li>
                      This process creates a visually appealing and interactive
                      website, showcasing products and providing user-friendly
                      navigation.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Colmar Academy Image */}
          <div
            className="modal fade"
            id="enlargeColmarAcademyModal"
            tabIndex={-1}
            aria-labelledby="enlargeColmarAcademyModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src="images/projects/colmaracademy-site.JPG"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Customized content goes here */}
                  <h5>
                    <a
                      href="https://github.com/camkol/capstone_colmar_assets.git"
                      className="card-link"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </h5>
                  <hr />
                  <h4>
                    <a
                      href="https://camkol.github.io/capstone_colmar_assets/"
                      className="card-link"
                      target="_blank"
                    >
                      View Page
                    </a>
                  </h4>
                  <hr />
                  <h4>Process</h4>
                  <ul>
                    <li>This project served as my CSS capstone project.</li>
                    <li>
                      Introducing SASS into the mix, I found it beneficial for
                      visual structure.
                    </li>
                    <li>
                      Initially grappling with Flexbox, I decided to take a
                      break and reacquaint myself with it. This approach led to
                      an improved comprehension of grid layout techniques.
                    </li>
                    <li>
                      With the desktop view finalized, I delved into crafting a
                      responsive design.
                    </li>
                    <li>
                      Out of habit, and for reliable sourcing, I ensured that
                      even when provided with media links, I extracted photos
                      and videos to the project folder.
                    </li>
                  </ul>
                  {/* End of customized content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="container" id="education">
        <h2 className="titles">Education</h2>
        <section className="accordion">
          <section className="accordion-tabs">
            <button
              className="accordion-tab accordion-active"
              data-actab-group={0}
              data-actab-id={0}
            >
              <img
                className="card-img-top portrait"
                src="images/education/Codecademy.svg.png"
                alt="codecademy"
              />
            </button>
            <button
              className="accordion-tab"
              data-actab-group={0}
              data-actab-id={1}
            >
              <img
                className="card-img-top portrait"
                src="images/education/FreeCodeCamp_logo.svg.png"
                alt="freecodecamp"
              />
            </button>
            <button
              className="accordion-tab"
              data-actab-group={0}
              data-actab-id={2}
            >
              <img
                className="card-img-top portrait"
                src="images/education/Udemy_logo.svg.png"
                alt="udemy"
              />
            </button>
            <button
              className="accordion-tab"
              data-actab-group={0}
              data-actab-id={3}
            >
              <img
                className="card-img-top portrait"
                src="images/education/ITTTech.png"
                alt="ITT Tech"
              />
            </button>
          </section>
          <section className="accordion-content">
            <article
              className="accordion-item accordion-active"
              data-actab-group={0}
              data-actab-id={0}
              id="slotOne"
            >
              <h4 className="accordion-item__label desktop">Codecademy</h4>
              <img
                className="accordion-item__label card-img-top portrait mobile"
                src="images/education/Codecademy.svg.png"
                alt="codecademy"
              />
              <div className="accordion-item__container">
                <p className="card-text">2022-Present</p>
                <div id="react">
                  <h5 className="font-weight-bold presser">Learn React</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/af00e5032d0a68cc84879983f5d8333b"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>JSX</li>
                    <li>Components and Advanced JSX</li>
                    <li>Components Interacting</li>
                    <ul>
                      <li>Components Render Other Components</li>
                      <li>Props</li>
                    </ul>
                    <li>Hooks</li>
                    <ul>
                      <li>The State Hook</li>
                      <li>The Effect Hooks</li>
                    </ul>
                    <li>React Programming Patterns</li>
                    <li>React Styles</li>
                    <li>React Forms</li>
                  </ul>
                </div>
                {/*   <div id="frontEndReact">
    <h5 class="font-weight-bold presser">
      Create a Front-End App with React
    </h5> <a
    href=""
    target="_blank"
    class="views"
    >Certificate</a
  >
    <ol class="views">
      <li>Introduction to JavaScript and Building Apps</li>
      <ul>
        <li>JavaScript Introduction & React Overview</li>
        <li>Setting up a Web Development Environment</li>
      </ul>
      <li>JavaScript Functions, Arrays, and Loops</li>
      <ul>
        <li>Conditionals</li>
        <li>Functions</li>
        <li>Arrays</li>
        <li>Loops</li>
      </ul>
      <li>JavaScript Iterators, Objects, and Classes</li>
      <ul>
        <li>Iterators</li>
        <li>Objects</li>
        <li>Classes</li>
      </ul>
      <li>Modern JavaScript: Modules and Browser Compatibility</li>
      <ul>
        <li>ES6 Modules</li>
        <li>Browser Compatibility and Transpilation</li>
      </ul>
      <li>Introduction to React</li>

      <ul>
        <li>JSX</li>
        <li>React Components</li>
        <li>Ravenous: Part 1</li>
      </ul>
      <li>React: Components Interacting</li>
      <ul>
        <li>Components and Props</li>
        <li>Ravenous: Part 2</li>
      </ul>
      <li>React: Component State</li>
      <ul>
        <li>Hooks</li>
        <li>React Programming Patterns</li>
        <li>Ravenous: Part 3</li>
      </ul>
      <li>AJAX Requests and API Interactions</li>
      <ul>
        <li>HTTP Requests</li>
        <li>Ravenous: Part 4</li>
      </ul>
      <li>React Capstone</li>
      <ul>
        <li>React Styles</li>
        <li>Lifecycle Methods</li>
        <li>React Forms</li>
        <li>Jamming</li>
      </ul>
    </ol>
  </div>*/}
                <div id="TDD">
                  <h5 className="font-weight-bold presser">
                    Learn JavaScript Unit Testing
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/f4276e8c08a3ba174ef0147deb0c3013"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Why Test?</li>
                    <li>Write Good Tests With Mocha</li>
                    <li>Learn Test-Driven Development With Mocha</li>
                  </ul>
                </div>
                <div id="node">
                  <h5 className="font-weight-bold presser">Learn Node.js</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/240305d50b925c17868f1ac7a21a3261"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Welcome to Learn Node.js</li>
                    <li>What is Back-End?</li>
                    <li>Introducion to Node.js</li>
                    <li>Node.js Essentials</li>
                    <li>Setting up a Server with HTTP</li>
                    <li>Next Steps</li>
                  </ul>
                </div>
                <div id="commandLine">
                  <h5 className="font-weight-bold presser">
                    Learn the Command Line
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/c87ba0541f8be78bc2f4ba1128233f6f"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Navigating the File System</li>
                    <li>Viewing and Chaging the File System</li>
                    <li>Redirecting Input and Output</li>
                    <li>Configuring the Environment</li>
                  </ul>
                </div>
                <div id="github">
                  <h5 className="font-weight-bold presser">
                    Learn Git &amp; GitHub
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/a8ab218d5950c29861635cc0bf12fd13"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Introduction: Git &amp; GitHub</li>
                    <li>Basic Git Workflow</li>
                    <li>Important Git Operations</li>
                    <li>Introduction to GitHub</li>
                    <li>GitHub &amp; Markdown</li>
                    <li>Git Branching</li>
                    <li>Git Teamwork</li>
                    <li>Deploying Websites using Git and GitHub</li>
                    <li>Best Practices for GitHub Repositories</li>
                    <ul>
                      <li>Intro to Best Practices for GitHub</li>
                      <li>How To Write a Good Pull Request</li>
                      <li>How To Use Git Rebase</li>
                      <li>Git Rebase Off-Platform Project</li>
                      <li>Managing a GitHub Repository</li>
                      <li>Using a .gitignore File in Your GitHub Repository</li>
                    </ul>
                    <li>Collaborating with the GitHub Community</li>
                    <li>GitHub Features: Issues, CLI, &amp; Actions</li>
                    <li>Review: Learn Git &amp; GitHub</li>
                  </ul>
                </div>
                <div id="jquery">
                  <h5 className="font-weight-bold presser">Learn jQuery</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/0becf7c1cd2bd715f24331dddd23425a"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Introduction</li>
                    <li>Effects</li>
                    <li>Event Handlers</li>
                    <li>Style Methods</li>
                    <li>Traversing the DOM</li>
                  </ul>
                </div>
                <div id="javaScriptBasic">
                  <h5 className="font-weight-bold presser">Learn JavaScript</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Introduction</li>
                    <li>Conditionals</li>
                    <li>Functions</li>
                    <li>Scope</li>
                    <li>Arrays</li>
                    <li>Loops</li>
                    <li>Iterators</li>
                    <li>Objects</li>
                  </ul>
                </div>
                <div id="interactiveWebsites">
                  <h5 className="font-weight-bold presser">
                    Building Interactive JavaScript Websites
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/36ae898a1d1c8524815305b2d1d2ebab"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>JavaScript Interactive Websites</li>
                    <li>DOM Events with JavaScript</li>
                    <li>Templating with Handlebars</li>
                  </ul>
                </div>
                <div id="javaScriptIntermediate">
                  <h5 className="font-weight-bold presser">
                    Learn Intermediate JavaScript
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/512386fdc7f6c934f98b01e6afa8285a"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Classes</li>
                    <li>Modules</li>
                    <li>Promises</li>
                    <li>Ansync-Await</li>
                    <li>Requests</li>
                    <li>Errors and Error Handling</li>
                    <li>JavaScript Under the Hood</li>
                    <ul>
                      <li>Currying</li>
                      <li>Hoisting</li>
                      <li>Concurrency Model and Event Loop</li>
                      <li>Introduction to Memory Management</li>
                      <li>Debugging Memory Issues</li>
                    </ul>
                    <li>JavaScript Best Practices</li>
                    <ul>
                      <li>Design Patterns</li>
                    </ul>
                  </ul>
                </div>
                <div id="php">
                  <h5 className="font-weight-bold presser">
                    Learn PHP Skill Path
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/9b7bcc38d0ed49f593228763cbfd51e3"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ol className="views">
                    <li>Introduction to the Learn PHP Skill Path</li>
                    <li>PHP Variables, Strings, and Numbers</li>
                    <li>PHP Functions</li>
                    <li>PHP Conditionals and Logic</li>
                    <li>PHP Arrays and Loops</li>
                    <li>PHP and HTML</li>
                    <ul>
                      <li>PHP and HTML</li>
                      <li>Form Handling</li>
                      <li>Form Validation</li>
                    </ul>
                    <li>PHP Classes and Objects</li>
                    <li>Learn PHP Next Steps</li>
                  </ol>
                </div>
                <div id="cssBasic">
                  <h5 className="font-weight-bold presser">Learn CSS</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/9a5bb1fc45b4281af1fffec93b0aaf05"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Syntax and Selectors</li>
                    <li>Visual Rules</li>
                    <li>The Box Model Model</li>
                    <li>Display and Positioning</li>
                    <li>Colors</li>
                    <li>Typography</li>
                  </ul>
                </div>
                <div id="cssIntermediate">
                  <h5 className="font-weight-bold presser">
                    Learn Intermediate CSS
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/b3dec49423da50603c25618aee635027"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Layout with Flexbox</li>
                    <li>Grid</li>
                    <li>Transitions</li>
                    <li>CSS Code Challenges</li>
                    <li>Responsive Design</li>
                    <li>Variables and Functions</li>
                    <li>Accessibility</li>
                    <li>Browser Compatibility</li>
                  </ul>
                </div>
                <div id="navigation">
                  <h5 className="font-weight-bold presser">
                    Learn Navigation Design
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/91cf4a1767724a02a20b1eba7eca74ea"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Links and Buttons</li>
                    <li>Secondary Navigation</li>
                  </ul>
                </div>
                <div id="bootstrap">
                  <h5 className="font-weight-bold presser">Learn Bootstrap</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/0595479d03627a8cb816b069000e4d06"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Grid</li>
                    <li>Utilities</li>
                    <li>Components</li>
                  </ul>
                </div>
                <div id="sass">
                  <h5 className="font-weight-bold presser">Learn Sass</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/eb1ffda40f347629dcef6de33d3f9741"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Create a Sass Stylesheet</li>
                    <li>Mixins and the &amp; Selector</li>
                    <li>Functions and Operations</li>
                    <li>Sustainable SCSS</li>
                  </ul>
                </div>
                <div id="regex">
                  <h5 className="font-weight-bold presser">
                    Learn the Basics of Regular Expressions
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/9da8e26980d5139405439ee7578b8b69"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Introduction to Regular Expressions</li>
                  </ul>
                </div>
                <div id="stylingWebsite">
                  <h5 className="font-weight-bold presser">
                    Build a Website with HTML, CSS, and GitHub Pages
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/5cadfefe5f1de806e9704577"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ol className="views">
                    <li>Beginner HTML</li>
                    <ul>
                      <li>Welcome to Learn How to Build Websites</li>
                      <li>Elements and Structure</li>
                      <li>Tables</li>
                    </ul>
                    <li>Beginner CSS</li>
                    <ul>
                      <li>Visual Rules</li>
                    </ul>
                    <li>How to Build Websites on Your Own Computer</li>
                    <ul>
                      <li>Intro to Local Website Development</li>
                      <li>Command Line for Building Websites</li>
                    </ul>
                    <li>Intermediate CSS: Colors and Typography</li>
                    <ul>
                      <li>Colors</li>
                      <li>Typography</li>
                    </ul>
                    <li>Intermediate CSS: Layout and Positioning</li>
                    <ul>
                      <li>The Box Model</li>
                      <li>Display and Positioning</li>
                    </ul>
                    <li>Responsive Design and Accessibility</li>
                    <ul>
                      <li>Learn Responsive Design</li>
                      <li>Web Accessibility</li>
                      <li>CSS Documentation and Debugging</li>
                    </ul>
                    <li>Advanced CSS: Flexbox and CSS Transitions</li>
                    <ul>
                      <li>Layout with Flexbox</li>
                      <li>CSS - Transitions</li>
                    </ul>
                    <li>Finishing Touches and Publishing a Website</li>
                    <ul>
                      <li>Finishing Touches</li>
                      <li>Git and Publishing to GitHub Pages</li>
                    </ul>
                    <li>Learn How to Build Websites Capstone Project</li>
                    <ul>
                      <li>Colmar Academy</li>
                    </ul>
                  </ol>
                </div>
                <div id="htmlBasic">
                  <h5 className="font-weight-bold presser">Learn HTML</h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Introduction to Web Development</li>
                    <li>Elements and Structure</li>
                    <li>Tables</li>
                    <li>Forms</li>
                    <li>Semantic HTML</li>
                  </ul>
                </div>
                <div id="code">
                  <h5 className="font-weight-bold presser">
                    Learn How to Code
                  </h5>
                  <a
                    href="https://www.codecademy.com/profiles/koliyus/certificates/11a686a7fd57b8c214f7f92749388d42"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Basics of Programming I</li>
                    <ul>
                      <li>Variables</li>
                      <li>Data Types</li>
                      <li>Operators</li>
                    </ul>
                    <li>Basics of Programming II</li>
                    <ul>
                      <li>Functions</li>
                      <li>Control Flow</li>
                    </ul>
                    <li>Basics of Programming III</li>
                    <ul>
                      <li>Lists</li>
                      <li>Loops</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="accordion-item"
              data-actab-group={0}
              data-actab-id={1}
              id="slotTwo"
            >
              <h4 className="accordion-item__label desktop">freeCodeCamp</h4>
              <img
                className="accordion-item__label card-img-top portrait mobile"
                src="images/education/FreeCodeCamp_logo.svg.png"
                alt="freecodecamp"
              />
              <div className="accordion-item__container">
                <p className="card-text">2023-Present</p>
                <div id="JADS">
                  <h5 className="font-weight-bold presser">
                    JavaScript Algorithms and Data Structures
                  </h5>
                  <a
                    href="https://www.freecodecamp.org/certification/koliyus/javascript-algorithms-and-data-structures"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>Basic JavaScript</li>
                    <li>ES6</li>
                    <li>Regular Expressions</li>
                    <li>Debugging</li>
                    <li>Basic Data Structures</li>
                    <li>Basic Algorithm Scripting</li>
                    <li>Object Oriented Programming</li>
                    <li>Intermediate Algorithm Scripting</li>
                    <li>JavaScript Algorithms and Data Structures Projects</li>
                  </ul>
                </div>
                <div id="RWD">
                  <h5 className="font-weight-bold presser">
                    Responsive Web Design
                  </h5>
                  <a
                    href="https://www.freecodecamp.org/certification/koliyus/responsive-web-design"
                    target="_blank"
                    className="views"
                  >
                    Certificate
                  </a>
                  <ul className="views">
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="accordion-item"
              data-actab-group={0}
              data-actab-id={2}
              id="slotThree"
            >
              <h4 className="accordion-item__label desktop">udemy</h4>
              <img
                className="accordion-item__label card-img-top portrait mobile"
                src="images/education/Udemy_logo.svg.png"
                alt="udemy"
              />
              <div className="accordion-item__container">
                <p className="card-text">2023-Present</p>
                <div id="bootCamp">
                  <h5 className="font-weight-bold presser">
                    The Web Developer Bootcamp(in progress)
                  </h5>
                  <ul className="views">
                    <li>ReactJS</li>
                    <li>Unix(Command Line) Commands</li>
                    <li>JavaScript</li>
                    <li>Asynchronous JavaScript</li>
                    <li>AJAX and API</li>
                    <li>DOM Manipulation</li>
                    <li>Bootstrap 4 and 5</li>
                    <li>Bulma CSS Framework</li>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>Flexbox</li>
                    <li>Responsive Design</li>
                    {/* 
        <li>SemanticUI</li>
        <li>NodeJS</li>
        <li>NPM</li>
        <li>ExpressJS</li>
        <li>Templating</li>
        <li>REST</li>
        <li>SQL vs. NoSQL databases</li>
        <li>MongoDB</li>
        <li>Database Associations</li>
        <li>Schema Design</li>
        <li>Mongoose</li>
        <li>Authentication From Scratch</li>
        <li>Cookies & Sessions</li>
        <li>Authorization</li>
        <li>Common Security Issues - SQL Injection, XSS, etc.</li>
        <li>Developer Best Practices</li>
        <li>Deploying Apps</li>
        <li>Cloud Databases</li>
        <li>Image Upload and Storage</li>
        <li>Maps and Geocoding</li>*/}
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="accordion-item"
              data-actab-group={0}
              data-actab-id={3}
              id="slotFour"
            >
              <h4 className="accordion-item__label desktop">
                ITT Technical Institute
              </h4>
              <img
                className="accordion-item__label card-img-top portrait mobile"
                src="images/education/ITTTech.png"
                alt="ITT Tech"
              />
              <div className="accordion-item__container">
                <p className="card-text">2002-2008</p>
                <div id="CDAD">
                  <h4 className="font-weight-bold presser">
                    Computer Drafting and Design
                  </h4>
                  <h5>Asociates of Applied Science Degree</h5>
                  <ul className="views">
                    <li>Dynamics in an Information Society</li>
                    <li>Computers in Technology</li>
                    <li>Problem Solving</li>
                    <li>Introduction to Design and Drafting</li>
                    <li>Drafting/CAD Methods</li>
                    <li>College Mathematics I</li>
                    <li>Architectural Drafting I</li>
                    <li>Rapid Visualization</li>
                    <li>College Mathematics II</li>
                    <li>Engineering Graphics I</li>
                    <li>Materials and Processes</li>
                    <li>Physics</li>
                    <li>Architectural Drafting II</li>
                    <li>Descriptive Geometry</li>
                    <li>Composition I</li>
                    <li>Engineering Graphcis II</li>
                    <li>Digital Information Management</li>
                    <li>Composition II</li>
                    <li>Civil Drafting and Introduction To GIS</li>
                    <li>Basic Design Theory and Methods</li>
                    <li>Physical and Computer-Aided 3D Modeling</li>
                    <li>Design and Drafting Capstone Project</li>
                    <li>Economic Problems</li>
                    <li>Professional Procedures and Portfolio</li>
                  </ul>
                </div>
                <div id="DEAGD">
                  <h4 className="font-weight-bold presser">
                    Digital Entertainment and Game Design
                  </h4>
                  <h5>Bachelor of Science Degree</h5>
                  <ul className="views">
                    <li>Introduction to Computer Programming</li>
                    <li>Animation I</li>
                    <li>Audio/Video Techniques</li>
                    <li>Introduction to Gaming Technology</li>
                    <li>Managing Game Development</li>
                    <li>Research Methods</li>
                    <li>Physics of Animation</li>
                    <li>Game Design Process</li>
                    <li>Game Design Strategies</li>
                    <li>Advanced Animation</li>
                    <li>Written Analysis</li>
                    <li>Game Interface Design</li>
                    <li>Level Design I</li>
                    <li>Creative Writing and Storyboarding</li>
                    <li>Game Engines and Production</li>
                    <li>The Game Development Team</li>
                    <li>Ethics</li>
                    <li>Environmental Issues</li>
                    <li>Level Design II</li>
                    <li>Statistics</li>
                    <li>Economics and Change</li>
                    <li>Capstone Project</li>
                    <li>Modern and Contemporary Art</li>
                    <li>Contemporary World Culture</li>
                  </ul>
                </div>
              </div>
            </article>
          </section>
        </section>
      </section>
      <hr />
      <section className="container" id="experience">
        <h2 className="titles">Past Employment</h2>
        <div className="desktop">
          <div id="section1">
            <div className="section-grid">
              <div className="left">
                <div className="grid-text">
                  <h3 className="font-weight-bold">Manager</h3>
                  <h4>Be Original Tours- Berlin Pubcrawl</h4>
                  <p className="card-text">2019-2022</p>
                  <ul>
                    <li>
                      As a tour leader, responsible for guiding groups of
                      tourists through various locations and providing
                      entertainment of the night life.
                    </li>
                    <li>
                      Responsible for hiring and training new tour guides,
                      ensuring that they were knowledgeable about the sites and
                      could effectively communicate with tourists.
                    </li>
                    <li>
                      Was responsible for creating and managing the weekly
                      schedules for both the tour guides and the tour groups,
                      ensuring that everyone was assigned.
                    </li>
                    <li>
                      Established and negotiated partnerships with venue
                      locations to ensure that the tours had access to the best
                      possible locations and attractions.
                    </li>
                    <li>
                      Overseeing the payroll process, ensuring that everyone was
                      paid accurately and on time.
                    </li>
                    <li>
                      Managed meeting point, which included registering
                      customers and processing payments.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="grid-image image-1 active">
                  <img
                    src="images/experiece/beoriginal(whole).png"
                    alt="BeOrginal"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="section2">
            <div className="section-grid">
              <div className="left">
                <div className="grid-text">
                  <h3 className="font-weight-bold">Event Service Assistant</h3>
                  <h4>Erd-maennchen Event und Gastronomieservice GmbH</h4>
                  <p className="card-text">2018-2019</p>
                  <ul>
                    <li>
                      Assisted with the construction and deconstruction of
                      concerts and various events.
                    </li>
                    <li>
                      Supported delivery and pickup services of furnishings for
                      events.
                    </li>
                    <li>
                      Maintained accountability of working hours for the crew
                      shift.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="grid-image image-2 active">
                  <img
                    src="images/experiece/erdmaennchen(whole).png"
                    alt="Erdmaennchen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="section3">
            <div className="section-grid">
              <div className="left">
                <div className="grid-text">
                  <h3 className="font-weight-bold">
                    Petroleum Supply Specialist
                  </h3>
                  <h4>US Army</h4>
                  <p className="card-text">2009-2016</p>
                  <ul>
                    <li>
                      Coordinated the distribution and accumulation of 10K
                      gallons of diesel fuel allowing multinational
                      organizations to complete a unified operation.
                    </li>
                    <li>
                      Liaise with leadership officials to maintain
                      accountability of 70K gallons of diesel fuel.
                    </li>
                    <li>
                      Trained and mentored 200 Afghan military employees in the
                      fundamentals of driving in hazardous environments.
                    </li>
                    <li>
                      Gained knowledge of maintenance and usage on various
                      military vehicles.
                    </li>
                    <li>
                      Experienced in usage of tools such as pallet jack,
                      workshop tools, generators.
                    </li>
                    <li>
                      Obtain knowledge on assembling fuel operation systems.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="grid-image image-3 active">
                  <img src="images/experiece/usarmy(whole).png" alt="USArmy" />
                </div>
              </div>
            </div>
          </div>
          <div id="section4">
            <div className="section-grid">
              <div className="left">
                <div className="grid-text">
                  <h3 className="font-weight-bold">
                    Baumholder BOSS President
                  </h3>
                  <h4>BOSS Program</h4>
                  <p className="card-text">2015-2016</p>
                  <ul>
                    <li>
                      Facilitated fundraising activities generating 80% in
                      profit from sales through hosting community events.
                    </li>
                    <li>
                      Designed guidelines for personnel from 18 separate
                      sections to follow in order to work more effectively.
                    </li>
                    <li>
                      Consistently conducted briefs for new personnel inspiring
                      their morale for the area they relocated.
                    </li>
                    <li>
                      Coordinated events for leisure travel and volunteering of
                      communities.
                    </li>
                    <li>
                      Build partnerships to construct profit and nonprofit
                      programs.
                    </li>
                    <li>
                      Conveyed monthly, quarterly, and annual budget and
                      activities.
                    </li>
                    <li>
                      Instructed employees on and modified the standards
                      required for the organization.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="grid-image image-4 active">
                  <img src="images/experiece/boss(whole).png" alt="BOSS" />
                </div>
              </div>
            </div>
          </div>
          <div id="section5">
            <div className="section-grid">
              <div className="left">
                <div className="grid-text">
                  <h3 className="font-weight-bold">CAD Operator</h3>
                  <h4>Reich Design Associates. P.L.C</h4>
                  <p className="card-text">2006-2007</p>
                  <ul>
                    <li>
                      Completed and modified majority of company interior,
                      exterior and detailed architectural plans.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="grid-image image-5 active">
                  <img
                    src="images/experiece/reichdesign(whole).png"
                    alt="ReichDesign"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="section6">
            <div className="section-grid">
              <div className="left">
                <div className="grid-text">
                  <h3 className="font-weight-bold">CAD Operator</h3>
                  <h4>Tidewater Naval Architects</h4>
                  <p className="card-text">2004-2005</p>
                  <ul>
                    <li>
                      Completed and modified interior, exterior and detailed
                      naval plans.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="grid-image image-6 active">
                  <img
                    src="images/experiece/tidewater(whole).png"
                    alt="Tidewater"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src="images/experiece/beoriginal.png"
                  alt="BeOrginal"
                />
                <h3 className="font-weight-bold">Manager</h3>
                <h4>Be Original Tours- Berlin Pubcrawl</h4>
                <p className="card-text">2019-2022</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    As a tour leader, responsible for guiding groups of tourists
                    through various locations and providing entertainment of the
                    night life.
                  </li>
                  <li>
                    Responsible for hiring and training new tour guides,
                    ensuring that they were knowledgeable about the sites and
                    could effectively communicate with tourists.
                  </li>
                  <li>
                    Was responsible for creating and managing the weekly
                    schedules for both the tour guides and the tour groups,
                    ensuring that everyone was assigned.
                  </li>
                  <li>
                    Established and negotiated partnerships with venue locations
                    to ensure that the tours had access to the best possible
                    locations and attractions.
                  </li>
                  <li>
                    Overseeing the payroll process, ensuring that everyone was
                    paid accurately and on time.
                  </li>
                  <li>
                    Managed meeting point, which included registering customers
                    and processing payments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src="images/experiece/erdmaennchen.png"
                  alt="Erdmaennchen"
                />
                <h3 className="font-weight-bold">Event Service Assistant</h3>
                <h4>Erd-maennchen Event und Gastronomieservice GmbH</h4>
                <p className="card-text">2018-2019</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    Assisted with the construction and deconstruction of
                    concerts and various events.
                  </li>
                  <li>
                    Supported delivery and pickup services of furnishings for
                    events.
                  </li>
                  <li>
                    Maintained accountability of working hours for the crew
                    shift.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src="images/experiece/usarmy.png"
                  alt="USArmy"
                />
                <h3 className="font-weight-bold">
                  Petroleum Supply Specialist
                </h3>
                <h4>US Army</h4>
                <p className="card-text">2009-2016</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    Coordinated the distribution and accumulation of 10K gallons
                    of diesel fuel allowing multinational organizations to
                    complete a unified operation.
                  </li>
                  <li>
                    Liaise with leadership officials to maintain accountability
                    of 70K gallons of diesel fuel.
                  </li>
                  <li>
                    Trained and mentored 200 Afghan military employees in the
                    fundamentals of driving in hazardous environments.
                  </li>
                  <li>
                    Gained knowledge of maintenance and usage on various
                    military vehicles.
                  </li>
                  <li>
                    Experienced in usage of tools such as pallet jack, workshop
                    tools, generators.
                  </li>
                  <li>
                    Obtain knowledge on assembling fuel operation systems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src="images/experiece/boss.png"
                  alt="BOSS"
                />
                <h3 className="font-weight-bold">Baumholder BOSS President</h3>
                <h4>BOSS Program</h4>
                <p className="card-text">2015-2016</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    Facilitated fundraising activities generating 80% in profit
                    from sales through hosting community events.
                  </li>
                  <li>
                    Designed guidelines for personnel from 18 separate sections
                    to follow in order to work more effectively.
                  </li>
                  <li>
                    Consistently conducted briefs for new personnel inspiring
                    their morale for the area they relocated.
                  </li>
                  <li>
                    Coordinated events for leisure travel and volunteering of
                    communities.
                  </li>
                  <li>
                    Build partnerships to construct profit and nonprofit
                    programs.
                  </li>
                  <li>
                    Conveyed monthly, quarterly, and annual budget and
                    activities.
                  </li>
                  <li>
                    Instructed employees on and modified the standards required
                    for the organization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src="images/experiece/reichdesign.png"
                  alt="ReichDesign"
                />
                <h3 className="font-weight-bold">CAD Operator</h3>
                <h4>Reich Design Associates. P.L.C</h4>
                <p className="card-text">2006-2007</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    Completed and modified majority of company interior,
                    exterior and detailed architectural plans.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src="images/experiece/tidewater.png"
                  alt="Tidewater"
                />
                <h3 className="font-weight-bold">CAD Operator</h3>
                <h4>Tidewater Naval Architects</h4>
                <p className="card-text">2004-2005</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    Completed and modified interior, exterior and detailed naval
                    plans.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="container">
        <div className="row" style={{ marginBottom: "1rem" }}>
          <div className="col-4">
            <a
              href="https://github.com/camkol"
              target="_blank"
              style={{ color: "black" }}
              role="link"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github fa-5x" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://www.linkedin.com/in/cameron-howze-28a646109/"
              target="_blank"
              style={{ color: "black" }}
              role="link"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin fa-5x" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="mailto:cameronhowze4@outlook.com"
              target="_blank"
              style={{ color: "black" }}
              role="link"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope fa-5x" />
            </a>
          </div>
        </div>
        <p>© 2023 Cameron Howze</p>
      </footer>
    </>
  );
}
