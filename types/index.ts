export type ElementProps<T, E = undefined> = E extends string | number | symbol
	? Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, E>
	: React.DetailedHTMLProps<React.HTMLAttributes<T>, T>

export type DivElementProps<E = undefined> = ElementProps<HTMLDivElement, E>

export type ButtonElementProps<E = undefined> = ElementProps<HTMLButtonElement, E>
