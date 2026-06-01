'use client'

import { useState } from 'react'
import { Loader2, Wand2 } from 'lucide-react'
import {
  Platform,
  ContentType,
  LLMProvider,
  PLATFORMS,
  CONTENT_TYPES,
  PROVIDERS,
} from '@/lib/types'

interface HookFormProps {
  onGenerate: (topic: string, platform: Platform, contentType: ContentType, provider: LLMProvider) => void
  loading: boolean
}

export default function HookForm({ onGenerate, loading }: HookFormProps) {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState<Platform>('小红书')
  const [contentType, setContentType] = useState<ContentType>('知识科普')
  const [provider, setProvider] = useState<LLMProvider>('claude')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim() || loading) return
    onGenerate(topic.trim(), platform, contentType, provider)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Topic input */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">
          输入主题
        </label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="例如：AI 如何改变教育、减肥的误区、Python 入门..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-violet-500/50 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      {/* Selectors row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Platform */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            目标平台
          </label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Platform)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
          >
            {PLATFORMS.map((p) => (
              <option key={p} value={p} className="bg-slate-800">
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Content type */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            内容类型
          </label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value as ContentType)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
          >
            {CONTENT_TYPES.map((c) => (
              <option key={c} value={c} className="bg-slate-800">
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Provider */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            AI 模型
          </label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value as LLMProvider)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
          >
            {PROVIDERS.map((p) => (
              <option key={p.value} value={p.value} className="bg-slate-800">
                {p.label} ({p.models})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={!topic.trim() || loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            正在生成中...
          </>
        ) : (
          <>
            <Wand2 className="h-5 w-5" />
            生成 10 个爆款 Hook
          </>
        )}
      </button>
    </form>
  )
}
