import Link from 'next/link'
import React from 'react'
import IconLogo from './icons/Logo'


const LogoLink = () => {
  return (
    <div>
        <Link href="/">
            <div className='bg-green-3 px-4 pt-6 pb-5 rounded-b-4xl'>
                <IconLogo />
            </div>
        </Link>
    </div>
  )
}

export default LogoLink