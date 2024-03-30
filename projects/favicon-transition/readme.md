# Favicon Transition [![live demo](https://img.shields.io/badge/LIVE%20DEMO-000?logo=vercel&logoColor=white)](https://favicon-transition.vercel.app/)

This is a simple recreation of the animated favicon from [feyapp.com](https://www.feyapp.com/). The favicon is updated whenever the tab is focused, and gets out of focus. [This](https://x.com/brotzky_/status/1766153313303818477?s=20) post from [Brotzky](https://twitter.com/brotzky_) inspired my curiosity.

1. Firstly, we have to check if the current window is in focus. We make use of document visibilityState ([docs 📑](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)) to check if the current tab is in focus or not.

   ```js
   document.addEventListener('visibilitychange', () => {
     if (document.hidden) {
       // tab is out of focus
     } else {
       // tab is focused
     }
   });
   ```

2. The second part is simple, just update the favicon meta using javascript to whatever you want 🥳.

3. Optionally, you can change the icon based on the color scheme 🎨 of the system.

   ```js
   const themeState = window.matchMedia('(prefers-color-scheme:dark)');
   if (themeState?.matches) {
     // dark mode
   }
   themeState.addEventListener('change', (event) => {
     if (event?.matches) {
       // dark mode
     } else {
       // light mode
     }
   });
   ```
