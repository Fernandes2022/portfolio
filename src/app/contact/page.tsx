import ContactForm from './ContactForm'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import XIcon from '@mui/icons-material/X'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Timi-tech',
  description: 'Have a project or an opportunity? Send a message — I usually respond within an hour.',
}

export default function ContactPage() {
  return (
    <section className="px-3 relative space-y-12 sm:space-y-16 overflow-x-hidden">
      
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-900 to-background" />
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-25 blur-3xl" />
      </div>

      <header className="space-y-3 text-center sm:text-left max-w-3xl pt-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">Let’s talk</span>
        </h1>
        <p className="text-foreground/70 dark:text-white">
          Have a project or an opportunity? Send a message — I usually respond within an hour.
        </p>
      </header>

      <div className="grid lg:grid-cols-5 gap-6">
        
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 p-6 sm:p-8 shadow-lg">
            <div aria-hidden className="pointer-events-none absolute -inset-1 opacity-30 blur-2xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20" />
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>

        
        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-foreground/10 bg-background/60 p-6 sm:p-7 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Contact details</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><EmailIcon className="text-fuchsia-500" fontSize="small" /> <a href="mailto:jelilirokeebadeyeye@gmail.com" className="hover:underline">jelilirokeebadeyeye@gmail.com </a></li>
              <li className="flex items-center gap-3"><GitHubIcon className="text-fuchsia-500" fontSize="small" /> <a href="https://github.com/fernandes2022" target="_blank" className="hover:underline">github.com/fernandes2022</a></li>
              <li className="flex items-center gap-3"><LinkedInIcon className="text-fuchsia-500" fontSize="small" /> <a href="https://www.linkedin.com/in/timi-tech" target="_blank" className="hover:underline">linkedin.com/in/timi-tech</a></li>
              <li className="flex items-center gap-3"><WhatsAppIcon className="text-fuchsia-500" fontSize="small" /> <a href="https://wa.me/2349067977261" target="_blank" className="hover:underline">2349067977261</a></li>
              <li className="flex items-center gap-3"><XIcon className="text-fuchsia-500" fontSize="small" /> <a href="https://x.com/Timi_Tech_" target="_blank" className="hover:underline">Timi_Tech_</a></li>
              
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                <p className="text-xs text-foreground/60 flex items-center gap-2"><AccessTimeIcon fontSize="inherit" /> Response</p>
                <p className="text-sm font-medium">~1 hour</p>
              </div>
              <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                <p className="text-xs text-foreground/60 flex items-center gap-2"><LocationOnIcon fontSize="inherit" /> Location</p>
                <p className="text-sm font-medium">Remote / Global</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-rose-600/10 p-6 text-center shadow-xl">
            <p className="text-sm text-foreground/80">Prefer email or WhatsApp?</p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <a href="mailto:jelilirokeebadeyeye@gmail.com" className="rounded-lg border border-foreground/15 px-4 py-2 text-sm hover:bg-foreground/5">Email me</a>
              <a href="https://wa.me/2349067977261" target="_blank" className="rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm shadow-lg shadow-fuchsia-500/20">WhatsApp</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
