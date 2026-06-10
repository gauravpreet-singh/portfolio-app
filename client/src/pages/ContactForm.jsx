import { useState } from 'react'
import API from '../services/api'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await API.post('/contact', form)

      alert(response.data.message)

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)

      alert('Something went wrong')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="border p-4 w-full rounded-xl"
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        className="border p-4 w-full rounded-xl"
      />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message: e.target.value,
          })
        }
        className="border p-4 w-full rounded-xl"
      />

      <button
        type="submit"
        className="bg-black text-white px-8 py-4 rounded-xl"
      >
        Send Message
      </button>
    </form>
  )
}