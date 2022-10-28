import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import * as spicesAPI from '../utilities/spices-api';
// import SearchBar from "../components/SearchBar";

const BASE_URL = '/spices'
        
  export default function SpiceList (props) {


    useEffect(function () {
      function getAll() {
        spicesAPI.getAllSpice()
        .then((result) => props.setSpiceList(result));
      }
      getAll();
      
    }, [])

    return (
    <>
      <div id="spiceList">
      <h2>Spices</h2>
      {/* <SearchBar /> */}
      <ul>
          {props?.spiceList?.map((spice, index) => {
            return (
              <li key={index}>
              <h4><Link to={`${BASE_URL}/${spice?._id}`}>{spice?.name}</Link></h4>
              </li>
            )
          })
          }
          </ul>
      </div>
    </>
    )
  }
