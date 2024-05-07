import PageContainer from '@/components/layouts/pageContainer/PageContainer';
import React from 'react'
import { Params } from '@/utils/types/types';
import { findSound} from '@/actions/fetchs/server/FetchsSever';
import SectionCategores from '@/components/pages/sections/SectionCategores';
import SoundContainer from '@/components/pages/containers/SoundContainer';
import { BACKEND_BASIC_URL } from '@/utils/constants/Constants';


export const generateMetadata = async (props: Params) => {
    const sound = await findSound(props.params.slug)
    return {
        title: sound?.find.title,
        description: `Baixar gratuitamente e ouvir ${sound?.find.title} - ${sound?.find.artist}`,
        openGraph:{
            type: 'website',
            siteName: 'GuethoMusic',
            images:[{
              url: `${BACKEND_BASIC_URL + sound?.find.cover}`
            }],
            title: `${sound?.find.title} - ${sound?.find.artist}`,
            description: `Baixe gratuitamente e oiça a música ${sound?.find.title} de ${sound?.find.artist}
             na plataforma Ghethomusic `,
            url: `guethomusic.com`
          }
    }
}
export default async function SinglePage(props: Params) {
    return (
        <PageContainer>
            <SoundContainer slug={props.params.slug} />
            <SectionCategores />
        </PageContainer>
    )
}
