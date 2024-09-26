import { get } from '@/actions/users'
import { Patients } from '@/components/pages/patients'
import Loading from './loading'

export const metadata = {
  title: 'Patients'
}

const Page = async () => {
  try {
    const users = await get()

    return <Loading />

    return (
      <>
        <h1>Patients list</h1>

        <Patients users={users} />
      </>
    )
  } catch (error) {}
}

export default Page
