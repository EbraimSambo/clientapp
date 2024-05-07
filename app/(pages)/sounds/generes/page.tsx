import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import GeneresSection from '@/components/pages/sections/GeneresSection'
import React, { FC } from 'react'
export const generateMetadata = async () => {
    return {
        title: `Géneros Musicais` ,
        description: `Encontrar Músicas pelos géneros`,
    }
}
const GeneresPage: FC = () => {
    return (
        <PageContainer>
            <GeneresSection />
        </PageContainer>
    )
}

export default GeneresPage
