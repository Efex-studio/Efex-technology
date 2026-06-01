import Image, { type StaticImageData } from 'next/image'
import bnbglobal from '../../assets/bnbglobal.jpg'
import acemint from '../../assets/acemint.jpg'
import livingspring from '../../assets/livingspring.jpg'
import shalom from '../../assets/shalom.jpg'
import hannettedu from '../../assets/hannettedu.jpg'
import josifex from '../../assets/josifex.png'
import quanxi from '../../assets/quanxi.png'
import empireluxury from '../../assets/empireluxury.jpg'
import hannettevent from '../../assets/hannettevent.jpg'

interface Project {
  title: string
  description: string
  image: StaticImageData
  href: string
}

const PROJECTS: Project[] = [
  {
    title: 'Bnb Food Essentials LTD',
    description:
      'A UK-based e-commerce business that sells Nigerian food items online, this is an online store where you can order Nigerian food stuffs such as Garri, Palm Oil, Elubo and Rice.',
    image: bnbglobal,
    href: 'https://bnbgloballimited.co.uk',
  },
  {
    title: 'Acemint Hub Cleaning Services LTD',
    description:
      'A Nigerian cleaning company located in Uyo, Akwa Ibom state. They offer cleaning services for both industrial and domestic facilities.',
    image: acemint,
    href: 'https://aceminthub.com.ng',
  },
  {
    title: 'Living Spring Global Healthcare LTD',
    description:
      'A healthcare advisory agency that offers various forms of health advisory services to individuals, couples and families.',
    image: livingspring,
    href: 'https://livingspring.ng',
  },
  {
    title: 'Shalom Ventures Group LTD',
    description:
      'A UK-based business that specializes in property management and education consultancy services for international students seeking to study in the United Kingdom.',
    image: shalom,
    href: 'https://shalomventuresgroup.com',
  },
  {
    title: 'Hannett Global Education & Consultancy LTD',
    description:
      'An agency that offers visa application and admission services to students who want to study in the UK for Masters and PhD programs.',
    image: hannettedu,
    href: 'https://hannetteducation.uk',
  },
  {
    title: 'Josifex Building Finishing and Furnishing LTD',
    description:
      'A Lagos-based building finishing company that provides various interior and exterior decoration services for homes and workspaces.',
    image: josifex,
    href: 'https://josifex.com.ng',
  },
  {
    title: 'Quanxi Limited',
    description:
      'An Abuja-based company that specializes in the sales of high-quality tractors and farm implements like farm trawlers and ridgers.',
    image: quanxi,
    href: 'https://efex-tech.github.io/Quanxilimited/index.html',
  },
  {
    title: 'Empire Luxury Collection',
    description:
      'A fashion online store that sells men’s fashion wears and accessories, offering custom sewing as well as ready-to-wear clothing.',
    image: empireluxury,
    href: 'https://empireluxurycollection.com.ng',
  },
  {
    title: 'Hannett Ventures Global LTD',
    description:
      'An event planning and management agency that provides event decoration services, rentals and catering services.',
    image: hannettevent,
    href: 'https://hannettevents.uk',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-200 mt-5 pb-5 pt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Completed Website Jobs</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-950">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Visit website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
