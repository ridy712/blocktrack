import React from 'react'

export default function AddProduct() {
  return (
    <div >

      <div className='container back mt-5 mb-5'>
        <div>
          <h1><span className="badge bg-primary">Veuillez ajouter le produit </span></h1>
        </div>

        <form action="" className="mx-auto" methode="post">
      <div className="mb-3">
        <label className='light' >marque</label>
        <input type="text" className='form-control'/>
      </div>
      <div>
        <label className='light'>type</label>
        <input type="text" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>numero de serie</label>
        <input type="number" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>date de fabrication</label>
        <input type="date" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>caracteristique</label>
        <input type="text" className='form-control'/>
      </div>
      <div>
        <label htmlFor=''>mail</label>
        <input type="mail" className='form-control'/>
      </div>

      <div class="col-auto">
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>






        </form>
        </div>
    </div>
  )
}
