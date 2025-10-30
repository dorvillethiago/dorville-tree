import MeshyCards from "./mvpblocks/meshy-cards"

export function LinkSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
}

export function LinkSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
}

export function LinkSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl flex items-center gap-2 font-semibold">
      {children}
    </h3>
  )
}

export function LinkSectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs sm:text-sm text-muted-foreground">
      {children}
    </p>
  )
}

export function LinkSectionLinks({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {children}
    </div>
  )
}

export function LinkSectionLink({ href, label, description, icon, img, invert }: {  href: string, icon?: React.ReactNode, label?: string, description?: string, img?: string, invert?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <MeshyCards icon={icon} label={label} description={description} img={img} invert={invert} />
    </a>
  )
}