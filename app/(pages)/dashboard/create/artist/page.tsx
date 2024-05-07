import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import CreateArtist from '@/components/sounds/artists/form/CreateArtist'
import React from 'react'


export const generateMetadata = () => {
  return {
      title: "Criar Artista",
      description: `Criar artista`,
  }
}
const page = () => {
  return (
    <PageContainer>
      <CreateArtist />
    </PageContainer>
  )
}

export default page
