import React, {useState} from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { header, Li, link, Ul, Underline } from './Header.styles'
import { LayoutGroup } from 'framer-motion'

const menu = [
	{ id: 1, link: '/', name: 'Главная' },
	{ id: 2, link: '/blog', name: 'Статьи' },
	{ id: 3, link: '/about', name: 'О нас' },
]


const Header = () => {
	const [selected, setSelected] = useState(0)
	const titleQuery = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const url = typeof window !== 'undefined' ? window.location.pathname : ''
	console.log(url)
	return (
		<header css={header}>
			<Link to='/' css={link}>
				<svg width='70' height='70' viewBox='0 0 32 32'>
					<path d='M0 32c4-12 14.469-32 32-32-8.219 6.594-12 22-18 22s-6 0-6 0l-6 10h-2z'></path>
				</svg>
				<span>{titleQuery.site.siteMetadata.title}</span>
			</Link>
			<nav>
				<Ul>
					{menu.map(({ id, link, name }) => (
						<Li key={id}>
							<Link to={link}>{name}</Link>

							{url == link && <Underline layoutId='underline' />}
						</Li>
					))}
				</Ul>
			</nav>
		</header>
	)
}

export default Header
