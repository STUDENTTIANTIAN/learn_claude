'use client'

import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">AI Hook Lab</h1>
          <p className="text-xs text-slate-400">输入主题，一键生成 10 个爆款开头</p>
        </div>
      </div>
    </header>
  )
}
