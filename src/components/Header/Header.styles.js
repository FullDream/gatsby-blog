import { motion} from 'framer-motion'
import styled from '@emotion/styled'


const header = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	padding: 20,
	alignItems: 'center',
	backgroundColor: '#feebef',
	height: 120,
}

const link = {
	color: '#fff',
	textDecoration: 'none',
	'&:hover': {
		textDecoration: 'none',
	},
	fontWeight: 700,
	display: 'flex',
	gap: 20,
	alignItems: 'center',
	fontSize: 40,
}

const Ul = styled(motion.ul)({
	textDecoration: 'none',
	listStyleType: 'none',
	display: 'flex',
	gap: 20,
})

const Li = styled(motion.li)({
	position: 'relative',
	'& > a': {
		color: 'hotpink',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
		},
	},
})

const Underline = styled(motion.span)({
	position: 'absolute',
	top: '100%',
	width: '100%',
	height: 4,
	display: 'block',
	borderRadius: 15,
	backgroundColor: '#fff',
})

export { header, link, Ul, Li, Underline }
