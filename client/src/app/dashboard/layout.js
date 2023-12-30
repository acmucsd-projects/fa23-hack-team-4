import Header from './components/header.js'
import Footer from './components/footer.js'

export default function DashboardLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}