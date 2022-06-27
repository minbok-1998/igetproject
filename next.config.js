/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: `/api/qna`,
        destination: `http://13.124.34.11:7070/iget/notice/notifications/example`,
      },
    ]
  },
}

module.exports = nextConfig
