import React from 'react'
import "@/styles/globals.scss"


const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className='bg-[#131313]'>{children}</body>
    </html>
  )
}

export default RootLayout
