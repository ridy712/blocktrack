import React from 'react'

export default function Connexion() {
  return (
    <div className = " back-c mt-5 mb-5">
      <div>
          <h1><span className="badge bg-primary">Connectez-vous</span></h1>
        </div>
      <form action='' className="mx-auto" method='post'>
      <div>
        <label htmlFor=''>mail</label>
        <input type="email" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>password</label>
        <input type="password" className='form-control'/>
        
        <div class="col-auto">
        <button type="submit" className="btn btn-primary mt-3">connect</button>
      </div>
      </div>
      </form>
    </div>
  )
}
