'use client'

import { Phone, Mail, MapPin, Heart, Brain, Users, Shield, ChevronRight, Star, User, HeartHandshake, UsersRound, Zap, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from 'react'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

// Custom hook for intersection observer
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

// Animated component wrapper
function AnimatedSection({ children, className = "", animation = "fadeUp", delay = 0 }) {
  const [ref, isInView] = useInView()
  
  const animations = {
    fadeUp: isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
    fadeLeft: isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0',
    fadeRight: isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0',
    scaleIn: isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
  }

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Parallax component
function ParallaxElement({ children, speed = 0.5, className = "" }) {
  const [offset, setOffset] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}

function WebsiteContent() {
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 64 // Height of the fixed navigation bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-serif text-slate-800">Gurbette Psikolog</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer"
              >
                {t('nav.contact')}
              </button>
              <LanguageSwitcher />
            </div>
            <div className='flex items-center space-x-4'>
              <a className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-120" href="https://www.instagram.com/gurbettepsikolog/" target='_blank'><InstagramLogoIcon /></a>
              <a className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-120" href="https://www.linkedin.com/in/eliftugceyigit/" target='_blank'><LinkedInLogoIcon /></a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105" onClick={() => window.open('https://calendly.com/eliftugceyigit/', '_blank')}>
                {t('nav.appointment')}
              </Button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        
        {/* Parallax Background Elements */}
        <ParallaxElement speed={0.3} className="absolute top-10 left-10 w-32 h-32 text-blue-200/30">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C90,30 70,10 50,10 Z M50,20 C60,20 70,30 70,40 C70,50 60,60 50,60 C40,60 30,50 30,40 C30,30 40,20 50,20 Z" />
          </svg>
        </ParallaxElement>
        
        <ParallaxElement speed={0.2} className="absolute bottom-20 right-20 w-24 h-24 text-indigo-200/20">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" />
          </svg>
        </ParallaxElement>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <AnimatedSection animation="fadeUp">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-serif text-slate-800 leading-tight">
                    {t('hero.title.line1')}
                    <span className="block text-blue-600">{t('hero.title.line2')}</span>
                    <span className="block">{t('hero.title.line3')}</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {t('hero.subtitle')}
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={() => window.open('https://calendly.com/eliftugceyigit/', '_blank')}>
                    {t('hero.cta.online')}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                  {/** <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 transition-all duration-300 hover:scale-105">
                    {t('hero.cta.find')}
                  </Button> */}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white transition-transform duration-300 hover:scale-110"></div>
                      <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white transition-transform duration-300 hover:scale-110"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white transition-transform duration-300 hover:scale-110"></div>
                    </div>
                    <span className="text-sm text-slate-600">{t('hero.patients')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-125" />
                    ))}
                    <span className="text-sm text-slate-600 ml-1">{t('hero.rating')}</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scaleIn" delay={300}>
              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transition-all duration-500 hover:shadow-3xl hover:scale-105">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{t('hero.consultation.title')}</h3>
                      <p className="text-slate-600">{t('hero.consultation.subtitle')}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-slate-700">{t('hero.feature.confidentiality')}</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg transition-all duration-300 hover:bg-indigo-100 hover:scale-105">
                        <Users className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm text-slate-700">{t('hero.feature.certified')}</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:scale-105">
                        <Heart className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-slate-700">{t('hero.feature.approach')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About the Psychologist Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxElement speed={0.1} className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full -translate-y-32 translate-x-32" />
        <ParallaxElement speed={0.15} className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-2xl border border-blue-100 transition-all duration-500 hover:shadow-3xl">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full animate-pulse"></div>
                  <div className="relative">
                    <img 
                      src="/french-psychologist-office.png"
                      alt="Dr. Marie-Claire Dubois, Psychologue"
                      className="w-full h-96 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-blue-100 transition-all duration-300 hover:scale-110">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-700">{t('psychologist.available')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection animation="fadeRight">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-700">{t('psychologist.badge')}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-serif text-slate-800">
                    {t('psychologist.name')}
                  </h2>
                  
                  <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('psychologist.description') }} />
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                <AnimatedSection animation="fadeRight" delay={200}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105">
                      <div className="text-2xl font-bold text-blue-600 mb-1">4+</div>
                      <div className="text-sm text-slate-600">{t('psychologist.experience')}</div>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 transition-all duration-300 hover:bg-indigo-100 hover:scale-105">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">100+</div>
                      <div className="text-sm text-slate-600">{t('psychologist.patients')}</div>
                    </div>
                  </div>
                </AnimatedSection>

                {/** <AnimatedSection animation="fadeRight" delay={400}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">{t('psychologist.formations')}</h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Doctorat en Psychologie Clinique",
                          institution: "Université Paris Descartes - Sorbonne",
                          year: "2008"
                        },
                        {
                          title: "Certification TCC (Thérapies Cognitivo-Comportementales)",
                          institution: "Institut Français de TCC",
                          year: "2010"
                        },
                        {
                          title: "Formation EMDR",
                          institution: "Association EMDR France",
                          year: "2015"
                        },
                        {
                          title: "Spécialisation Thérapie de Couple",
                          institution: "École de Palo Alto",
                          year: "2018"
                        }
                      ].map((formation, index) => (
                        <AnimatedSection key={index} animation="fadeRight" delay={index * 100}>
                          <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg transition-all duration-300 hover:bg-slate-100 hover:scale-105">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="font-medium text-slate-800 text-sm">{formation.title}</div>
                              <div className="text-slate-600 text-xs">{formation.institution} • {formation.year}</div>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </AnimatedSection> */}

                <AnimatedSection animation="scaleIn" delay={600}>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('psychologist.philosophy')}</h3>
                    <p className="text-slate-700 leading-relaxed italic">
                      {t('psychologist.quote')}
                    </p>
                    <div className="flex items-center space-x-2 mt-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <Heart className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{t('psychologist.name')}</span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeRight" delay={800}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={() => window.open('https://calendly.com/eliftugceyigit/', '_blank')}> 
                      {t('psychologist.appointment')}
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 flex-1 transition-all duration-300 hover:scale-105" onClick={() => window.open('https://calendly.com/eliftugceyigit/', '_blank')}>
                      {t('psychologist.availability')}
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-slate-800 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <AnimatedSection animation="scaleIn" delay={0}>
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <User className="w-8 h-8 text-blue-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {t('services.individual.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {t('services.individual.description')}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/eliftugceyigit/therapie-individuelle', '_blank')}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Couple Therapy */}
            <AnimatedSection animation="scaleIn" delay={100}>
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <HeartHandshake className="w-8 h-8 text-rose-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {t('services.couple.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {t('services.couple.description')}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/eliftugceyigit/therapie-couple', '_blank')}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Family Therapy */}
            <AnimatedSection animation="scaleIn" delay={200}>
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <UsersRound className="w-8 h-8 text-green-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {t('services.family.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {t('services.family.description')}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/eliftugceyigit/therapie-groupe', '_blank')}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Stress Management */}
            <AnimatedSection animation="scaleIn" delay={300}>
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <Zap className="w-8 h-8 text-purple-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {t('services.stress.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {t('services.stress.description')}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/eliftugceyigit/therapie-individuelle', '_blank')}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Cognitive Therapy */}
            <AnimatedSection animation="scaleIn" delay={400}>
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <Brain className="w-8 h-8 text-indigo-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {t('services.cognitive.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {t('services.cognitive.description')}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/eliftugceyigit/therapie-individuelle', '_blank')}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Emergency Consultation */}
            <AnimatedSection animation="scaleIn" delay={500}>
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                    <AlertTriangle className="w-8 h-8 text-red-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {t('services.emergency.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {t('services.emergency.description')}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/eliftugceyigit/ongorusme', '_blank')}
                  >
                    {t('services.learn_more')}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif text-slate-800">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <AnimatedSection animation="scaleIn" delay={0}>
                    <div className="space-y-2 transition-transform duration-300 hover:scale-110">
                      <div className="text-3xl font-bold text-blue-600">10+</div>
                      <div className="text-slate-600">{t('about.stats.therapists')}</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scaleIn" delay={100}>
                    <div className="space-y-2 transition-transform duration-300 hover:scale-110">
                      <div className="text-3xl font-bold text-indigo-600">100+</div>
                      <div className="text-slate-600">{t('about.stats.patients')}</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scaleIn" delay={200}>
                    <div className="space-y-2 transition-transform duration-300 hover:scale-110">
                      <div className="text-3xl font-bold text-purple-600">95%</div>
                      <div className="text-slate-600">{t('about.stats.satisfaction')}</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scaleIn" delay={300}>
                    <div className="space-y-2 transition-transform duration-300 hover:scale-110">
                      <div className="text-3xl font-bold text-rose-600">24/7</div>
                      <div className="text-slate-600">{t('about.stats.support')}</div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transition-all duration-500 hover:shadow-3xl hover:scale-105">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">{t('about.approach.title')}</h3>
                  <div className="space-y-4">
                    {[
                      t('about.approach.1'),
                      t('about.approach.2'),
                      t('about.approach.3')
                    ].map((item, index) => (
                      <AnimatedSection key={index} animation="fadeLeft" delay={index * 100}>
                        <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-slate-800 mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/** <AnimatedSection animation="scaleIn" delay={0}>
              <Card className="text-center p-8 border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{t('contact.phone.title')}</h3>
                <p className="text-slate-600 mb-4">{t('contact.phone.subtitle')}</p>
                <p className="text-lg font-semibold text-blue-600">01 23 45 67 89</p>
              </Card>
            </AnimatedSection> */}

            <AnimatedSection animation="scaleIn" delay={200}>
              <Card className="text-center p-8 border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Mail className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{t('contact.email.title')}</h3>
                <p className="text-slate-600 mb-4">{t('contact.email.subtitle')}</p>
                <p className="text-lg font-semibold text-indigo-600">info@gurbettepsikolog.com</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={400}>
              <Card className="text-center p-8 border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{t('contact.location.title')}</h3>
                <p className="text-slate-600 mb-4">{t('contact.location.subtitle')}</p>
                <p className="text-lg font-semibold text-purple-600">{t('contact.location.online')}</p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={600}>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={() => window.open('https://calendly.com/eliftugceyigit/', '_blank')}>
                {t('contact.cta')}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-serif">Gurbette Psikolog</span>
              </div>
              <p className="text-slate-300">
                {t('footer.tagline')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.individual.title')}</li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.couple.title')}</li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.family.title')}</li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.stress.title')}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.about')}</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">Notre équipe</li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">Notre approche</li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">Témoignages</li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="transition-colors duration-300 hover:text-white">info@gurbettepsikolog.com</li>
                <li className="transition-colors duration-300 hover:text-white">{t('contact.location.online')}</li>
                <li className="transition-colors duration-300 hover:text-white">Support 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Gurbette Psikolog. {t('footer.copyright')} | {t('footer.legal')} | {t('footer.privacy')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Component() {
  return (
    <LanguageProvider>
      <WebsiteContent />
    </LanguageProvider>
  )
}
