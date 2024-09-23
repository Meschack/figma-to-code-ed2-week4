import { addDays } from 'date-fns'

export const servicesData = [
  {
    icon: '/icons/teeth-icon.svg',
    title: 'Root Canal Treatment',
    description:
      'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.'
  },
  {
    icon: '/icons/dental-cleaning.svg',
    title: 'Dental Cleaning',
    description:
      'Regular dental cleaning is essential for maintaining healthy gums and teeth.'
  },
  {
    icon: '/icons/implant.svg',
    title: 'Orthodontics',
    description:
      'Orthodontics is a specialty that deals with the diagnosis, prevention, and correction of teeth alignment.'
  }
]

export const specialists = [
  {
    name: 'Jim Carry',
    title: 'Orthodontist',
    imgSrc: '/images/specialist/1.jpg'
  },
  {
    name: 'Wade Warren',
    title: 'Endodontist',
    imgSrc: '/images/specialist/2.jpg'
  },
  {
    name: 'Jenny Wilson',
    title: 'Periodontist',
    imgSrc: '/images/specialist/3.jpg'
  },
  {
    name: 'Jacob Jones',
    title: 'Pediatric Dentist',
    imgSrc: '/images/specialist/4.jpg'
  },
  {
    name: 'Jane Doe',
    title: 'Oral Surgeon',
    imgSrc: '/images/specialist/5.jpg'
  }
]

export const tommorow = addDays(new Date(), 1)
