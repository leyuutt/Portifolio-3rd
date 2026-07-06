import { useEffect, useRef, useState } from 'react'
import { counterItems } from '../constants'
import EdlExperience from './HeroModels/EdlExperience'

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const element = counterRef.current
    if (!element) return

    let frameId
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const startedAt = performance.now()
      const animate = (now) => {
        const progress = Math.min((now - startedAt) / 1800, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(value * eased))
        if (progress < 1) frameId = requestAnimationFrame(animate)
      }

      frameId = requestAnimationFrame(animate)
      observer.disconnect()
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [value])

  return <span ref={counterRef}>{count}{suffix}</span>
}


const AnimatedCounter = () => {
  return (
   <div id="counter" className="padding-x-lg min-h-dvh scroll-mt-6 py-6 md:py-10">
    <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">
      <div className="h-[50vh] min-h-96 overflow-hidden rounded-2xl border border-[#f3a6c8]/20 bg-[#17151c] lg:h-[75vh]">
        <EdlExperience />
      </div>

      <div className="grid gap-6">
        {counterItems.map((item)=>(

        <div key={item.label} className="min-h-64 rounded-2xl border border-[#f3a6c8]/20 bg-zinc-900 p-10 flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
             <div className="counter-number text-[#fff4fa] text-6xl md:text-7xl font-bold mb-4">
                
                <Counter suffix={item.suffix} value={item.value} />
            </div>
            <div className="text-[#f3a6c8] text-xl md:text-2xl">{item.label}</div>
        </div>
           
        )
            
        )}   
      </div>
    </div>
   </div>
  )
}

export default AnimatedCounter
