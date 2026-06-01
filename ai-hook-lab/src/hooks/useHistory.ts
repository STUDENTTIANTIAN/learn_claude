'use client'

import { useState, useEffect, useCallback } from 'react'
import { HistoryItem } from '@/lib/types'

const STORAGE_KEY = 'ai-hook-lab-history'

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setHistory(JSON.parse(saved))
      }
    } catch {
      // ignore parse errors
    }
    setIsLoaded(true)
  }, [])

  const save = useCallback((items: HistoryItem[]) => {
    setHistory(items)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [])

  const addHistory = useCallback(
    (item: HistoryItem) => {
      save([item, ...history].slice(0, 50)) // keep last 50
    },
    [history, save]
  )

  const removeHistory = useCallback(
    (id: string) => {
      save(history.filter((h) => h.id !== id))
    },
    [history, save]
  )

  const clearHistory = useCallback(() => {
    save([])
  }, [save])

  return { history, isLoaded, addHistory, removeHistory, clearHistory }
}
