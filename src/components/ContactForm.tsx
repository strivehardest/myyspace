'use client'

import { useState, FormEvent } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      // Combine country code and phone for submission
      const { countryCode, ...finalData } = {
        ...formData,
        phone: `${formData.countryCode} ${formData.phone}`,
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...finalData,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', countryCode: '+1', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Failed to send message.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-playfair font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-[#ebebeb] mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2.5 border border-white/40 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[#b8845c] transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-base font-semibold text-[#ebebeb] mb-3">Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8845c] focus:border-transparent outline-none text-black"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-base font-semibold text-[#ebebeb] mb-3">Email *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8845c] focus:border-transparent outline-none text-black"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-base font-semibold text-[#ebebeb] mb-3">Phone *</label>
        <PhoneInput
          country={'us'}
          value={formData.phone}
          onChange={phone => setFormData({ ...formData, phone })}
          inputClass="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8845c] focus:border-transparent outline-none text-black"
          buttonClass="bg-white"
          dropdownClass="bg-white text-black"
          inputProps={{ required: true, name: 'phone', autoFocus: false }}
          enableSearch
        />
      </div>
      <div>
        <label className="block text-base font-semibold text-[#ebebeb] mb-3">Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8845c] focus:border-transparent outline-none text-black"
          placeholder="Subject"
        />
      </div>
      <div>
        <label className="block text-base font-semibold text-[#ebebeb] mb-3">Message *</label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8845c] focus:border-transparent outline-none resize-none text-black"
          placeholder="Your message..."
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-500/20 border border-red-400/30 rounded-lg text-white text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-white text-[#b8845c] font-semibold rounded-lg hover:bg-[#ebebeb] transition font-playfair uppercase disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
