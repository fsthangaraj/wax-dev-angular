import {apiHtml} from './utils/api.js';
import readUserConfig from './utils/config.js';

interface Options {
  apiKey?: string;
  rules?: Array<string>;
}

interface Config {
  apiKey?: string;
  rules?: Array<string>;
}

const runner = function (code: String, options: Options) {
  let config: Config = {};
  if (!options || !options.apiKey) {
    config = readUserConfig();
  } else {
    config = options;
  }
  if (!config.apiKey || !config.apiKey.length) {
    throw new Error(
      'API Key is required to run wax-dev. Please reach out to https://developer.wallyax.com/ to get your API Key.'
    );
  }
  return new Promise((resolve, reject) => {
    fetch(apiHtml + '?apiKey=' + config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ element: code, rules: config.rules, isLinter:"false" }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

export default runner;