import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'

const archivo = Archivo({ subsets: ['latin'], weight: 'variable', display: 'swap' })

export const metadata: Metadata = {
	title: 'Chatterbox',
	description:
		'Chatterbox is a web application that helps people improve their communication skills. The main motive of this web application will be to help people get better at communicating with people and increase their fluency and accuracy at speaking.',
	keywords: [
		'chatterbox',
		'communication',
		'fluency',
		'accuracy',
		'speaking',
		'language',
		'skills',
		'improve',
		'people',
		'web',
		'application',
		'nextjs',
		'tailwindcss'
	]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark']} enableSystem={false}>
				<body
					className={cn(
						"bg-[url('https://cdn.discordapp.com/attachments/1227579080442904662/1228210856836464750/Education_Sketchnotes_Presentation_Template.png?ex=662b377f&is=6618c27f&hm=73440e748cc3dd1a6fa05d1a5049568d11b8052e823357d957790dfffb1c0a3a&')] bg-no-repeat bg-cover bg-center",
						archivo.className
					)}
				>
					<main className="flex min-h-screen flex-col items-center justify-between">{children}</main>
				</body>
			</ThemeProvider>
		</html>
	)
}

