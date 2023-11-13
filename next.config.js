/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["yt3.googleusercontent.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "yt3.googleusercontent.com",
                port: "300",
                pathname: "/**"

            }
        ]

    }
}

module.exports = nextConfig
// https://yt3.googleusercontent.com/ytc/APkrFKbqYfTKIfgr_QP_F9Sy2WSnk9qSGOntOZPhBDL8Pg=s176-c-k-c0x00ffffff-no-rj