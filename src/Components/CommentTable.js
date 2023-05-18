import React from 'react';

const CommentTable = (props) => {
  return (
    <div className="container">
      <h1 className="title">Number of Comments</h1>
      <table>
        <thead>
          <tr>
            <th>Positive Comments</th>
            <th>Negative Comments</th>
            <th>Neutral Comments</th>
          </tr>
        </thead>
        <tbody>
          {/* {sentimentData.map(({ employeeId, name, email, position }) => ( */}
            <tr >
              <td>
                {props.data.positive}
              </td>
              <td>
              {props.data.negative}
              </td>
              <td>
              {props.data.neutral}
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    
    </div>
  )
}

export default CommentTable