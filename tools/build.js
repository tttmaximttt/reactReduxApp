import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Start generating bundle.'.bold.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  console.log(stats);
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    jsonStats.warnings.map(warn => console.log(warn.bold.yellow));
  }

  console.log(`Webpack stats ${stats}`);

  console.log('Complite'.bold.blue);

  return 0;
});

