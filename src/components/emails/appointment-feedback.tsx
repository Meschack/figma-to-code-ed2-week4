import { addMinutes, format } from 'date-fns'

import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Link
} from '@react-email/components'
import { capitalize } from '@/lib/utils'
import { Prisma } from '@prisma/client'
import { Icons } from '../common/icons'
import { siteConfig } from '@/config/site'

interface Props {
  fullName: string | null
  appointment: Prisma.appointmentGetPayload<{
    include: { appointment_type: { select: { name: true; duration: true } } }
  }>
  action: 'cancel' | 'accept'
}

export const AppointmentFeedback = ({
  fullName,
  appointment,
  action = 'accept'
}: Props) => {
  return (
    <Html>
      <Head />

      <Preview>Appointment Management</Preview>

      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Icons.logo />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={{
                  ...image,
                  objectFit: 'cover',
                  height: 200,
                  borderRadius: 2
                }}
                width={620}
                src={`https://ezcclmjdozznpqfd.public.blob.vercel-storage.com/doctrin/doctrin-appointment-header-mzyJKtX3IwTvr3CIy31v6zd1aWnD12`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Hi {fullName},
                </Heading>

                <Heading
                  as='h2'
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 10
                  }}
                >
                  Your appointment has been{' '}
                  {action === 'accept' ? 'confirm' : action}ed !
                </Heading>

                {action === 'accept' ? (
                  <>
                    <Text style={paragraph}>
                      <b>Date: </b>
                      {capitalize(
                        format(appointment.start_at, 'EEEE dd MMMM yyyy')
                      )}
                    </Text>

                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Starting hour: </b>
                      {format(appointment.start_at, 'HH:mm a')}
                    </Text>

                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Ending hour: </b>
                      {format(appointment.start_at, 'HH:mm a')}
                    </Text>

                    <Text style={paragraph}>
                      Please, be there no later than{' '}
                      {format(addMinutes(appointment.start_at, 15), 'HH:mm a')}.
                    </Text>

                    <Text style={{ ...paragraph }}>
                      If you have any questions, please check out our{' '}
                      <Link href={`${siteConfig.url}/help`}>help page</Link>.
                    </Text>
                  </>
                ) : (
                  <Row style={{ ...boxInfos }}>
                    <Text style={{ ...paragraph, textAlign: 'center' }}>
                      We apologize for any inconvenience this may have caused.
                      You can try to book another slot on our{' '}
                      <Link href={`${siteConfig.url}/booking`}>website</Link>.
                    </Text>

                    <Text style={{ ...paragraph, textAlign: 'center' }}>
                      If you have any questions, please check out our{' '}
                      <Link href={`${siteConfig.url}/help`}>help page</Link>.
                    </Text>
                  </Row>
                )}
              </Column>
            </Row>

            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column
                style={{ ...buttonContainer, textAlign: 'center' }}
                colSpan={2}
              >
                {action === 'accept' ? (
                  <Button style={button} href={`${siteConfig.url}/help`}>
                    Learn more
                  </Button>
                ) : (
                  <Button style={button} href={`${siteConfig.url}/booking`}>
                    Book another slot
                  </Button>
                )}
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src='https://ezcclmjdozznpqfd.public.blob.vercel-storage.com/doctrin/doctrin-footer.png'
            />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: colors.secondary
            }}
          >
            &copy; 2024 | Doctrin Inc., 350 Haie Vive, Cotonou, CA 94105, B.J. |
            <Link
              href={`${siteConfig.url}`}
              style={{ color: colors.primary, marginLeft: 4 }}
            >
              {siteConfig.url}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const colors = {
  primary: '#1376f8',
  secondary: 'rgb(0,0,0,0.7)',
  white: '#fff'
}

const main = {
  backgroundColor: colors.white,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Ubuntu,Inter,Roboto,"Helvetica Neue",sans-serif',
  padding: '20px 10px'
}

const paragraph = { fontSize: 16 }

const logo = { margin: '20px 0px' }

const buttonContainer = {
  textAlign: 'center',
  margin: '0 auto',
  width: '100%'
}

const button = {
  backgroundColor: colors.primary,
  borderRadius: 3,
  color: colors.white,
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '12px 30px'
}

const content = { overflow: 'hidden' }

const image = { maxWidth: '100%' }

const boxInfos = { margin: '20px 0' }

const containerImageFooter = { margin: '25px 0 0 0' }
