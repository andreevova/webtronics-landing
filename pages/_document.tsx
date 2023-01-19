import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
				<link href='https://fonts.googleapis.com/css2?family=Inter&display=swap' rel='stylesheet'></link>
				<link href='https://fonts.googleapis.com/css2?family=Inter&display=swap' rel='stylesheet'></link>
				<link href='/fonts/fonts.css' rel='stylesheet'></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
