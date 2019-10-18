/**
 * Services
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
      <PageHeading heading='Ariconium services' />

      <Image alt='Salmon' src='/static/images/salmon-tiny.jpg' />
      <Divider size='md' />

      <Row>
        <Column md={6}>
          <Heading content='Distribution' tag='h2' />
          <p>
            Many years of experience in this field gives invaluable experience
            in product registrations, preparation of export documentation,
            transportation, packaging and handling of goods into developing
            regions such as Eastern Europe, Russia and South America.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Financial security' tag='h2' />
          <p>
            This extensive experience enables Ariconium Limited to cover the
            financial risks that may be encountered in these areas meaning that
            Ariconium Limited can offer financial security to its partners.
          </p>
        </Column>
      </Row>

    </Page>
  )
}
