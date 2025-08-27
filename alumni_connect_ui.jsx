import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AlumniConnect() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-red-600">ALUMNI CONNECT</h1>
        <nav className="space-x-6 text-sm font-semibold">
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <Button variant="ghost">Log In</Button>
          <Button className="bg-red-600 text-white">Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img src="/campus.jpg" alt="Campus" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white bg-red-600 px-6 py-3 rounded-xl shadow-lg">
            CONNECT WITH YOUR COLLEGE
          </h2>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-red-600 text-white text-center py-12">
        <h3 className="text-2xl font-bold mb-4">ALUMNI PLATFORM VISION</h3>
        <p className="mb-6">5000+ Members | 18+ Batches | 70+ Companies</p>
        <p className="max-w-2xl mx-auto">
          Join our platform to network with fellow alumni, students & faculty. Stay updated on campus news, events & career opportunities.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-8">KEY BENEFITS</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Reconnect", desc: "Reconnect with batchmates and professors, reminisce about college days, and build lasting relationships." },
            { title: "Opportunities", desc: "Explore job opportunities shared by alumni, mentor students, and advance your career." },
            { title: "Events & Reunion", desc: "Participate in college events, alumni reunions, and stay engaged with the community." },
            { title: "Achievements", desc: "Celebrate alumni achievements, share your success stories, and inspire students." }
          ].map((item, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-100 py-12 text-center">
        <h3 className="text-2xl font-bold mb-8">UPCOMING EVENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { img: "/event1.jpg", title: "Alumni Network Night", desc: "Connect with fellow alumni and expand your professional network" },
            { img: "/event2.jpg", title: "Annual Alumni Meet", desc: "Relieve college memories and reconnect with friends." },
            { img: "/event3.jpg", title: "Campus Career Fair", desc: "Explore career opportunities and connect with potential employers." }
          ].map((ev, i) => (
            <Card key={i} className="shadow-md">
              <img src={ev.img} alt={ev.title} className="w-full h-40 object-cover rounded-t-xl" />
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg mb-2">{ev.title}</h4>
                <p className="text-sm text-gray-600">{ev.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-8">GALLERY HIGHLIGHTS</h3>
        <div className="flex space-x-4 justify-center overflow-x-auto px-4">
          {["/g1.jpg","/g2.jpg","/g3.jpg","/g4.jpg","/g5.jpg"].map((img,i)=>(
            <img key={i} src={img} alt="gallery" className="w-40 h-40 object-cover rounded-xl shadow-md" />
          ))}
        </div>
        <Button className="mt-6 bg-red-600 text-white">View Gallery</Button>
      </section>

      {/* Success Stories */}
      <section className="bg-red-600 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-6">SUCCESS STORIES</h3>
        <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="font-semibold text-lg">Bharath</h4>
          <p className="mt-2 text-sm">
            The MAMCET Alumni Connect platform has been instrumental in reconnecting me with old friends and expanding my professional network. It's a fantastic resource for staying engaged with the college community.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-8 text-sm">
        <p>For direct inquiries:</p>
        <p>Email: alumni@mamcet.com | Phone: 8088077077</p>
        <p>Address: Chennai Trunk Road, Siruganur, Trichy - 621105</p>
        <p className="mt-4">© 2025 MAMCET Alumni Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}
