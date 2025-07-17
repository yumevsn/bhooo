import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('individuals');

  return (
    <div className={styles.container}>
      <Head>
        <title>Hopeforatree - Mental Health Support in Zimbabwe</title>
        <meta name="description" content="Connecting people in Zimbabwe with mental health and social support services" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Hopeforatree</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#resources">Resources</Link></li>
            <li><Link href="#emergency">Emergency Help</Link></li>
            <li><Link href="#professionals">For Professionals</Link></li>
            <li><Link href="#about">About Us</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Mental Health Support in Zimbabwe</h1>
            <p>Connecting individuals with the resources and support they need for better mental wellbeing</p>
            <div className={styles.heroCta}>
              <Link href="#resources" className={styles.primaryButton}>Find Support</Link>
              <Link href="#professionals" className={styles.secondaryButton}>Join As Professional</Link>
            </div>
          </div>
        </section>

        <section id="audience" className={styles.audienceSection}>
          <h2>How We Can Help</h2>
          <div className={styles.tabs}>
            <button 
              className={activeTab === 'individuals' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('individuals')}
            >
              For Individuals
            </button>
            <button 
              className={activeTab === 'professionals' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('professionals')}
            >
              For Professionals
            </button>
            <button 
              className={activeTab === 'organizations' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('organizations')}
            >
              For Organizations
            </button>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 'individuals' && (
              <div>
                <h3>Support for Individuals</h3>
                <p>Find mental health resources, counseling services, and support groups across Zimbabwe. Our directory makes it easy to connect with the help you need.</p>
                <ul className={styles.featureList}>
                  <li>Access to verified mental health professionals</li>
                  <li>Information on free and affordable services</li>
                  <li>Crisis helplines and emergency contacts</li>
                  <li>Self-help resources and educational materials</li>
                </ul>
                <Link href="#resources" className={styles.featureButton}>Find Resources</Link>
              </div>
            )}
            
            {activeTab === 'professionals' && (
              <div>
                <h3>For Mental Health Professionals</h3>
                <p>Join our network of mental health practitioners to connect with clients, collaborate with peers, and contribute to mental health awareness in Zimbabwe.</p>
                <ul className={styles.featureList}>
                  <li>Create a professional profile</li>
                  <li>Network with other mental health practitioners</li>
                  <li>Access professional development resources</li>
                  <li>Contribute to community initiatives</li>
                </ul>
                <Link href="#professionals" className={styles.featureButton}>Join Network</Link>
              </div>
            )}
            
            {activeTab === 'organizations' && (
              <div>
                <h3>For Community Organizations</h3>
                <p>List your organization's mental health and social support services to reach more people in need across Zimbabwe.</p>
                <ul className={styles.featureList}>
                  <li>Showcase your services and programs</li>
                  <li>Connect with other organizations</li>
                  <li>Access resources for organizational development</li>
                  <li>Participate in collaborative initiatives</li>
                </ul>
                <Link href="#organizations" className={styles.featureButton}>Partner With Us</Link>
              </div>
            )}
          </div>
        </section>

        <section id="resources" className={styles.resourcesSection}>
          <h2>Mental Health Resources</h2>
          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>🏥</div>
              <h3>Find Services</h3>
              <p>Search our directory of mental health services across Zimbabwe</p>
              <Link href="#" className={styles.cardLink}>Search Directory</Link>
            </div>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>📞</div>
              <h3>Helplines</h3>
              <p>24/7 crisis support and helplines for immediate assistance</p>
              <Link href="#" className={styles.cardLink}>View Helplines</Link>
            </div>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>📚</div>
              <h3>Self-Help</h3>
              <p>Access guides, articles, and tools for mental wellbeing</p>
              <Link href="#" className={styles.cardLink}>Browse Resources</Link>
            </div>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>👥</div>
              <h3>Support Groups</h3>
              <p>Connect with peer support groups in your community</p>
              <Link href="#" className={styles.cardLink}>Find Groups</Link>
            </div>
          </div>
        </section>

        <section id="emergency" className={styles.emergencySection}>
          <h2>Emergency Help</h2>
          <div className={styles.emergencyBox}>
            <h3>In Crisis? Get Help Now</h3>
            <p>If you or someone you know is experiencing a mental health crisis or having thoughts of suicide, help is available.</p>
            <div className={styles.emergencyContacts}>
              <div className={styles.emergencyContact}>
                <h4>National Crisis Helpline</h4>
                <p className={styles.phone}>0800-1234-5678</p>
                <p>Available 24/7</p>
              </div>
              <div className={styles.emergencyContact}>
                <h4>Zimbabwe Mental Health Hotline</h4>
                <p className={styles.phone}>0242-123456</p>
                <p>8am - 8pm daily</p>
              </div>
            </div>
            <div className={styles.emergencyNote}>
              <p>For immediate danger, please call emergency services at <strong>999</strong> or go to your nearest hospital emergency room.</p>
            </div>
          </div>
        </section>

        <section id="professionals" className={styles.professionalsSection}>
          <h2>For Mental Health Professionals</h2>
          <div className={styles.professionalContent}>
            <div className={styles.professionalText}>
              <h3>Join Our Professional Network</h3>
              <p>Hopeforatree connects mental health professionals across Zimbabwe, creating opportunities for collaboration, referrals, and professional development.</p>
              <ul className={styles.professionalBenefits}>
                <li>Create a professional profile visible to potential clients</li>
                <li>Network with other mental health practitioners</li>
                <li>Access continuing education resources</li>
                <li>Participate in community outreach initiatives</li>
                <li>Contribute to mental health awareness in Zimbabwe</li>
              </ul>
              <Link href="#" className={styles.primaryButton}>Register as a Professional</Link>
            </div>
            <div className={styles.professionalImage}>
              {/* Placeholder for professional network image */}
              <div className={styles.imagePlaceholder}>Professional Network Image</div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <h2>About Hopeforatree</h2>
          <div className={styles.aboutContent}>
            <p>Hopeforatree was created to address the gap in accessible mental health resources in Zimbabwe. Our mission is to connect individuals with the support they need and strengthen the network of mental health professionals across the country.</p>
            <p>We believe that everyone deserves access to quality mental health care, regardless of their location or economic status. Through our platform, we aim to reduce stigma, increase awareness, and improve access to mental health services throughout Zimbabwe.</p>
            <div className={styles.missionValues}>
              <div className={styles.missionBox}>
                <h3>Our Mission</h3>
                <p>To create a comprehensive and accessible platform that connects Zimbabweans with mental health resources and builds a supportive community for mental wellbeing.</p>
              </div>
              <div className={styles.missionBox}>
                <h3>Our Vision</h3>
                <p>A Zimbabwe where quality mental health support is accessible to all, and where mental health is prioritized as an essential component of overall wellbeing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Hopeforatree</h3>
            <p>Connecting people in Zimbabwe with mental health and social support services</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#resources">Resources</Link></li>
              <li><Link href="#emergency">Emergency Help</Link></li>
              <li><Link href="#professionals">For Professionals</Link></li>
              <li><Link href="#about">About Us</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p>Email: info@hopeforatree.org</p>
            <p>Phone: +263 242 123456</p>
            <div className={styles.socialLinks}>
              {/* Social media icons would go here */}
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Hopeforatree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}