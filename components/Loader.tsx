import React from 'react'
import Image from "next/image"
function Loader() {
  return (
    <div className='loader'>
        <Image
        src="/assets/icons/loader.svg"
        alt='Loder'
        width={32}
        height={32}
        className='animate-spin'
        >

        </Image>

    </div>
  )
}

export default Loader