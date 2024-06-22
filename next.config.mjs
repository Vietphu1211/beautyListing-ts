/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:'images.unsplash.com',
                port:'',
                pathname:'/**'
            },
            {
                protocol:"https",
                hostname:'plus.unsplash.com',
                port:'',
                pathname:'/**'
            },
            {
                protocol:"https",
                hostname:'unsplash.com',
                port:'',
                pathname:'/**'
            },
            {
                protocol:"http",
                hostname:'beautylistingwordpress.test',
                port:'',
                pathname:'/**'
            },
            {
                protocol:"http",
                hostname:'2.gravatar.com',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
