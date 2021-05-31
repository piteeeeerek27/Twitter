import { useLocation } from "react-router-dom";

export default function useGetLocation() {
	const location = useLocation();
	return location.pathname;
}
