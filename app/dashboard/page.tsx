import React from 'react'

import Header from '@/components/dashboard/header/Header'
import CollectionsPreview from '@/components/dashboard/collections-preview/CollectionsPreview'
import Footer from '@/components/dashboard/footer/Footer';

export default function page() {
  return (
    <>
      <Header />
      <CollectionsPreview />
      <Footer />
    </>
  )
}
