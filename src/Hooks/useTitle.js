import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Dance Studio`
    },[title])
}

export default useTitle ;