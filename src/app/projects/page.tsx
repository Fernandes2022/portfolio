import ProjectCard from '@/components/ProjectCard'
import FilterListIcon from '@mui/icons-material/FilterList'
import SearchIcon from '@mui/icons-material/Search'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Timi-tech',
  description: 'A selection of full‑stack projects demonstrating product thinking, code quality, and velocity.',
}

const projects = [
  {
    title: 'Restaurant App',
    description: 'The biggest project I built. A full functional modern restaurant ordering app with admin panel.',
    tech: ['React', 'Tailwind', 'React-router', 'framer-motion', 'axios', 'emailjs', 'mui-material & icons', 'Node.js', 'Express', 'JWT', 'MongoDB'],
    image: '/restaurant.PNG',
    github: 'https://github.com/Fernandes2022/restaurant-ui',
    demo: 'https://nutri-c1.vercel.app',
  },
  {
    title: 'Freelancing website',
    description: 'A freelancing website where Freelancer can sign up and apply for Jobs.',
    tech: ['React', 'Tailwind', 'axios', 'aos', 'Node', 'Express', 'JWT', 'MongoDB'],
    image: '/myjob.PNG',
    github: 'https://github.com/Fernandes2022/First-MERN-stack',
    demo: 'https://myjob-timi.vercel.app',
  },
  {
    title: 'Fruit Website',
    description: 'A landing page with a little touch of add to cart and cart page functionality for a fruit store',
    tech: ['react', 'Tailwind', 'Framer Motion', 'lucide-react'],
    image: '/justfruit.PNG',
    github: 'https://github.com/Fernandes2022/justfruit',
    demo: 'https://justfruit-timi.vercel.app',
  },
  {
    title: 'Ecommerce website',
    description: 'A modern frontend based ecommerce website with add to cart functionality',
    tech: ['react', 'Tailwind', 'Framer Motion', 'lucide-react'],
    image: '/shopcart.PNG',
    github: 'https://github.com/Fernandes2022/1st-react-shopping',
    demo: 'https://1st-react-shopping-timi.vercel.app',
  },
  {
    title: 'Eatory',
    description: 'A laning page website for a restaurant',
    tech: ['react', 'Tailwind', 'Framer Motion', 'lucide-react'],
    image: '/eatory.PNG',
    github: 'https://github.com/Fernandes2022/eatory',
    demo: 'https://eatory-timi.vercel.app',
  },
  {
    title: 'Calculator',
    description: 'A scientific calculator with a lot of features',
    tech: ['react', 'tailwindcss', 'mathjs'],
    image: '/calculator.PNG',
    github: 'https://github.com/Fernandes2022/Calculatur',
    demo: 'https://calculatur-timi.vercel.app',
  },
]

export default function ProjectsPage() {
  return (
    <section className="px-3 relative space-y-10 sm:space-y-12 overflow-x-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-900 to-background" />
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] bg-[linear-gradient(to_right,rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <header className="space-y-10 pt-8 text-center ">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-foreground/70 max-w-2xl">
          A selection of various types of projects demonstrating product thinking, code quality, and velocity.
        </p>
        
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}


