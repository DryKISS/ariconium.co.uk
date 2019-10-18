/**
 * Layout
 */

// React
import { node } from 'prop-types'

// UI
import {
  Bootstrap,
  Column,
  Container,
  Heading,
  Image,
  Link,
  Row
} from 'industry-ui'

// Config
import { Brand, Footer, Navigation } from 'config'

const Layout = ({ children }) => {
  return (
    <>
      <section>
        <Container>
          <Row>

            <Column sm={12} md={2}>
              <Link to='/'>
                <a>
                  <Image alt='Ariconium' src='/static/logo/ariconium.png' />
                </a>
              </Link>
            </Column>

            <Column sm={12} md={10} style={{ margin: 'auto', textAlign: 'right' }}>
              <Heading content='Ariconium' noMargin />
              Sales and marketing of premium feed additives
            </Column>

          </Row>
        </Container>
      </section>

      <Bootstrap
        brand={Brand.name}
        children={children}
        footer={Footer}
        Navigation={Navigation}
      />
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired
}

export default Layout
