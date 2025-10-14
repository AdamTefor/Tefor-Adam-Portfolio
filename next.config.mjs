/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },

  // À garder uniquement si tu affiches des images DISTANTES.
  // Si tous tes logos/images sont dans /public, tu peux supprimer ce bloc.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
    // OU, plus strict :
    // domains: ['images.unsplash.com', 'cdn.example.com'],
  },
};

export default nextConfig;
