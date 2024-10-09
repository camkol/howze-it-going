import React, { useEffect, useRef } from "react";
import $ from "jquery";
import alphabet from "./alphabet"; // Adjust the path as necessary

const AnimatedCanvas = ({
  display = "need words",
  shape = "circle" /*square, triangle, star, pentagon */,
  color = [
    [0, 100, 63],
    [40, 100, 60],
    [75, 100, 40],
    [196, 77, 55],
    [280, 50, 60],
  ],
}) => {
  const canvasRef = useRef(null);
  const pointCollectionRef = useRef(null);

  useEffect(() => {
    function Vector(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;

      this.set = function (x, y) {
        this.x = x;
        this.y = y;
      };
    }

    function PointCollection() {
      this.mousePos = new Vector(0, 0);
      this.pointCollectionX = 0;
      this.pointCollectionY = 0;
      this.points = [];

      this.update = function () {
        for (var i = 0; i < this.points.length; i++) {
          var point = this.points[i];

          var dx = this.mousePos.x - point.curPos.x;
          var dy = this.mousePos.y - point.curPos.y;
          var dd = dx * dx + dy * dy;
          var d = Math.sqrt(dd);

          point.targetPos.x =
            d < 150 ? point.curPos.x - dx : point.originalPos.x;
          point.targetPos.y =
            d < 150 ? point.curPos.y - dy : point.originalPos.y;

          point.update();
        }
      };

      this.shake = function () {
        for (var i = 0; i < this.points.length; i++) {
          var point = this.points[i];
          point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY);
        }
      };

      this.draw = function (bubbleShape, reset) {
        for (var i = 0; i < this.points.length; i++) {
          var point = this.points[i];

          if (point === null) continue;

          if (window.reset) {
            this.pointCollectionX = 0;
            this.pointCollectionY = 0;
            this.mousePos = new Vector(0, 0);
          }

          point.draw(
            bubbleShape,
            this.pointCollectionX,
            this.pointCollectionY,
            reset
          );
        }
      };

      this.reset = function (bubbleShape) {};
    }

    function Point(x, y, z, size, color) {
      this.curPos = new Vector(x, y, z);
      this.color = color;

      this.friction = document.Friction;
      this.rotationForce = document.rotationForce;
      this.springStrength = 0.01;

      this.originalPos = new Vector(x, y, z);
      this.radius = size;
      this.size = size;
      this.targetPos = new Vector(x, y, z);
      this.velocity = new Vector(0.0, 0.0, 0.0);

      this.update = function () {
        var dx = this.targetPos.x - this.curPos.x;
        var dy = this.targetPos.y - this.curPos.y;
        // Orthogonal vector is [-dy, dx]
        var ax = dx * this.springStrength - this.rotationForce * dy;
        var ay = dy * this.springStrength + this.rotationForce * dx;

        this.velocity.x += ax;
        this.velocity.x *= this.friction;
        this.curPos.x += this.velocity.x;

        this.velocity.y += ay;
        this.velocity.y *= this.friction;
        this.curPos.y += this.velocity.y;

        var dox = this.originalPos.x - this.curPos.x;
        var doy = this.originalPos.y - this.curPos.y;
        var dd = dox * dox + doy * doy;
        var d = Math.sqrt(dd);

        this.targetPos.z = d / 100 + 1;
        var dz = this.targetPos.z - this.curPos.z;
        var az = dz * this.springStrength;
        this.velocity.z += az;
        this.velocity.z *= this.friction;
        this.curPos.z += this.velocity.z;

        this.radius = this.size * this.curPos.z;
        if (this.radius < 1) this.radius = 1;
      };

      this.draw = function (bubbleShape, dx, dy) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.fillStyle = this.color;
        if (bubbleShape === "square") {
          ctx.beginPath();
          ctx.fillRect(
            this.curPos.x + dx,
            this.curPos.y + dy,
            this.radius * 1.5,
            this.radius * 1.5
          );
        } else if (bubbleShape === "triangle") {
          ctx.beginPath();
          ctx.moveTo(this.curPos.x + dx, this.curPos.y + dy - this.radius);
          ctx.lineTo(
            this.curPos.x + dx - this.radius,
            this.curPos.y + dy + this.radius
          );
          ctx.lineTo(
            this.curPos.x + dx + this.radius,
            this.curPos.y + dy + this.radius
          );
          ctx.closePath();
          ctx.fill();
        } else if (bubbleShape === "star") {
          const spikes = 5;
          const outerRadius = this.radius;
          const innerRadius = this.radius / 2;
          let rot = (Math.PI / 2) * 3;
          let x = this.curPos.x + dx;
          let y = this.curPos.y + dy;
          const step = Math.PI / spikes;

          ctx.beginPath();
          ctx.moveTo(x, y - outerRadius);
          for (let i = 0; i < spikes; i++) {
            x = this.curPos.x + dx + Math.cos(rot) * outerRadius;
            y = this.curPos.y + dy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = this.curPos.x + dx + Math.cos(rot) * innerRadius;
            y = this.curPos.y + dy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
          }
          ctx.lineTo(this.curPos.x + dx, this.curPos.y + dy - outerRadius);
          ctx.closePath();
          ctx.fill();
        } else if (bubbleShape === "pentagon") {
          const x = this.curPos.x + dx;
          const y = this.curPos.y + dy;
          const r = this.radius;
          const angle = (2 * Math.PI) / 5;

          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(
              x + r * Math.cos(angle * i - Math.PI / 2),
              y + r * Math.sin(angle * i - Math.PI / 2)
            );
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(
            this.curPos.x + dx,
            this.curPos.y + dy,
            this.radius,
            0,
            Math.PI * 2,
            true
          );
          ctx.fill();
        }
      };
    }

    function makeColor(hslList, fade) {
      var hue = hslList[0]; /*- 17.0 * fade / 1000.0*/
      var sat = hslList[1]; /*+ 81.0 * fade / 1000.0*/
      var lgt = hslList[2]; /*+ 58.0 * fade / 1000.0*/
      return `hsl(${hue},${sat}%,${lgt}%)`;
    }

    function phraseToHex(phrase) {
      var hexphrase = "";
      for (var i = 0; i < phrase.length; i++) {
        hexphrase += phrase.charCodeAt(i).toString(16);
      }
      return hexphrase;
    }

    function initEventListeners() {
      $(window)
        .bind("resize", updateCanvasDimensions)
        .bind("mousemove", onMove);

      canvasRef.current.ontouchmove = function (e) {
        e.preventDefault();
        onTouchMove(e);
      };

      canvasRef.current.ontouchstart = function (e) {
        e.preventDefault();
      };
    }

    function updateCanvasDimensions() {
      const canvas = $(canvasRef.current);
      canvas.attr({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      draw();
    }

    function onMove(e) {
      if (pointCollectionRef.current) {
        pointCollectionRef.current.mousePos.set(
          e.pageX - $(canvasRef.current).offset().left,
          e.pageY - $(canvasRef.current).offset().top
        );
      }
    }

    function onTouchMove(e) {
      if (pointCollectionRef.current) {
        pointCollectionRef.current.mousePos.set(
          e.targetTouches[0].pageX - $(canvasRef.current).offset().left,
          e.targetTouches[0].pageY - $(canvasRef.current).offset().top
        );
      }
    }

    function bounceBubbles() {
      draw();
      update();
      setTimeout(bounceBubbles, 30);
    }

    function draw(reset) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (pointCollectionRef.current) {
        pointCollectionRef.current.draw(bubbleShape, reset);
      }
    }

    function update() {
      if (pointCollectionRef.current) pointCollectionRef.current.update();
    }

    function drawName(name, letterColors) {
      updateCanvasDimensions();
      var g = [];
      var offset = 0;

      function addLetter(cc_hex, ix, letterCols) {
        if (typeof letterCols !== "undefined") {
          if (Array.isArray(letterCols) && Array.isArray(letterCols[0])) {
            letterColors = letterCols;
          }
          if (Array.isArray(letterCols) && typeof letterCols[0] === "number") {
            letterColors = [letterCols];
          }
        } else {
          letterColors = [[0, 0, 27]];
        }

        if (alphabet.hasOwnProperty(cc_hex)) {
          var chr_data = alphabet[cc_hex].P;
          var bc = letterColors[ix % letterColors.length];

          for (var i = 0; i < chr_data.length; ++i) {
            var point = chr_data[i];
            g.push(
              new Point(
                point[0] * 0.5 + offset,
                point[1] * 0.5,
                0.0,
                point[2] * 0.5,
                makeColor(bc, point[3] * 0.5)
              )
            );
          }
          offset += alphabet[cc_hex].W * 0.5;
        }
      }

      var hexphrase = phraseToHex(name);

      var col_ix = -1;
      for (var i = 0; i < hexphrase.length; i += 2) {
        var cc_hex = "A" + hexphrase.charAt(i) + hexphrase.charAt(i + 1);
        if (cc_hex !== "A20") {
          col_ix++;
        }
        addLetter(cc_hex, col_ix, letterColors);
      }

      for (var j = 0; j < g.length; j++) {
        g[j].curPos.x =
          canvasRef.current.width / 2 - offset / 2 + g[j].curPos.x;
        g[j].curPos.y = canvasRef.current.height / 2 - 105 + g[j].curPos.y;
        g[j].originalPos.x =
          canvasRef.current.width / 2 - offset / 2 + g[j].originalPos.x;
        g[j].originalPos.y =
          canvasRef.current.height / 2 - 105 + g[j].originalPos.y;
      }

      pointCollectionRef.current = new PointCollection();
      pointCollectionRef.current.points = g;
      initEventListeners();
    }

    window.reset = false;

    $(window).mouseleave(() => {
      window.reset = true;
    });

    $(window).mouseenter(() => {
      window.reset = false;
    });

    document.rotationForce = 0.0;
    document.Friction = 0.85;

    // const red = [0, 100, 63];
    // const orange = [40, 100, 60];
    // const green = [75, 100, 40];
    // const blue = [196, 77, 55];
    // const purple = [280, 50, 60];

    const wordToDisplay = display;
    // const letterColors = [red, orange, green, blue, purple];
    const letterColors = color;
    let bubbleShape = shape;

    drawName(wordToDisplay, letterColors);
    bounceBubbles();

    // Cleanup event listeners on component unmount
    const canvasElement = canvasRef.current;
    return () => {
      $(window)
        .unbind("resize", updateCanvasDimensions)
        .unbind("mousemove", onMove);
      if (canvasElement) {
        canvasElement.ontouchmove = null;
        canvasElement.ontouchstart = null;
      }
    };
  }, [display, shape, color]);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} id="myCanvas"></canvas>
    </div>
  );
};

export default AnimatedCanvas;
