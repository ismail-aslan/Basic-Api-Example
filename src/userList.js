
$(document).ready(function () {
    setTimeout(getApiAlbumList, 0);
    setTimeout(getApiEmployeeList, 0);
    
})

//****************AXIOS************************




// const getApiEmployeeList = async () => {
//     const response = await axios({
//         url: 'http://localhost:8001/api/employees',
//         method: 'GET'
//     });
//     console.log(response);
//     if (response.data.data.length > 0) {
//         for (let i = 0; i < response.data.data.length; i++) {
//             $("#tbodyUserList").append(`
//                     <tr>
//                             <td>
//                             ${response.data.data[i].EmployeeId}
//                             </td>
//                             <td>
//                             ${response.data.data[i].FullName}
//                             </td>
//                             <td>
//                             ${response.data.data[i].Title}
//                             </td>
//                             <td>
//                             ${response.data.data[i].City}
//                             </td>
//                             <td>
//                             ${response.data.data[i].Email}
//                             </td>
//                      </tr>`)
//         }
//     }
// }




//************DATA TABLE**************** */

const getApiEmployeeList = () => {
      $("#example2").DataTable({
        ajax: {
          url: "http://localhost:8001/api/albums",
          dataSrc: "data",
        },
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        columns: [
    
          {
            data: "AlbumId",
          },
          {
            data: "Title",           
          },
          {
            data: "ArtistId",           
          },
          
        ],
      });
    }






const getApiAlbumList = async () => {


      await fetch("http://localhost:8001/api/employees",{
          method:"GET",
        
      }).then((response) => {
          return response.json();
      }).then((data) => {
          if (data.data.length > 0) {
              console.log(data);
              for (let i = 0; i < data.data.length; i++) {
                  
                  $('#tbodyEmployeeList').append(`
                  
                      <tr>
                          <td>
                             ${data.data[i].EmployeeId} 
                          </td>
                          <td>
                              ${data.data[i].FullName}
                          </td>
                          <td>
                              ${data.data[i].Title}
                          </td>
                          <td>
                              ${data.data[i].City}
                          </td>
                          <td>
                              ${data.data[i].Email}
                          </td>
                        
                      </tr>
                  `)
                  
              }
          }
      }).catch((err) => {
          console.log(err);
      });
  }


