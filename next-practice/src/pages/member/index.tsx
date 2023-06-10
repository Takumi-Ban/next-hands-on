import Link from 'next/link'
import Navigation from '../../components/navigation'

export default function Members() {
    return(
        <div>
            <Navigation></Navigation>
            <main>
                <div>
                    <h1>これはメンバー紹介のページです</h1>
                    <h2>メンバー一覧</h2>
                    <ul>
                        <li><Link href='/member/1'>1人目</Link></li>
                        <li><Link href='/member/2'>2人目</Link></li>
                        <li><Link href='/member/3'>3人目</Link></li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
