import { get } from '@/actions/appointments'

interface Props {}

const Page = async ({}: Props) => {
  try {
    const appointments = await get()

    return <h1>Liste des rendez-vous</h1>
  } catch (error) {}
}

export default Page
