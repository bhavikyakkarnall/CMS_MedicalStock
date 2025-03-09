import Table from 'react-bootstrap/Table';

function Home() {


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>On-Hand</th>
            <th>Installed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Storeroom</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>HomeSafe</td>
            <td>3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Return</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </>

  );
}

export default Home;