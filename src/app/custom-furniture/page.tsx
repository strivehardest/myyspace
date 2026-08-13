"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageSwiper from '@/components/ImageSwiper'

export default function CustomFurniture() {
  const images = [
    '/products/custom-furniture/custom-bedroom-1.webp',
    '/products/custom-furniture/custom (1).jpeg',
    '/products/custom-furniture/custom (2).jpeg',
    '/products/custom-furniture/custom (3).jpeg',
    '/products/custom-furniture/custom (4).jpeg',
    '/products/custom-furniture/custom (5).jpeg',
    '/products/custom-furniture/custom (6).jpeg',
    '/products/custom-furniture/custom (7).jpeg',
    '/products/custom-furniture/custom (8).jpeg',
    '/products/custom-furniture/custom (9).jpeg',
    '/products/custom-furniture/custom (10).jpeg',
    '/products/custom-furniture/custom (11).jpeg',
    '/products/custom-furniture/custom (12).jpeg',
    '/products/custom-furniture/custom (13).jpeg',
    '/products/custom-furniture/custom (14).jpeg',
    '/products/custom-furniture/custom (15).jpeg',
    '/products/custom-furniture/custom (16).jpeg',
    '/products/custom-furniture/custom (17).jpeg',
    '/products/custom-furniture/custom (18).jpeg',
    '/products/custom-furniture/custom (19).jpeg',
    '/products/custom-furniture/custom (20).jpeg',
    // custom-new images
    '/products/custom-furniture/custom-new (1).jpeg',
    '/products/custom-furniture/custom-new (2).jpeg',
    '/products/custom-furniture/custom-new (3).jpeg',
    '/products/custom-furniture/custom-new (4).jpeg',
    '/products/custom-furniture/custom-new (5).jpeg',
    '/products/custom-furniture/custom-new (6).jpeg',
    '/products/custom-furniture/custom-new (7).jpeg',
    '/products/custom-furniture/custom-new (8).jpeg',
    '/products/custom-furniture/custom-new (9).jpeg',
    '/products/custom-furniture/custom-new (10).jpeg',
    '/products/custom-furniture/custom-new (11).jpeg',
    '/products/custom-furniture/custom-new (12).jpeg',
    '/products/custom-furniture/custom-new (13).jpeg',
    '/products/custom-furniture/custom-new (14).jpeg',
    '/products/custom-furniture/custom-new (15).jpeg',
    '/products/custom-furniture/custom-new (16).jpeg',
    '/products/custom-furniture/custom-new (17).jpeg',
    '/products/custom-furniture/custom-new (18).jpeg',
    '/products/custom-furniture/custom-new (19).jpeg',
    '/products/custom-furniture/custom-new (20).jpeg',
    '/products/custom-furniture/custom-new (21).jpeg',
    '/products/custom-furniture/custom-new (22).jpeg',
    '/products/custom-furniture/custom-new (23).jpeg',
    '/products/custom-furniture/custom-new (24).jpeg',
    '/products/custom-furniture/custom-new (25).jpeg',
    '/products/custom-furniture/custom-new (26).jpeg',
    '/products/custom-furniture/custom-new (27).jpeg',
    '/products/custom-furniture/custom-new (28).jpeg',
    '/products/custom-furniture/custom-new (29).jpeg',
    '/products/custom-furniture/custom-new (30).jpeg',
    '/products/custom-furniture/custom-new (31).jpeg',
    '/products/custom-furniture/custom-new (32).jpeg',
    '/products/custom-furniture/custom-new (33).jpeg',
    '/products/custom-furniture/custom-new (34).jpeg',
    '/products/custom-furniture/custom-new (35).jpeg',
    '/products/custom-furniture/custom-new (36).jpeg',
    '/products/custom-furniture/custom-new (37).jpeg',
    '/products/custom-furniture/custom-new (38).jpeg',
    '/products/custom-furniture/custom-new (39).jpeg',
    '/products/custom-furniture/custom-new (40).jpeg',
    '/products/custom-furniture/custom-new (41).jpeg',
    '/products/custom-furniture/custom-new (42).jpeg',
    '/products/custom-furniture/custom-new (43).jpeg',
    '/products/custom-furniture/custom-new (44).jpeg',
    '/products/custom-furniture/custom-new (45).jpeg',
    '/products/custom-furniture/custom-new (46).jpeg',
    '/products/custom-furniture/custom-new (47).jpeg',
    '/products/custom-furniture/custom-new (48).jpeg',
    '/products/custom-furniture/custom-new (49).jpeg',
    '/products/custom-furniture/custom-new (50).jpeg',
    '/products/custom-furniture/custom-new (51).jpeg',
    '/products/custom-furniture/custom-new (52).jpeg',
    '/products/custom-furniture/custom-new (53).jpeg',
    '/products/custom-furniture/custom-new (54).jpeg',
    '/products/custom-furniture/custom-new (55).jpeg',
    '/products/custom-furniture/custom-new (56).jpeg',
    '/products/custom-furniture/custom-new (57).jpeg',
  ];

  return (
    <>
      <Header />
      {/* Hero Section with Video */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-32 md:pt-48">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 uppercase">
            Custom Furniture
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100">
            Design your perfect furniture tailored to your unique needs and style
          </p>
        </div>
      </section>

      <main>
        <ImageSwiper images={images} alt="Custom Furniture" />

        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-primary-blue mb-8">Custom Furniture Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse Styles', description: 'Explore our custom furniture inspirations and configurations.' },
                { step: '2', title: 'Choose Specs', description: 'Select dimensions, materials, colors, and configuration options.' },
                { step: '3', title: 'Get Quote', description: 'Receive a detailed quote for your custom furniture.' },
                { step: '4', title: 'Place Order', description: 'Order with flexible financing and enjoy white-glove delivery.' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-3">{item.step}</div>
                  <h3 className="font-playfair font-bold text-primary-blue mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
