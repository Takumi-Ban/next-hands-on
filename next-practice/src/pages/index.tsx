import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Navigation from '../components/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>ナビゲーションをつけてみた</h1>
      <main>
        <div>
          <h1>はじめてのNext.js！</h1>
          <p>こんにちは</p>
          <p>これはindex.tsx</p>
          <Link href='/member'>メンバーを見るにはこちら</Link>
        </div>
      </main>
    </div>
  )
}
