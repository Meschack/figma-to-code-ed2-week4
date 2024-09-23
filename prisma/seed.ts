import { AppointmentStatus } from '@prisma/client'
import { faker } from '@faker-js/faker'
import prisma from '@/lib/prisma'

export const generateAppointmentTypes = async () => {
  const appointmentTypes = [
    {
      name: 'Consultation de routine',
      duration: 30,
      description:
        "Examen médical général pour vérifier l'état de santé global du patient"
    },
    {
      name: 'Examen annuel',
      duration: 60,
      description: 'Bilan de santé complet effectué une fois par an'
    },
    {
      name: 'Suivi de traitement',
      duration: 20,
      description:
        "Rendez-vous court pour évaluer l'efficacité d'un traitement en cours"
    },
    {
      name: 'Consultation urgente',
      duration: 45,
      description:
        'Rendez-vous pour des problèmes de santé nécessitant une attention immédiate'
    },
    {
      name: 'Vaccination',
      duration: 15,
      description:
        'Administration de vaccins et mise à jour du carnet de vaccination'
    },
    {
      name: 'Consultation spécialisée',
      duration: 60,
      description:
        'Rendez-vous avec un spécialiste pour des problèmes de santé spécifiques'
    },
    {
      name: 'Analyse de résultats',
      duration: 30,
      description: "Discussion des résultats d'examens ou de tests médicaux"
    },
    {
      name: 'Prescription de médicaments',
      duration: 20,
      description:
        "Consultation rapide pour le renouvellement ou l'ajustement de prescriptions"
    },
    {
      name: 'Consultation pédiatrique',
      duration: 45,
      description: 'Examen médical adapté aux enfants et aux nourrissons'
    },
    {
      name: 'Consultation gériatrique',
      duration: 60,
      description:
        'Consultation spécifique pour les patients âgés et leurs besoins particuliers'
    }
  ]

  await prisma.appointment_type.createMany({
    data: appointmentTypes
  })

  console.log('10 types de rendez-vous ont été créés')
}

export const generateAppointments = async (patientClerkIds: string[]) => {
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

export const main = async () => {
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
