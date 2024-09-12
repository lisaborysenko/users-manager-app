import styles from "./styles.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img alt="spinner" src="/SpinnerLoader.svg" />
    </div>
  );
};

export default Spinner;
