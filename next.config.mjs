/** @type {import('next').NextConfig} */
const nextConfig = {
  logging:{
    fetches:{
      fullUrls: true
    }
  }
};

const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);