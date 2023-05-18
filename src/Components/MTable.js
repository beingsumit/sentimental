import React from 'react';
import './form.css'

const MTable = (props) => {
  let cbm=[];
  cbm.push(props.data.count_by_month["01"])
  cbm.push(props.data.count_by_month["02"])
  cbm.push(props.data.count_by_month["03"])
  cbm.push(props.data.count_by_month["04"])
  cbm.push(props.data.count_by_month["05"])
  cbm.push(props.data.count_by_month["06"])
  cbm.push(props.data.count_by_month["07"])
  cbm.push(props.data.count_by_month["08"])
  cbm.push(props.data.count_by_month["09"])
  cbm.push(props.data.count_by_month["10"])
  cbm.push(props.data.count_by_month["11"])
  cbm.push(props.data.count_by_month["12"])
  console.log(cbm)
  return (
    <div className="container">
      <h1 className="title">Comments per Month</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Comments</th>
            
          </tr>
        </thead>
        <tbody>
          {/* {sentimentData.map(({ employeeId, name, email, position }) => ( */}
            
            <tr >
              <td>
                <td>Jan</td>   
              </td>
              <td>
                <td>{cbm[0]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Feb</td>   
              </td>
              <td>
                <td>{cbm[1]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Mar</td>   
              </td>
              <td>
                <td>{cbm[2]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Apr</td>   
              </td>
              <td>
                <td>{cbm[3]}</td>
              </td>
            </tr>
            <tr >
              <td>
                <td>May</td>   
              </td>
              <td>
                <td>{cbm[4]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Jun</td>   
              </td>
              <td>
                <td>{cbm[5]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Jul</td>   
              </td>
              <td>
                <td>{cbm[6]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Aug</td>   
              </td>
              <td>
                <td>{cbm[7]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Sept</td>   
              </td>
              <td>
                <td>{cbm[8]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Oct</td>   
              </td>
              <td>
                <td>{cbm[9]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Nov</td>   
              </td>
              <td>
                <td>{cbm[10]}</td>
              </td>
              
            </tr>
            <tr >
              <td>
                <td>Dec</td>   
              </td>
              <td>
                <td>{cbm[11]}</td>
              </td>
              
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    
    </div>
  )
}

export default MTable