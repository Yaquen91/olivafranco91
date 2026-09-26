import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Videos } from '@/components/videos'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { siteContent } from '@/content/site'

export default function Page() {
  const copy = siteContent

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader copy={copy.header} />
      <main>
        <Hero copy={copy.hero} />
        <About copy={copy.about} />
        <Projects copy={copy.projects} />
        <Videos copy={copy.videos} />
        <Contact copy={copy.contact} />
      </main>
      <SiteFooter copy={copy.footer} />
    </div>
  )
}
