import React from 'react'
import Image from 'next/image'

function projects() {
  return (
    <div>
      <div id="konten" className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-[#373737] text-4xl font-semibold">Projects</h1>
      </div>
      <div id="isi" className="bg-red-500">
        <div className="card bg-white/50 backdrop-blur-[80%] w-96 shadow-xl">
          <figure>
          <Image
          width={0}
          height={0}
          src="/assets/kevinRushProfile.jpg"
          alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div className="card glass w-96">
          <figure>
          <Image
                width={300}
                height={200}
                src="/assets/kevinRushProfile.jpg"
                alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default projects