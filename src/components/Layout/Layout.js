import React from 'react'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

const Layout = ({ children }) => {
	return (
		<>
			<Global
				styles={css`
					${emotionNormalize}
					html,
                    body {
						padding: 0;
						margin: 0;
                        background: #f9fafb;
						min-height: 100%;
						font-family: Helvetica, Arial, sans-serif;
					}
				`}
			/>
			{children}
		</>
	)
}

export default Layout
