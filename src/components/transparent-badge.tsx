export function TransparentBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 text-sm items-center border backdrop-blur-sm bg-foreground/5 px-4 py-2 rounded-md w-fit">
      {children}
    </div>
  )
}