(() => {
  const STORAGE_KEY = "wemarine-language";

  const translations = {
    en: {
      shared: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About us",
        "nav.contacts": "Contacts",
        "nav.quote": "Request a quote",
        "nav.whatsapp": "Chat on WhatsApp",
        "nav.openMenu": "Open menu",
        "nav.closeMenu": "Close menu",
        "lang.label": "Language",
        "lang.italian": "Italian",
        "lang.english": "English",
        "footer.tagline": "Premium tubes, retubing and bespoke refit work for RIBs and inflatable boats",
        "footer.locationLabel": "Location",
        "footer.locationValue": "Address to be added",
        "footer.emailLabel": "Email",
        "footer.phoneLabel": "Phone",
        "footer.quickLinks": "Quick links",
        "footer.follow": "Follow us",
        "footer.rights": "WEMARINE. All rights reserved."
      },
      home: {
        "meta.title": "WEMARINE - Premium Tubes for RIBs and Marine Refit",
        "home.hero.imageAlt": "Professional work on inflatable tubes",
        "home.hero.kicker": "More than 20 years of experience in tubes for high-end boating",
        "home.hero.title": "Premium tubes, retubing and bespoke refit work for RIBs and inflatable boats.",
        "home.hero.lead": "WEMARINE designs and renews tubes for owners and professionals seeking uncompromising quality, long-term reliability and refined aesthetics. Every intervention starts with selected materials, precise workmanship and a tailored approach built around each individual boat.",
        "home.hero.primaryCta": "Request a quote",
        "home.hero.secondaryCta": "Explore services",
        "home.heroPanel.focusLabel": "Operational focus",
        "home.heroPanel.focusValue": "Tube production, premium retubing, refit and custom work",
        "home.heroPanel.clientsLabel": "Clients",
        "home.heroPanel.clientsValue": "Owners, boatyards, professionals and marine operators",
        "home.heroPanel.approachLabel": "Approach",
        "home.heroPanel.approachValue": "Analysis, design, execution, final inspection",
        "home.heroPanel.note": "Each project is defined to enhance performance, comfort, safety and the boat's identity.",
        "home.metrics.one": "Focused expertise in RIB tubes, built over more than twenty years of work.",
        "home.metrics.two": "Tailored solutions for production, full replacement, retubing and premium refit projects.",
        "home.metrics.three": "Selected materials, precision workmanship and direct dialogue with the client at every stage.",
        "home.trust.one": "Tailored solutions designed around each individual boat",
        "home.trust.two": "Build quality focused on reliability, airtightness and durability",
        "home.trust.three": "Recognised experience in the professional and high-end marine sector",
        "home.trust.four": "Refined detailing, careful finishes and thorough final inspection",
        "home.services.kicker": "Featured services",
        "home.services.title": "Interventions designed to enhance the value, functionality and aesthetics of the boat.",
        "home.services.lead": "From specialist repair to full replacement, including retubing and refit projects, we define every intervention according to the boat's configuration, its intended use and the level of result required.",
        "home.serviceCards.repair.title": "Specialist repair",
        "home.serviceCards.repair.desc": "Localised work on wear, cuts, leaks and structural issues, carried out with method and precision to recover the tube without compromising its balance or finish.",
        "home.serviceCards.repair.li1": "Damage and airtightness assessment",
        "home.serviceCards.repair.li2": "The most effective solution, aligned with the boat's value",
        "home.serviceCards.repair.li3": "Goal: restore reliability, safety and perceived quality",
        "home.serviceCards.replacement.title": "Replacement and premium retubing",
        "home.serviceCards.replacement.desc": "When the boat requires a deeper intervention, we produce new tubes and bespoke retubing solutions consistent with its geometry, intended use and identity.",
        "home.serviceCards.replacement.li1": "Integrated technical and aesthetic renewal",
        "home.serviceCards.replacement.li2": "Custom configurations, materials and details",
        "home.serviceCards.replacement.li3": "Solutions designed for owners and marine professionals",
        "home.serviceCards.refit.title": "Refit and custom work",
        "home.serviceCards.refit.desc": "Interventions designed to transform the RIB with a more exclusive visual language, improving finishes, visual comfort and overall presence without losing technical coherence.",
        "home.serviceCards.refit.li1": "Updated finishes, style and overall presentation",
        "home.serviceCards.refit.li2": "Interventions tailored to real use and the level of the boat",
        "home.serviceCards.refit.li3": "A balanced enhancement of technical quality and refined aesthetics",
        "home.process.imageAlt": "RIB improved after intervention",
        "home.process.badgeTitle": "Working method",
        "home.process.badgeText": "Every intervention starts with a concrete reading of the boat and ends with a final inspection focused on delivery.",
        "home.process.kicker": "How we work",
        "home.process.title": "A clear process built on technical logic.",
        "home.process.lead": "Each intervention follows clear stages: analysis of the issue, definition of the solution, accurate workmanship and final verification before delivery.",
        "home.process.step1.title": "Initial assessment",
        "home.process.step1.desc": "We gather images, technical information and usage goals to define the real scope of the job.",
        "home.process.step2.title": "Clear proposal",
        "home.process.step2.desc": "We propose a solution consistent with the boat's condition, the value of the intervention and the client's expected outcome.",
        "home.process.step3.title": "Execution and checks",
        "home.process.step3.desc": "We carry out the work with attention to detail, clean execution and final verification of the result.",
        "home.process.cta": "Discover our approach",
        "home.portfolio.kicker": "Selected projects",
        "home.portfolio.title": "Examples of work on tubes, refit projects and technical interventions.",
        "home.portfolio.lead": "A selection of jobs showing the type of work we carry out on RIBs and inflatable boats, from repairs and replacements to refit work and technical detailing.",
        "home.portfolio.filterAll": "All",
        "home.portfolio.filterRepair": "Repairs",
        "home.portfolio.filterReplacement": "Replacements",
        "home.portfolio.filterRefit": "Refit",
        "home.portfolio.filterDetail": "Technical details",
        "home.portfolio.card1.alt": "Tube repair",
        "home.portfolio.card1.tag": "Repair",
        "home.portfolio.card1.title": "Localised recovery with a clean finish",
        "home.portfolio.card1.desc": "A targeted intervention designed to solve a specific issue without altering the overall balance of the boat.",
        "home.portfolio.card2.alt": "Tube replacement",
        "home.portfolio.card2.tag": "Replacement",
        "home.portfolio.card2.title": "Complete renewal to restore the RIB's full presence",
        "home.portfolio.card2.desc": "A solution designed for cases where wear and overall condition call for a clear leap in quality.",
        "home.portfolio.card3.alt": "Professional refit",
        "home.portfolio.card3.tag": "Refit",
        "home.portfolio.card3.title": "Refit designed to renew the boat with order and consistency",
        "home.portfolio.card3.desc": "An intervention designed to improve finishes, the boat's presence and perceived quality without compromising technical reliability.",
        "home.portfolio.card4.alt": "Work detail",
        "home.portfolio.card4.tag": "Details",
        "home.portfolio.card4.title": "Care in joints, material control and precise execution",
        "home.portfolio.card4.desc": "Details make a real difference to the final result and to the overall perception of professional workmanship.",
        "home.portfolio.card5.alt": "Before and after work",
        "home.portfolio.card5.tag": "Before and after",
        "home.portfolio.card5.title": "From the initial issue to the final result, with targeted work",
        "home.portfolio.card5.desc": "Each intervention is set up to solve a specific problem and restore the boat to more reliable, orderly conditions.",
        "home.portfolio.card6.alt": "Custom refit",
        "home.portfolio.card6.tag": "Custom",
        "home.portfolio.card6.title": "Solutions built around the boat, never applied as a standard package",
        "home.portfolio.card6.desc": "When a client needs custom work, we define materials, configuration and finishes according to use and expected outcome.",
        "home.why.kicker": "Why We Marine",
        "home.why.title": "Why choose WEMARINE for tubes, retubing and premium refit work.",
        "home.why.lead": "Our positioning combines experience, advanced craftsmanship and a culture of detail to deliver a service consistent with premium boating.",
        "home.why.card1.title": "Real specialisation",
        "home.why.card1.desc": "A clear focus on tubes communicates expertise rather than generic services.",
        "home.why.card2.title": "Tailored solutions",
        "home.why.card2.desc": "Every boat requires a specific evaluation, the right materials and a coherent proposal.",
        "home.why.card3.title": "Orderly result",
        "home.why.card3.desc": "Every intervention aims to improve both the boat's functionality and its overall appearance.",
        "home.why.card4.title": "Support for private and professional clients",
        "home.why.card4.desc": "We handle requests from owners, boatyards and professional partners, including projects and supply needs across Europe.",
        "home.faq.kicker": "Frequently asked questions",
        "home.faq.title": "The most common questions before requesting an intervention.",
        "home.faq.lead": "Useful answers to understand how we work, when it makes sense to intervene and which information helps with an initial assessment.",
        "home.faq.cta": "Let's discuss your project",
        "home.faq.item1.title": "How do I know whether repair or replacement is the better choice?",
        "home.faq.item1.desc": "It depends on the overall condition, type of damage, age of the tube and the final objective. Our initial assessment is specifically meant to define the most sensible solution.",
        "home.faq.item2.title": "Do you also work with boatyards and professional operators?",
        "home.faq.item2.desc": "Yes. We work with both private clients and companies, boatyards and marine operators looking for a reliable specialist for tube work.",
        "home.faq.item3.title": "Can I send photos and details for an initial review?",
        "home.faq.item3.desc": "Yes. It is the fastest way to start an initial assessment. Clear photos, the boat model and the goal of the intervention help us define the right proposal.",
        "home.final.kicker": "Quick request",
        "home.final.title": "Do you want to renew your RIB with premium tubes, retubing or refit work?",
        "home.final.lead": "Send us photos, the boat model and the goal of the project to receive clear initial guidance that matches the boat's value.",
        "home.final.cta1": "Chat on WhatsApp",
        "home.final.cta2": "Request information"
      },
      services: {
        "meta.title": "WEMARINE - Premium Tube and Marine Refit Services",
        "services.hero.kicker": "Production, retubing and refit for high-end boating",
        "services.hero.title": "Services dedicated to premium tubes for RIBs and inflatable boats.",
        "services.hero.lead": "We deliver tailored interventions that combine technical precision, material quality and refined aesthetics, from specialist repair to retubing and complete refit work.",
        "services.overview.kicker": "Service overview",
        "services.overview.title": "Every intervention starts from a precise vision: performance, durability and the boat's image.",
        "services.overview.lead": "We analyse the tube's condition, the boat's intended use and the client's needs in order to propose a concrete, proportionate and technically sound solution.",
        "services.overview.info1.label": "Main services",
        "services.overview.info1.value": "Repair, replacement, retubing, refit and custom work",
        "services.overview.info2.label": "Clients",
        "services.overview.info2.value": "Private owners, companies, dealers, fleets and marine operators",
        "services.overview.info3.label": "Goal",
        "services.overview.info3.value": "Improve safety, durability, functionality and the boat's overall performance",
        "services.cards.repair.tag": "Repair",
        "services.cards.repair.title": "Localised repairs with an initial evaluation of the real recovery margin",
        "services.cards.repair.desc": "We intervene when the damage is limited and a repair can return the tube to reliable condition without unnecessary work.",
        "services.cards.repair.li1": "Localised damage and wear-related issues",
        "services.cards.repair.li2": "Technical solution tailored to the specific case",
        "services.cards.repair.li3": "Clear guidance on whether the intervention is worthwhile",
        "services.cards.replacement.tag": "Replacement",
        "services.cards.replacement.title": "Complete replacement for boats requiring a deeper recovery",
        "services.cards.replacement.desc": "When wear is advanced or repair would no longer be a solid choice, we define a full replacement in an orderly and coherent way.",
        "services.cards.retubing.tag": "Retubing",
        "services.cards.retubing.title": "Retubing designed to elevate the boat technically and aesthetically",
        "services.cards.retubing.desc": "An intervention that goes beyond replacement and redefines the balance between performance, appearance and the boat's identity.",
        "services.cards.refit.tag": "Refit",
        "services.cards.refit.title": "Refit and visual renewal with attention to overall consistency",
        "services.cards.refit.desc": "We update the boat without making it feel artificial: the result should look professional, not built merely to impress.",
        "services.cards.support.tag": "Client support",
        "services.cards.support.title": "Supply and project work for clients beyond the single owner",
        "services.cards.support.desc": "We also handle more structured requests from boatyards, companies and marine operators looking for continuity, reliability and a specialist point of reference, including supply needs across Europe.",
        "services.process.kicker": "How an intervention develops",
        "services.process.title": "Every intervention follows a precise method, from assessment to delivery.",
        "services.process.lead": "Good work means working in order: understanding the issue, defining the right solution, carrying out the job carefully and checking the final result.",
        "services.process.card1.title": "Information gathering",
        "services.process.card1.desc": "Photos, boat condition and client priorities.",
        "services.process.card2.title": "Diagnosis and proposal",
        "services.process.card2.desc": "Case analysis with a recommended solution and defined scope.",
        "services.process.card3.title": "Execution",
        "services.process.card3.desc": "Work performed with attention to cleanliness, order and technical consistency.",
        "services.process.card4.title": "Final verification",
        "services.process.card4.desc": "Final check before delivery or return to service.",
        "services.values.title": "What defines our service",
        "services.values.row1.label": "Technical assessment",
        "services.values.row1.desc": "Every proposal starts from the real condition of the boat and how the client uses it.",
        "services.values.row2.label": "Targeted intervention",
        "services.values.row2.desc": "Repair, replacement or refit are recommended according to convenience and the expected result.",
        "services.values.row3.label": "Final control",
        "services.values.row3.desc": "Attention to detail and final verification are part of the work, not an afterthought.",
        "services.detail.imageAlt": "Technician working on tubes",
        "services.detail.kicker": "Materials and attention to detail",
        "services.detail.title": "Suitable materials, technical care and workmanship consistent with the boat.",
        "services.detail.lead": "Every intervention is carried out with attention to airtightness, durability, finishes and consistency with the boat structure, avoiding improvised or unreliable solutions.",
        "services.detail.li1": "Technical choices explained clearly",
        "services.detail.li2": "Attention to airtightness, durability and long-term reliability",
        "services.detail.li3": "Work finished carefully, including the aesthetic result",
        "services.detail.li4": "Direct dialogue with the client before, during and after the intervention",
        "services.portfolio.kicker": "Filterable portfolio",
        "services.portfolio.title": "Examples of work carried out on tubes, RIBs and renewal projects.",
        "services.portfolio.lead": "A selection of jobs that helps explain the kind of work we do, from the recovery of localised damage to the complete renewal of the boat.",
        "services.portfolio.filterAll": "All projects",
        "services.portfolio.filterRepair": "Repairs",
        "services.portfolio.filterReplacement": "Replacements",
        "services.portfolio.filterRefit": "Refit",
        "services.portfolio.filterDetail": "Details",
        "services.portfolio.card1.alt": "Targeted repair",
        "services.portfolio.card1.tag": "Repair",
        "services.portfolio.card1.title": "Precise recovery of a localised issue",
        "services.portfolio.card1.desc": "First the issue is understood, then the intervention is calibrated and finished cleanly.",
        "services.portfolio.card2.alt": "Complete replacement",
        "services.portfolio.card2.tag": "Replacement",
        "services.portfolio.card2.title": "New configuration with a stronger overall presence",
        "services.portfolio.card2.desc": "A deeper solution when recovery would no longer be enough.",
        "services.portfolio.card3.alt": "Tube refit",
        "services.portfolio.card3.tag": "Refit",
        "services.portfolio.card3.title": "Complete refit to renew the boat's image and overall order",
        "services.portfolio.card3.desc": "An intervention aimed at improving finishes, formal cleanliness and the boat's perceived quality.",
        "services.portfolio.card4.alt": "Technical detail",
        "services.portfolio.card4.tag": "Details",
        "services.portfolio.card4.title": "Precision in joints and finishes",
        "services.portfolio.card4.desc": "Technical details that improve the perceived quality of the final outcome.",
        "services.final.kicker": "Direct contact",
        "services.final.title": "Do you need an intervention or want to understand which service suits your boat best?",
        "services.final.lead": "Send us photos and details of the boat to receive a clear first indication of the most appropriate path.",
        "services.final.cta1": "Chat on WhatsApp",
        "services.final.cta2": "Request an assessment"
      },
      about: {
        "meta.title": "WEMARINE - About us",
        "about.hero.kicker": "Identity, experience and positioning",
        "about.hero.title": "WEMARINE: more than 20 years of experience in tubes for RIBs and inflatable boats.",
        "about.hero.lead": "We create tailored solutions for owners and professionals seeking uncompromising quality, reliability, performance and aesthetics aligned with high-end boating.",
        "about.identity.kicker": "Identity",
        "about.identity.title": "WEMARINE was built around a precise focus: producing and renewing tubes with a tailored approach.",
        "about.identity.lead": "We handle the production, repair, replacement, retubing and refit of tubes with attention to functionality, durability, design and detail. Every intervention is built to enhance the boat, not to apply a standard solution.",
        "about.identity.card1.title": "Specialisation",
        "about.identity.card1.desc": "Focusing on tubes allows us to build a more credible technical language and a more recognisable service.",
        "about.identity.card2.title": "Tailored approach",
        "about.identity.card2.desc": "Every intervention is defined according to what the boat truly requires, with materials, finishes and solutions consistent with the project.",
        "about.identity.imageAlt": "Professional We Marine workmanship",
        "about.values.kicker": "Strengths",
        "about.values.title": "The values that guide the way we work every day.",
        "about.values.lead": "Experience, advanced craftsmanship, technical care and attention in execution are at the heart of every job, from a single intervention to the most complete renewal.",
        "about.values.card1.title": "Technical reading",
        "about.values.card1.desc": "Every case is assessed starting from the real condition of the boat.",
        "about.values.card2.title": "Tailored proposals",
        "about.values.card2.desc": "The service is not applied in a standard way, but adjusted to the goal.",
        "about.values.card3.title": "Clear relationship",
        "about.values.card3.desc": "We communicate directly, with readable steps and realistic expectations.",
        "about.values.card4.title": "Careful result",
        "about.values.card4.desc": "The work must appear solid, orderly, distinctive and consistent with a high-level marine context.",
        "about.process.kicker": "Working approach",
        "about.process.title": "Our approach starts from assessing the boat and ends with a concrete solution.",
        "about.process.lead": "Every project follows a clear path: we assess the case, define the most appropriate intervention and work carefully through to the final check.",
        "about.process.step1.title": "We examine the boat and listen to the context",
        "about.process.step1.desc": "Every intervention starts from the meeting point between technical conditions and the boat's real use.",
        "about.process.step2.title": "We define the most sensible option",
        "about.process.step2.desc": "Repair, replacement, retubing or refit must be justified solutions, never automatic decisions.",
        "about.process.step3.title": "We carry out the work with order and attention to detail",
        "about.process.step3.desc": "Every job must ensure reliability, clean execution and a result consistent with the level of the boat.",
        "about.focus.imageAlt": "Boat enhanced after intervention",
        "about.focus.kicker": "Perceived value",
        "about.focus.title": "Reliability, specialisation and a culture of detail are at the centre of our work.",
        "about.focus.lead": "We work to offer a solid, recognisable service consistent with premium boating, where the client finds technical expertise, clear dialogue and solutions built around their boat.",
        "about.focus.item1.label": "Focus",
        "about.focus.item1.value": "Tubes, retubing, refit and tailored work",
        "about.focus.item2.label": "Tone",
        "about.focus.item2.value": "Technical, tailored, professional",
        "about.focus.item3.label": "Goal",
        "about.focus.item3.value": "Convey reliability, value and encourage contact",
        "about.final.kicker": "Direct contact",
        "about.final.title": "If you want to enhance your boat, let's start from clear images and concrete goals.",
        "about.final.lead": "We can assess the case together and understand whether it calls for repair, retubing, refit or a deeper replacement.",
        "about.final.cta1": "Chat on WhatsApp",
        "about.final.cta2": "Go to contacts"
      },
      contact: {
        "meta.title": "WEMARINE - Contacts and Enquiries",
        "contact.hero.kicker": "Direct contact",
        "contact.hero.title": "Let's talk about your tube, retubing, refit or tailored project.",
        "contact.hero.lead": "If you need a specialist repair, a full replacement or a technical evaluation for a premium project, contact us to receive a clear discussion and an initial operational indication.",
        "contact.trust.one": "Direct responses for enquiries, quotations and technical information",
        "contact.trust.two": "Initial assessments based on photos, boat details and the project's objective",
        "contact.trust.three": "Support for owners, boatyards, companies and marine professionals",
        "contact.trust.four": "Availability for work and supply projects beyond the local area and internationally",
        "contact.direct.kicker": "How to contact us",
        "contact.direct.title": "A direct channel for quick requests and a complete contact area.",
        "contact.direct.lead": "We can help you understand whether the right path is repair, replacement, retubing or refit. For an initial assessment, clear photos, the boat model and a short description of the desired result are particularly useful.",
        "contact.direct.whatsapp.title": "WhatsApp",
        "contact.direct.whatsapp.desc": "The fastest channel to send images, describe the project and receive an initial indication.",
        "contact.direct.whatsapp.cta": "Open WhatsApp",
        "contact.direct.email.title": "Email",
        "contact.direct.email.desc": "For more structured requests, documentation or professional contacts.",
        "contact.direct.phone.title": "Phone",
        "contact.direct.phone.desc": "For direct conversations and clarification on the type of intervention required.",
        "contact.direct.location.title": "Operational area",
        "contact.direct.location.desc": "Support for private and professional clients, with the ability to manage projects and supplies across Europe.",
        "contact.direct.location.value": "Operational base to be defined",
        "contact.form.kicker": "Information request",
        "contact.form.title": "Send your request and tell us about the project you have in mind.",
        "contact.form.lead": "Fill in the form with the main details. If you already have photos or technical details of the boat, include them in the message: they will help us give you a faster and more useful reply.",
        "contact.form.nameLabel": "Full name",
        "contact.form.namePlaceholder": "Enter your name",
        "contact.form.emailLabel": "Email",
        "contact.form.emailPlaceholder": "Enter your email",
        "contact.form.phoneLabel": "Phone",
        "contact.form.phonePlaceholder": "Phone number",
        "contact.form.serviceLabel": "Service of interest",
        "contact.form.option1": "Tube repair",
        "contact.form.option2": "Tube replacement",
        "contact.form.option3": "Retubing",
        "contact.form.option4": "Aesthetic refit",
        "contact.form.option5": "Tailored work",
        "contact.form.option6": "Supply / professional request",
        "contact.form.boatLabel": "Boat model or type",
        "contact.form.boatPlaceholder": "RIB, tender, model, shipyard",
        "contact.form.areaLabel": "Area or origin",
        "contact.form.areaPlaceholder": "City, area or country",
        "contact.form.messageLabel": "Message",
        "contact.form.messagePlaceholder": "Describe the issue, the work you need or the result you want to achieve",
        "contact.form.note": "For a more precise assessment, tell us whether this is a repair, replacement, retubing, refit or professional request and include as much detail as possible.",
        "contact.form.submit": "Send request",
        "contact.support.imageAlt": "We Marine technician at work",
        "contact.support.kicker": "When to contact us",
        "contact.support.title": "We can support you both for a specific issue and for a broader project.",
        "contact.support.lead": "We can step in for different situations: from a localised leak to complete tube renewal, as well as dedicated requests from owners, boatyards and industry professionals.",
        "contact.support.li1": "Repair of damage, wear or localised critical points",
        "contact.support.li2": "Complete tube replacement or premium retubing",
        "contact.support.li3": "Aesthetic refit, full renewal and bespoke work",
        "contact.support.li4": "Requests from boatyards, companies, fleets and marine operators",
        "contact.response.kicker": "For a more useful reply",
        "contact.response.title": "Some information makes a real difference from the very first contact.",
        "contact.response.lead": "A clear message helps us understand the type of intervention better and guide you immediately towards the most suitable solution.",
        "contact.response.step1.title": "Send photos and details of the issue",
        "contact.response.step1.desc": "Sharp images and a short description help us read the condition of the tube or boat correctly.",
        "contact.response.step2.title": "Tell us the model, use and objective",
        "contact.response.step2.desc": "Understanding how the boat is used helps us recommend a solution that is truly coherent.",
        "contact.response.step3.title": "Receive an initial indication",
        "contact.response.step3.desc": "We reply with a clear discussion that helps define the next step in a serious and practical way.",
        "contact.final.kicker": "Quick request",
        "contact.final.title": "Do you prefer a fast, direct contact?",
        "contact.final.lead": "Send us photos and a description of the case on WhatsApp: it is the fastest way to start a precise assessment.",
        "contact.final.cta1": "Open WhatsApp",
        "contact.final.cta2": "Fill in the form"
      }
    }
  };

  function getStoredLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" ? "en" : "it";
  }

  function getPageName() {
    return document.body.dataset.page || "home";
  }

  function resolveTranslation(lang, key) {
    if (lang !== "en") return null;

    const page = getPageName();
    return translations.en[page]?.[key] ?? translations.en.shared[key] ?? null;
  }

  function captureDefaults() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      if (!element.dataset.i18nDefault) {
        element.dataset.i18nDefault = element.textContent.trim();
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      if (!element.dataset.i18nPlaceholderDefault) {
        element.dataset.i18nPlaceholderDefault = element.getAttribute("placeholder") || "";
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      if (!element.dataset.i18nAltDefault) {
        element.dataset.i18nAltDefault = element.getAttribute("alt") || "";
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      if (!element.dataset.i18nAriaLabelDefault) {
        element.dataset.i18nAriaLabelDefault = element.getAttribute("aria-label") || "";
      }
    });

    if (!document.documentElement.dataset.defaultTitle) {
      document.documentElement.dataset.defaultTitle = document.title;
    }
  }

  function updateLanguageControls(lang) {
    document.querySelectorAll("[data-lang-current]").forEach((element) => {
      element.textContent = lang.toUpperCase();
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const active = button.dataset.langOption === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyLanguage(lang) {
    captureDefaults();

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-language", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translation = resolveTranslation(lang, key);
      element.textContent = translation ?? element.dataset.i18nDefault ?? element.textContent;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const translation = resolveTranslation(lang, key);
      element.setAttribute("placeholder", translation ?? element.dataset.i18nPlaceholderDefault ?? "");
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      const translation = resolveTranslation(lang, key);
      element.setAttribute("alt", translation ?? element.dataset.i18nAltDefault ?? "");
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      const translation = resolveTranslation(lang, key);
      element.setAttribute("aria-label", translation ?? element.dataset.i18nAriaLabelDefault ?? "");
    });

    document.title = resolveTranslation(lang, "meta.title") ?? document.documentElement.dataset.defaultTitle;

    localStorage.setItem(STORAGE_KEY, lang);
    updateLanguageControls(lang);
  }

  function initLanguageSwitcher() {
    const initialLanguage = getStoredLanguage();

    applyLanguage(initialLanguage);

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextLanguage = button.dataset.langOption === "en" ? "en" : "it";
        applyLanguage(nextLanguage);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
})();
