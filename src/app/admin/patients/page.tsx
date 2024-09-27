import { get } from '@/actions/users'
import { ErrorComponent } from '@/components/common/error'
import { Patients } from '@/components/pages/patients'

export const metadata = {
  title: 'Patients'
}

const Page = async () => {
  try {
    const users = await get()

    return (
      <>
        <h1>Patients list</h1>

        <Patients users={users} />
      </>
    )
  } catch (error) {
    return (
      <ErrorComponent
        title='An error occurred'
        description='An error occurred while fetching the data.'
        label='Retry'
        to=''
      />
    )
  }
}

export default Page
