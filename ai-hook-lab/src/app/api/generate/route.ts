import { NextRequest, NextResponse } from 'next/server'
import { generateHooks } from '@/lib/providers'
import { PLATFORMS, CONTENT_TYPES } from '@/lib/types'
import type { Platform, ContentType, LLMProvider } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { topic, platform, contentType, provider } = body as {
      topic: string
      platform: Platform
      contentType: ContentType
      provider: LLMProvider
    }

    // Validate inputs
    if (!topic || topic.trim().length === 0) {
      return NextResponse.json({ error: '请输入主题' }, { status: 400 })
    }
    if (!PLATFORMS.includes(platform)) {
      return NextResponse.json({ error: '无效的平台选择' }, { status: 400 })
    }
    if (!CONTENT_TYPES.includes(contentType)) {
      return NextResponse.json({ error: '无效的内容类型' }, { status: 400 })
    }
    if (!['claude', 'openai', 'deepseek'].includes(provider)) {
      return NextResponse.json({ error: '无效的模型选择' }, { status: 400 })
    }

    const hooks = await generateHooks(provider, topic.trim(), platform, contentType)

    return NextResponse.json({ hooks })
  } catch (error: unknown) {
    console.error('Generate error:', error)
    const message =
      error instanceof Error ? error.message : '服务器内部错误'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
