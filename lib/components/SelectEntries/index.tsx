import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";

export function SelectEntries() {

  const { listOfNumbersOfEntries, handleChangeNumberEntries } = useContext(TableContext);

  const handleChange = (entries : number) => {
    handleChangeNumberEntries && handleChangeNumberEntries(entries)
  }

  return (
    <form>
        <label htmlFor="selectEntries">
            Show 
            <select name="select" id="selectEntries" onChange={(e) => handleChange(Number(e.target.value))}>
                {listOfNumbersOfEntries?.map((item) => <option key={`${item}`} value={item}>{item}</option>)}
            </select>
             entries
        </label>
    </form>
  )
}