import { ArrowLeft, Blocks, Check, Info, Lock } from 'lucide-react'
import { MochiCat } from './MochiCat'

interface PendingProps {
  idea: string
  onBack: () => void
}

const STEPS = [
  { title: '聊聊你的想法', desc: 'Mochi 会问几个小问题，帮你把需求想清楚', done: true },
  { title: '搭出功能积木', desc: '软件会被拆成一块块看得懂的功能模块', done: false },
  { title: '预览你的软件', desc: '随时切换，看它真实运行起来的样子', done: false },
]

export function Pending({ idea, onBack }: PendingProps) {
  return (
    <div className="pending">
      <div className="pending__card">
        <div className="pending__head">
          <MochiCat className="pending__mochi" />
          <div>
            <p className="eyebrow eyebrow--plain">
              <Blocks size={14} aria-hidden="true" />
              Mochi 收到啦
            </p>
            <h2 className="pending__title">想法已经记下，积木工坊还在装修中</h2>
          </div>
        </div>

        <blockquote className="pending__idea">
          <span className="pending__quote-label">你的想法</span>
          {idea}
        </blockquote>

        <div className="notice" role="status">
          <Info size={18} aria-hidden="true" />
          <p>
            这是首页演示：编辑器还在开发中，<strong>还没有真正生成软件</strong>。下面是后续会发生的事。
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className={`step${s.done ? ' step--done' : ''}`}>
              <span className="step__dot" aria-hidden="true">
                {s.done ? <Check size={14} /> : i + 1}
              </span>
              <span className="step__text">
                <strong>{s.title}</strong>
                <small>{s.desc}</small>
              </span>
              {!s.done && (
                <span className="step__lock">
                  <Lock size={12} aria-hidden="true" />
                  即将开放
                </span>
              )}
            </li>
          ))}
        </ol>

        <button type="button" className="btn-ghost" onClick={onBack}>
          <ArrowLeft size={18} aria-hidden="true" />
          返回，换个想法
        </button>
      </div>
    </div>
  )
}
