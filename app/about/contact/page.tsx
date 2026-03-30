import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Mail size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">Have questions? We're here to help.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-fccla-red focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-fccla-red focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">School/Chapter (Optional)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-fccla-red focus:outline-none transition-colors"
                    placeholder="Westlake High School"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-fccla-red focus:outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Membership Question</option>
                    <option>Event Registration</option>
                    <option>Competition Question</option>
                    <option>Sponsorship Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-fccla-red focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-fccla-red text-white py-4 rounded-lg font-bold text-lg hover:bg-fccla-red-dark transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're a member, adviser, sponsor, or just curious about Utah FCCLA, we'd love to hear from you. Reach out using the contact information below or send us a message using the form.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-fccla-red text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Email</h3>
                    <a href="mailto:[email protected]" className="text-fccla-red hover:underline">
                      [email protected]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-fccla-red text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-fccla-red hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-fccla-red text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Office</h3>
                    <p className="text-gray-600">
                      Utah State Board of Education<br />
                      Career & Technical Education<br />
                      Salt Lake City, UT
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/utahfccla/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-fccla-red text-white rounded-lg flex items-center justify-center hover:bg-fccla-red-dark transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://www.facebook.com/p/Utah-Fccla-100064542558915/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-fccla-red text-white rounded-lg flex items-center justify-center hover:bg-fccla-red-dark transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
