import React, { FunctionComponent, useState } from "react";
import { animated, useSpring } from "react-spring";

import useMeasure from "react-use-measure";

export type CategoryProps = {
  title: string;
  children: React.ReactNode;
};

const Category: FunctionComponent<CategoryProps> = ({ children, title }) => {
  const [open, setOpen] = useState(true);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: open ? viewHeight : 0,
      opacity: open ? 1 : 0,
      y: open ? 0 : 20,
    },
  });

  return (
    <div>
      <div>
        <div>{title}</div>
        <button onClick={() => setOpen(!open)}>Toggle</button>
      </div>
      <animated.div
        style={{
          opacity,
          height,
          overflow: open ? undefined : "hidden",
        }}
      >
        <animated.div
          ref={ref}
          style={{
            y,
          }}
        >
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Category;
