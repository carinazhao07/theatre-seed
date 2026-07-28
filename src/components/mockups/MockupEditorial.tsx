"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const camps = [
  { y: "25冬", loc: "广南", img: "/images/gallery-01.jpg" },
  { y: "25夏", loc: "广南·长沙", img: "/images/gallery-11.jpg" },
  { y: "26冬", loc: "黔阳", img: "/images/gallery-19.jpg" },
  { y: "26夏", loc: "嘉兴", img: "/images/gallery-12.jpg", live: true },
];

export function MockupEditorial({ image }: { image: string }) {
  return (
    <div className="overflow-hidden bg-[#faf8f4] text-[#111]">
      <section className="relative min-h-[90vh]">
        {/* diagonal photo plane */}
        <div className="absolute inset-y-0 right-0 w-[58%] overflow-hidden">
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 origin-top-right skew-x-[-6deg] scale-110"
          >
            <Image src={image} alt="" fill className="object-cover" sizes="60vw" priority />
            <div className="absolute inset-0 bg-[#1b4332]/15 mix-blend-multiply" />
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-between px-6 py-10 md:px-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.35em] text-[#2d6a4f]">
                ZHONGXI / 种戏
              </p>
              <p className="mt-1 text-xs text-[#666]">公益戏剧教育档案</p>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="hidden h-16 w-16 items-center justify-center rounded-full border border-[#1b4332]/30 text-[10px] tracking-widest text-[#1b4332] sm:flex"
            >
              GROW
            </motion.div>
          </div>

          <div className="max-w-xl pt-16 pb-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-3 font-mono text-xs text-[#2d6a4f]"
            >
              № 04 · ONGOING
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] font-black tracking-tighter"
            >
              舞台
              <br />
              <span className="text-[#2d6a4f]">属于</span>
              <br />
              每个人
            </motion.h1>
            <div className="mt-8 flex items-end gap-6">
              <p className="max-w-xs text-sm leading-relaxed text-[#444]">
                零门槛 · 纯公益 · 聚焦县域。把第一次上台，做成可以被看见的档案。
              </p>
              <motion.span
                whileHover={{ x: 6 }}
                className="shrink-0 border-b-2 border-[#1b4332] pb-1 text-sm font-bold"
              >
                进入档案库
              </motion.span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["50+", "学员"],
              ["95%+", "零基础"],
              ["8+", "场演出"],
              ["4", "届营期"],
            ].map(([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="border border-[#111]/10 bg-white/70 p-4 backdrop-blur-sm"
              >
                <p className="text-3xl font-black tracking-tighter text-[#1b4332]">{n}</p>
                <p className="mt-1 text-[11px] tracking-widest text-[#666] uppercase">{l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* horizontal camp reel */}
      <section className="border-t border-[#111]/10 bg-[#1b4332] py-10 text-white">
        <p className="mb-6 px-6 text-xs tracking-[0.3em] text-[#95d5b2] md:px-10">
          CAMP REEL · 滑动浏览历届
        </p>
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
          {camps.map((c, i) => (
            <motion.div
              key={c.y}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="relative h-52 w-44 shrink-0 overflow-hidden sm:w-52"
            >
              <Image src={c.img} alt="" fill className="object-cover" sizes="200px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              {c.live && (
                <span className="absolute top-3 left-3 bg-[#c8f06c] px-2 py-0.5 text-[10px] font-bold text-[#111]">
                  LIVE
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-lg font-black">{c.y}</p>
                <p className="text-xs text-white/70">{c.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
