import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  basePath: "/testing-app",
  //exportTrailingSlash: true, // Add trailing slashes to all URL
  images :{
    unoptimized:true
  }
}

export default nextConfig;



