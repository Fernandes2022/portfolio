import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Timi-tech. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/fernandes2022" target="_blank" aria-label="GitHub" className="text-foreground/70 hover:text-foreground">
            <GitHubIcon fontSize="small" />
          </a>
          <a href="https://www.linkedin.com/in/timi-tech" target="_blank" aria-label="LinkedIn" className="text-foreground/70 hover:text-foreground">
            <LinkedInIcon fontSize="small" />
          </a>
          <a aria-label="Email" href="mailto:jelilirokeebadeyeye@gmail.com" className="text-foreground/70 hover:text-foreground">
              <EmailIcon fontSize="small" />
            </a>
          <a href="https://wa.me/2349067977261" target="_blank" aria-label="WhatsApp" className="text-foreground/70 hover:text-foreground">
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  )
}


