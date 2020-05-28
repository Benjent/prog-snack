module.exports = {
  lintOnSave: false,
//   publicPath: '/prog-snack/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/prog-snack/'
    : '/'
};
