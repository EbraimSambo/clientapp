import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import ArtistsSection from '@/components/pages/sections/artist/ArtistsSection.sc'
import React from 'react'

export const generateMetadata = async () => {
  return {
      title: "Todos os artistas",
      description: `Todos os Artistas`,
  }
}
const ArtistsPage = () => {
  return (
    <PageContainer>
       <ArtistsSection />
    </PageContainer>
  )
}

export default ArtistsPage

