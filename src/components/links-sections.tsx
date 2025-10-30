import { Github, Linkedin, Globe, Wind, Zap, Instagram, MessageCircle, Sparkles, Music, Cable } from "lucide-react"
import { LinkSection, LinkSectionDescription, LinkSectionHeader, LinkSectionLink, LinkSectionLinks, LinkSectionTitle } from "./link-section"

type LinkData = {
  href: string
  label: string
  description: string
  icon?: React.ReactNode
  img?: string
  invert?: boolean
}

const professionalLinks: LinkData[] = [
  {
    href: "https://www.linkedin.com/in/thiago-dorville/",
    icon: <Linkedin />,
    description: "Meu perfil no LinkedIn",
    label: "Linkdin",
  },
  {
    href: "https://github.com/dorvillethiago",
    icon: <Github />,
    description: "Meu perfil no GitHub",
    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    label: "Github",
  },
  {
    href: "https://www.dorville.com.br",
    icon: <Globe />,
    description: "Meu portfólio de projetos",
    label: "Portfólio",
    img: "https://images.unsplash.com/photo-1623520333087-62b8793e3d23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
]

const playlistLinks: LinkData[] = [
  {
    href: "https://music.youtube.com/playlist?list=PLkqqIoGdjV6X8yRTZYF0o8Y3sApmRvlK3&si=mtQJGYE7Nja_Z-mm",
    icon: <Zap />,
    description: "Pra fazer algo grande se tornar ainda maior",
    label: "Melodic Bass/Dubstep",
    img: "https://images.unsplash.com/photo-1632008341003-5c6767c7d237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687https://images.unsplash.com/photo-1635776062764-e025521e3df3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
  },
  {
    href: "https://music.youtube.com/playlist?list=PLkqqIoGdjV6UWTVGWPy2Xx7SYm0oNmQmu&si=O784Uj3r0FGLZ1hL",
    icon: <Wind />,
    description: "Pra existir sem peso e tomar um cházinho",
    img: "https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=656",
    label: "Bossa Nova",
  },
]

const socialLinks: LinkData[] = [
  {
    href: "https://www.instagram.com/thiago.dorville/",
    icon: <Instagram />,
    description: "Covers de piano, minha vida e fotos aleatórias",
    label: "Instagram",
    img: "https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    href: "https://wa.me/5582996448092",
    icon: <MessageCircle />,
    description: "Assuntos profissionais ou uma ideia realmente boa",
    label: "WhatsApp",
    invert: true,
    img: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  }
]

export function LinksSections() {
  return (
    <section className="flex flex-col gap-12 pt-16 pb-16">
      <LinkSection>
        <LinkSectionHeader>
          <LinkSectionTitle>
            <Sparkles />
            Links Profissionais
          </LinkSectionTitle>
          <LinkSectionDescription>
            Coisas relacionadas ao meu trabalho, código, projetos, etc.
          </LinkSectionDescription>
        </LinkSectionHeader>
        <LinkSectionLinks>
          {professionalLinks.map((item) => (
            <LinkSectionLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              description={item.description}
              label={item.label}
              img={item.img}
            />
          ))}
        </LinkSectionLinks>
      </LinkSection>

      <LinkSection>
        <LinkSectionHeader>
          <LinkSectionTitle>
            <Music />
            Playlists
          </LinkSectionTitle>
          <LinkSectionDescription>
            Se eu tiver balançando a cabeça na rua, tem alguma dessas tocando, muito provavelmente.
          </LinkSectionDescription>
        </LinkSectionHeader>
        <LinkSectionLinks>
          {playlistLinks.map((item) => (
            <LinkSectionLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              description={item.description}
              label={item.label}
              img={item.img}
            />
          ))}
        </LinkSectionLinks>
      </LinkSection>

      <LinkSection>
        <LinkSectionHeader>
          <LinkSectionTitle>
            <Cable />
            Links Sociais
          </LinkSectionTitle>
          <LinkSectionDescription>
            Onde eu estou, como me encontrar, etc.
          </LinkSectionDescription>
        </LinkSectionHeader>
        <LinkSectionLinks>
          {socialLinks.map((item) => (
            <LinkSectionLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              description={item.description}
              label={item.label}
              img={item.img}
              invert={item.invert}
            />
          ))}
        </LinkSectionLinks>
      </LinkSection>
    </section>
  )
}


