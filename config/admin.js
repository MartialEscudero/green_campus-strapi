module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '714e0a9c27082430d25b8ea02c155cb9'),
  },
});
