import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import * as spicesAPI from '../utilities/spices-api';
import SearchBar from "../components/SearchBar";
// import SpiceListItem from "./SpiceListItem"
const BASE_URL = '/api/spices'

  // const List = (props) => {
  //   return (
  //     <>
  //       <ul>
  //         {props?.spiceList.map((spice) => {
  //           return (
  //             <li key={spice.id}>
  //             <h4><Link to={`${BASE_URL}/view/${spice._id}`}>{spice.name}</Link></h4>
  //             </li>
  //           )
  //         })
  //         }
  //         </ul>
  //       </>
  //     )}
        
  export default function SpiceList (props) {

    const [spiceList, setSpiceList] = useState(['']);

    useEffect(function () {
      async function getAll() {
        await spicesAPI.getAllSpice()
        .then((spiceList) => setSpiceList(spiceList));
      }
      getAll();
      
    }, []);

    return (
    <>
      <div id="spiceList">
      <h2>Spice List</h2>
      <SearchBar />
      <ul>
          {spiceList.map((spice, index) => {
            return (
              <li key={index}>
              <h4><Link to={`${BASE_URL}/${spice?._id}/view`}>{spice?.name}</Link></h4>
              </li>
            )
          })
          }
          </ul>
      </div>
    </>
    )
  }
