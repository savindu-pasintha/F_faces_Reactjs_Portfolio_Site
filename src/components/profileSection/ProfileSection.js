import React from 'react'
import './ProfileSection.css'
export default function ProfileSection({ user }) {
  return (
    <div className='profileSection'>
      <div className='row text-center'>
        <div className='pt-5'>
          <img
            className='profile_image '
            src={user?.image_url} alt={user?.name} />
        </div>
      </div>
      <div className='row text-center'>
        <div className='pt-5'><h1 className='user_name'>{user?.name}</h1></div>
      </div>
      <div className='row d-flex'>
        <div className='d-flex justify-content-center'>
          <div className='p-3'><h1 className='profile_email'><span className='icon'><i class="bi bi-envelope-open"></i></span>{user?.email}</h1></div>
          <div className='p-3'><h1 className='profile_email'><span className='icon'><i class="bi bi-geo-alt"></i></span>{user?.address}</h1></div>
          <div className='p-3'><h1 className='profile_email'><span className='icon'><i class="bi bi-telephone"></i></span>{user?.cell}</h1></div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}
