import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServiceDetailView } from './components/ServiceDetailView';
import { Footer } from './components/Footer';
import { Modal } from './components/Modals';
import { CustomCursor } from './components/CustomCursor';
import { DonationTier } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null);

  // Account Details Modal states (strictly bank transfer details, NO forms)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Sponsor a Food Basket — Account Details');
  const [modalSelectedAmount, setModalSelectedAmount] = useState<string | undefined>(undefined);

  const openAccountDetailsModal = (title?: string, amount?: string) => {
    setModalTitle(title || 'Sponsor a Food Basket — Account Details');
    setModalSelectedAmount(amount);
    setModalOpen(true);
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'home') {
      setSelectedTier(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'mandate') {
      setSelectedTier(null);
      document.getElementById('mandate')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'donation-tiers') {
      setSelectedTier(null);
      document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'account-details') {
      setSelectedTier(null);
      document.getElementById('account-details')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'promises') {
      setSelectedTier(null);
      document.getElementById('promises')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B192C] relative selection:bg-[#D4AF37] selection:text-[#0B192C] font-sans antialiased overflow-x-hidden">
      {/* Custom Cursor with Grace Basket image that follows the cursor smoothly */}
      <CustomCursor />

      {/* If a tier detail is selected */}
      {selectedTier ? (
        <ServiceDetailView
          tier={selectedTier}
          onBackToHome={() => {
            setSelectedTier(null);
            setCurrentTab('home');
          }}
          onDonateClick={() =>
            openAccountDetailsModal(`Sponsor ${selectedTier.title}`, selectedTier.amount)
          }
        />
      ) : (
        <main className="w-full overflow-x-hidden">
          {/* Fixed/Sticky Top Navbar on Scroll with Responsive Hamburger */}
          <Navbar
            currentTab={currentTab}
            onSelectTab={handleSelectTab}
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket for Christmas 2026', '₦30,000')}
          />

          {/* Hero Section with 2 prominent CTAs directly accessing Account Details */}
          <Hero
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket for Christmas 2026', '₦30,000')}
            onViewAccountDetails={() => handleSelectTab('account-details')}
          />

          {/* About Section: Fulfil Christ's Mandate & Help More Families */}
          <AboutSection
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket', '₦30,000')}
            onLearnMoreClick={() => {
              document.getElementById('promises')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* How Your Donation Helps (Donation Tiers Showcase) */}
          <ServicesSection
            onSelectTier={(tier) => {
              setSelectedTier(tier);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Inherit His Promises & Account Details Section (White Background above Footer) */}
          <WhyChooseUsSection
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket via Bank Transfer')}
          />

          {/* Simple Footer (Colored Midnight Blue Background) */}
          <Footer
            onSelectTab={handleSelectTab}
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket for Christmas 2026')}
          />
        </main>
      )}

      {/* Strictly Bank Account Details Dialog (NO forms, pure account details with copy tool) */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        selectedAmount={modalSelectedAmount}
      />
    </div>
  );
}
