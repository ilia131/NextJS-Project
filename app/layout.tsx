import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Footer , Navbar } from '@/components/common'
import Provider from '@/redux/provider'
import { Setup } from '@/components/utils'

export const metadata: Metadata = {
  title: 'Full Auth',
  description: 'Full Auth application that provides jwt authentication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
         
          <Provider> 
              <Setup />
              <Navbar />
             <div className='max-auto max-w-7xl px-2 sm:px-6 lg:px-20 my-8 mx-40'>{children}</div>
             <Footer /> 
           </Provider>
        </body>
    </html>
  )
}
