import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import LoginSection from '@/components/pages/sections/LoginSection'
import React from 'react'
export const generateMetadata = async () => {
    return {
        title: "Login",
        description: "Fazer Login",
    }
}
export default function LoginPage() {
    return (
        <PageContainer>
            <LoginSection />
        </PageContainer>
    )
}

