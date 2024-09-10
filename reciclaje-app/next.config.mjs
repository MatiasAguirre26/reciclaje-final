/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-leaflet': false, // Ignorar react-leaflet en el lado del servidor
      };
      config.cache = false; // Desactiva la caché de Webpack temporalmente
      return config
  },
};

export default nextConfig;
