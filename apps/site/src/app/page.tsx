import type { Metadata } from 'next'
import { Link } from 'nextra-theme-docs'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Stylit | Dead simple CSS-in-JS style React primitives for (S)CSS modules',
  description: 'Dead simple CSS-in-JS style React primitives for (S)CSS modules',
};

export default function Index() {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          💀 Dead simple React primitives for (S)CSS modules
        </h1>
        <p className="subtitle">
          <Link className={styles.cta} href="/docs">
            Get started <span>→</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
