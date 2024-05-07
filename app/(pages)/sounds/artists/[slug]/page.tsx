import { findArtist} from '@/actions/fetchs/server/FetchsSever'
import PageContainer from '@/components/layouts/pageContainer/PageContainer'
import SectionSingleArtist from '@/components/pages/sections/artist/SectionSingleArtist.sc'
import SectionRecomedacion from '@/components/pages/sections/home/SectionRecomedacion'
import { BACKEND_BASIC_URL } from '@/utils/constants/Constants'
import { Id, Params } from '@/utils/types/types'
import React from 'react'


export const generateMetadata = async (params: Params) => {
    const artist = await findArtist(params.params.slug)
    return {
        title: artist.name,
        description: `Desfrute das músicas gratuitas de ${artist.name}, aproveite para baixar ou fazer o download gratuito`,
        openGraph:{
            type: 'website',
            siteName: 'GuethoMusic',
            images:[{
              url: `${BACKEND_BASIC_URL + artist.cover}`
            }],
            title: `Músicas de ${artist.name}`,
            description: `Encontrar músicas gratuitas e ouvir a música de ${artist.name} na plataforma Ghethomusic `,
            url: `guethomusic.com`
          }
    }
}

const ArtistPage = async(params: Params) => {
    return (
        <PageContainer>
            <SectionSingleArtist slug={params.params.slug} />
            <SectionRecomedacion />
        </PageContainer>
    )
}

export default ArtistPage
