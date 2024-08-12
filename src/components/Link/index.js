import { Link as NextLink } from "next/link";

export default function Link({ children, href, ...props }) {
	return (
		<NextLink>
			<span>{children}</span>
		</NextLink>
	);
}
