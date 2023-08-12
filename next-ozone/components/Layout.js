import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function Layout({ children }) {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">

      <div>
        <Nav />

        <main>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
