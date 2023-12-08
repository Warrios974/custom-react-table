import './App.css'
import { Table } from '../'

function App() {

  return (
      <Table 
        title='Autre titre'
        displaySearchBar={true}
        diplayEntries={true}
        displayInfoEntries={true}
        diplayFooterRow={true}
        listOfNumbersOfEntries={[2, 3, 5, 50]}
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
        data={[
          {
              id: "1",
              city: "dede",
              dateOfBirth: "14/12/1997",
              department: "RH",
              firstName: "Kenny",
              lastName: "Lauret",
              startDate: "10/04/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "2",
              city: "dede",
              dateOfBirth: "10/11/1990",
              department: "Sales",
              firstName: "Stephan",
              lastName: "Guilaume",
              startDate: "10/03/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "3",
              city: "dede",
              dateOfBirth: "10/11/1990",
              department: "Sales",
              firstName: "Stephan",
              lastName: "Guilaume",
              startDate: "10/03/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "7",
              city: "dede",
              dateOfBirth: "10/11/1990",
              department: "Sales",
              firstName: "Stephan",
              lastName: "Guilaume",
              startDate: "10/03/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "5",
              city: "dede",
              dateOfBirth: "10/11/1990",
              department: "Sales",
              firstName: "Stephan",
              lastName: "Guilaume",
              startDate: "10/03/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "6",
              city: "dede",
              dateOfBirth: "10/11/1990",
              department: "Sales",
              firstName: "Stephan",
              lastName: "Guilaume",
              startDate: "10/03/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "7",
              city: "dede",
              dateOfBirth: "10/11/1990",
              department: "Sales",
              firstName: "Stephan",
              lastName: "Guilaume",
              startDate: "10/03/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "8",
              city: "dede",
              dateOfBirth: "14/12/1997",
              department: "RH",
              firstName: "Kenny",
              lastName: "Lauret",
              startDate: "10/04/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "9",
              city: "dede",
              dateOfBirth: "14/12/1997",
              department: "RH",
              firstName: "Kenny",
              lastName: "Lauret",
              startDate: "10/04/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
          {
              id: "10",
              city: "dede",
              dateOfBirth: "14/12/1997",
              department: "RH",
              firstName: "Kenny",
              lastName: "Lauret",
              startDate: "10/04/2023",
              state:"AS",
              street:"dede",
              zipCode: "13245",
          },
        ]}
    />
  )
}

export default App
