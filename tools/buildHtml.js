import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console*/

fs.readFile('src/index.html', 'utf-8', (err, markup) => {
  console.log('Start processed HTML'.bold.cyan);
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css"/>');

  fs.writeFile('dist/index.html', $.html(), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('Html done'.cyan);
  });
});
