import React from 'react';

export function Tweet() {
  return (
    <blockquote className="border-border w-full overflow-hidden rounded-2xl border">
      <article className="hover:bg-card group relative flex cursor-pointer gap-2 px-4 pt-3">
        <div className="flex shrink-0 flex-col items-center gap-1">
          <a href="https://twitter.com/brotzky_" target="_blank">
            <img
              src="https://pbs.twimg.com/profile_images/1352704374217183233/84TK-amU_normal.jpg"
              className="border-border size-10 rounded-full border"
            />
          </a>
          <span className="flex h-16 w-px flex-1 flex-grow border-r border-neutral-500/50" />
        </div>
        <div className="w-full">
          <header className="inline-flex items-center gap-1">
            <a
              href="https://twitter.com/brotzky_"
              className="inline-flex items-center gap-1 text-[15px] font-bold leading-5 decoration-neutral-500 underline-offset-2 hover:underline focus-visible:underline"
              target="_blank"
            >
              Brotzky
              <Icon name="verified" fill="#1d9bf0" size="1.25em" />
            </a>
            <a
              href="https://twitter.com/brotzky_"
              className="text-sm text-neutral-600 dark:text-neutral-400"
              target="_blank"
            >
              @brotzky_
            </a>
            <span className="text-neutral-600 dark:text-neutral-400">· Mar 8</span>
          </header>
          <p className="text-lg">
            Charging up <TWEmoji name="1faab" alt="🪫" />
            <TWEmoji name="1f50b" alt="🔋" />
            <video
              draggable="false"
              poster="https://pbs.twimg.com/ext_tw_video_thumb/1766153250359984128/pu/img/wyxB2xvj7KEa6uAb?format=jpg&name=small"
              src="https://video.twimg.com/ext_tw_video/1766153250359984128/pu/vid/avc1/1130x720/iDnjlWQntEVZ1nH5.mp4?tag=14"
              typeof="video/mp4"
              loop
              disablePictureInPicture
              controls
              className="border-border mt-3 aspect-[476/304] w-full rounded-xl border"
            />
          </p>
          <div className="text-muted-fg mb-3 mt-4 flex items-center gap-5">
            <span className="inline-flex items-center gap-2 text-sm">
              <Icon name="comment" size="1.25em" />
              21
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <Icon name="repost" size="1.25em" />
              29
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <Icon name="like" size="1.25em" />
              632
            </span>
          </div>
        </div>
      </article>
      <article
        className="hover:bg-card -mt-2 flex gap-2 px-4 pb-3 pt-2"
        data-href="https://twitter.com/oviirup/status/1766161749739507850"
      >
        <div className="flex flex-col">
          <header className="mb-2 inline-flex flex-col items-start">
            <a href="https://twitter.com/oviirup" className="flex gap-2" target="_blank">
              <img
                src="https://pbs.twimg.com/profile_images/1770148131709009920/z9ZchwSL_normal.jpg"
                className="border-border size-10 rounded-full border"
              />
              <div>
                <div className="hocus:underline decoration-muted-fg inline-flex items-center gap-1 text-[15px] font-bold leading-5 underline-offset-2">
                  Avirup Ghosh
                </div>
                <div className="text-muted-fg text-sm">@oviirup</div>
              </div>
            </a>
          </header>
          <div>
            <p className="mb-3 text-lg">Wow! neat. I will try to recreate it.</p>
            <p className="text-muted-fg text-sm">11:29 PM · Mar 8, 2024 · 982 Views</p>
          </div>
        </div>
      </article>
      <div className="flex-1 px-6 pb-4 pt-2">
        <a
          href="https://x.com/brotzky_/status/1766153313303818477"
          className="border-border hover:bg-card flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border"
          target="_blank"
        >
          Read Post
        </a>
      </div>
      {/* icons */}
      <svg viewBox="0 0 24 24" aria-hidden className="hidden">
        <symbol id="comment">
          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
        </symbol>
        <symbol id="repost">
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
        </symbol>
        <symbol id="like">
          <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
        </symbol>
        <symbol id="verified">
          <path d="M22.2502 12C22.2305 11.2953 22.0156 10.6091 21.6284 10.0189C21.2422 9.42982 20.6989 8.95854 20.0596 8.65963C20.3029 7.99745 20.3542 7.28073 20.2124 6.59018C20.0695 5.89854 19.7356 5.26145 19.2502 4.74982C18.7375 4.26436 18.1015 3.93163 17.4098 3.78763C16.7193 3.64582 16.0025 3.69709 15.3404 3.94036C15.0425 3.3 14.5724 2.75563 13.9822 2.36945C13.392 1.98327 12.7058 1.76727 12 1.74982C11.2953 1.76836 10.6113 1.98218 10.0222 2.36945C9.43309 2.75673 8.96509 3.30109 8.66945 3.94036C8.00618 3.69709 7.28727 3.64363 6.59454 3.78763C5.90182 3.92945 5.26363 4.26327 4.75091 4.74982C4.26545 5.26254 3.93382 5.90073 3.79309 6.59127C3.65127 7.28182 3.70582 7.99854 3.95018 8.65963C3.30982 8.95854 2.76436 9.42872 2.376 10.0178C1.98764 10.6069 1.77054 11.2942 1.74982 12C1.77164 12.7058 1.98764 13.392 2.376 13.9822C2.76436 14.5713 3.30982 15.0425 3.95018 15.3404C3.70582 16.0015 3.65127 16.7182 3.79309 17.4087C3.93491 18.1004 4.26545 18.7375 4.74982 19.2502C5.26254 19.7335 5.89963 20.0651 6.59018 20.208C7.28073 20.352 7.99745 20.2996 8.65963 20.0596C8.95854 20.6989 9.42873 21.2422 10.0189 21.6295C10.608 22.0156 11.2953 22.2305 12 22.2502C12.7058 22.2327 13.392 22.0178 13.9822 21.6316C14.5724 21.2455 15.0425 20.7 15.3404 20.0607C15.9993 20.3215 16.7215 20.3836 17.4164 20.2396C18.1102 20.0956 18.7473 19.752 19.2491 19.2502C19.7509 18.7484 20.0956 18.1113 20.2396 17.4164C20.3836 16.7215 20.3215 15.9993 20.0596 15.3404C20.6989 15.0415 21.2422 14.5713 21.6295 13.9811C22.0156 13.392 22.2305 12.7047 22.2502 12ZM10.5404 16.2L6.79963 12.4604L8.21018 11.04L10.4705 13.3004L15.2705 8.07054L16.74 9.42982L10.5404 16.2Z" />
        </symbol>
      </svg>
    </blockquote>
  );
}

/**
 * @param {React.HTMLAttributes<HTMLImageElement> & { name: string; alt: string }} param0
 * @returns
 */
function TWEmoji({ name, className = '', ...imageProps }) {
  return (
    <img
      draggable="false"
      src={`https://abs-0.twimg.com/emoji/v2/svg/${name}.svg`}
      className={`me-1 inline size-[1em] ${className}`}
      {...imageProps}
    />
  );
}

/**
 * Icon component with svg sprites
 *
 * @param {React.SVGAttributes<SVGElement> & { name: string; size: string | number }} param0
 * @see {@link https://youtu.be/1-Gjec48nJs}
 * @see {@link https://benadam.me/thoughts/react-svg-sprites/}
 */
function Icon({ size = '1em', name, ...iconProps }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentcolor"
      {...iconProps}
      role="img"
      data-icon={name}
      aria-hidden
    >
      <use href={`#${name}`} />
    </svg>
  );
}
