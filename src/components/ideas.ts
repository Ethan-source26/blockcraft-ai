import { GraduationCap, ListChecks, Sprout, type LucideIcon } from 'lucide-react'

export type BrickTone = 'sage' | 'blue' | 'apricot'

export interface IdeaExample {
  id: string
  label: string
  hint: string
  tone: BrickTone
  icon: LucideIcon
  /** 点击后填入输入框的完整想法 */
  prompt: string
}

export const IDEA_EXAMPLES: IdeaExample[] = [
  {
    id: 'study',
    label: '学习管理 App',
    hint: '任务 · 课程 · 统计',
    tone: 'sage',
    icon: GraduationCap,
    prompt: '我想做一个学习管理 App，帮我记录任务、安排课程、查看学习统计。',
  },
  {
    id: 'todo',
    label: '待办清单',
    hint: '添加 · 勾选 · 完成',
    tone: 'blue',
    icon: ListChecks,
    prompt: '我想做一个待办清单，可以添加任务、勾选完成，一眼看清今天要做什么。',
  },
  {
    id: 'habit',
    label: '习惯养成 App',
    hint: '打卡 · 坚持 · 记录',
    tone: 'apricot',
    icon: Sprout,
    prompt: '我想做一个习惯养成 App，每天打卡，并能看到自己已经坚持了多少天。',
  },
]

export const MAX_IDEA_LENGTH = 200
