import './globals.css'
import { ProductContextProvider } from '../context/ProductContext'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Store',
  description: 'Next.js Shopping App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductContextProvider>
          <Navbar />
          {children}
          <Footer/>
        </ProductContextProvider>
      </body>
    </html>
  )
}
