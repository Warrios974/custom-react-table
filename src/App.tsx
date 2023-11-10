import './App.css'
import { Table } from '../'

function App() {

  return (
    <>
      <Table 
        title='Test'
        displaySearchBar={true}
        diplayEntries={true}
        columns={[
          {
              name: 'Title',
              selector: row => row.title,
          },
          {
              name: 'Year',
              selector: row => row.year,
          },
        ]}
        data={[
          {
              id: 1,
              title: 'Beetlejuice',
              year: '1988',
          },
          {
              id: 2,
              title: 'Ghostbusters',
              year: '1984',
          },
        ]}
      />
    </>
  )
}

export default App
