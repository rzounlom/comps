import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    "hover:text-blue-700",
    className,
    currentPath === to && activeClassName
  );
  const handleClkick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClkick}>
      {children}
    </a>
  );
};

export default Link;
