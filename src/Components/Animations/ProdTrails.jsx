import React from 'react';
import { animated, config, useTrail } from '@react-spring/web';

function ProdTrails({ children, delay }) {
  const items = React.Children.toArray(children);
  const trails = useTrail(items.length, {
    config: config.gentle,

    delay,
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 }
  });
  return trails.map((style, index) => (
    <animated.div key={index} style={style}>
      {items[index]}
    </animated.div>
  ));
}

export default ProdTrails;