import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Scroll()
{
    const {path}=useLocation()

    useEffect(()=>
    {
        window.scrollTo(0,0);
    },[path])
    return null
}