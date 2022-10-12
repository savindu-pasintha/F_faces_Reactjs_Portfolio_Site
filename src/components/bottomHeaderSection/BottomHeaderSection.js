import React, { useEffect } from 'react'
import './BottomHeaderSection.css'
import ListOfProfilesSection from '../listOfProfilesSection/ListOfProfilesSection'
export default function BottomHeaderSection({ count, handleClick, dataFiltered, handleClickUser }) {

  return (
    <div className='w-100'>
      <div className="row">
        <div className="col-3">
          <div className='d-flex'>
            <h1 className="count ">{count} new faces</h1>
          </div>

        </div>

        <div className="col-9">
          <div className='d-flex justify-content-end'>
            <div className='show'>Show :</div>
            <a className='buttons btn'
              onClick={() => handleClick("all")}
            >
              ALL
            </a>
            <a className='buttons btn'
              onClick={() => handleClick("male")}
            >
              GENTS
            </a>
            <a className='buttons btn'
              onClick={() => handleClick("female")}
            >
              LADIES
            </a>
          </div>
        </div>
      </div>

      <ListOfProfilesSection
        data={dataFiltered}
        handleClickUser={(user_name, user_mobile, user_address, user_avatar, user_email) => handleClickUser(user_name, user_mobile, user_address, user_avatar, user_email)} />
    </div>
  )
}
