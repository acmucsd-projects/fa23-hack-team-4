import Header from './header.js'
import Footer from './footer.js'

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}