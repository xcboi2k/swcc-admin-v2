import React from 'react'

import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import DetailView from '@/components/shared/collection/DetailView'
import EditForm from '@/components/shared/collection/EditForm'

export default function page({params} : {params: {collection: string, id: string}}) {
    return (
        <>
            <Header />
            <EditForm collection={params.collection} id={params.id}/>
            <Footer />
        </>
    )
}