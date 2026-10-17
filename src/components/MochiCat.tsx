import mochiSrc from '../assets/mochi.png'

/**
 * Mochi 正式形象：来自参考图的主形象（奶白橘斑像素猫 + 橘色积木尾巴），
 * 已抠除背景。宽高比 333:300。
 */
export function MochiCat({ className }: { className?: string }) {
  return (
    <img
      className={className}
      src={mochiSrc}
      width={333}
      height={300}
      alt="Mochi：奶白橘斑的像素猫，拖着橘色积木尾巴"
      draggable={false}
    />
  )
}
