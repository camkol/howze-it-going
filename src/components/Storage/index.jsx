import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import $ from "jquery";
import "./Storage.css";
// import library from "../../library";

export function Storage({ isMobile, library }) {
  useEffect(() => {
    const customScroll = Scrollbar.init(
      document.querySelector(".js-scroll-list"),
      {
        plugins: {
          overscroll: true,
        },
      }
    );

    const $listItems = $(".js-scroll-list-item");
    $listItems.eq(0).addClass("item-focus");
    $listItems.eq(1).addClass("item-next");

    customScroll.addListener((status) => {
      // const $content = $(".js-scroll-content");
      const viewportScrollDistance = status.offset.y;
      // const viewportHeight = $content.height();

      // let listHeight = 0;
      // $content.find(".js-scroll-list-item").each(function () {
      //   listHeight += $(this).height();
      // });

      const top = viewportScrollDistance;
      // const visibleCenterVertical = top;
      const $lis = $(".js-scroll-list-item");

      for (let i = 0; i < $lis.length; i++) {
        const $li = $($lis[i]);
        const liTop = $li.position().top;
        const liRelTop = liTop - 1; // Parent top hardcoded as 1 in original
        // const distance = Math.abs(top - liRelTop);
        // const maxDistance = viewportHeight / 2;
        // const distancePercent = distance / (maxDistance / 100);

        if (liRelTop + $li.parent().scrollTop() > top) {
          if (!$li.hasClass("item-focus")) {
            $li.prev().addClass("item-hide");
            $lis.removeClass("item-focus");
            $lis.removeClass("item-next");
          }
          $li.removeClass("item-hide");
          $li.addClass("item-focus");
          $li.next().addClass("item-next");
          break;
        }
      }
    });

    // Cleanup scrollbar instance on unmount
    return () => {
      customScroll.destroy();
    };
  }, []);

  return (
    <section className="container" id="storage">
      {isMobile && <h2 className="titles">Storage</h2>}
      <div className="wrapper">
        <div className="scroll-list">
          <div className="scroll-list__wrp js-scroll-content js-scroll-list">
            {library.map((proj, index) => (
              <Project project={proj} key={index} />
            ))}
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

function Project({ project }) {
  const { name, image, language, site, gitHub } = project;

  const renderLanguages = (languages) => {
    return languages.map((lang) => {
      switch (lang) {
        case "redux":
          return (
            <span key={lang} className="reduxSpan">
              Redux
            </span>
          );
        case "react":
          return (
            <span key={lang} className="reactSpan">
              React
            </span>
          );
        case "mui":
          return (
            <span key={lang} className="muiSpan">
              MUI
            </span>
          );
        case "tailwind":
          return (
            <span key={lang} className="tailwindSpan">
              Tailwind
            </span>
          );
        case "jquery":
          return (
            <span key={lang} className="jqSpan">
              jQuery
            </span>
          );
        case "javascript":
          return (
            <span key={lang} className="jsSpan">
              JavaScript
            </span>
          );
        case "html":
          return (
            <span key={lang} className="htmlSpan">
              HTML
            </span>
          );
        case "bootstrap":
          return (
            <span key={lang} className="bsSpan">
              Bootstrap
            </span>
          );
        case "bulma":
          return (
            <span key={lang} className="bulmaSpan">
              Bulma
            </span>
          );
        case "css":
          return (
            <span key={lang} className="cssSpan">
              CSS
            </span>
          );
        case "sass":
          return (
            <span key={lang} className="sassSpan">
              SASS
            </span>
          );
        case "3ds":
          return (
            <span key={lang} className="dsSpan">
              3ds Max
            </span>
          );
        case "photoshop":
          return (
            <span key={lang} className="psSpan">
              Photoshop
            </span>
          );
        default:
          return null; // Handle unknown languages
      }
    });
  };

  return (
    <div className="scroll-list__item js-scroll-list-item">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="desc">
        <h4>{name}</h4>
        <p className="progStyle">
          {renderLanguages(language)} {/* Call the render function */}
        </p>
        <a
          href={site}
          className="btn"
          target="_blank"
          rel="noreferrer noopener"
        >
          Live
        </a>
        {gitHub && (
          <a
            href={gitHub}
            className="btn"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

// const project = [
//   {
//     name: "Sprout",
//     image: "images/projects/sprout.jpg",
//     language: ["html", "css"],
//     site: "https://camkol.github.io/Sprout/",
//     gitHub: "https://github.com/camkol/Sprout.git",
//   },
//   {
//     name: "Steps",
//     image: "images/projects/comingSoon.jpg",
//     language: ["react", "javascript", "html", "css"],
//     site: "https://steps2.netlify.app/",
//     gitHub: "https://github.com/camkol/steps.git",
//   },
//   {
//     name: "Summary",
//     image: "images/projects/comingSoon.jpg",
//     language: ["react", "javascript", "html", "css"],
//     site: "https://camkol.github.io/summary--",
//     gitHub: "https://github.com/camkol/summary.git",
//   },
//   {
//     name: "The Summit",
//     image: "images/projects/summit.jpg",
//     language: ["jquery", "javascript", "html", "bootstrap", "css", "sass"],
//     site: "https://camkol.github.io/TheSummit/",
//     gitHub: "https://github.com/camkol/TheSummit.git",
//   },
// ];
