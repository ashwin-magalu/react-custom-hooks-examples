import { useEffect, useState } from "react"

const useForm = (callback, validate) => {
    const [values, setValues] = useState({email: "",password: ""})
    const [error, setError] = useState({email: "",password: ""})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
      setValues({...values, [event.target.name] : event.target.value})
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      setError(validate(values))
      setIsSubmitting(true)
    }

    useEffect(() => {
        if(Object.keys(error).length === 0 && isSubmitting) {
            callback()
        }
        return () => {
            // 
        }
    }, [error])

    return {
        values, handleChange, handleSubmit, error
    }
}

export default useForm;