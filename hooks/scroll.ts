import { useCallback, useEffect, useState } from 'react'

export const useWindowScroll = () => {
	const [scrollXY, setScrollXY] = useState({ scrollX: 0, scrollY: 0 })

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScroll = useCallback(() => {
		const { scrollX, scrollY } = window
		setScrollXY({ scrollX, scrollY })
	}, [])

	return scrollXY
}
