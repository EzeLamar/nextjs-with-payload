"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Clock,
  Phone,
  Mail,
  Shield,
  Stethoscope,
  Bell,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock user data
  const currentUser = {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    notifications: 3,
  };

  const specialties = [
    "General Practitioner",
    "Dentist",
    "Dermatologist",
    "Gynecologist",
    "Ophthalmologist",
    "Pediatrician",
  ];

  const featuredDoctors = [
    {
      name: "Dr. Sarah Miller",
      specialty: "General Practitioner",
      rating: 4.8,
      reviews: 127,
      nextSlot: "Tomorrow, 10:00 AM",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Dentist",
      rating: 4.9,
      reviews: 203,
      nextSlot: "Today, 2:30 PM",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. Emily Chen",
      specialty: "Pediatrician",
      rating: 4.7,
      reviews: 156,
      nextSlot: "Tomorrow, 9:15 AM",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Dermatologist",
      rating: 4.6,
      reviews: 98,
      nextSlot: "Today, 4:15 PM",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. Lisa Taylor",
      specialty: "Ophthalmologist",
      rating: 4.9,
      reviews: 167,
      nextSlot: "Tomorrow, 11:30 AM",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. Robert Martinez",
      specialty: "Gynecologist",
      rating: 4.8,
      reviews: 145,
      nextSlot: "Today, 3:45 PM",
      image:
        "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=300&h=300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900 ml-2">
                Doctolib
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Find Doctors
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                My Appointments
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Messages
              </a>

              {/* Notifications */}
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                {currentUser.notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {currentUser.notifications}
                  </span>
                )}
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <img
                  src={currentUser.image}
                  alt={currentUser.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-gray-700">{currentUser.name}</span>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-5">
              {/* Mobile Notifications */}
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                {currentUser.notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {currentUser.notifications}
                  </span>
                )}
              </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

            </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-2 space-y-3">
              <a href="#" className="block text-gray-600 hover:text-blue-600">
                Find Doctors
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600">
                My Appointments
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600">
                Messages
              </a>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <img
                    src={currentUser.image}
                    alt={currentUser.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-gray-700">{currentUser.name}</span>
                </div>{" "}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Header with Search */}
      <header className="bg-blue-200 pt-24 pb-12 md:pt-28 md:pb-16 rounded-b-2xl">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-4">
            Find and book the best doctors near you!
          </h1>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Specialty or doctor name"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Search <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Popular Specialties */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Popular Specialties
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className="p-3 md:p-4 border rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center text-sm md:text-base"
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Featured Doctors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredDoctors.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center mb-1">
                    <Star className="text-yellow-400 fill-current" size={14} />
                    <span className="ml-1 text-xs text-gray-700">
                      {doctor.rating}
                    </span>
                    <span className="ml-1 text-xs text-gray-500">
                      ({doctor.reviews})
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <Clock size={12} className="mr-1" />
                    <span className="truncate">{doctor.nextSlot}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-1.5 px-3 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <Calendar
                className="mx-auto mb-3 md:mb-4 text-blue-600"
                size={32}
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Easy Scheduling
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Book appointments 24/7 with your preferred healthcare
                professional
              </p>
            </div>
            <div className="text-center">
              <Shield
                className="mx-auto mb-3 md:mb-4 text-blue-600"
                size={32}
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Secure Platform
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Your data is protected with the highest security standards
              </p>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-3 md:mb-4 text-blue-600" size={32} />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Verified Reviews
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Read authentic reviews from real patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                About Us
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                For Patients
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Find a Doctor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Patient Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                For Doctors
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Join as a Doctor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Doctor Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400">
                    Partner with Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                Contact
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone size={14} className="mr-2" />
                  <span className="text-sm">1-800-DOCTOLIB</span>
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="mr-2" />
                  <span className="text-sm">contact@doctolib.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">
              &copy; 2024 Doctolib Clone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
