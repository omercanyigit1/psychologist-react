'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en' | 'de' | 'tr' | 'nl'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.appointment': 'Prendre Rendez-vous',
    
    // Hero Section
    'hero.title.line1': 'Votre bien-être',
    'hero.title.line2': 'psychologique',
    'hero.title.line3': 'au cœur de nos priorités',
    'hero.subtitle': 'Accompagnement psychologique professionnel partout en France. Retrouvez l\'équilibre et la sérénité avec nos thérapeutes qualifiés.',
    'hero.cta.online': 'Consultation en ligne',
    'hero.cta.find': 'Trouver un thérapeute',
    'hero.patients': '+2000 patients accompagnés',
    'hero.rating': '4.9/5',
    'hero.consultation.title': 'Consultation Gratuite',
    'hero.consultation.subtitle': 'Premier entretien de 30 minutes offert',
    'hero.feature.confidentiality': 'Confidentialité garantie',
    'hero.feature.certified': 'Thérapeutes certifiés',
    'hero.feature.approach': 'Approche bienveillante',
    
    // Psychologist Section
    'psychologist.badge': 'Psychologue Clinicienne',
    'psychologist.name': 'Dr. Marie-Claire Dubois',
    'psychologist.description': 'Psychologue clinicienne diplômée de l\'Université Paris Descartes, spécialisée en thérapies cognitivo-comportementales et approche humaniste.',
    'psychologist.experience': 'Années d\'expérience',
    'psychologist.patients': 'Patients accompagnés',
    'psychologist.formations': 'Formations & Certifications',
    'psychologist.philosophy': 'Ma Philosophie',
    'psychologist.quote': '"Chaque personne possède en elle les ressources nécessaires pour surmonter ses difficultés. Mon rôle est de vous accompagner avec bienveillance dans cette découverte de vos propres forces, dans un espace sécurisé et sans jugement."',
    'psychologist.available': 'Disponible',
    'psychologist.appointment': 'Prendre rendez-vous',
    'psychologist.availability': 'Voir les disponibilités',
    
    // Services Section
    'services.title': 'Nos Services Thérapeutiques',
    'services.subtitle': 'Une gamme complète de services adaptés à vos besoins, dispensés par des professionnels expérimentés partout en France.',
    'services.individual.title': 'Thérapie Individuelle',
    'services.individual.description': 'Accompagnement personnalisé pour surmonter anxiété, dépression, et troubles émotionnels.',
    'services.couple.title': 'Thérapie de Couple',
    'services.couple.description': 'Restaurer la communication et renforcer les liens dans votre relation amoureuse.',
    'services.family.title': 'Thérapie Familiale',
    'services.family.description': 'Résoudre les conflits familiaux et améliorer la dynamique familiale.',
    'services.stress.title': 'Gestion du Stress',
    'services.stress.description': 'Techniques avancées pour gérer le stress professionnel et personnel.',
    'services.cognitive.title': 'Thérapie Cognitive',
    'services.cognitive.description': 'Approche scientifique pour modifier les schémas de pensée négatifs.',
    'services.emergency.title': 'Consultation d\'Urgence',
    'services.emergency.description': 'Support immédiat disponible 24h/24 pour les situations de crise.',
    'services.learn_more': 'En savoir plus',
    
    // About Section
    'about.title': 'Excellence Thérapeutique à la Française',
    'about.description': 'Depuis plus de 15 ans, nous incarnons l\'excellence de la psychologie française, alliant tradition humaniste et innovations thérapeutiques modernes. Notre réseau de thérapeutes qualifiés couvre l\'ensemble du territoire français.',
    'about.stats.therapists': 'Thérapeutes certifiés',
    'about.stats.patients': 'Patients accompagnés',
    'about.stats.satisfaction': 'Taux de satisfaction',
    'about.stats.support': 'Support d\'urgence',
    'about.approach.title': 'Notre Approche',
    'about.approach.1': 'Écoute bienveillante et sans jugement',
    'about.approach.2': 'Méthodes thérapeutiques éprouvées',
    'about.approach.3': 'Accompagnement personnalisé',
    'about.approach.4': 'Respect de la confidentialité absolue',
    'about.approach.5': 'Suivi régulier et adaptatif',
    
    // Contact Section
    'contact.title': 'Prenez Contact Avec Nous',
    'contact.subtitle': 'Notre équipe est à votre disposition pour vous accompagner dans votre démarche thérapeutique.',
    'contact.phone.title': 'Téléphone',
    'contact.phone.subtitle': 'Disponible 24h/24, 7j/7',
    'contact.email.title': 'Email',
    'contact.email.subtitle': 'Réponse sous 24h',
    'contact.location.title': 'Localisation',
    'contact.location.subtitle': 'Partout en France',
    'contact.location.online': 'Consultations en ligne',
    'contact.cta': 'Réserver une consultation gratuite',
    
    // Footer
    'footer.tagline': 'Votre bien-être psychologique, notre engagement quotidien.',
    'footer.services': 'Services',
    'footer.about': 'À Propos',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
  },
  
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.appointment': 'Book Appointment',
    
    // Hero Section
    'hero.title.line1': 'Your psychological',
    'hero.title.line2': 'well-being',
    'hero.title.line3': 'is our priority',
    'hero.subtitle': 'Professional psychological support throughout France. Find balance and serenity with our qualified therapists.',
    'hero.cta.online': 'Online consultation',
    'hero.cta.find': 'Find a therapist',
    'hero.patients': '+2000 patients supported',
    'hero.rating': '4.9/5',
    'hero.consultation.title': 'Free Consultation',
    'hero.consultation.subtitle': 'First 30-minute session offered',
    'hero.feature.confidentiality': 'Guaranteed confidentiality',
    'hero.feature.certified': 'Certified therapists',
    'hero.feature.approach': 'Compassionate approach',
    
    // Psychologist Section
    'psychologist.badge': 'Clinical Psychologist',
    'psychologist.name': 'Dr. Marie-Claire Dubois',
    'psychologist.description': 'Clinical psychologist graduated from Paris Descartes University, specialized in cognitive-behavioral therapies and humanistic approach.',
    'psychologist.experience': 'Years of experience',
    'psychologist.patients': 'Patients supported',
    'psychologist.formations': 'Training & Certifications',
    'psychologist.philosophy': 'My Philosophy',
    'psychologist.quote': '"Every person has within them the necessary resources to overcome their difficulties. My role is to accompany you with kindness in discovering your own strengths, in a secure and non-judgmental space."',
    'psychologist.available': 'Available',
    'psychologist.appointment': 'Book appointment',
    'psychologist.availability': 'View availability',
    
    // Services Section
    'services.title': 'Our Therapeutic Services',
    'services.subtitle': 'A complete range of services adapted to your needs, provided by experienced professionals throughout France.',
    'services.individual.title': 'Individual Therapy',
    'services.individual.description': 'Personalized support to overcome anxiety, depression, and emotional disorders.',
    'services.couple.title': 'Couples Therapy',
    'services.couple.description': 'Restore communication and strengthen bonds in your romantic relationship.',
    'services.family.title': 'Family Therapy',
    'services.family.description': 'Resolve family conflicts and improve family dynamics.',
    'services.stress.title': 'Stress Management',
    'services.stress.description': 'Advanced techniques to manage professional and personal stress.',
    'services.cognitive.title': 'Cognitive Therapy',
    'services.cognitive.description': 'Scientific approach to modify negative thought patterns.',
    'services.emergency.title': 'Emergency Consultation',
    'services.emergency.description': 'Immediate support available 24/7 for crisis situations.',
    'services.learn_more': 'Learn more',
    
    // About Section
    'about.title': 'French Therapeutic Excellence',
    'about.description': 'For over 15 years, we have embodied the excellence of French psychology, combining humanistic tradition and modern therapeutic innovations. Our network of qualified therapists covers the entire French territory.',
    'about.stats.therapists': 'Certified therapists',
    'about.stats.patients': 'Patients supported',
    'about.stats.satisfaction': 'Satisfaction rate',
    'about.stats.support': 'Emergency support',
    'about.approach.title': 'Our Approach',
    'about.approach.1': 'Compassionate and non-judgmental listening',
    'about.approach.2': 'Proven therapeutic methods',
    'about.approach.3': 'Personalized support',
    'about.approach.4': 'Absolute confidentiality respect',
    'about.approach.5': 'Regular and adaptive follow-up',
    
    // Contact Section
    'contact.title': 'Get In Touch With Us',
    'contact.subtitle': 'Our team is at your disposal to accompany you in your therapeutic journey.',
    'contact.phone.title': 'Phone',
    'contact.phone.subtitle': 'Available 24/7',
    'contact.email.title': 'Email',
    'contact.email.subtitle': 'Response within 24h',
    'contact.location.title': 'Location',
    'contact.location.subtitle': 'Throughout France',
    'contact.location.online': 'Online consultations',
    'contact.cta': 'Book a free consultation',
    
    // Footer
    'footer.tagline': 'Your psychological well-being, our daily commitment.',
    'footer.services': 'Services',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
  },
  
  de: {
    // Navigation
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.appointment': 'Termin buchen',
    
    // Hero Section
    'hero.title.line1': 'Ihr psychisches',
    'hero.title.line2': 'Wohlbefinden',
    'hero.title.line3': 'steht im Mittelpunkt',
    'hero.subtitle': 'Professionelle psychologische Betreuung in ganz Frankreich. Finden Sie Balance und Gelassenheit mit unseren qualifizierten Therapeuten.',
    'hero.cta.online': 'Online-Beratung',
    'hero.cta.find': 'Therapeut finden',
    'hero.patients': '+2000 betreute Patienten',
    'hero.rating': '4,9/5',
    'hero.consultation.title': 'Kostenlose Beratung',
    'hero.consultation.subtitle': 'Erstes 30-minütiges Gespräch kostenlos',
    'hero.feature.confidentiality': 'Vertraulichkeit garantiert',
    'hero.feature.certified': 'Zertifizierte Therapeuten',
    'hero.feature.approach': 'Einfühlsamer Ansatz',
    
    // Psychologist Section
    'psychologist.badge': 'Klinische Psychologin',
    'psychologist.name': 'Dr. Marie-Claire Dubois',
    'psychologist.description': 'Klinische Psychologin mit Abschluss der Universität Paris Descartes, spezialisiert auf kognitive Verhaltenstherapie und humanistischen Ansatz.',
    'psychologist.experience': 'Jahre Erfahrung',
    'psychologist.patients': 'Betreute Patienten',
    'psychologist.formations': 'Ausbildung & Zertifizierungen',
    'psychologist.philosophy': 'Meine Philosophie',
    'psychologist.quote': '"Jeder Mensch trägt die notwendigen Ressourcen in sich, um seine Schwierigkeiten zu überwinden. Meine Aufgabe ist es, Sie mit Mitgefühl bei der Entdeckung Ihrer eigenen Stärken zu begleiten, in einem sicheren und urteilsfreien Raum."',
    'psychologist.available': 'Verfügbar',
    'psychologist.appointment': 'Termin buchen',
    'psychologist.availability': 'Verfügbarkeit anzeigen',
    
    // Services Section
    'services.title': 'Unsere Therapeutischen Dienstleistungen',
    'services.subtitle': 'Ein komplettes Angebot an Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten und von erfahrenen Fachkräften in ganz Frankreich angeboten werden.',
    'services.individual.title': 'Einzeltherapie',
    'services.individual.description': 'Personalisierte Unterstützung zur Überwindung von Angst, Depression und emotionalen Störungen.',
    'services.couple.title': 'Paartherapie',
    'services.couple.description': 'Kommunikation wiederherstellen und Bindungen in Ihrer romantischen Beziehung stärken.',
    'services.family.title': 'Familientherapie',
    'services.family.description': 'Familienkonflikte lösen und die Familiendynamik verbessern.',
    'services.stress.title': 'Stressmanagement',
    'services.stress.description': 'Fortgeschrittene Techniken zur Bewältigung von beruflichem und persönlichem Stress.',
    'services.cognitive.title': 'Kognitive Therapie',
    'services.cognitive.description': 'Wissenschaftlicher Ansatz zur Veränderung negativer Denkmuster.',
    'services.emergency.title': 'Notfallberatung',
    'services.emergency.description': 'Sofortige Unterstützung rund um die Uhr für Krisensituationen.',
    'services.learn_more': 'Mehr erfahren',
    
    // About Section
    'about.title': 'Französische Therapeutische Exzellenz',
    'about.description': 'Seit über 15 Jahren verkörpern wir die Exzellenz der französischen Psychologie und verbinden humanistische Tradition mit modernen therapeutischen Innovationen. Unser Netzwerk qualifizierter Therapeuten deckt das gesamte französische Territorium ab.',
    'about.stats.therapists': 'Zertifizierte Therapeuten',
    'about.stats.patients': 'Betreute Patienten',
    'about.stats.satisfaction': 'Zufriedenheitsrate',
    'about.stats.support': 'Notfallunterstützung',
    'about.approach.title': 'Unser Ansatz',
    'about.approach.1': 'Einfühlsames und urteilsfreies Zuhören',
    'about.approach.2': 'Bewährte therapeutische Methoden',
    'about.approach.3': 'Personalisierte Betreuung',
    'about.approach.4': 'Absolute Vertraulichkeit',
    'about.approach.5': 'Regelmäßige und adaptive Nachbetreuung',
    
    // Contact Section
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Unser Team steht Ihnen zur Verfügung, um Sie auf Ihrem therapeutischen Weg zu begleiten.',
    'contact.phone.title': 'Telefon',
    'contact.phone.subtitle': 'Verfügbar 24/7',
    'contact.email.title': 'E-Mail',
    'contact.email.subtitle': 'Antwort innerhalb von 24h',
    'contact.location.title': 'Standort',
    'contact.location.subtitle': 'In ganz Frankreich',
    'contact.location.online': 'Online-Beratungen',
    'contact.cta': 'Kostenlose Beratung buchen',
    
    // Footer
    'footer.tagline': 'Ihr psychisches Wohlbefinden, unser tägliches Engagement.',
    'footer.services': 'Dienstleistungen',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Alle Rechte vorbehalten.',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutz',
  },
  
  tr: {
    // Navigation
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.appointment': 'Randevu Al',
    
    // Hero Section
    'hero.title.line1': 'Psikolojik',
    'hero.title.line2': 'sağlığınız',
    'hero.title.line3': 'önceliğimizdir',
    'hero.subtitle': 'Fransa genelinde profesyonel psikolojik destek. Nitelikli terapistlerimizle denge ve huzuru bulun.',
    'hero.cta.online': 'Online danışmanlık',
    'hero.cta.find': 'Terapist bul',
    'hero.patients': '+2000 desteklenen hasta',
    'hero.rating': '4,9/5',
    'hero.consultation.title': 'Ücretsiz Danışmanlık',
    'hero.consultation.subtitle': 'İlk 30 dakikalık görüşme ücretsiz',
    'hero.feature.confidentiality': 'Gizlilik garantili',
    'hero.feature.certified': 'Sertifikalı terapistler',
    'hero.feature.approach': 'Şefkatli yaklaşım',
    
    // Psychologist Section
    'psychologist.badge': 'Klinik Psikolog',
    'psychologist.name': 'Dr. Marie-Claire Dubois',
    'psychologist.description': 'Paris Descartes Üniversitesi mezunu klinik psikolog, bilişsel davranışçı terapiler ve hümanistik yaklaşım konusunda uzman.',
    'psychologist.experience': 'Yıllık deneyim',
    'psychologist.patients': 'Desteklenen hasta',
    'psychologist.formations': 'Eğitim ve Sertifikalar',
    'psychologist.philosophy': 'Felsefem',
    'psychologist.quote': '"Her insan zorluklarını aşmak için gerekli kaynaklara sahiptir. Benim rolüm, güvenli ve yargısız bir ortamda kendi güçlerinizi keşfetmenizde size şefkatle eşlik etmektir."',
    'psychologist.available': 'Müsait',
    'psychologist.appointment': 'Randevu al',
    'psychologist.availability': 'Müsaitliği görüntüle',
    
    // Services Section
    'services.title': 'Terapötik Hizmetlerimiz',
    'services.subtitle': 'İhtiyaçlarınıza uygun, Fransa genelinde deneyimli profesyoneller tarafından sunulan eksiksiz hizmet yelpazesi.',
    'services.individual.title': 'Bireysel Terapi',
    'services.individual.description': 'Kaygı, depresyon ve duygusal bozuklukları aşmak için kişiselleştirilmiş destek.',
    'services.couple.title': 'Çift Terapisi',
    'services.couple.description': 'Romantik ilişkinizde iletişimi restore edin ve bağları güçlendirin.',
    'services.family.title': 'Aile Terapisi',
    'services.family.description': 'Aile çatışmalarını çözün ve aile dinamiklerini iyileştirin.',
    'services.stress.title': 'Stres Yönetimi',
    'services.stress.description': 'Mesleki ve kişisel stresi yönetmek için gelişmiş teknikler.',
    'services.cognitive.title': 'Bilişsel Terapi',
    'services.cognitive.description': 'Olumsuz düşünce kalıplarını değiştirmek için bilimsel yaklaşım.',
    'services.emergency.title': 'Acil Danışmanlık',
    'services.emergency.description': 'Kriz durumları için 7/24 anında destek.',
    'services.learn_more': 'Daha fazla bilgi',
    
    // About Section
    'about.title': 'Fransız Terapötik Mükemmelliği',
    'about.description': '15 yılı aşkın süredir, hümanistik geleneği modern terapötik yeniliklerle birleştirerek Fransız psikolojisinin mükemmelliğini temsil ediyoruz. Nitelikli terapist ağımız tüm Fransız topraklarını kapsar.',
    'about.stats.therapists': 'Sertifikalı terapist',
    'about.stats.patients': 'Desteklenen hasta',
    'about.stats.satisfaction': 'Memnuniyet oranı',
    'about.stats.support': 'Acil destek',
    'about.approach.title': 'Yaklaşımımız',
    'about.approach.1': 'Şefkatli ve yargısız dinleme',
    'about.approach.2': 'Kanıtlanmış terapötik yöntemler',
    'about.approach.3': 'Kişiselleştirilmiş destek',
    'about.approach.4': 'Mutlak gizlilik saygısı',
    'about.approach.5': 'Düzenli ve uyarlanabilir takip',
    
    // Contact Section
    'contact.title': 'Bizimle İletişime Geçin',
    'contact.subtitle': 'Ekibimiz terapötik yolculuğunuzda size eşlik etmek için hizmetinizdedir.',
    'contact.phone.title': 'Telefon',
    'contact.phone.subtitle': '7/24 müsait',
    'contact.email.title': 'E-posta',
    'contact.email.subtitle': '24 saat içinde yanıt',
    'contact.location.title': 'Konum',
    'contact.location.subtitle': 'Fransa genelinde',
    'contact.location.online': 'Online danışmanlık',
    'contact.cta': 'Ücretsiz danışmanlık rezervasyonu',
    
    // Footer
    'footer.tagline': 'Psikolojik sağlığınız, günlük taahhüdümüz.',
    'footer.services': 'Hizmetler',
    'footer.about': 'Hakkımızda',
    'footer.contact': 'İletişim',
    'footer.copyright': 'Tüm hakları saklıdır.',
    'footer.legal': 'Yasal bildirim',
    'footer.privacy': 'Gizlilik politikası',
  },
  
  nl: {
    // Navigation
    'nav.services': 'Diensten',
    'nav.about': 'Over ons',
    'nav.contact': 'Contact',
    'nav.appointment': 'Afspraak maken',
    
    // Hero Section
    'hero.title.line1': 'Uw psychisch',
    'hero.title.line2': 'welzijn',
    'hero.title.line3': 'staat centraal',
    'hero.subtitle': 'Professionele psychologische ondersteuning door heel Frankrijk. Vind balans en sereniteit met onze gekwalificeerde therapeuten.',
    'hero.cta.online': 'Online consultatie',
    'hero.cta.find': 'Therapeut vinden',
    'hero.patients': '+2000 ondersteunde patiënten',
    'hero.rating': '4,9/5',
    'hero.consultation.title': 'Gratis Consultatie',
    'hero.consultation.subtitle': 'Eerste gesprek van 30 minuten gratis',
    'hero.feature.confidentiality': 'Vertrouwelijkheid gegarandeerd',
    'hero.feature.certified': 'Gecertificeerde therapeuten',
    'hero.feature.approach': 'Meelevende benadering',
    
    // Psychologist Section
    'psychologist.badge': 'Klinisch Psycholoog',
    'psychologist.name': 'Dr. Marie-Claire Dubois',
    'psychologist.description': 'Klinisch psycholoog afgestudeerd aan de Universiteit Paris Descartes, gespecialiseerd in cognitieve gedragsterapieën en humanistische benadering.',
    'psychologist.experience': 'Jaar ervaring',
    'psychologist.patients': 'Ondersteunde patiënten',
    'psychologist.formations': 'Opleiding & Certificeringen',
    'psychologist.philosophy': 'Mijn Filosofie',
    'psychologist.quote': '"Ieder persoon heeft de nodige middelen in zich om zijn moeilijkheden te overwinnen. Mijn rol is om u met mededogen te begeleiden bij het ontdekken van uw eigen krachten, in een veilige en oordeelvrije ruimte."',
    'psychologist.available': 'Beschikbaar',
    'psychologist.appointment': 'Afspraak maken',
    'psychologist.availability': 'Beschikbaarheid bekijken',
    
    // Services Section
    'services.title': 'Onze Therapeutische Diensten',
    'services.subtitle': 'Een compleet aanbod van diensten aangepast aan uw behoeften, geleverd door ervaren professionals door heel Frankrijk.',
    'services.individual.title': 'Individuele Therapie',
    'services.individual.description': 'Gepersonaliseerde ondersteuning om angst, depressie en emotionele stoornissen te overwinnen.',
    'services.couple.title': 'Relatietherapie',
    'services.couple.description': 'Communicatie herstellen en banden versterken in uw romantische relatie.',
    'services.family.title': 'Gezinstherapie',
    'services.family.description': 'Gezinsconflicten oplossen en gezinsdynamiek verbeteren.',
    'services.stress.title': 'Stressmanagement',
    'stress.description': 'Geavanceerde technieken om professionele en persoonlijke stress te beheren.',
    'services.cognitive.title': 'Cognitieve Therapie',
    'services.cognitive.description': 'Wetenschappelijke benadering om negatieve denkpatronen te veranderen.',
    'services.emergency.title': 'Spoedconsultatie',
    'services.emergency.description': 'Onmiddellijke ondersteuning 24/7 beschikbaar voor crisissituaties.',
    'services.learn_more': 'Meer informatie',
    
    // About Section
    'about.title': 'Franse Therapeutische Excellentie',
    'about.description': 'Al meer dan 15 jaar belichamen we de excellentie van de Franse psychologie, waarbij we humanistische traditie combineren met moderne therapeutische innovaties. Ons netwerk van gekwalificeerde therapeuten dekt het hele Franse grondgebied.',
    'about.stats.therapists': 'Gecertificeerde therapeuten',
    'about.stats.patients': 'Ondersteunde patiënten',
    'about.stats.satisfaction': 'Tevredenheidspercentage',
    'about.stats.support': 'Spoedondersteuning',
    'about.approach.title': 'Onze Benadering',
    'about.approach.1': 'Meelevend en oordeelvrij luisteren',
    'about.approach.2': 'Bewezen therapeutische methoden',
    'about.approach.3': 'Gepersonaliseerde ondersteuning',
    'about.approach.4': 'Absolute vertrouwelijkheid',
    'about.approach.5': 'Regelmatige en adaptieve opvolging',
    
    // Contact Section
    'contact.title': 'Neem Contact Met Ons Op',
    'contact.subtitle': 'Ons team staat tot uw beschikking om u te begeleiden op uw therapeutische reis.',
    'contact.phone.title': 'Telefoon',
    'contact.phone.subtitle': '24/7 beschikbaar',
    'contact.email.title': 'E-mail',
    'contact.email.subtitle': 'Reactie binnen 24u',
    'contact.location.title': 'Locatie',
    'contact.location.subtitle': 'Door heel Frankrijk',
    'contact.location.online': 'Online consultaties',
    'contact.cta': 'Gratis consultatie boeken',
    
    // Footer
    'footer.tagline': 'Uw psychisch welzijn, onze dagelijkse toewijding.',
    'footer.services': 'Diensten',
    'footer.about': 'Over ons',
    'footer.contact': 'Contact',
    'footer.copyright': 'Alle rechten voorbehouden.',
    'footer.legal': 'Juridische kennisgeving',
    'footer.privacy': 'Privacybeleid',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
