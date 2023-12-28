import Header from './components/header.js'
import Footer from './components/footer.js'

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}