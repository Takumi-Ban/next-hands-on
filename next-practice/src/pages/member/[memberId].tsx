import {useRouter} from 'next/router'

export default function memberDetail() {
    const router = useRouter()
    const memberId = router.query.memberId
    return (
        <h1>This is about Member {memberId}</h1>
    )
}