import { useState } from "react";
import Content from "../component/content.js";

// items.js
function Items() {
    const url = "https://rickandmortyapi.com/api/character"
    const url2 = "https://rickandmortyapi.com/api/character/?page=2"
    const url3 = "https://rickandmortyapi.com/api/character/?page=3"
    const [item, setItems] = useState([])

    const getDataItem = async() =>{
        const response = await fetch(url)
        const response2 = await fetch(url2)
        const response3 = await fetch(url3)
        const dataItem1 = await response.json()
        const dataItem2 = await response2.json()
        const dataItem3 = await response3.json()
        const mergeData = [...dataItem1.results, ...dataItem2.results, ...dataItem3.results]
        setItems(mergeData)
       // console.log(dataItem.results)
        console.log("tes")
    }

    useState(()=>{
        getDataItem();
    })
    return (
      <>
        <h1>Item List</h1>
        <br />
        <div className="contents">
        <Content data={item}/>

        </div>
      </>
    );
  }
  
  export default Items;
  