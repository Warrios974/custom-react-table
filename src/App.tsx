import { Table } from "../";
import "./App.css";

function App() {
  return (
    <Table
      displaySearchBar={true}
      displayEntries={true}
      displayInfoEntries={true}
      displayFooterRow={false}
      listOfNumbersOfEntries={[2, 10, 25, 50]}
      classNameBtnNextAndPrevious="btnNextAndPrevious"
      classNameBtnNumber="btnNumber"
      classNameInput="input"
      classNameThHeader="tableTh"
      columns={[
        {
          name: "First Name",
          key: "firstName",
          selector: (row) => row.firstName,
        },
        {
          name: "Last Name",
          key: "lastName",
          selector: (row) => row.lastName,
        },
        {
          name: "Start Date",
          key: "startDate",
          selector: (row) => row.startDate,
        },
        {
          name: "Department",
          key: "department",
          selector: (row) => row.department,
        },
        {
          name: "Date of birth",
          key: "dateOfBirth",
          selector: (row) => row.dateOfBirth,
        },
        {
          name: "Street",
          key: "street",
          selector: (row) => row.street,
          sortable: false,
        },
        {
          name: "City",
          key: "city",
          selector: (row) => row.city,
          sortable: false,
        },
        {
          name: "State",
          key: "state",
          selector: (row) => row.state,
        },
        {
          name: "Zip code",
          key: "zipCode",
          selector: (row) => row.zipCode,
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
          state: "AS",
          street: "Pierre",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
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
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "11",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "12",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "13",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "14",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "15",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "16",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
        {
          id: "16",
          city: "dede",
          dateOfBirth: "14/12/1997",
          department: "RH",
          firstName: "Kenny",
          lastName: "Lauret",
          startDate: "10/04/2023",
          state: "AS",
          street: "dede",
          zipCode: "13245",
        },
      ]}
    />
  );
}

export default App;
