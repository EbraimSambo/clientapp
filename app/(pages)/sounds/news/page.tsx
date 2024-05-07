import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import AllNewsSection from '@/components/pages/sections/sounds/AllNewsSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Novos Laçamentos",
    description: "Baixar gratuitamente ou ouvir",
}

const page = () => {
    return (
        <PageContainer>
            <AllNewsSection />
        </PageContainer>
    )
}

export default page
