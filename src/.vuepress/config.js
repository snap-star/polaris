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