import './App.css'
import { Table } from '../'

function App() {

  return (
      <Table 
        displaySearchBar={true}
        diplayEntries={true}
        displayInfoEntries={true}
        diplayFooterRow={false}
        listOfNumbersOfEntries={[2, 10, 25, 50]}
        classNameBtnNextAndPrevious='btnNextAndPrevious'
        classNameBtnNumber='btnNumber'
        classNameInput='input'
        classNamethHeader='tableTh'
        columns={[
          {
              name: 'First Name',
              key: 'firstName',
              selector: row => row.firstName,
          },
          {
              name: 'Last Name',
              key: 'lastName',
              selector: row => row.lastName,
          },
          {
              name: 'Start Date',
              key: 'startDate',
              selector: row => row.startDate,
          },
          {
              name: 'Department',
              key: 'department',
              selector: row => row.department,
          },
          {
              name: 'Date of birth',
              key: 'dateOfBirth',
              selector: row => row.dateOfBirth,
          },
          {
              name: 'Street',
              key: 'street',
              selector: row => row.street,
          },
          {
              name: 'City',
              key: 'city',
              selector: row => row.city,
          },
          {
              name: 'State',
              key: 'state',
              selector: row => row.state,
          },
          {
              name: 'Zip code',
              key: 'zipCode',
              selector: row => row.zipCode,
          },
        ]}
        data={[]}
    />
  )
}

export default App
