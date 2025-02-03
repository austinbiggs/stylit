import nextra from 'nextra'
import { composePlugins, withNx } from '@nx/next';
import type { WithNxOptions } from '@nx/next/plugins/with-nx';
import type { NextraConfig } from 'nextra';

// base Next config (with Nx)
const nextConfig: WithNxOptions = {
  nx: {},
  compiler: {
    styledComponents: false,
  },
  experimental: {},
  // rewrite PostHog URLs - https://posthog.com/docs/advanced/proxy/nextjs
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ];
  },
  sassOptions: {},
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

// Nextra config
const nextraConfig: NextraConfig = {

};
const withNextra = nextra(nextraConfig);

// Next plugins
const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextra
];

export default composePlugins(...plugins)(nextConfig);
