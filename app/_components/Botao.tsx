import React from 'react'
import IconWhatsapp from './icons/Whatsapp'

const Botao = ({icon,text,style}:any) => {
  return (
    <div>
      {style==='primary'?
        (<div className="text-white bg-green-2 py-3 px-6 rounded-md font-bold uppercase flex">
            {icon === true? <IconWhatsapp />: null }
            <p className={icon===true?'ml-2':''}>{text}</p>
        </div>):
        (<div className='text-white bg-black  py-3 px-6 rounded-md font-bold uppercase flex border-solid border-2 border-green-2'>
          {icon === true? <IconWhatsapp />: null }
          <p className={icon===true?'ml-2':''}>{text}</p>
        </div>)
      }
    </div>
  )
}

export default Botao