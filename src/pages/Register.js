import React from 'react'

export default function Register() {
  return (
    <div  >
      <div className='container back-r-c mt-5 mb-5'>
        <div>
          <h1><span className=" badge bg-secondary">Veuillez-vous inscrire </span></h1>
        </div>

        <form action="" className="mx-auto" methode="post">
      <div>
        <label htmlFor=''>Name</label>
        <input type="text" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>lastName</label>
        <input type="text" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>numberPhone</label>
        <input type="number" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>mail</label>
        <input type="email" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>password</label>
        <input type="password" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>confirmPassword</label>
        <input type="password" className='form-control'/>
      </div>
      <div className="form-check">
          <input classname="form-check-input" type="checkbox" id="gridCheck"/>
          <label classname="form-check-label" for="gridCheck">
        Check me out
          </label>
        </div>
      <div class="col-auto">
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>

        </form>

      </div>
    </div>
  )
}
