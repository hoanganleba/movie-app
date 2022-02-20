import { useParams } from 'react-router-dom'
import useFetchProfileData from '../hooks/useFetchProfileData'

const Profile = () => {
  const { id } = useParams()
  const user = useFetchProfileData(id)
  return (
    <>
      <h1 className="mb-3 text-xl font-medium text-gray-900">Profile</h1>
      <p>Email: {user.email}</p>
    </>
  )
}

export default Profile
