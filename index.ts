import runner from './src/runnerHtml';

const runWax = (htmlContent: String, options: Object) => {
  return runner(htmlContent, options);
};

export default runWax;