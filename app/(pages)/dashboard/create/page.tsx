import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import CreateSoundSection from '@/components/pages/sections/CreateSoundSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Criar ou Publicar",
    description: "Hits da plataforma",
}
const page = () => {
    return (
        <PageContainer>
            <CreateSoundSection />
        </PageContainer>
    )
}

export default page
