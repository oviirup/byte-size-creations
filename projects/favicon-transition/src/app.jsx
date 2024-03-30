import DemoVideo from './demo.mp4';
import React from 'react';

export function App() {
  const favicon = React.useRef(null);
  const timer = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // the promary function goes here...
  React.useEffect(() => {
    // find and assign the favicon to ref
    if (!favicon.current) {
      favicon.current = document.querySelector('link[rel="icon"]');
    }
    // update the favicon with respective frame
    const updateFavicon = (frame) => {
      if (!favicon.current) return;
      favicon.current.href = `/vite-frame-${frame}.svg`;
    };
    // update the favicon based on the document visibility
    const handleVisibilityChange = (e) => {
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
        const DELAY = 200;
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

  const openTweet = (event) => {
    if (event.target.tagName === 'VIDEO') return;
    const href = event.currentTarget.getAttribute('data-href');
    if (href) window.open(href, '_blank');
  };

  return (
    <main className='container mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center px-6 md:px-8'>
      <div className='mb-10 max-w-md text-center text-xl'>
        Create a{' '}
        <a
          href='/'
          target='_black'
          className='text-sky-500 decoration-sky-500/50 underline-offset-2 hover:underline focus-visible:underline'>
          new tab
        </a>{' '}
        and return 👈 to this tab again, to see the favicon{' '}
        <span className='text-neutral-600 dark:text-neutral-400'>flicker</span>{' '}
        💡
      </div>
      <blockquote className='rounded-2xl border border-neutral-200 dark:border-neutral-800'>
        <article
          className='group relative flex cursor-pointer gap-1 px-4 py-3'
          data-href='https://twitter.com/brotzky_/status/1766153313303818477'
          onClick={openTweet}>
          <div className='absolute inset-0 bottom-5 opacity-[0.025] group-hover:bg-current' />
          <div className='flex shrink-0 flex-col items-center gap-1'>
            <a href='https://twitter.com/brotzky_' target='_blank'>
              <img
                src='https://pbs.twimg.com/profile_images/1352704374217183233/84TK-amU_normal.jpg'
                className='size-10 rounded-full p-0.5'
              />
            </a>
            <span className='flex h-16 w-px flex-1 flex-grow border-r border-neutral-500/50' />
          </div>
          <div className='pb-5'>
            <header className='inline-flex items-center gap-1'>
              <a
                href='https://twitter.com/brotzky_'
                className='inline-flex items-center gap-1 text-[15px] font-bold leading-5 decoration-neutral-500 underline-offset-2 hover:underline focus-visible:underline'>
                Brotzky
                <svg
                  viewBox='0 0 22 22'
                  className='size-5 fill-sky-600 dark:fill-sky-400 '>
                  <path d='M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z' />
                </svg>
              </a>
              <a
                href='https://twitter.com/brotzky_'
                className='text-sm text-neutral-600 dark:text-neutral-400'>
                @brotzky_
              </a>
              <span className='text-neutral-600 dark:text-neutral-400'>
                · Mar 8
              </span>
            </header>
            <p className='text-lg'>
              <span>Charging up</span>
              <img
                draggable='false'
                src='https://abs-0.twimg.com/emoji/v2/svg/1faab.svg'
                className='ms-1 inline size-[1em]'
                alt='🪫'
              />
              <img
                draggable='false'
                src='https://abs-0.twimg.com/emoji/v2/svg/1f50b.svg'
                className='ms-1 inline size-[1em]'
                alt='🔋'
              />
            </p>
            <div className='relative'>
              <button
                className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 fill-white p-4 opacity-100 backdrop-blur-md transition-opacity disabled:opacity-0'
                tabIndex={-1}
                aria-hidden={true}
                disabled={isPlaying}>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <polygon points='6 3 20 12 6 21 6 3' />
                </svg>
              </button>
              <video
                draggable='false'
                poster='https://pbs.twimg.com/ext_tw_video_thumb/1766153250359984128/pu/img/wyxB2xvj7KEa6uAb?format=jpg&name=small'
                src={DemoVideo}
                loop
                onClick={(event) => {
                  const target = event.currentTarget;
                  target.paused ? target.play() : target.pause();
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                disablePictureInPicture
                className='mt-3 rounded-xl border border-neutral-200 dark:border-neutral-800'
                data-interactive
              />
            </div>
          </div>
        </article>
        <article
          className='flex gap-1 px-4 pb-3'
          data-href='https://twitter.com/oviirup/status/1766161749739507850'
          onClick={openTweet}>
          <div className='flex shrink-0 flex-col items-center gap-1'>
            <a href='https://twitter.com/oviirup' target='_blank'>
              <img
                src='https://pbs.twimg.com/profile_images/1726685128775327744/9pBNrDLZ_normal.png'
                className='size-10 rounded-full p-0.5'
              />
            </a>
          </div>
          <div className='flex-1 cursor-pointer'>
            <header className='inline-flex items-center gap-1'>
              <a
                href='https://twitter.com/oviirup'
                className='inline-flex items-center gap-1 text-[15px] font-bold leading-5 decoration-neutral-500 underline-offset-2 hover:underline focus-visible:underline'>
                Oviirup
              </a>
              <a
                href='https://twitter.com/oviirup'
                className='text-sm text-neutral-600 dark:text-neutral-400'>
                @oviirup
              </a>
            </header>
            <p className='text-lg'>
              <span>I will recreate it</span>
            </p>
          </div>
        </article>
      </blockquote>
      <div className='mt-10'>
        <a
          href='https://github.com/oviirup/byte-size-creations/tree/main/projects/favicon-transition'
          className='inline-flex items-center gap-2 text-sm text-neutral-600 underline-offset-2 hover:underline focus-visible:underline dark:text-neutral-400'>
          <svg viewBox='0 0 24 24' className='size-5 fill-none stroke-current'>
            <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
            <path d='M9 18c-4.51 2-5-2-7-2' />
          </svg>
          <span>Open GitHub Repo</span>
        </a>
      </div>
    </main>
  );
}
