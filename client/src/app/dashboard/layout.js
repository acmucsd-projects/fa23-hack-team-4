import { Header, Footer } from './header_footer.js'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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