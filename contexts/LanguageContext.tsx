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
    'hero.subtitle': 'Accompagnement psychologique professionnel  partout au monde. Retrouvez l`équilibre et la sérénité avec nos thérapeutes qualifiés.',
    'hero.cta.online': 'Consultation en ligne',
    'hero.cta.find': 'Trouver un thérapeute',
    'hero.patients': '+100 patients accompagnés',
    'hero.rating': '4.9/5',
    'hero.consultation.title': 'Consultation Gratuite',
    'hero.consultation.subtitle': 'Premier entretien de 15 minutes offert',
    'hero.feature.confidentiality': 'Confidentialité garantie',
    'hero.feature.certified': 'Thérapeutes certifiés',
    'hero.feature.approach': 'Approche bienveillante',
    
    // Psychologist Section
    'psychologist.badge': 'Psychologue Clinicienne',
    'psychologist.name': 'Elif Tugce YIGIT',
    'psychologist.description': 'Elle a achevé des études de licence à l’Université de Vienne et à l’Université Lumière Lyon 2, puis un master en psychologie clinique. Elle a également suivi une formation de spécialisation en autisme. Son mémoire de licence portait sur les types d’anorexie chez les adolescents, et son mémoire de master sur l’angoisse de mort découlant du désir de reconnaissance et d’être aimé sur les réseaux sociaux chez les adolescents. <br /> Mme YIGIT mène actuellement des travaux de psychoéducation avec des enfants autistes et leurs familles. Selon elle, ce n’est que grâce à la collaboration conjointe de la famille, du psychologue et des autres intervenants éducatifs qu’il est possible de minimiser les symptômes de l’autisme et de favoriser l’adaptation de la personne autiste à la vie quotidienne. <br /> Elle poursuit en outre ses travaux sur la psychologie de l’exil au sein de la société turque (gurbet) : sentiment d’appartenance, mal du pays, processus d’adaptation, sentiment d’insuffisance et difficultés d’inadaptation. Bien qu’elle ait reçu une formation en psychanalyse, elle privilégie, en particulier avec les expatriés, des approches thérapeutiques de soutien fondées sur la psychoéducation.',
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
    'about.title': 'Notre approche existentielle et de soutien',
    'about.description': 'Nous sommes une équipe expérimentée en psychologie clinique, convaincue quaucune difficulté humaine ne peut être résolue par des solutions standardisées.Nous cherchons d’abord à comprendre les ressources et les besoins de chacun, à clarifier ensemble les objectifs, à explorer les options possibles et à construire, pas à pas, un plan réaliste et applicable.',
    'about.stats.therapists': 'Thérapeutes certifiés',
    'about.stats.patients': 'Patients accompagnés',
    'about.stats.satisfaction': 'Taux de satisfaction',
    'about.stats.support': 'Support d\'urgence',
    'about.approach.title': 'Notre approche repose sur :',
    'about.approach.1': 'La psychothérapie de soutien, pour offrir un espace sécurisé et bienveillant,',
    'about.approach.2': 'La psychoéducation, pour mieux comprendre sa situation et ses choix,',
    'about.approach.3': 'Des techniques cognitivo-comportementales, lorsque des outils concrets sont nécessaires.',
    
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
    'hero.patients': '+100 patients supported',
    'hero.rating': '4.9/5',
    'hero.consultation.title': 'Free Consultation',
    'hero.consultation.subtitle': 'First 15-minute session offered',
    'hero.feature.confidentiality': 'Guaranteed confidentiality',
    'hero.feature.certified': 'Certified therapists',
    'hero.feature.approach': 'Compassionate approach',
    
    // Psychologist Section
    'psychologist.badge': 'Clinical Psychologist',
    'psychologist.name': 'Elif Tugce YIGIT',
    'psychologist.description': 'She completed her undergraduate studies at the University of Vienna and at Lumière University Lyon 2, and earned a master’s degree in Clinical Psychology. She has also received specialized training in autism. Her bachelor’s thesis examined types of anorexia in adolescents, and her master’s thesis addressed death anxiety arising from the desire for recognition and to be loved on social media among adolescents. <br /> Ms. Tuğçe is currently conducting psychoeducation programs with children with autism and their families. In her view, autism symptoms can be minimized and an autistic individual’s adaptation to daily life can be supported only through the joint efforts of the family, the psychologist, and other educators. <br /> She also continues her work on the psychology of gurbet (life abroad) within Turkish society—sense of belonging, homesickness, adaptation processes, feelings of inadequacy, and difficulties with adjustment. Although she has training in psychoanalysis, she prefers supportive, psychoeducation-based therapeutic techniques, especially when working with expatriates.',
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
    'about.title': 'Our Existential and Supportive Approach',
    'about.description': 'We are an experienced team in clinical psychology, convinced that no human difficulty can be solved with standardized solutions. <br /> Our approach is grounded in an existential perspective: each individual has their own story, values, culture, and unique resources. <br /> We first seek to deeply understand each person`s resources and needs, clarify goals together, explore possible options, and build, step by step, a realistic and applicable plan.',
    'about.stats.therapists': 'Certified therapists',
    'about.stats.patients': 'Patients supported',
    'about.stats.satisfaction': 'Satisfaction rate',
    'about.stats.support': 'Emergency support',
    'about.approach.title': 'Our Approach',
    'about.approach.1': 'Supportive psychotherapy: To provide a safe and caring space,',
    'about.approach.2': 'Psychoeducation: To better understand one’s situation and available choices,',
    'about.approach.3': 'Cognitive-behavioral techniques: When practical tools are needed.',
    
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
    'hero.patients': '+100 betreute Patienten',
    'hero.rating': '4,9/5',
    'hero.consultation.title': 'Kostenlose Beratung',
    'hero.consultation.subtitle': 'Erstes 15-minütiges Gespräch kostenlos',
    'hero.feature.confidentiality': 'Vertraulichkeit garantiert',
    'hero.feature.certified': 'Zertifizierte Therapeuten',
    'hero.feature.approach': 'Einfühlsamer Ansatz',
    
    // Psychologist Section
    'psychologist.badge': 'Klinische Psychologin',
    'psychologist.name': 'Elif Tugce YIGIT',
    'psychologist.description': 'Sie hat ihr Bachelorstudium an der Universität Wien und der Université Lumière Lyon 2 abgeschlossen und anschließend einen Master in Klinischer Psychologie erworben. Zudem hat sie eine Spezialisierung im Bereich Autismus absolviert. Ihre Bachelorarbeit behandelte Anorexie-Typen bei Jugendlichen, ihre Masterarbeit die aus dem Wunsch nach Anerkennung und Geliebtwerden in sozialen Medien entstehende Todesangst bei Jugendlichen. <br /> Frau Tuğçe führt derzeit Psychoedukationsprogramme mit Kindern im Autismus-Spektrum und deren Familien durch. Ihrer Ansicht nach lassen sich Autismus-Symptome nur durch die enge Zusammenarbeit von Familie, der Psychologin und weiteren pädagogischen Fachkräften minimieren und die Anpassung der betroffenen Person an das Alltagsleben fördern. <br /> Außerdem setzt sie ihre Arbeit zur Psychologie des „Gurbet“ innerhalb der türkischen Gesellschaft fort: Zugehörigkeitsgefühl, Heimweh, Anpassungsprozesse, Gefühle der Unzulänglichkeit und Anpassungsschwierigkeiten. Obwohl sie eine Ausbildung in Psychoanalyse hat, bevorzugt sie insbesondere in der Arbeit mit Expatriates unterstützende, psychoedukationsbasierte Therapieansätze.',
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
    'about.title': 'Unser Existenzieller und Unterstützender Ansatz',
    'about.description': 'Wir sind ein erfahrenes Team in der klinischen Psychologie und sind überzeugt, dass keine menschliche Schwierigkeit mit standardisierten Lösungen gelöst werden kann. <br /> Unser Ansatz basiert auf einer existenziellen Perspektive: Jede Person hat ihre eigene Geschichte, ihre Werte, ihre Kultur und ihre einzigartigen Ressourcen. <br /> Wir bemühen uns zunächst, die Ressourcen und Bedürfnisse jedes Einzelnen tiefgehend zu verstehen, gemeinsam die Ziele zu klären, mögliche Optionen zu erkunden und Schritt für Schritt einen realistischen und umsetzbaren Plan zu entwickeln.',
    'about.stats.therapists': 'Zertifizierte Therapeuten',
    'about.stats.patients': 'Betreute Patienten',
    'about.stats.satisfaction': 'Zufriedenheitsrate',
    'about.stats.support': 'Notfallunterstützung',
    'about.approach.title': 'Unsere Praxis basiert auf:',
    'about.approach.1': 'Stützende Psychotherapie: um einen sicheren und wertschätzenden Raum zu bieten,',
    'about.approach.2': 'Psychoedukation: um die eigene Situation und die Wahlmöglichkeiten besser zu verstehen,',
    'about.approach.3': 'Kognitiv-behaviorale Techniken: wenn praktische Werkzeuge erforderlich sind.',
    
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
    'hero.patients': '+100 desteklenen hasta',
    'hero.rating': '4,9/5',
    'hero.consultation.title': 'Ücretsiz Danışmanlık',
    'hero.consultation.subtitle': 'İlk 15 dakikalık görüşme ücretsiz',
    'hero.feature.confidentiality': 'Gizlilik garantili',
    'hero.feature.certified': 'Sertifikalı terapistler',
    'hero.feature.approach': 'Şefkatli yaklaşım',
    
    // Psychologist Section
    'psychologist.badge': 'Klinik Psikolog',
    'psychologist.name': 'Elif Tugce YIGIT',
    'psychologist.description': 'Viyana Üniversitesi ve Lyon 2 Üniversitesi`nde lisans, Klinik Psikoloji alanında ise yüksek lisans eğitimini tamamlamıştır. Ayrıca otizm alanında uzmanlık eğitimi almıştır. Lisans tezini ergenlerde anoreksi türleri, yüksek lisans tezini ise ergenlerde sosyal medyada oluşan tanınma ve sevilme arzusundan kaynaklanan ölüm anksiyetesi üzerine hazırlamıştır. <br /> Tuğçe Hanım, hâlen otizmli çocuklar ve aileleriyle psiko-eğitim çalışmaları yürütmektedir. Ona göre otizm, ancak aile, psikolog ve diğer eğitimcilerin ortak çalışmasıyla semptomları en aza indirilebilir ve otizmli bireyin hayata adaptasyonu sağlanabilir. <br /> Ayrıca, Türk toplumunun gurbet psikolojisi, aidiyet hissi, gurbet özlemi, uyum süreci, yetersizlik hissi ve adapte olamama problemleri üzerine çalışmalarına devam etmektedir. Psikanaliz eğitimi almış olmakla birlikte, özellikle gurbetçilerle çalışırken daha çok destekleyici ve psiko-eğitim temelli terapi tekniklerini tercih etmektedir.',
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
    'about.title': 'Varoluşsal ve Destekleyici Yaklaşımımız',
    'about.description': 'Biz, klinik psikoloji alanında deneyimli bir ekibiz ve hiçbir insani zorluğun standart çözümlerle giderilemeyeceğine inanıyoruz. <br /> Yaklaşımımız varoluşçu bir bakış açısına dayanır: Her bireyin kendine özgü bir hikâyesi, değerleri, kültürü ve kaynakları vardır. <br /> Öncelikle her kişinin kaynaklarını ve ihtiyaçlarını derinlemesine anlamaya, hedefleri birlikte netleştirmeye, olası seçenekleri keşfetmeye ve adım adım uygulanabilir, gerçekçi bir plan oluşturmaya odaklanıyoruz.',
    'about.stats.therapists': 'Sertifikalı terapist',
    'about.stats.patients': 'Desteklenen hasta',
    'about.stats.satisfaction': 'Memnuniyet oranı',
    'about.stats.support': 'Acil destek',
    'about.approach.title': 'Yaklaşımımız',
    'about.approach.1': 'Destekleyici psikoterapi: Güvenli ve destekleyici bir alan sunmak için,',
    'about.approach.2': 'Psiko-eğitim: Kendi durumunu ve seçeneklerini daha iyi anlamak için,',
    'about.approach.3': 'Bilişsel-davranışçı teknikler: Somut araçların gerekli olduğu durumlarda.',
    
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
    'hero.patients': '+100 ondersteunde patiënten',
    'hero.rating': '4,9/5',
    'hero.consultation.title': 'Gratis Consultatie',
    'hero.consultation.subtitle': 'Eerste gesprek van 15 minuten gratis',
    'hero.feature.confidentiality': 'Vertrouwelijkheid gegarandeerd',
    'hero.feature.certified': 'Gecertificeerde therapeuten',
    'hero.feature.approach': 'Meelevende benadering',
    
    // Psychologist Section
    'psychologist.badge': 'Klinisch Psycholoog',
    'psychologist.name': 'Elif Tugce YIGIT',
    'psychologist.description': 'Zij heeft haar bachelorstudie afgerond aan de Universiteit van Wenen en aan de Université Lumière Lyon 2, en een master in klinische psychologie behaald. Daarnaast heeft zij een specialisatieopleiding in autisme gevolgd. Haar bachelorscriptie ging over typen anorexia bij adolescenten, en haar masterscriptie behandelde doodsangst die voortvloeit uit het verlangen naar erkenning en geliefd te worden op sociale media bij adolescenten. <br /> Mevrouw Tuğçe voert momenteel psycho-educatieprogramma’s uit met kinderen met autisme en hun gezinnen. Volgens haar kunnen de symptomen van autisme alleen worden geminimaliseerd en kan de aanpassing van de persoon met autisme aan het dagelijks leven worden ondersteund door de gezamenlijke inzet van het gezin, de psycholoog en andere onderwijs- en zorgprofessionals. <br /> Daarnaast zet zij haar werk voort rond de psychologie van de gurbet (leven in den vreemde) binnen de Turkse gemeenschap: gevoel van verbondenheid, heimwee, aanpassingsprocessen, gevoelens van tekortschieten en aanpassingsproblemen. Hoewel zij een opleiding in de psychoanalyse heeft gevolgd, geeft zij—vooral in het werk met expats—de voorkeur aan ondersteunende, psycho-educatie-gebaseerde therapeutische technieken.',
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
    'about.title': 'Onze Existentiële en Ondersteunende Aanpak',
    'about.description': 'Wij zijn een ervaren team in de klinische psychologie en zijn ervan overtuigd dat geen enkele menselijke moeilijkheid met gestandaardiseerde oplossingen kan worden opgelost. <br /> Onze aanpak is gebaseerd op een existentieel perspectief: elke persoon heeft zijn eigen verhaal, waarden, cultuur en unieke hulpbronnen. <br /> We streven ernaar om eerst de hulpbronnen en behoeften van elk individu grondig te begrijpen, samen de doelen te verduidelijken, mogelijke opties te verkennen en stap voor stap een realistisch en uitvoerbaar plan te ontwikkelen.',
    'about.stats.therapists': 'Gecertificeerde therapeuten',
    'about.stats.patients': 'Ondersteunde patiënten',
    'about.stats.satisfaction': 'Tevredenheidspercentage',
    'about.stats.support': 'Spoedondersteuning',
    'about.approach.title': 'Onze praktijk is gebaseerd op:',
    'about.approach.1': 'Ondersteunende psychotherapie: om een veilige en respectvolle ruimte te bieden,',
    'about.approach.2': 'Psycho-educatie: om de eigen situatie en keuzemogelijkheden beter te begrijpen,',
    'about.approach.3': 'Cognitief-gedragsmatige technieken: wanneer praktische hulpmiddelen nodig zijn.',
    
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
