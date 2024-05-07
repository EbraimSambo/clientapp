import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import AllSHitsSection from '@/components/pages/sections/sounds/AllSHitsSection'
import { Metadata} from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Tops Hits",
    description: "Hits da plataforma",
}
const page = () => {
    return (
        <PageContainer>
            <AllSHitsSection />
        </PageContainer>
    )
}

export default page
