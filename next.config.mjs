/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO: Breaks, perhaps not needed in new nextJS ?
    images: {
        domains: [
            "avatars.githubusercontent.com", 
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]}
};

export default nextConfig;
