/**
 * Navigation
 */

// UI
import { Navbar } from 'industry-ui'

export const Navigation = () => {
  const Default = {
    left: [
      {
        id: 'navHome',
        name: 'Home',
        to: '/'
      },
      {
        id: 'navAbout',
        name: 'About',
        to: '/about'
      },
      {
        id: 'navProducts',
        name: 'Products',
        to: '/products'
      },
      {
        id: 'navStandards',
        name: 'Standards',
        to: '/standards'
      },
      {
        id: 'navServices',
        name: 'Services',
        to: '/services'
      },
      {
        id: 'navContact',
        name: 'Contact',
        to: '/contact'
      }
    ]
  }

  return (
    <Navbar container context='dark' links={Default} />
  )
}
