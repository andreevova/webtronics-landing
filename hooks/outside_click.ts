import { useEffect } from 'react'

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				typeof callback === 'function' && callback()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback])
}
