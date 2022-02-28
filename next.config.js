module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'res.cloudinary.com'],
  },
  env: {
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUD_NAME: process.env.CLOUD_NAME, 
    DB_CONN: process.env.DB_CONN,
  }
}
