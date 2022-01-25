import React from 'react'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import {Header} from '../components'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
	return (
		<>
			<Helmet>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Helmet>
			<Global
				styles={css`
					${emotionNormalize}
					html,
                    body {
						padding: 0;
						margin: 0;
						background: #f9fafb;
						min-height: 100%;
						font-family: 'Inter', sans-serif;
						font-weight: 400;
					}
				`}
			/>
			<Header />

			{children}
		</>
	)
}

export default Layout
