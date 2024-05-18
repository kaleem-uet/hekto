import React from 'react';
import { animated, config, useTrail } from '@react-spring/web';

export default function SaleTrails({ children, delay,show }) {
  const items = React.Children.toArray(children);
  const trails = useTrail(items.length, {
    config: config.gentle,
    delay,
    from: { opacity:0, y: show ? 70 : 0  },
    to: { opacity: 1, y: show ? 0:70 }
  });
  return trails.map((style, index) => (
    <animated.div key={index} style={style}>
      {items[index]}
    </animated.div>
  ));
}

 