import React from 'react';
import {BsChatSquare} from 'react-icons/bs';
import {TfiAlarmClock} from 'react-icons/tfi'
function StoreDetail(props) {
    return (
        <div>
        <h1 className='font-bold'>Información de la tienda</h1>  
        <p>Mercado Libre Electrónica</p>  
        <p>Tienda oficial de Mercado Libre</p>
        <div className='inline-block'>
        <ul className='inline-flex items-baseline'>
        <li className=' border-red-400 '>--------</li>
        <li>FFF</li>
        <li>aaaa</li>
        <li>ssssss</li>
        <li>ddddd</li>
        </ul>
        </div>
        <div className='flex'>
           <BsChatSquare/>
           <p>Brinda <br/> buena <br/> atención</p>
           <TfiAlarmClock/>
           <p>Despacha sus <br/> productos a <br/> tiempo</p>
           </div>
           <p className='text-blue-500 '>Ver mas datos de este vendedor</p>
        </div>
    );
}

export default StoreDetail;