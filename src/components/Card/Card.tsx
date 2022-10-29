import "./styles.css";

import { animated, config, useSpring } from "react-spring";

import React from "react";

export type CardProps = {
  src: string;
  flipped?: boolean;
};

const round = (num: number, fix = 3) => parseFloat(num.toFixed(fix));

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(${s})`;

const Card: React.FC<CardProps> = ({ src, flipped }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { ...config.gentle, damping: 0.25 },
  }));

  if (flipped) {
    return (
      <animated.img
        onPointerMove={({ clientX: x, clientY: y, target }) => {
          // @ts-ignore
          const rect = target.getBoundingClientRect();
          const absolute = {
            x: x - rect.left, // get mouse position from left
            y: y - rect.top, // get mouse position from right
          };
          const percent = {
            x: round((100 / rect.width) * absolute.x),
            y: round((100 / rect.height) * absolute.y),
          };
          const center = {
            x: percent.x - 50,
            y: percent.y - 50,
          };
          set({ xys: [round(-(center.x / 3.5)), round(center.y / 2), 1] });
        }}
        onMouseOut={() => set({ xys: [0, 0, 1] })}
        src={src}
        alt="pokemon"
        width="260"
        height="365"
        style={{
          margin: "20px",
          transform: props.xys.to(trans),
          transformOrigin: "center",
          // @ts-ignore
          imageRendering: "optimizeQuality",
          transformStyle: "preserve-3d",
          willChange: "transform",
          boxShadow: "0px 10px 20px -5px black",
          transition: "box-shadow 0.4s ease, outline 0.2s ease",
          borderRadius: "4.55% / 3.5%",
        }}
      />
    );
  }

  return (
    <animated.div
      onPointerMove={({ clientX: x, clientY: y, target }) => {
        // @ts-ignore
        const rect = target.getBoundingClientRect();
        const absolute = {
          x: x - rect.left, // get mouse position from left
          y: y - rect.top, // get mouse position from right
        };
        const percent = {
          x: round((100 / rect.width) * absolute.x),
          y: round((100 / rect.height) * absolute.y),
        };
        const center = {
          x: percent.x - 50,
          y: percent.y - 50,
        };
        set({ xys: [round(-(center.x / 3.5)), round(center.y / 2), 1] });
      }}
      onMouseOut={() => set({ xys: [0, 0, 1] })}
      className="flip-card"
      style={{
        margin: "20px",
        cursor: "pointer",
        transform: props.xys.to(trans),
        transformOrigin: "center",
        // @ts-ignore
        imageRendering: "optimizeQuality",
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "box-shadow 0.4s ease, outline 0.2s ease",
        borderRadius: "4.55% / 3.5%",
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={"https://images.pokemontcg.io/mcd18/11_hires.png"}
            alt="back"
            width="260"
            height="365"
            style={{
              borderRadius: "4.55% / 3.5%",
              boxShadow: "0px 10px 20px -5px black",
              // @ts-ignore
              imageRendering: "optimizeQuality",
              transformStyle: "preserve-3d",
              willChange: "transform",
              transition: "box-shadow 0.4s ease, outline 0.2s ease",
            }}
          />
        </div>
        <div className="flip-card-back">
          <img
            src={src}
            alt="pokemon"
            width="260"
            height="365"
            style={{
              borderRadius: "4.55% / 3.5%",
              boxShadow: "0px 10px 20px -5px black",
              // @ts-ignore
              imageRendering: "optimizeQuality",
              transformStyle: "preserve-3d",
              willChange: "transform",
              transition: "box-shadow 0.4s ease, outline 0.2s ease",
            }}
          />
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
