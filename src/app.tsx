import { BringToFront, User, MapPin } from "lucide-react"
import { motion, cubicBezier } from "framer-motion"
import { TransparentBadge } from "./components/transparent-badge"
import { LinksSections } from "./components/links-sections"
import { cn } from "./lib/utils"
import { DotPattern } from "./components/ui/dot-pattern"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
      ease: cubicBezier(0.22, 1, 0.36, 1)
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }
  }
}

function App() {
  return (
    <motion.div className="min-h-dvh w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.75 }} transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}>
        <DotPattern className={cn('mask-[linear-gradient(to_bottom,white,transparent,transparent)] opacity-75')} />
      </motion.div>
      <main className="container mx-auto px-6">
        <motion.section className="flex flex-col gap-6 pt-16" variants={containerVariants} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className="flex gap-2 backdrop-blur-sm text-xs sm:text-sm items-center border bg-foreground/5 px-4 py-2 rounded-md w-fit" variants={itemVariants}>
            <BringToFront className="min-w-4 min-h-4 size-4" />
            O Linktree tava pago, então eu fiz um pra mim.
          </motion.div>
          <motion.h1 className="font-semibold" variants={itemVariants}>
            Opa, Tudo bom?
            <br />
            Eu Sou o Thiago✌️
          </motion.h1>
          <motion.h2 className="text-muted-foreground" variants={itemVariants}>
            Analisando o <span className="font-semibold text-green-400">commit</span>, o <span className="font-semibold text-blue-400">pré-chorus</span>, o ângulo da <span className="font-semibold text-yellow-400">raquete</span>, e quantas jogadas<br /> faltam pro <span className="font-semibold text-red-400">mate</span>.
          </motion.h2>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a href="https://www.google.com/maps/place/Macei%C3%B3,+AL/@-9.6463448,-35.7268511,12z/data=!3m1!4b1!4m6!3m5!1s0x70145b130808773:0x2687c8550754e77a!8m2!3d-9.650127!4d-35.7129321!16s%2Fg%2F11c4022wg7" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <TransparentBadge>
                <MapPin className="min-w-4 min-h-4 size-4" />
                Maceió/AL
              </TransparentBadge>
            </motion.a>
            <motion.a href="https://www.16personalities.com/br/personalidade-entj" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <TransparentBadge>
                <User className="min-w-4 min-h-4 size-4" />
                ENTJ-A
              </TransparentBadge>
            </motion.a>
          </motion.div>
        </motion.section>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1), delay: 0.1 }}>
          <LinksSections />
        </motion.div>
      </main>
    </motion.div>
  )
}

export default App
