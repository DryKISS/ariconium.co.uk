/**
 * Standards
 */

// UI
import {
  Column,
  Divider,
  Heading,
  Image,
  Page,
  PageHeading,
  Row
} from 'industry-ui'

export default () => {
  const meta = {
    description: `Ariconium, providing efficient sales, marketing and
      distribution service for speciality ingredients and additives for
      animals.`,
    path: '/',
    title: 'Ariconium managment of feed additive'
  }

  return (
    <Page meta={meta}>
      <PageHeading heading='Ariconium standards' />

      <Image alt='Pig' src='/static/images/pig-tiny.jpg' />
      <Divider size='md' />

      <Row>
        <Column md={6}>
          <Heading content='Valuable partner' tag='h2' />
          <p>
            Ariconium Limited is committed to the role of valuable partner for
            both the speciality ingredient producers and to the animal
            production and pet food industries in developing countries.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Expertise' tag='h2' />
          <p>
            Long term relationships and unique expertise in distribution and
            regulatory affairs make Ariconium a reliable, dedicated and
            efficient vehicle for distribution of value added products that
            offer the users improvements in production and profitability.
          </p>
        </Column>
      </Row>

    </Page>
  )
}
