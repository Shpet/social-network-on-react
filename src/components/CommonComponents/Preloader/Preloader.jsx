import preloader from "../../../assets/img/preloader.svg";
import mod from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={mod.preloaderWrap}>
      <img src={preloader} className={mod.preloader} />
    </div>
  );
};

export default Preloader;
