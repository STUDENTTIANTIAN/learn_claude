'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { HookResult } from '@/lib/types'

function getScoreColor(score: number): string {
  if (score >= 9) return 'from-amber-400 to-orange-500 text-amber-900'
  if (score >= 7) return 'from-emerald-400 to-green-500 text-emerald-900'
  if (score >= 5) return 'from-sky-400 to-blue-500 text-sky-900'
  return 'from-slate-300 to-slate-400 text-slate-700'
}

function getScoreLabel(score: number): string {
  if (score >= 9) return '🔥 爆款'
  if (score >= 7) return '👍 优质'
  if (score >= 5) return '👌 还行'
  return '💡 参考'
}

const STYLE_COLORS = [
  'bg-violet-500/20 text-violet-300 ring-violet-500/30',
  'bg-emerald-500/20 text-emerald-300 ring-emerald-500/30',
  'bg-amber-500/20 text-amber-300 ring-amber-500/30',
  'bg-rose-500/20 text-rose-300 ring-rose-500/30',
  'bg-cyan-500/20 text-cyan-300 ring-cyan-500/30',
  'bg-fuchsia-500/20 text-fuchsia-300 ring-fuchsia-500/30',
  'bg-orange-500/20 text-orange-300 ring-orange-500/30',
  'bg-teal-500/20 text-teal-300 ring-teal-500/30',
  'bg-pink-500/20 text-pink-300 ring-pink-500/30',
  'bg-indigo-500/20 text-indigo-300 ring-indigo-500/30',
]

interface HookCardProps {
  hook: HookResult
  index: number
}

export default function HookCard({ hook, index }: HookCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hook.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
      {/* Index badge */}
      <div className="absolute right-3 top-3 flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full bg-gradient-to-r px-2.5 py-0.5 text-xs font-bold ${getScoreColor(hook.score)}`}
        >
          {hook.score}分 {getScoreLabel(hook.score)}
        </span>
        <button
          onClick={handleCopy}
          className="rounded-lg p-1.5 text-slate-400 opacity-0 transition-all hover:bg-white/10 hover:text-white group-hover:opacity-100"
          title="复制文案"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Number */}
      <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-sm font-bold text-violet-300">
        {index + 1}
      </div>

      {/* Hook text */}
      <p className="mb-3 pr-20 text-base font-medium leading-relaxed text-white">
        {hook.text}
      </p>

      {/* Style tag */}
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${STYLE_COLORS[index % STYLE_COLORS.length]}`}
      >
        {hook.style}
      </span>

      {/* Reason */}
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {hook.reason}
      </p>
    </div>
  )
}
