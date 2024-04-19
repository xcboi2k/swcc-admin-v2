import React from 'react'

import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import DetailView from '@/components/shared/collection/DetailView'

export default function page({params} : {params: {collection: string, id: string}}) {
    return (
        <>
            <Header />
            <DetailView id={params.id} collection={params.collection}/>
            <Footer />
        </>
    )
}