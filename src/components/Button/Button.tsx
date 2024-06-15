import classNames from "classnames";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  to: string; 
};

export function Button({ title, to }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      className={classNames([
        "bg-royalBlue px-6 py-3 rounded-lg shadow font-bold mt-3 text-white",
      ])}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
