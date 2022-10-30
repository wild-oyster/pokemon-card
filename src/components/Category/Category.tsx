import React, { FunctionComponent, useState } from "react";
import { animated, useSpring } from "react-spring";

import { FiChevronDown } from "react-icons/fi";
import useMeasure from "react-use-measure";

export type CategoryProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Category: FunctionComponent<CategoryProps> = ({
  children,
  title,
  className,
}) => {
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
    <div className={className}>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex w-full justify-between items-center border-b py-8 border-white select-none"
      >
        <div className="text-white text-4xl font-pokemon tracking-wider">
          {title}
        </div>
        <div
          style={{
            transform: `rotateX(${open ? 180 : 0}deg)`,
            transition: "transform 0.3s ease",
          }}
        >
          <FiChevronDown color="white" size={30} />
        </div>
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
