import React from 'react';
import { animated, config, useTrail, } from '@react-spring/web';

export default function BtnTrails({ children, delay,show }) {
  const items = React.Children.toArray(children);
  const trails = useTrail(items.length, {
    config: config.gentle,
    delay,
    from: { opacity:show ? 1: 0, x: 0 },
    to: { opacity: 1, x:0 }
  });
  return trails.map((style, index) => (
    <animated.div key={index} style={style}>
      {items[index]}
    </animated.div>
  ));
}

 