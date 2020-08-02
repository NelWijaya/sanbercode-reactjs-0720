import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <div class={"pembuka"}>
          <form action="#" method="POST">
              <h1>Form Pembelian Buah</h1>
              <table>
                  <tr>
                      <th><label for="name">Nama Pelanggan</label> </th>
                      <td><input type="text" id="name" required /></td>
                  </tr>
                  <tr>
                      <th>Daftar Item</th>
                      <td>
                          <input type="checkbox" value="Semangka" />Semangka<br />
                          <input type="checkbox" value="Jeruk" />Jeruk<br />
                          <input type="checkbox" value="Nanas" />Nanas<br />
                          <input type="checkbox" value="Salak" />Salak<br />
                          <input type="checkbox" value="Anggur" />Anggur
                      </td>
                  </tr>
              </table>
              <button type="submit">Kirim</button>
          </form>
      </div>
  );
}

export default App;
