/**
 * Represents a component that displays a select input to change the number of entries being shown in the table.
 * @returns A component that displays a select input to change the number of entries being shown in the table.
 */
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import styles from "./styles.module.css";

export function SelectEntries() {
  const { listOfNumbersOfEntries, handleChangeNumberEntries, classNameInput } =
    useContext(TableContext);

  /**
   * Handles the change number of entries action.
   * @param entries - The number of entries to change to.
   */
  const handleChange = (entries: number) => {
    handleChangeNumberEntries && handleChangeNumberEntries(entries);
  };

  return (
    <form className={styles.form}>
      <label htmlFor="selectEntries" className={styles.label}>
        Show
        <select
          name="select"
          id="selectEntries"
          onChange={(e) => handleChange(Number(e.target.value))}
          className={`${classNameInput}`}
        >
          {listOfNumbersOfEntries?.map((item) => (
            <option key={`${item}`} value={item}>
              {item}
            </option>
          ))}
        </select>
        entries
      </label>
    </form>
  );
}
