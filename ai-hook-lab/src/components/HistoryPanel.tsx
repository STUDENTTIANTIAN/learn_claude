'use client'

import { useState } from 'react'
import { History, Trash2, ChevronDown, ChevronUp, Clock } from 'lucide-react'
import { HistoryItem } from '@/lib/types'
import HookCard from './HookCard'

interface HistoryPanelProps {
  history: HistoryItem[]
  onRemove: (id: string) => void
  onClear: () => void
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  const month = d.getMonth() + 1
  const day = d.getDate()
  const hour = d.getHours().toString().padStart(2, '0')
  const min = d.getMinutes().toString().padStart(2, '0')
  return `${month}/${day} ${hour}:${min}`
}

export default function HistoryPanel({
  history,
  onRemove,
  onClear,
}: HistoryPanelProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [collapsed, setCollapsed] = useState(false)

  if (history.length === 0) return null

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400">
          <History className="h-4 w-4" />
          <span className="text-sm font-medium">历史记录</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">
            {history.length}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            {collapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={onClear}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
            title="清空历史"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {history.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-medium text-white">
                      {item.topic}
                    </span>
                    <span className="shrink-0 rounded-full bg-violet-500/20 px-2 py-0.5 text-xs text-violet-300">
                      {item.platform}
                    </span>
                    <span className="shrink-0 rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-300">
                      {item.contentType}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3 w-3" />
                    {formatTime(item.createdAt)}
                    <span className="ml-1 text-slate-600">·</span>
                    <span className="ml-1 capitalize">{item.provider}</span>
                    <span className="ml-1 text-slate-600">·</span>
                    <span className="ml-1">{item.hooks.length} hooks</span>
                  </div>
                </div>
                <div className="ml-3 flex items-center gap-1">
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === item.id ? null : item.id
                      )
                    }
                    className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {expandedId === item.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              {expandedId === item.id && (
                <div className="grid grid-cols-1 gap-3 border-t border-white/10 p-4 md:grid-cols-2">
                  {item.hooks.map((hook, i) => (
                    <HookCard key={i} hook={hook} index={i} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
