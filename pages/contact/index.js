/**
 * Contact
 */

// UI
import {
  Button,
  Column,
  Divider,
  Heading,
  Image,
  Input,
  Page,
  PageHeading,
  Row,
  Textarea,
  useChange
} from 'industry-ui'

export default () => {
  const initialState = {
    _replyto: '',
    name: '',
    message: '',
    mobile: ''
  }

  const [change, {
    _replyto,
    name,
    message,
    mobile
  }] = useChange(initialState)

  const meta = {
    description: `Ariconium, providing efficient sales, marketing and
      distribution service for speciality ingredients and additives for
      animals.`,
    path: '/',
    title: 'Ariconium managment of feed additive'
  }

  return (
    <Page meta={meta}>
      <PageHeading heading='Contact Ariconium' />

      <Image alt='Cow' src='/static/images/cow-tiny.jpg' />
      <Divider size='md' />

      <Row>
        <Column md={6}>
          <Heading content='Established' tag='h2' />
          <p>
            You can contact us using the form to the right, or send an email to:
            info@ariconium.co.uk
          </p>
          <p>
            We will do our best to respond to your query ASAP.
          </p>
        </Column>

        <Column md={6}>
          <Heading content='Contact Form' tag='h2' />

          <form action='//formspree.io/info@ariconium.co.uk' method='POST'>

            <Input
              change={change}
              id='name'
              label='Full Name'
              required
              value={name}
            />

            <Input
              change={change}
              id='_replyto'
              label='Email'
              type='email'
              required
              value={_replyto}
            />

            <Input
              change={change}
              id='mobile'
              label='Mobile'
              type='tel'
              value={mobile}
            />

            <Textarea
              change={change}
              id='message'
              maxLength={1000}
              required
              rows={5}
              value={message}
            />

            <Input
              change={() => {}}
              id='_next'
              type='hidden'
              value='http://ariconium.co.uk/contact/?f=s'
            />

            <Button
              content='Submit'
              context='primary'
              size='lg'
              type='submit'
            />

          </form>

        </Column>
      </Row>

      <p />

    </Page>
  )
}
