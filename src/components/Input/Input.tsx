import styles from "./styles.module.css";

interface FilterHeaderProps {
  label: string;
  id: string;
  placeholder: string;
  filterValue: string;
  setFilterValue: (value: string) => void;
}

const FilterHeader = ({
  label,
  id,
  placeholder,
  filterValue,
  setFilterValue,
}: FilterHeaderProps) => {
  return (
    <div className={styles.header_wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type="text"
        id={id}
        placeholder={placeholder}
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </div>
  );
};

export default FilterHeader;
