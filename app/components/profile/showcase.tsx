'use client'

import { Icon } from '@iconify/react'
import { IShowCase } from '@/interface/showcase'

interface ShowcaseItem {
  showcase: IShowCase[]
}

export default function Showcase({ showcase }: ShowcaseItem) {

  console.log("showcase",showcase)
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">ประวัติการทำงาน </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showcase.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-2">
              <Icon icon={item.icon} width={28} className="text-orange-400" />
              <h3 className="text-xl font-semibold">{item.business_name}</h3>
            </div>
            <p className="text-sm text-gray-300">{item.description}</p>
            <p className="text-xs text-orange-300 mt-2">📅 {item.start_working} - {item.end_working || 'ปัจจุบัน'}</p>
            
          </div>
        ))}
      </div>
    </section>
  )
}
