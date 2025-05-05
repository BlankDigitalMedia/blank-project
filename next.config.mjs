/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

// Conditionally exclude registry for production builds
if (process.env.EXCLUDE_REGISTRY === 'true') {
  console.log('🔧 Production build: Excluding registry pages');
  
  // Use redirects to handle registry routes in production
  nextConfig.redirects = async () => {
    return [
      {
        source: '/registry',
        destination: '/',
        permanent: false,
      },
      {
        source: '/registry/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  };
}

export default nextConfig; 