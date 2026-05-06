import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import Loader from '@/components/Loader'
import PageTransition from '@/components/PageTransition'

export default function PublicLayout({ children }) {
  return (
    <>
      <Loader />
      <PageTransition />
      <CustomCursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
