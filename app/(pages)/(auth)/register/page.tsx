import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import RegisterSection from '@/components/pages/sections/RegisterSection'
import React from 'react'
export const generateMetadata = async () => {
    return {
        title: "Criar uma conta",
        description: "Criar uma conta",
    }
}
export default function RegisterPage() {
    return (
        <PageContainer>
            <RegisterSection />
        </PageContainer>
    )
}


