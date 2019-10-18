/**
 * About
 */

// UI
import {
  Column,
  Divider,
  PageHeading,
  Heading,
  Image,
  Page,
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
      <PageHeading heading='About Ariconium' />

      <Image alt='Cat and Dog' src='/static/images/cat-dog-tiny.jpg' />
      <Divider size='md' />

      <Row>
        <Column md={6}>
          <Heading content='Team' tag='h2' />
          <p>
            Ariconium Limited has a team of people with many years' experience
            in the sales and marketing of feed additive specialities with a
            particular focus on developing countries and regions.
          </p>
          <p>
            The knowledge gained in developed markets provides expertise to
            improve the production and profitability of feed and livestock
            operations.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Increase profitability' tag='h2' />
          <p>
            We work closely with both end users and product developers to
            provide a range of products specifically to meet the actual
            conditions present in a particular market, ensuring the optimum
            results in each circumstance.
          </p>
          <p>
            Matching experience from other regions to individual conditions
            delivers the most efficient improvement in the profitability of
            livestock production.
          </p>
        </Column>
      </Row>

    </Page>
  )
}
