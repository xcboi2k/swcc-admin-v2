import React from 'react'

import Header from '@/components/shared/header/Header'
import CollectionsPreview from '@/components/dashboard/collections-preview/CollectionsPreview'
import Footer from '@/components/shared/footer/Footer';

export default function page() {
  return (
    <>
      <Header />
      <CollectionsPreview />
      <Footer />
    </>
  )
}
