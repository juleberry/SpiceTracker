import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import * as spicesAPI from '../utilities/spices-api';
// import SearchBar from "../components/SearchBar";

const BASE_URL = '/spices'
        
  export default function SpiceList (props) {


    useEffect(() => {
      function getAll() {
        spicesAPI.getAllSpice()
        .then((result) => props.setSpiceList(result));
      }
      getAll();
      
    }, [])

    return (
    <>
      <div id="spiceList">
      <p>Choose a spice below for more details</p>
      {/* <SearchBar /> */}
      <ul id="listSpices">
          {props?.spiceList.map((spice, index) => {
            return (
              <Link to={`${BASE_URL}/${spice?._id}`} key={index}><li id="spiceListItems" ><h4>{spice?.name}</h4>
              </li></Link>
            )
          })
          }
          </ul>
      </div>
    </>
    )
  }
