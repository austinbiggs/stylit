import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image';

export const metadata = {
  title: 'Stylit | Dead simple CSS-in-JS style React primitives for (S)CSS modules',
  description: 'Dead simple CSS-in-JS style React primitives for (S)CSS modules',
};

// const banner = <Banner storageKey="some-key">Stylit v1 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<Image alt="Stylit logo" src="img/brand/dark-logo.svg" width={110} height={30} />}
  />
)
const footer = <Footer>Apache 2.0 {new Date().getFullYear()} © Stylit.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
    <Head
      // ... Your additional head options
    >
      {/* Your additional tags should be passed as `children` of `<Head>` element */}
    </Head>
    <body>
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/austinbiggs/stylit/tree/main/apps/site"
      footer={footer}
      // ... Your additional layout options
    >
      {children}
    </Layout>
    </body>
    </html>
  )
}
