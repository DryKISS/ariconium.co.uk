/**
 * About
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
      <PageHeading heading='Ariconium products' />

      <Image alt='Chicken' src='/static/images/chicken-tiny.jpg' />
      <Divider size='md' />

      <Row>
        <Column md={6}>
          <Heading content='Production cycle' tag='h2' />
          <p>
            The products are focused on specific events in the livestock
            production cycle. Generating improvements in the production
            parameters at these specific events will have a significant
            beneficial effect on the production parameters of the whole
            production cycle.
          </p>
          <p>
            In pig production these significant events are farrowing, weaning,
            insemination and times of stress such as changes in feed or housing.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Targeting' tag='h2' />
          <p>
            Targeting these specific events will have a major impact on the
            overall profitability of a pig production system. Products to
            supplement the essential fatty acids in sow and boars feed influence
            the number of piglets born and weaned, the size and viability of the
            piglets at birth and at weaning.
          </p>
          <p>
            The extension of the productive life of both sows and boars impacts
            profitability and return on investment. Products targeted at these
            specific events represent a relatively small investment when
            measured against the potential profit that can be gained throughout
            the entire production cycle.
          </p>
        </Column>
      </Row>

      <Row>
        <Column md={6}>
          <Heading content='Pet foods' tag='h2' />
          <p>
            Ariconium Limited has close relationships with major producers of
            equipment used in pet food manufacturing, giving the opportunity to
            develop a range of additives and ingredients that enhance the
            appearance and acceptability of pet foods.
          </p>
          <p>
            Products include an extensive range of colours, palatants and
            speciality ingredients such as salmon, shrimp, krill and other
            protein sources. Ariconium also offers a range of chicken and fish
            based treats for the retail market.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Aquaculture' tag='h2' />
          <p>
            Aquaculture is a rapidly growing sector and has excellent prospects
            for future growth to meet the increasing demand for food. This
            offers both challenges and opportunities in the development of
            additives and innovative processes that add value to fish feeds,
            provide greater sustainability of raw material supply and adding
            value to feed and production systems.
          </p>
          <p>
            New and innovative techniques for the production of high value
            products such as fresh shrimps that can be grown in environmentally
            controlled facilities.
          </p>
          <p>
            These sophisticated techniques mean the facilities can be located
            near to major population centres allowing fresh produce to be
            delivered directly to the consumers that, in turn, generates
            elevated profits and an extremely high return on investment.
          </p>
        </Column>
      </Row>

    </Page>
  )
}
