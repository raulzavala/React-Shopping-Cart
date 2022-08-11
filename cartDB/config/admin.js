module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '17eee3124f070865f84fa133ad8176a7'),
  },
});
