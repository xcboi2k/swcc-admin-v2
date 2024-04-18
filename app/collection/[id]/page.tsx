import React from 'react'

import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import CollectionView from '@/components/shared/collection/CollectionView'

export default function page({params} : {params: {id: string}}) {
  return (
    <>
        <Header />
          <CollectionView id={params.id}/>
        <Footer />
    </>
  )
}
