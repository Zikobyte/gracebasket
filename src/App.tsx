import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailView } from './components/ServiceDetailView';
import { Footer } from './components/Footer';
import { Modal } from './components/Modals';
import { CustomCursor } from './components/CustomCursor';
import { DONATION_TIERS } from './data';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [showDonationPackages, setShowDonationPackages] = useState(false);

  // Payment details are shown in a modal rather than on the page.
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Sponsor a Food Basket — Payment Details');
  const [modalSelectedAmount, setModalSelectedAmount] = useState<string | undefined>(undefined);

  const openAccountDetailsModal = (title?: string, amount?: string) => {
    setModalTitle(title || 'Sponsor a Food Basket — Payment Details');
    setModalSelectedAmount(amount);
    setModalOpen(true);
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'home') {
      setShowDonationPackages(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'mandate') {
      setShowDonationPackages(false);
      document.getElementById('mandate')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'donation-tiers') {
      setShowDonationPackages(false);
      document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B192C] relative selection:bg-[#D4AF37] selection:text-[#0B192C] font-sans antialiased overflow-x-hidden">
      {/* Custom Cursor with Grace Basket image that follows the cursor smoothly */}
      <CustomCursor />

      {showDonationPackages ? (
        <ServiceDetailView
          tiers={DONATION_TIERS}
          onBackToHome={() => {
            setShowDonationPackages(false);
            setCurrentTab('home');
          }}
          onDonateClick={(tier) =>
            openAccountDetailsModal(`Sponsor ${tier.title}`, tier.amount)
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

          {/* Hero section with sponsorship and payment-details actions */}
          <Hero
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket for Christmas 2026', '₦30,000')}
            onViewAccountDetails={() => openAccountDetailsModal('Payment Details')}
          />

          {/* About section: Christ's mandate and the three guiding principles */}
          <AboutSection
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket', '₦30,000')}
          />

          {/* How Your Donation Helps (Donation Tiers Showcase) */}
          <ServicesSection
            onOpenPackages={() => {
              setShowDonationPackages(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Simple Footer (Colored Midnight Blue Background) */}
          <Footer
            onSelectTab={handleSelectTab}
            onDonateClick={() => openAccountDetailsModal('Sponsor a Food Basket for Christmas 2026')}
          />
        </main>
      )}

      {/* Payment details dialog */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        selectedAmount={modalSelectedAmount}
      />
    </div>
  );
}
