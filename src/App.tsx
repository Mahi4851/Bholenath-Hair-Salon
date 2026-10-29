/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PackageBuilder } from './components/PackageBuilder';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { AppointmentModal } from './components/AppointmentModal';
import { Language, AppPage, SalonService } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('mr');
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['hair-1', 'beard-1']);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingServiceIds, setBookingServiceIds] = useState<string[]>(['hair-1']);

  const handleToggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearSelection = () => {
    setSelectedServiceIds([]);
  };

  const handleBookSingleService = (service: SalonService) => {
    setBookingServiceIds([service.id]);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithSelected = () => {
    setBookingServiceIds(selectedServiceIds.length > 0 ? selectedServiceIds : ['hair-1']);
    setIsBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setBookingServiceIds(selectedServiceIds.length > 0 ? selectedServiceIds : ['hair-1']);
    setIsBookingModalOpen(true);
  };

  const handlePageNavigation = (page: AppPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Light Luxury Top Navigation */}
      <Navbar
        currentLang={currentLang}
        currentPage={currentPage}
        onPageChange={handlePageNavigation}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero with light luxury interior visual */}
            <HeroSection
              currentLang={currentLang}
              onOpenBooking={handleOpenGeneralBooking}
              onNavigate={handlePageNavigation}
            />

            {/* 2. Menu of Services */}
            <ServicesSection
              currentLang={currentLang}
              selectedServiceIds={selectedServiceIds}
              onToggleService={handleToggleService}
              onBookSingleService={handleBookSingleService}
            />

            {/* 3. Interactive Package Builder */}
            <PackageBuilder
              currentLang={currentLang}
              selectedServiceIds={selectedServiceIds}
              onToggleService={handleToggleService}
              onClearSelection={handleClearSelection}
              onOpenBookingWithSelected={handleOpenBookingWithSelected}
            />

            {/* 4. Local Testimonials */}
            <TestimonialsSection
              currentLang={currentLang}
            />

            {/* 5. FAQs */}
            <FaqSection
              currentLang={currentLang}
            />
          </>
        )}

        {currentPage === 'services' && (
          <div className="py-6">
            <ServicesSection
              currentLang={currentLang}
              selectedServiceIds={selectedServiceIds}
              onToggleService={handleToggleService}
              onBookSingleService={handleBookSingleService}
            />
            <PackageBuilder
              currentLang={currentLang}
              selectedServiceIds={selectedServiceIds}
              onToggleService={handleToggleService}
              onClearSelection={handleClearSelection}
              onOpenBookingWithSelected={handleOpenBookingWithSelected}
            />
          </div>
        )}

        {currentPage === 'packages' && (
          <div className="py-8">
            <PackageBuilder
              currentLang={currentLang}
              selectedServiceIds={selectedServiceIds}
              onToggleService={handleToggleService}
              onClearSelection={handleClearSelection}
              onOpenBookingWithSelected={handleOpenBookingWithSelected}
            />
            <FaqSection
              currentLang={currentLang}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage
            currentLang={currentLang}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            currentLang={currentLang}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}
      </main>

      {/* Light Luxury Footer */}
      <Footer
        currentLang={currentLang}
        onPageChange={handlePageNavigation}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Mobile Floating Action Bar */}
      <FloatingActionBar
        currentLang={currentLang}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currentLang={currentLang}
        initialServiceIds={bookingServiceIds}
      />
    </div>
  );
}
