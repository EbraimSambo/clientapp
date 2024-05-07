import { findUsers } from '@/actions/fetchs/server/FetchsSever'
import InfoUser from '@/components/auth/user/infouser/InfoUser'
import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import { Params, User } from '@/utils/types/types'
import React from 'react'

export const generateMetadata = async (props: Params) => {
  const user: User = await findUsers(props.params.slug)
  return {
      title: `Perfil: ${user.username}`,
      description: "Perfil Usuário",
  }
}
const ProfilePage = (props: Params) => {
  return (
    <PageContainer>
      <InfoUser slug={props.params.slug} />
    </PageContainer>
  )
}
export default ProfilePage