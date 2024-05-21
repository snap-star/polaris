const fs = require('fs');
const path = require('path');
module.exports = {
 themeConfig: {
   sidebar: [
     {
       title: 'Anime Posts',
       collapsable: false,
       children: fs.readdirSync(path.resolve(__dirname, '../anime')).map(file => `/anime/${file.replace('.md', '')}`)
     }
   ]
 }
}

// src/.vuepress/config.js
//...

head: [
  //...

  // import an external script
  ["script", { src: "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js" }],
  // add a script
  [
    "script",
    {},
    `\
      // your script here
    `,
  ]]