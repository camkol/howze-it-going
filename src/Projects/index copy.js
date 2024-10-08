import React from "react";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="container"
        style={{
          boxSizing: "border-box",
          display: "block",
          width: "100%",
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "1140px",
        }}
      >
        <div style={{ boxSizing: "border-box" }}>
          <h2
            className="titles"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "0.5rem",
              fontWeight: 500,
              lineHeight: 1.2,
              fontSize: "2rem",
              fontFamily: '"Protest Revolution", sans-serif',
            }}
          >
            Projects
          </h2>
        </div>
        <div
          id="projectGrid"
          style={{
            boxSizing: "border-box",
            placeContent: "center",
            display: "grid",
          }}
        >
          <div
            className="scrollport"
            style={{
              boxSizing: "border-box",
              gap: "-.25rem",
              padding: "var(--size-0)",
              overflowX: "auto",
              overscrollBehaviorX: "contain",
              display: "flex",
              alignItems: "start",
            }}
          >
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
                  id="xysTinyFind"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/xyline.jpg"
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
                  Xystinyfind
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
                    className="bsSpan"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      padding: "0.3rem",
                      margin: "0.15rem",
                      color: "white",
                      background:
                        "radial-gradient(rgb(143, 19, 254) 0%, rgb(106, 16, 243) 70%)",
                    }}
                  >
                    Bootstrap
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
                  id="chris"
                  className="imager"
                  style={{
                    boxSizing: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="imagist"
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/level.jpg"
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
                  Chris the Producer
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
          </div>
        </div>
        <div id="modalBag" style={{ boxSizing: "border-box" }}>
          <div
            id="enlargeXystinyfindModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeXystinyfindModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/xyline-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/xystinyfind.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://camkol.github.io/xystinyfind/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li style={{ boxSizing: "border-box" }}>
                      {
                        "I undertook the development for a close friend's company."
                      }
                    </li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Striving for consistency, I emulated the design of their old
website, then enhance upon request.`}</li>
                    <li style={{ boxSizing: "border-box" }}>
                      {
                        "Bootstrap was incorporated to enhance structural elements."
                      }
                    </li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`A JavaScript-based slideshow was implemented for visual
appeal.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Leveraging my Photoshop skills, I converted images to JPG
format to enhance accessibility and reduce file sizes,
subsequently improving load times.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enlargeChrisModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeChrisModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/chris-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/chris-react.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://christheproducer.netlify.app/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Developed an HTML structure and styling with CSS to create a
personalized webpage for a music producer friend.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Tailored the appearance of the header, producer-info
section, and footer to meet the client's preferences.
Applied comprehensive styles to achieve the desired layout,
colors, and fonts throughout the webpage.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Addressed the client's preference for the "Rubik Glitch Pop"
font, enhancing the overall aesthetic of the webpage.
Implemented text-shadow to create a distinctive glowing
effect on the header text as per the client's specific
request.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Integrated Font Awesome icons for social media platforms
(Facebook, Twitter, Instagram, SoundCloud) with custom
styling.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Successfully converted the personalized music producer
webpage, featuring tailored layouts, fonts, and styles
including custom glowing effects and Font Awesome icons,
into a dynamic and responsive React application.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enlargeRavenousModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeRavenousModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/ravenous-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/ravenous2.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://ravenous2-3.netlify.app/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`I crafted a robust HTML structure, ensuring semantic
integrity and accessibility.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`By breaking down the UI into reusable components, you've
embraced a modular approach for scalability and
maintainability.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Integrating dynamic data enriches user experience, while
leveraging SCSS for styling adds flexibility and efficiency
to your workflow.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Streamlining the data flow optimizes communication between
components, enhancing overall performance.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enlargeDragonModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeDragonModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/dragon-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/DragonRepeller.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://camkol.github.io/DragonRepeller/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Player stats such as experience points (xp), health, gold,
current weapon, and inventory are initialized. HTML elements
and buttons are linked to JavaScript variables for
interaction.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`The game defines various locations, monsters, weapons, and
actions using arrays and objects. Buttons are assigned
onclick functions corresponding to different in-game
actions, such as going to locations, buying/selling items,
and fighting monsters.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Combat involves attacking, dodging, and calculating damage
based on the player's weapon and the monster's level.
Outcomes are processed, including gaining or losing gold and
xp, defeating monsters, and determining victory or defeat.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`The game includes special events like an easter egg with a
number-picking game. Restart and replay options are
available upon winning or losing the game.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`The game features localization to create a German version
for your son. Text elements, button labels, and in-game
messages are translated to German, allowing your son to
enjoy the game in his native language.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enlargeMyMusicPlayerModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeMyMusicPlayerModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/mymusicplayer-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/MyMusicPlayer.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://camkol.github.io/MyMusicPlayer/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`In the project's HTML structure, the main content is housed
within an index.html file, featuring a container division
that holds the music player and playlist components.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`These components are styled using CSS defined in a
styles.css file, which customizes various aspects like font
styles, colors, and layout properties.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`The interactive behavior of the music player is managed
through JavaScript in a script.js file, which utilizes event
listeners to handle song playback, navigation, and playlist
management functions.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`The playlist data, containing details of each song, is
stored in an array format within the JavaScript file,
enabling dynamic song selection and rendering.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Audio playback is controlled using the Audio object,
allowing for play, pause, and track navigation
functionalities.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Together, these files and their associated code create a
cohesive web application for playing and managing a music
playlist, with an emphasis on responsive design and user
interaction.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enlargeSoleShoesModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeSoleShoesModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/soleshoes-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/SoleShoes.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://camkol.github.io/SoleShoes/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li style={{ boxSizing: "border-box" }}>
                      jQuery used for simple interactions.
                    </li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Hidden navigation menu with dropdown options. Hidden login
form that slides down when the login button is clicked.`}</li>
                    <li style={{ boxSizing: "border-box" }}>
                      Responsive design for different screen sizes.
                    </li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Media queries used to adjust button sizes and fonts for
different screen widths.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`This process creates a visually appealing and interactive
website, showcasing products and providing user-friendly
navigation.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enlargeColmarAcademyModal"
            className="modal fade"
            aria-hidden="true"
            aria-labelledby="enlargeColmarAcademyModalLabel"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              transition: "opacity 0.15s linear 0s",
              overflow: "hidden",
              outline: "0px",
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: 1050,
              display: "none",
              width: "100%",
              height: "100%",
              opacity: 0,
            }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "auto",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                margin: "1.75rem auto",
                minHeight: "calc(100% - 3.5rem)",
                maxWidth: "800px",
                transition:
                  "transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s",
                transform: "translate(0px, -50px)",
              }}
            >
              <div
                className="modal-content"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.3rem",
                  outline: "0px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  pointerEvents: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    borderBottom: "1px solid rgb(222, 226, 230)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTopLeftRadius: "0.3rem",
                    borderTopRightRadius: "0.3rem",
                  }}
                >
                  <img
                    src="http://127.0.0.1:5500/camkol.github.io/images/projects/colmaracademy-site.JPG"
                    style={{
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      width: "100%",
                    }}
                  />
                  <button
                    className="btn-close"
                    type="button"
                    aria-label="Close"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0px",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ boxSizing: "border-box" }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  <h5
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.25rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://github.com/camkol/capstone_colmar_assets.git"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      GitHub
                    </a>
                  </h5>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    <a
                      className="card-link"
                      href="https://camkol.github.io/capstone_colmar_assets/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(0, 123, 255)",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                    >
                      View Page
                    </a>
                  </h4>
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
                  <h4
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      fontSize: "1.5rem",
                    }}
                  >
                    Process
                  </h4>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    <li style={{ boxSizing: "border-box" }}>
                      This project served as my CSS capstone project.
                    </li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Introducing SASS into the mix, I found it beneficial for
visual structure.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Initially grappling with Flexbox, I decided to take a break
and reacquaint myself with it. This approach led to an
improved comprehension of grid layout techniques.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`With the desktop view finalized, I delved into crafting a
responsive design.`}</li>
                    <li
                      style={{ boxSizing: "border-box" }}
                    >{`Out of habit, and for reliable sourcing, I ensured that even
when provided with media links, I extracted photos and
videos to the project folder.`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
