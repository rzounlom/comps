import useNavigation from "../hooks/useNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();
  if (currentPath !== path) {
    return null;
  }
  return children;
};

export default Route;
