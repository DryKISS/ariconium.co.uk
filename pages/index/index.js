/**
 * Home
 */

// UI
import {
  Card,
  CardBody,
  CardFooter,
  Column,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  Page,
  PageHeading,
  Row
} from 'industry-ui'

// Style
import styled from 'styled-components'

export default () => {
  const meta = {
    description: 'Ariconium, providing efficient sales, marketing and distribution service for speciality ingredients and additives for animals.',
    path: '/',
    title: 'Ariconium managment of feed additive'
  }

  return (
    <Page meta={meta}>
      <PageHeading heading='Ariconium' />

      <Image alt='Cow' src='/static/carousel/cow-slim.jpg' />
      <Divider size='md' />

      <Row>

        <Column md={6}>
          <Heading content='Established' tag='h2' />
          <p>
            Ariconium Limited was established in 1998 with the objective of
            providing an efficient sales, marketing and distribution service for
            speciality ingredients and additives that increase the performance
            of, add value to and enhance the profitability of animal production,
            pet foods and aquaculture.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Products' tag='h2' />
          <p>
            The products are developed and selected in collaboration with small
            and medium sized enterprises with targeted R&amp;D projects, together
            with unique production techniques and processes. Those products and
            programmes are supplied to the end-users through the extensive
            distribution channels and network contacts built up over many years.
          </p>
        </Column>

      </Row>

      <Divider size='lg' />

      <Row>

        <Column md={3}>
          <Card bordered context='primary' shadow>
            <CardBody center>
              <Icon icon='lightbulb' prefix='fad' size='4x' /><p />
              <StyledHeading content='Experienced &amp; knowledgable' tag='h3' />
            </CardBody>
            <CardFooter context='light'>
              <Link to='/about'>
                <a>Learn More</a>
              </Link>
            </CardFooter>
          </Card>
        </Column>

        <Column md={3}>
          <Card bordered context='primary' shadow>
            <CardBody center>
              <Icon icon='check-square' prefix='fad' size='4x' /><p />
              <StyledHeading content='Reliable, Dedicated &amp; efficient' tag='h3' />
            </CardBody>
            <CardFooter context='light'>
              <Link to='/about'>
                <a>Learn More</a>
              </Link>
            </CardFooter>
          </Card>
        </Column>

        <Column md={3}>
          <Card bordered context='primary' shadow>
            <CardBody center>
              <Icon icon='globe-europe' prefix='fad' size='4x' /><p />
              <StyledHeading content='International distribution' tag='h3' />
            </CardBody>
            <CardFooter context='light'>
              <Link to='/about'>
                <a>Learn More</a>
              </Link>
            </CardFooter>
          </Card>
        </Column>

        <Column md={3}>
          <Card bordered context='primary' shadow>
            <CardBody center>
              <Icon icon='phone-square' prefix='fad' size='4x' /><p />
              <StyledHeading content='Get in touch with us' tag='h3' />
            </CardBody>
            <CardFooter context='light'>
              <Link to='/about'>
                <a>Learn More</a>
              </Link>
            </CardFooter>
          </Card>
        </Column>

      </Row>

    </Page>
  )
}

const StyledHeading = styled(Heading)`
  color: #fff;
`
