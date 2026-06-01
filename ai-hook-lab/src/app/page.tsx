'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HookForm from '@/components/HookForm'
import HookResults from '@/components/HookResults'
import HistoryPanel from '@/components/HistoryPanel'
import { useHistory } from '@/hooks/useHistory'
import { HookResult, Platform, ContentType, LLMProvider } from '@/lib/types'
import { AlertCircle } from 'lucide-react'

export default function Home() {
  const [hooks, setHooks] = useState<HookResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { history, isLoaded, addHistory, removeHistory, clearHistory } = useHistory()

  const handleGenerate = async (
    topic: string,
    platform: Platform,
    contentType: ContentType,
    provider: LLMProvider
  ) => {
    setLoading(true)
    setError(null)
    setHooks([])

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, contentType, provider }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || '生成失败')
      }

      setHooks(data.hooks)

      // Save to history
      addHistory({
        id: Date.now().toString(),
        topic,
        platform,
        contentType,
        provider,
        hooks: data.hooks,
        createdAt: Date.now(),
      })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : '生成失败，请重试'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
        {/* Form section */}
        <section className="mb-8">
          <HookForm onGenerate={handleGenerate} loading={loading} />
        </section>

        {/* Error */}
        {error && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4">
            <div className="h-6 w-32 animate-pulse rounded bg-white/10" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5"
                />
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {!loading && hooks.length > 0 && <HookResults hooks={hooks} />}

        {/* History */}
        {isLoaded && history.length > 0 && !loading && (
          <section className="mt-10 border-t border-white/10 pt-8">
            <HistoryPanel
              history={history}
              onRemove={removeHistory}
              onClear={clearHistory}
            />
          </section>
        )}

        {/* Empty state */}
        {!loading && hooks.length === 0 && !error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 text-6xl">🪝</div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              输入主题，开始创作
            </h2>
            <p className="max-w-md text-sm text-slate-400">
              选择平台和内容类型，AI 将为你生成 10 个不同风格的爆款开头 hook。
              每个 hook 都附带风格标签、点击欲评分和推荐理由。
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        AI Hook Lab · Powered by Claude / GPT-4o / DeepSeek
      </footer>
    </div>
  )
}
