import { useState } from 'react'

const useForm = (initValues) => {
  const [form, setForm] = useState(initValues)
  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const setValues = (changes) => setForm(changes)
  return { form, handleInput, setValues }
}
export default useForm
