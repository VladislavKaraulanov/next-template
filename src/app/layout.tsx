import { ReactNode } from 'react'
import '@/shared/styles/normalize.scss'
import '@/shared/styles/globals.scss'
import { Inter } from 'next/font/google'
import Provider from '@/app/Provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
