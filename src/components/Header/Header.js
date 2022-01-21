import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
	const titleQuery = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return (
		<header
			css={{
				color: 'darkorchid',
				backgroundColor: 'lightgray',
			}}
		>
			<h1>{titleQuery.site.siteMetadata.title}</h1>
		</header>
	)
}

export default Header
