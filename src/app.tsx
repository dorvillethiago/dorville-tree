import { BringToFront, User, MapPin } from "lucide-react"
import { TransparentBadge } from "./components/transparent-badge"
import { LinksSections } from "./components/links-sections"
import { cn } from "./lib/utils"
import { DotPattern } from "./components/ui/dot-pattern"

function App() {
  return (
    <div className="min-h-dvh w-full h-full">
      <DotPattern className={cn('mask-[linear-gradient(to_bottom,white,transparent,transparent)] opacity-75')} />
      <main className="container mx-auto px-6">
        <section className="flex flex-col gap-6 pt-16">
          <div className="flex gap-2 backdrop-blur-sm text-xs sm:text-sm items-center border bg-foreground/5 px-4 py-2 rounded-md w-fit">
            <BringToFront className="min-w-4 min-h-4 size-4" />
            O Linktree tava pago, então eu fiz um pra mim.
          </div>
          <h1 className="font-semibold">Opa, Tudo bom?
            <br />
            Eu Sou o Thiago✌️
          </h1>
          <h2 className="text-muted-foreground">
            Analisando o <span className="font-semibold text-green-400">commit</span>, o <span className="font-semibold text-blue-400">pré-chorus</span>, o ângulo da <span className="font-semibold text-yellow-400">raquete</span>, e quantas jogadas<br /> faltam pro <span className="font-semibold text-red-400">mate</span>.
          </h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.google.com/maps/place/Macei%C3%B3,+AL/@-9.6463448,-35.7268511,12z/data=!3m1!4b1!4m6!3m5!1s0x70145b130808773:0x2687c8550754e77a!8m2!3d-9.650127!4d-35.7129321!16s%2Fg%2F11c4022wg7" target="_blank" rel="noopener noreferrer">
              <TransparentBadge>
                <MapPin className="min-w-4 min-h-4 size-4" />
                Maceió/AL
              </TransparentBadge>
            </a>
            <a href="https://www.16personalities.com/br/personalidade-entj" target="_blank" rel="noopener noreferrer">
              <TransparentBadge>
                <User className="min-w-4 min-h-4 size-4" />
                ENTJ-A
              </TransparentBadge>
            </a>
          </div>
        </section>
        <LinksSections />
      </main>
    </div>
  )
}

export default App
