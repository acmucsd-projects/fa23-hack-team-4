import { Header, Footer } from './header_footer.js'

export default function DashboardLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}