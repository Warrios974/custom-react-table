import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import styles from './styles.module.css'

export function SelectEntries() {

  const { listOfNumbersOfEntries, handleChangeNumberEntries, classNameInput } = useContext(TableContext);

  const handleChange = (entries : number) => {
    handleChangeNumberEntries && handleChangeNumberEntries(entries)
  }

  return (
    <form className={styles.form}>
        <label htmlFor="selectEntries">
            Show 
        </label>
        <select name="select" id="selectEntries" onChange={(e) => handleChange(Number(e.target.value))} className={`${classNameInput}`}>
            {listOfNumbersOfEntries?.map((item) => <option key={`${item}`} value={item}>{item}</option>)}
        </select>
        <label htmlFor="selectEntries">
             entries
        </label>
    </form>
  )
}