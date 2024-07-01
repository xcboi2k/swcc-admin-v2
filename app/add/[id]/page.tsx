import React from 'react'

import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import CollectionView from '@/components/shared/collection/CollectionView'
import AddForm from '@/components/shared/collection/AddForm'

export default function page({params} : {params: { id: string}}) {
  return (
    <>
        <Header />
        <AddForm id={params.id}/>
        <Footer />
    </>
  )
}
