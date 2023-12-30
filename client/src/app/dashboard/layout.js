import { Header, Footer } from './header_footer.js'

export default function DashboardLayout({ children }) {
  return (
    <main>
      <div style={{paddingBottom: '10vh'}}>
      <Header />
      {children}
      </div>
      <Footer />
    </main>
  )
}