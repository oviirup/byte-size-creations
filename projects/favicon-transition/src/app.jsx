import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { Tweet } from './tweet';

function App() {
  const favicon = React.useRef();
  const timer = React.useRef();

  // the primary function goes here...
  React.useEffect(() => {
    // find and assign the favicon to ref
    if (!favicon.current) {
      favicon.current = document.querySelector('link[rel="icon"]');
    }

    // update the favicon with respective frame
    const updateFavicon = (frame) => favicon.current?.setAttribute('href', `/vite-frame-${frame}.svg`);

    // update the favicon based on the document visibility
    const handleVisibilityChange = () => {
      if (timer.current) {
        // this is to stop nodeTimer on visibility change during transition
        clearInterval(timer.current);
      }
      if (document.hidden) {
        // icon grayed out if document is inactive
        updateFavicon(0);
      } else {
        // loop through the frames to create flickring effect
        let index = 0;
        const FRAMES = [1, 0, 1, 1, 0, 0, 1, 0, 2];
        const DELAY = 150;
        timer.current = setInterval(() => {
          if (index < FRAMES.length) {
            updateFavicon(FRAMES[index]);
            ++index;
          } else {
            clearInterval(timer.current);
          }
        }, DELAY);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <main className="container mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center px-6 md:px-8">
      <Tweet />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
