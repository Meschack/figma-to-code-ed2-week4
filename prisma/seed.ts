import { AppointmentStatus } from '@prisma/client'
import { faker } from '@faker-js/faker'
import prisma from '@/lib/prisma'

const generateAppointmentTypes = async () => {
  const appointmentTypes = [
    { name: 'Consultation de routine', duration: 30 },
    { name: 'Examen annuel', duration: 60 },
    { name: 'Suivi de traitement', duration: 20 },
    { name: 'Consultation urgente', duration: 45 },
    { name: 'Vaccination', duration: 15 },
    { name: 'Consultation spécialisée', duration: 60 },
    { name: 'Analyse de résultats', duration: 30 },
    { name: 'Prescription de médicaments', duration: 20 },
    { name: 'Consultation pédiatrique', duration: 45 },
    { name: 'Consultation gériatrique', duration: 60 }
  ]

  for (const type of appointmentTypes) {
    await prisma.appointment_type.create({
      data: {
        name: type.name,
        description: `Description pour ${type.name}`,
        duration: type.duration
      }
    })
  }

  console.log('10 types de rendez-vous ont été créés')
}

const generateAppointments = async (patientClerkIds: string[]) => {
  const appointmentReasons = [
    'Douleurs abdominales',
    'Maux de tête persistants',
    'Contrôle de routine',
    "Renouvellement d'ordonnance",
    'Suivi post-opératoire',
    'Problèmes de sommeil',
    'Douleurs articulaires',
    'Problèmes dermatologiques',
    'Consultation pour stress',
    'Bilan de santé'
  ]

  const appointmentTypes = await prisma.appointment_type.findMany()

  for (let i = 0; i < 30; i++) {
    const randomStatus = faker.helpers.arrayElement(
      Object.values(AppointmentStatus)
    )

    await prisma.appointment.create({
      data: {
        patient_clerk_id: faker.helpers.arrayElement(patientClerkIds),
        start_at: faker.date.future(),
        status: randomStatus,
        reason: faker.helpers.arrayElement(appointmentReasons),
        appointment_type_id: faker.helpers.arrayElement(appointmentTypes).id
      }
    })
  }

  console.log('30 rendez-vous ont été créés')
}

const main = async () => {
  await generateAppointmentTypes()

  // Remplacez ces IDs par de vrais IDs Clerk de patients

  const patientClerkIds = ['clerk_id_1', 'clerk_id_2', 'clerk_id_3']

  await generateAppointments(patientClerkIds)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
