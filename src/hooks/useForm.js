import React, { useState } from 'react'
import { useCotizacionStore } from '../store/cotizacion'

export default function useForm(initState) {

    const updateCliente = useCotizacionStore(state => state.updateCliente)
    const [formData, setFormData] = useState(initState)

    const resetForm=()=>{
    setFormData({...initState})
    }

    const changeForm=(e)=>{
        // console.log({[e.target.name]:e.target.value});
        setFormData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        })
        )


        // updateCliente({...formData})
        
    }
    const changeFormClient=(e)=>{
        // console.log({[e.target.name]:e.target.value});
        setFormData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        })
        )


        updateCliente({...formData})
        
    }
    
    const completeData=(data)=>{
        setFormData(prev=>({
            ...prev,
            ...data
        }))
        updateCliente({...formData,...data})
    }

    return {...formData,changeForm,changeFormClient,completeData,resetForm}
}
