import React, { useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';

const variants = {
  open: {
    x: [100, -3, 20],
    marginTop: '50px',
    marginBottom: '50px',
    scale: 1.2,
    backgroundColor: 'salmon',
  },
  closed: {
    x: 0,
    scale: 1,
  },
};

const Home = () => {
  const list = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(0);
  return (
    <div className="container">
      <ul className="list">
        <AnimateSharedLayout>
          {list.map((item) => (
            <motion.li
              layout
              animate={item === active ? 'open' : 'closed'}
              variants={variants}
              key={item}
              onClick={() => {
                if (active === item) {
                  setActive(0);
                } else {
                  setActive(item);
                }
              }}
              className={`item ${item === active ? 'active' : ''}`}
            >
              <div className="circle"></div>
              <div className="text-container">
                <div className="text"></div>
                <div className="text"></div>
                <div className="text short"></div>
              </div>
            </motion.li>
          ))}
        </AnimateSharedLayout>
      </ul>
    </div>
  );
};

export default Home;
