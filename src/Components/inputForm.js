import './form.css';
import React, { useState } from "react";
import CommentTable from './CommentTable'
import ChartAnalysis1 from './ChartAnalysis1';
import  LineChart  from './LineChart';
import MTable from './MTable';

const InputForm = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [sentimentData, setSentimentData] = useState(null);
  const [chartData, setChartData] = useState({});

  const handleChange = (event) => {
    setYoutubeLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const videoId = youtubeLink.split("v=")[1].substring(0, 11);
    const response = await fetch(`http://127.0.0.1:5000/${videoId}`);
    const data = await response.json();
    setSentimentData(data);
    const chartData = {
      labels: ["Positive", "Negative", "Neutral"],
      datasets: [
        {
          data: [
            data.positive,
            data.negative,
            data.neutral,
          ],
          backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"]
        }
      ]
    };
    setChartData(chartData);
    console.log(chartData);
  };

  const print=()=>{
    window.print();
  }
  return (
    <div className='wraper'>
      <div className='input_form'>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>YouTube Link</h3>
          </label>
            <input type="text" placeholder='Enter the link of youtube video' value={youtubeLink} onChange={handleChange} />
          <button type="submit">Analyze Video</button>
          {sentimentData && (
            <button className='btn' type="button" onClick={()=>window.print()}>Download Report</button>
          )}
          

        </form>
      </div>
      <div className='right_section'>
        <div className='top_analysis1'>
            
          <div className='piechart'>
            {sentimentData && (
              <ChartAnalysis1 data={sentimentData}/>
            )}
          </div>
            <div className='count_analysis'>
              {sentimentData && (
                <CommentTable data={sentimentData}/>
              )}
            </div>
          </div>
          {/* <div className='comment_table'>
            {sentimentData && (
              <CommentTable data={sentimentData}/>
            )}
          </div> */}
          <div className='piechart'>
          {sentimentData && (
            <div className='hh'>
              <h1>Month-wise Statistics</h1>
              <LineChart data={sentimentData}/>
            </div>
            )}
            <div className='comment_table'>
            {sentimentData && (
              <MTable data={sentimentData}/>
            )}
          </div>
          </div>
      </div>
      
      {/* <button className='button' type="button" onClick={()=>window.print()}>Print</button> */}
    </div>
  )
}

export default InputForm;