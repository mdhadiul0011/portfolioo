import React, { useEffect } from 'react'

export default function useClickOutside(ref, fun) {
    useEffect(()=>{
        let click = (e)=> {
            if(!ref.current || ref.current.contains(e.target)){
                return false
            }
            fun()
        }
        document.addEventListener('mousedown', click)
        return()=>{
            document.removeEventListener('mousedown', click)
        }
    }, [ref])
    return ref
}
