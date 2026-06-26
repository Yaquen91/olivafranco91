import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Expertise } from '@/components/expertise'
import { Projects } from '@/components/projects'
import { Teaching } from '@/components/teaching'
import { YouTube } from '@/components/youtube'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Teaching />
        <YouTube />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
