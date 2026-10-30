import Hero from '../components/home/Hero'
import AboutSchool from '../components/home/AboutSchool'
import DirectorMessage from '../components/home/DirectorMessage'
import AcademicPrograms from '../components/home/AcademicPrograms'
import AdmissionsSection from '../components/home/AdmissionsSection'
import FacilitiesSection from '../components/home/FacilitiesSection'
import SchoolGallery from '../components/home/SchoolGallery'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSchool />
      <DirectorMessage />
      <AcademicPrograms />
      <AdmissionsSection />
      <FacilitiesSection />
      <SchoolGallery />
      <ContactSection />
    </>
  )
}
