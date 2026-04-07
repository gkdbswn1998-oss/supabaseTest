import { createClient } from '@supabase/supabase-js'

export default async function Home() {
  // 1. Supabase 클라이언트 생성
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // 2. 데이터 가져오기
  const { data: posts } = await supabase.from('posts').select('*')

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Supabase 데이터 연결 테스트</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  )
}