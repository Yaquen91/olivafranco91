import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Expertise } from '@/components/expertise'
import { Projects } from '@/components/projects'
import { Teaching } from '@/components/teaching'
import { YouTube } from '@/components/youtube'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { getDictionary } from '@/i18n/dictionary'

export default function Page() {
  const copy = getDictionary()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader copy={copy.header} />
      <main>
        <Hero copy={copy.hero} />
        <About copy={copy.about} />
        <Expertise copy={copy.expertise} />
        <Projects copy={copy.projects} />
        <Teaching copy={copy.teaching} />
        <YouTube copy={copy.youtube} />
        <Contact copy={copy.contact} />
      </main>
      <SiteFooter copy={copy.footer} />
    </div>
  )
}
