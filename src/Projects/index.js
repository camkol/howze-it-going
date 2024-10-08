import React from "react";
import "./Projects.css";
import Project from "./Project";
import Preview from "./Preview";

export default function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <div>
          <h2 className="titles">Projects</h2>
        </div>
        <div id="projectGrid">
          <div className="scrollport">
            <Project />
            <div className="card presenter">
              <div className="card-body presser">
                <div id="chris" className="imager">
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/level.jpg"
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
            <div
              className="card presenter"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                borderRadius: "1rem",
                blockSize: "20rem",
                aspectRatio: "1",
                boxShadow:
                  "0 -2px 5px 0 hsl(220 3% 15%/calc(1% + 2%)),0 1px 1px -2px hsl(220 3% 15%/calc(1% + 3%)),0 2px 2px -2px hsl(220 3% 15%/calc(1% + 3%)),0 5px 5px -2px hsl(220 3% 15%/calc(1% + 4%)),0 9px 9px -2px hsl(220 3% 15%/calc(1% + 5%)),0 16px 16px -2px hsl(220 3% 15%/calc(1% + 6%))",
                transition: "transform 0.3s ease-in-out 0s",
                margin: "20px",
                minWidth: "20rem",
              }}
            >
              <div
                className="card-body presser"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  cursor: "pointer",
                }}
              >
                <div
                  id="ravenous"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/ravenous.jpg"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      transition: "filter 0.3s ease 0s",
                      borderRadius: "20px",
                      width: "100%",
                      display: "block",
                    }}
                  />
                </div>
                <hr
                  style={{
                    overflow: "visible",
                    boxSizing: "content-box",
                    height: "0px",
                    borderWidth: "1px 0px 0px",
                    borderImage: "initial",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    borderRightStyle: "initial",
                    borderBottomStyle: "initial",
                    borderLeftStyle: "initial",
                    borderRightColor: "initial",
                    borderBottomColor: "initial",
                    borderLeftColor: "initial",
                    borderTopStyle: "solid",
                    borderTopColor: "rgba(0, 0, 0, 0.1)",
                  }}
                />
                <h5
                  className="card-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Ravenous
                </h5>
                <p
                  className="progStyle card-subtitle mb-2 text-muted"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "-0.375rem",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                    color: "rgb(108, 117, 125)",
                  }}
                >
                  <span
                    className="reactSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(78, 176, 202) 0%, rgb(97, 218, 251) 70%)",
                    }}
                  >
                    React
                  </span>
                  <span
                    className="jsSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(218, 190, 36) 0%, rgb(240, 219, 79) 70%)",
                    }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="htmlSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(228, 77, 38) 0%, rgb(241, 101, 41) 70%)",
                    }}
                  >
                    HTML
                  </span>
                  <span
                    className="cssSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(38, 77, 228) 0%, rgb(41, 101, 241) 70%)",
                    }}
                  >
                    CSS
                  </span>
                  <span
                    className="sassSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(207, 100, 154) 0%, rgb(236, 123, 181) 70%)",
                    }}
                  >
                    SASS
                  </span>
                  <span
                    className="psSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(0, 200, 255) 0%, rgb(0, 29, 38) 70%)",
                    }}
                  >
                    Photoshop
                  </span>
                </p>
              </div>
            </div>
            <div
              className="card presenter"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                borderRadius: "1rem",
                blockSize: "20rem",
                aspectRatio: "1",
                boxShadow:
                  "0 -2px 5px 0 hsl(220 3% 15%/calc(1% + 2%)),0 1px 1px -2px hsl(220 3% 15%/calc(1% + 3%)),0 2px 2px -2px hsl(220 3% 15%/calc(1% + 3%)),0 5px 5px -2px hsl(220 3% 15%/calc(1% + 4%)),0 9px 9px -2px hsl(220 3% 15%/calc(1% + 5%)),0 16px 16px -2px hsl(220 3% 15%/calc(1% + 6%))",
                transition: "transform 0.3s ease-in-out 0s",
                margin: "20px",
                minWidth: "20rem",
              }}
            >
              <div
                className="card-body presser"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  cursor: "pointer",
                }}
              >
                <div
                  id="dragon"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/dragon.jpg"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      transition: "filter 0.3s ease 0s",
                      borderRadius: "20px",
                      width: "100%",
                      display: "block",
                    }}
                  />
                </div>
                <hr
                  style={{
                    overflow: "visible",
                    boxSizing: "content-box",
                    height: "0px",
                    borderWidth: "1px 0px 0px",
                    borderImage: "initial",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    borderRightStyle: "initial",
                    borderBottomStyle: "initial",
                    borderLeftStyle: "initial",
                    borderRightColor: "initial",
                    borderBottomColor: "initial",
                    borderLeftColor: "initial",
                    borderTopStyle: "solid",
                    borderTopColor: "rgba(0, 0, 0, 0.1)",
                  }}
                />
                <h5
                  className="card-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Dragon Repeller
                </h5>
                <p
                  className="progStyle card-subtitle mb-2 text-muted"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "-0.375rem",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                    color: "rgb(108, 117, 125)",
                  }}
                >
                  <span
                    className="jsSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(218, 190, 36) 0%, rgb(240, 219, 79) 70%)",
                    }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="htmlSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(228, 77, 38) 0%, rgb(241, 101, 41) 70%)",
                    }}
                  >
                    HTML
                  </span>
                  <span
                    className="cssSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(38, 77, 228) 0%, rgb(41, 101, 241) 70%)",
                    }}
                  >
                    CSS
                  </span>
                </p>
              </div>
            </div>
            <div
              className="card presenter"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                borderRadius: "1rem",
                blockSize: "20rem",
                aspectRatio: "1",
                boxShadow:
                  "0 -2px 5px 0 hsl(220 3% 15%/calc(1% + 2%)),0 1px 1px -2px hsl(220 3% 15%/calc(1% + 3%)),0 2px 2px -2px hsl(220 3% 15%/calc(1% + 3%)),0 5px 5px -2px hsl(220 3% 15%/calc(1% + 4%)),0 9px 9px -2px hsl(220 3% 15%/calc(1% + 5%)),0 16px 16px -2px hsl(220 3% 15%/calc(1% + 6%))",
                transition: "transform 0.3s ease-in-out 0s",
                margin: "20px",
                minWidth: "20rem",
              }}
            >
              <div
                className="card-body presser"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  cursor: "pointer",
                }}
              >
                <div
                  id="MyMusicPlayer"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/mymusicplayer.jpg"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      transition: "filter 0.3s ease 0s",
                      borderRadius: "20px",
                      width: "100%",
                      display: "block",
                    }}
                  />
                </div>
                <hr
                  style={{
                    overflow: "visible",
                    boxSizing: "content-box",
                    height: "0px",
                    borderWidth: "1px 0px 0px",
                    borderImage: "initial",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    borderRightStyle: "initial",
                    borderBottomStyle: "initial",
                    borderLeftStyle: "initial",
                    borderRightColor: "initial",
                    borderBottomColor: "initial",
                    borderLeftColor: "initial",
                    borderTopStyle: "solid",
                    borderTopColor: "rgba(0, 0, 0, 0.1)",
                  }}
                />
                <h5
                  className="card-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  My Music Player
                </h5>
                <p
                  className="progStyle card-subtitle mb-2 text-muted"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "-0.375rem",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                    color: "rgb(108, 117, 125)",
                  }}
                >
                  <span
                    className="jsSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(218, 190, 36) 0%, rgb(240, 219, 79) 70%)",
                    }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="htmlSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(228, 77, 38) 0%, rgb(241, 101, 41) 70%)",
                    }}
                  >
                    HTML
                  </span>
                  <span
                    className="cssSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(38, 77, 228) 0%, rgb(41, 101, 241) 70%)",
                    }}
                  >
                    CSS
                  </span>
                </p>
              </div>
            </div>
            <div
              className="card presenter"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                borderRadius: "1rem",
                blockSize: "20rem",
                aspectRatio: "1",
                boxShadow:
                  "0 -2px 5px 0 hsl(220 3% 15%/calc(1% + 2%)),0 1px 1px -2px hsl(220 3% 15%/calc(1% + 3%)),0 2px 2px -2px hsl(220 3% 15%/calc(1% + 3%)),0 5px 5px -2px hsl(220 3% 15%/calc(1% + 4%)),0 9px 9px -2px hsl(220 3% 15%/calc(1% + 5%)),0 16px 16px -2px hsl(220 3% 15%/calc(1% + 6%))",
                transition: "transform 0.3s ease-in-out 0s",
                margin: "20px",
                minWidth: "20rem",
              }}
            >
              <div
                className="card-body presser"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  cursor: "pointer",
                }}
              >
                <div
                  id="soleShoes"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/soleshoes.jpg"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      transition: "filter 0.3s ease 0s",
                      borderRadius: "20px",
                      width: "100%",
                      display: "block",
                    }}
                  />
                </div>
                <hr
                  style={{
                    overflow: "visible",
                    boxSizing: "content-box",
                    height: "0px",
                    borderWidth: "1px 0px 0px",
                    borderImage: "initial",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    borderRightStyle: "initial",
                    borderBottomStyle: "initial",
                    borderLeftStyle: "initial",
                    borderRightColor: "initial",
                    borderBottomColor: "initial",
                    borderLeftColor: "initial",
                    borderTopStyle: "solid",
                    borderTopColor: "rgba(0, 0, 0, 0.1)",
                  }}
                />
                <h5
                  className="card-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Sole Shoes
                </h5>
                <p
                  className="progStyle card-subtitle mb-2 text-muted"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "-0.375rem",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                    color: "rgb(108, 117, 125)",
                  }}
                >
                  <span
                    className="jsSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(218, 190, 36) 0%, rgb(240, 219, 79) 70%)",
                    }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="jqSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(8, 104, 172) 0%, rgb(8, 70, 114) 70%)",
                    }}
                  >
                    jQuery
                  </span>
                  <span
                    className="htmlSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(228, 77, 38) 0%, rgb(241, 101, 41) 70%)",
                    }}
                  >
                    HTML
                  </span>
                  <span
                    className="cssSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(38, 77, 228) 0%, rgb(41, 101, 241) 70%)",
                    }}
                  >
                    CSS
                  </span>
                </p>
              </div>
            </div>
            <div
              className="card presenter"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                borderRadius: "1rem",
                blockSize: "20rem",
                aspectRatio: "1",
                boxShadow:
                  "0 -2px 5px 0 hsl(220 3% 15%/calc(1% + 2%)),0 1px 1px -2px hsl(220 3% 15%/calc(1% + 3%)),0 2px 2px -2px hsl(220 3% 15%/calc(1% + 3%)),0 5px 5px -2px hsl(220 3% 15%/calc(1% + 4%)),0 9px 9px -2px hsl(220 3% 15%/calc(1% + 5%)),0 16px 16px -2px hsl(220 3% 15%/calc(1% + 6%))",
                transition: "transform 0.3s ease-in-out 0s",
                margin: "20px",
                minWidth: "20rem",
              }}
            >
              <div
                className="card-body presser"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  cursor: "pointer",
                }}
              >
                <div
                  id="colmarAcademy"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/colmaracademy.jpg"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      transition: "filter 0.3s ease 0s",
                      borderRadius: "20px",
                      width: "100%",
                      display: "block",
                    }}
                  />
                </div>
                <hr
                  style={{
                    overflow: "visible",
                    boxSizing: "content-box",
                    height: "0px",
                    borderWidth: "1px 0px 0px",
                    borderImage: "initial",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    borderRightStyle: "initial",
                    borderBottomStyle: "initial",
                    borderLeftStyle: "initial",
                    borderRightColor: "initial",
                    borderBottomColor: "initial",
                    borderLeftColor: "initial",
                    borderTopStyle: "solid",
                    borderTopColor: "rgba(0, 0, 0, 0.1)",
                  }}
                />
                <h5
                  className="card-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Colmar Academy
                </h5>
                <p
                  className="progStyle card-subtitle mb-2 text-muted"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "-0.375rem",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                    color: "rgb(108, 117, 125)",
                  }}
                >
                  <span
                    className="htmlSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(228, 77, 38) 0%, rgb(241, 101, 41) 70%)",
                    }}
                  >
                    HTML
                  </span>
                  <span
                    className="cssSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(38, 77, 228) 0%, rgb(41, 101, 241) 70%)",
                    }}
                  >
                    CSS
                  </span>
                  <span
                    className="sassSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(207, 100, 154) 0%, rgb(236, 123, 181) 70%)",
                    }}
                  >
                    SASS
                  </span>
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="preview">
            <Preview />
          </div>
        </div>
      </section>
    </>
  );
}
