'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { HookResult } from '@/lib/types'
import HookCard from './HookCard'

interface HookResultsProps {
  hooks: HookResult[]
}

export default function HookResults({ hooks }: HookResultsProps) {
  const [copiedAll, setCopiedAll] = useState(false)

  const handleCopyAll = async () => {
    const text = hooks
      .map((h, i) => `${i + 1}. ${h.text}`)
      .join('\n')
    await navigator.clipboard.writeText(text)
    setCopiedAll(true)
    setTimeout(() => setCopiedAll(false), 2000)
  }

  if (hooks.length === 0) return null

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          生成结果
          <span className="ml-2 text-sm font-normal text-slate-400">
            共 {hooks.length} 个 hook
          </span>
        </h2>
        <button
          onClick={handleCopyAll}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          {copiedAll ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              已复制
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              复制全部
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {hooks.map((hook, i) => (
          <HookCard key={i} hook={hook} index={i} />
        ))}
      </div>
    </div>
  )
}
