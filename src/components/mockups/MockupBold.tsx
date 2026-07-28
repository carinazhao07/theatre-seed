"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MockupBold({ image }: { image: string }) {
  return (
    <div className="overflow-hidden bg-[#f3f6f1] text-[#14241c]">
      {/* Hero: split, bold type, light — not black */}
      <section className="grid min-h-[88vh] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex flex-col justify-between px-8 py-10 md:px-12 md:py-14">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight text-[#1b4332]">
              种戏
            </span>
            <span className="rounded-full bg-[#c8f06c] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#14241c]">
              ABOUT
            </span>
          </div>

          <div className="max-w-xl py-12">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-bold tracking-[0.25em] text-[#5a7a3a]"
            >
              2026 夏 · 嘉兴进行中
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.05] font-black tracking-tight"
            >
              戏剧不是
              <br />
              <span className="relative inline-block">
                特权阶层的专利
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.45, duration: 0.55 }}
                  className="absolute bottom-1 left-0 -z-10 h-3 w-full origin-left bg-[#c8f06c]/70 md:h-4"
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-[#3d5246] md:text-base"
            >
              2025 年由赵宁淇发起。为零基础县域青年提供免费的戏剧教育与舞台实践——练习表达，被真正看见。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="bg-[#1b4332] px-5 py-3 text-sm font-bold text-[#c8f06c]">
                了解种戏
              </span>
              <span className="border-2 border-[#1b4332] px-5 py-3 text-sm font-bold">
                2026 夏日程 →
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#1b4332]/15 pt-6">
            {[
              ["零门槛", "无需基础，第一次上台"],
              ["纯公益", "全程免费，志愿导师"],
              ["聚焦县域", "扎根欠发达地区"],
              ["舞台实践", "真实观众，真实巡演"],
            ].map(([t, d], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                className="flex gap-3"
              >
                <span className="mt-1 h-3 w-3 shrink-0 rotate-45 bg-[#c8f06c]" />
                <div>
                  <p className="text-sm font-black">{t}</p>
                  <p className="text-xs text-[#5a6b60]">{d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[42vh] overflow-hidden lg:min-h-full">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src={image} alt="" fill className="object-cover" sizes="50vw" priority />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1b4332]/25 to-transparent" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-6 bottom-8 max-w-[200px] bg-[#c8f06c] p-4 text-[#14241c] shadow-lg"
          >
            <p className="text-[10px] font-bold tracking-widest">NEXT SHOW</p>
            <p className="mt-1 text-lg font-black leading-tight">7.31 – 8.2 嘉兴三场演出</p>
          </motion.div>
        </div>
      </section>

      {/* Kinetic strip */}
      <div className="overflow-hidden border-y-2 border-[#1b4332] bg-[#c8f06c] py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 text-sm font-black tracking-wide text-[#14241c] whitespace-nowrap"
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10">
              {[
                "零门槛",
                "纯公益",
                "聚焦县域",
                "种下心中戏剧的种子",
                "广南 · 黔阳 · 嘉兴",
                "舞台接住你",
              ].map((t) => (
                <span key={`${k}-${t}`}>✦ {t}</span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
