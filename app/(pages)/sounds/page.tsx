import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import React, { FC } from 'react'
import SoundsSection from "@/components/pages/sections/sounds/SoundsSection";
import { Metadata } from 'next';
import AllSoundsSection from '@/components/pages/sections/sounds/AllSoundsSection';

export const metadata: Metadata = {

  title: "Baixar ou Ouvir Músicas",
  description: "Baixar gratuitamente ou ouvir",
}

const SongsPage: FC = async () => {
  return (
    <PageContainer>
      <AllSoundsSection content="Todas as Músicas" />
    </PageContainer>
  )
}

export default SongsPage