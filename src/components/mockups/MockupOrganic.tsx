"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MockupOrganic({ image, image2 }: { image: string; image2: string }) {
  return (
    <div className="relative overflow-hidden bg-[#eef6ef] text-[#1a3328]">
      {/* floating orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#95d5b2]/50 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-[#2d6a4f]/20 blur-3xl"
      />

      <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-20 md:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block h-3 w-3 rounded-full bg-[#2d6a4f]"
            />
            <span className="font-serif text-2xl tracking-wide text-[#1b4332]">种戏</span>
          </div>
          <p className="text-xs tracking-[0.2em] text-[#2d6a4f]">SEED · GROW · STAGE</p>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-[clamp(2.6rem,7vw,5rem)] leading-[1.08] text-[#1b4332]"
            >
              种下一颗
              <br />
              <span className="italic text-[#2d6a4f]">会发芽的</span>
              <br />
              戏剧种子
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 max-w-md text-base leading-relaxed text-[#3f5a4c]"
            >
              在稻田边排练，在古城茶馆共创，在嘉兴舞台谢幕。每一届营期，都是一次被认真对待的第一次。
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.span
                whileHover={{ scale: 1.04 }}
                className="rounded-full bg-[#1b4332] px-7 py-3 text-sm text-[#b7e4c7]"
              >
                走进种戏
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.04 }}
                className="rounded-full border border-[#1b4332]/30 px-7 py-3 text-sm"
              >
                看历届生长 →
              </motion.span>
            </div>
          </div>

          <div className="relative h-[420px]">
            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 20 }}
              animate={{ opacity: 1, rotate: -3, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 h-[70%] w-[72%] overflow-hidden rounded-[40%_60%_55%_45%/50%_40%_60%_50%] shadow-xl"
            >
              <Image src={image} alt="" fill className="object-cover" sizes="40vw" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 8, y: 30 }}
              animate={{ opacity: 1, rotate: 4, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="absolute right-0 bottom-0 h-[55%] w-[58%] overflow-hidden rounded-[55%_45%_40%_60%/45%_55%_45%_55%] ring-4 ring-[#eef6ef] shadow-xl"
            >
              <Image src={image2} alt="" fill className="object-cover" sizes="30vw" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-8 right-8 rounded-2xl bg-white/80 px-4 py-3 text-xs backdrop-blur"
            >
              <p className="font-serif text-lg text-[#1b4332]">4 届</p>
              <p className="text-[#5a7a6a]">持续生长中</p>
            </motion.div>
          </div>
        </div>

        {/* curved feature band */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#1b4332] px-8 py-12 text-[#b7e4c7] md:px-12">
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#95d5b2]/30 blur-2xl"
          />
          <div className="relative grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "冬令营共创", d: "几天内从灵感到舞台" },
              { n: "02", t: "夏令营深打磨", d: "经典剧目 · 巡演成长" },
              { n: "03", t: "复盘与回响", d: "让每一次第一次被记住" },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-xs tracking-[0.3em] text-[#95d5b2]">{item.n}</p>
                <p className="mt-2 font-serif text-2xl text-white">{item.t}</p>
                <p className="mt-2 text-sm text-[#95d5b2]/90">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
