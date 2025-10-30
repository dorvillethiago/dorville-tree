import { cn } from "@/lib/utils";

export default function MeshyCards({
  icon,
  label,
  description,
  invert = false,
  img='https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&amp;q=80',
}: {
  icon?: React.ReactNode,
  label?: string,
  description?: string,
  img?: string,
  invert?: boolean,
}) {
  return (
      <div
        className={cn("scale-in group visible cursor-pointer", {
          "text-background": invert,
        })}
      >
        <div
          className="relative bg-no-repeat transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            background:
              `url(${img})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="relative flex gap-4">
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg bg-white/20", {
              "bg-background/20": invert,
            })}>
              {icon}
            </div>
            <div>
            <h3 className={cn("font-sans text-lg font-medium text-foreground", {
              "text-background": invert,
            })}>
              {label}
            </h3>
            <div className={cn("flex items-center text-foreground/60", {
              "text-background/60": invert,
            })}>
              <span className={cn("font-sans text-xs", {
                "text-background": invert,
              })}>{description}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}
