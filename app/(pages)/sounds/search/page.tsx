import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import SectionSearch from '@/components/pages/sections/SectionSearch'
import React from 'react'

export const generateMetadata = async () => {
    return {
      title: "Procuar por músicas",
      description: "Proucuar músicas para baixar ou ouvir",
    }
}

export default function SearchPage() {
    return (
        <PageContainer>
            <SectionSearch />
        </PageContainer>
    )
}
