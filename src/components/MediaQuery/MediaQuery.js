import { useMediaQuery } from './useMediaQuery';

function MediaQuery({ children, media }) {
	const match = useMediaQuery(media);

	if (!media || !match) return null;

	return children;
}

export default MediaQuery;
