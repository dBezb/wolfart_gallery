import cl from "classnames";
import { CommonClassProps } from "../types";
import style from "./index.module.scss";

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disableNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disableNext,
  onPrevClick,
  onNextClick,
  className,
}) => (
  <div className={cl(style.navigation, className)}>
    <button
      disabled={disabledPrev}
      className={cl(style.navigationBtn, style.navigationBtnLeft)}
      onClick={onPrevClick}
    >
      Previous photo
    </button>

    <button
      disabled={disableNext}
      className={cl(style.navigationBtn, style.navigationBtnRight)}
      onClick={onNextClick}
    >
      Next photo
    </button>
  </div>
);
