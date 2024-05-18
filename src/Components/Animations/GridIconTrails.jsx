import React from 'react';
import { animated, config, useTrail } from '@react-spring/web';

function GridIconTrails({ children, delay,show }) {
    const items = React.Children.toArray(children);
    const trails = useTrail(items.length, {
        config: config.gentle,
        delay,
        opacity: show ? 1 : 0,
        x: show ? 0 : 10,
        height: show ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 }
      });
    
      return trails.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ));
}

export default GridIconTrails