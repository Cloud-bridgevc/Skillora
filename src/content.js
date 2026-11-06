// Site copy for Skillora. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Skillora",
  "tagline": "Train teams around the work they do.",
  "categories": [
    "AI",
    "Workforce Development",
    "Enterprise Learning"
  ],
  "about": "Skillora helps organisations teach the knowledge employees need for daily work. Its AI builds guided practice from approved documents and helps trainers identify where further support is needed.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#1e1038\"/><path d=\"M6 13 16 8l10 5-10 5z\" fill=\"#c4b5fd\"/><path d=\"M10 15.5V20c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5\" fill=\"none\" stroke=\"#fcd34d\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><path d=\"M26 13v6\" stroke=\"#c4b5fd\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
  "words": {
    "records": "learning gaps",
    "decider": "trainers and team leads",
    "sources": "approved procedures, assessments and practice results",
    "model": "Retrieval-grounded models turn approved procedures into lessons and scenarios; adaptive models estimate mastery per skill from assessments and practice, with every answer cited.",
    "store": "Amazon Bedrock Knowledge Bases"
  },
  "hero": {
    "eyebrow": "Role-based learning from your procedures",
    "before": "Turn operating procedures into ",
    "em": "skills your teams can practise",
    "after": ".",
    "points": [
      "Lessons and simulations built from approved documents",
      "Answers cite the exact procedure",
      "Trainers see where support is needed"
    ],
    "floatTitle": "Gap: chargeback steps",
    "floatText": "Branch 14 · 6 of 9 agents below mastery"
  },
  "problem": {
    "title": "People complete the training and still struggle with the task.",
    "text": "Banks, public agencies and large employers distribute changing procedures as long documents and general courses. Completion rates look fine, but staff still get stuck on the specific steps their roles require, and trainers cannot see where.",
    "fragments": [
      "A 60-page circular emailed on Friday, effective Monday",
      "Completion certificates that say little about competence",
      "The same questions asked at every branch",
      "Trainers guessing where to focus"
    ]
  },
  "solution": {
    "title": "Learning built from your own procedures, for each role.",
    "text": "Skillora turns approved procedures into role-specific lessons and practical simulations. Adaptive models find learning gaps from assessments, and a document-grounded assistant answers questions with references to approved material.",
    "capabilities": [
      {
        "title": "Procedure-to-lesson",
        "text": "Converts approved documents into short lessons and realistic scenarios for each role, reviewed by trainers before release.",
        "demoLabel": "From circular 24/03",
        "demoValue": "6 lessons · 4 simulations"
      },
      {
        "title": "Adaptive practice",
        "text": "Adjusts practice to each learner and estimates mastery by skill, not just completion.",
        "demoLabel": "Mastery",
        "demoValue": "KYC refresh 82% · Chargebacks 54%"
      },
      {
        "title": "Grounded assistant",
        "text": "Answers staff questions only from approved material, with the section cited.",
        "demoLabel": "Answer source",
        "demoValue": "Ops manual §4.2"
      }
    ]
  },
  "stepsTitle": "From approved documents to demonstrated skill.",
  "steps": [
    [
      "Upload",
      "Add approved procedures, policies and manuals; each is versioned and tagged by role."
    ],
    [
      "Build",
      "Skillora drafts lessons and simulations; trainers review and approve before anything is published."
    ],
    [
      "Practise",
      "Staff learn and practise on realistic tasks; mastery is estimated skill by skill."
    ],
    [
      "Support",
      "Trainers see gaps by team and skill, plan coaching, and record decisions."
    ]
  ],
  "audiencesTitle": "For organisations where procedures matter.",
  "audiences": [
    {
      "title": "Commercial bank training academies",
      "text": "Teach new products, compliance changes and branch procedures quickly.",
      "outcome": "Faster readiness"
    },
    {
      "title": "State civil service training departments",
      "text": "Teach agency procedures and track demonstrated understanding.",
      "outcome": "Evidence of competence"
    },
    {
      "title": "Telecom customer service centres",
      "text": "Prepare agents for new plans, policies and tricky customer cases.",
      "outcome": "Better first-call answers"
    },
    {
      "title": "Large manufacturing employers",
      "text": "Train teams on safety, quality and machine procedures.",
      "outcome": "Safer, consistent work"
    }
  ],
  "publicSector": {
    "title": "Teach agency procedures and see real understanding.",
    "text": "Skillora helps civil service training teams turn agency procedures into practical learning, and track demonstrated understanding rather than attendance.",
    "points": [
      "Learning built only from approved agency documents",
      "Mastery tracked by skill and department",
      "Updates rolled out when procedures change",
      "Trainers decide coaching and certification"
    ]
  },
  "ai": {
    "title": "The model drafts and coaches. Trainers decide.",
    "intro": "Learning content must be accurate, and assessments affect careers. Skillora keeps trainers in charge of what is published and how results are used.",
    "does": [
      "Drafts lessons and scenarios from approved documents",
      "Answers questions only from approved material, with citations",
      "Estimates mastery by skill from practice and assessment",
      "Highlights teams and topics that need support"
    ],
    "never": [
      "Publishes content without trainer approval",
      "Answers from outside approved documents",
      "Makes hiring, promotion or disciplinary decisions",
      "Ranks individuals for performance management"
    ]
  },
  "pricing": {
    "model": "Monthly fee per active learner, with annual institutional licences.",
    "tiers": [
      {
        "name": "Team",
        "summary": "For a training team or department.",
        "price": "₦3,500",
        "unit": "/ active learner / month",
        "features": [
          "Up to 300 learners",
          "Procedure-to-lesson",
          "Grounded assistant",
          "Mastery reports"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Academy",
        "summary": "For training academies and service centres.",
        "price": "₦2,500",
        "unit": "/ active learner / month",
        "features": [
          "From 300 learners",
          "Everything in Team",
          "Simulations",
          "Gap analytics by team",
          "SSO"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Institution",
        "summary": "For banks, agencies and large employers.",
        "price": "Custom",
        "unit": "/ year",
        "features": [
          "Annual institutional licence",
          "HR and LMS integration",
          "Data residency options",
          "Dedicated success manager"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Ronke Aderibigbe",
      "role": "Founder/CEO",
      "initials": "RA",
      "bio": "Learning designer with enterprise training experience.",
      "focus": [
        "Learning design",
        "Enterprise training",
        "Partnerships"
      ]
    },
    {
      "name": "Abdulrahman Usman",
      "role": "Co-founder",
      "initials": "AU",
      "bio": "Organisational development specialist.",
      "focus": [
        "Organisational development",
        "Change management",
        "Operations"
      ]
    },
    {
      "name": "Ifeoma Onyekachi",
      "role": "CTO",
      "initials": "IO",
      "bio": "NLP engineer focused on retrieval and adaptive learning.",
      "focus": [
        "Retrieval",
        "Adaptive learning",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Will the assistant make things up?",
      "It answers only from approved documents and cites the section. If the answer is not in the approved material, it says so and suggests asking a trainer."
    ],
    [
      "Who approves the lessons?",
      "Trainers. Skillora drafts lessons and simulations, but nothing reaches learners until a trainer has reviewed and approved it."
    ],
    [
      "Can managers use it to rate staff?",
      "Skillora reports learning gaps to help trainers plan support. It is not designed for hiring, promotion or disciplinary decisions."
    ],
    [
      "Is Skillora a live product?",
      "Not yet. Skillora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Skillora flags, ranks and explains. Trainers and team leads review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Skillora exists",
    "manifesto": "Nobody wants to fail a customer because a procedure changed and they were never shown how. People learn by doing, with good answers close at hand. We want every employee to practise the real work before it matters.",
    "purpose": "Help organisations build real, role-specific skills from the procedures their people actually follow.",
    "why": "Procedures change faster than training can keep up. When staff are unsure, customers wait, errors creep in and compliance suffers. Practical, targeted learning closes that gap.",
    "stakesTitle": "Skills are changing fast.",
    "stats": [
      {
        "value": 39,
        "suffix": "%",
        "label": "Share of workers’ core skills expected to change by 2030.",
        "source": "World Economic Forum, Future of Jobs Report 2025",
        "url": "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
      },
      {
        "value": 59,
        "suffix": "%",
        "label": "Share of the workforce expected to need training by 2030.",
        "source": "World Economic Forum, Future of Jobs Report 2025",
        "url": "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
      },
      {
        "value": 63,
        "suffix": "%",
        "label": "Share of employers citing skills gaps as the main barrier to transformation.",
        "source": "World Economic Forum, Future of Jobs Report 2025",
        "url": "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
      }
    ],
    "changeTitle": "From reading the circular to practising the task.",
    "before": [
      "Long documents emailed to everyone",
      "Generic courses for every role",
      "Completion tracked, competence unknown",
      "Questions answered from memory, differently each time"
    ],
    "after": [
      "Short lessons for each role, from approved text",
      "Realistic practice on the actual task",
      "Mastery visible by skill and team",
      "Answers cited from the approved procedure"
    ],
    "principlesTitle": "What we believe about workplace learning.",
    "principles": [
      [
        "Grounded in approved text",
        "If it is not in the approved material, the assistant does not say it."
      ],
      [
        "Practice beats reading",
        "People learn the task by doing the task."
      ],
      [
        "Trainers stay in charge",
        "Nothing is published or acted on without them."
      ],
      [
        "Support, not surveillance",
        "Learning data helps people improve; it is not a ranking tool."
      ],
      [
        "Every role is different",
        "Learning should fit the work each person actually does."
      ],
      [
        "Keep up with change",
        "When a procedure changes, the training changes with it."
      ]
    ],
    "letterTitle": "Why we are building Skillora.",
    "letter": [
      "Ronke designed enterprise training for years and watched completion rates rise while the same mistakes kept happening on the floor. People had read the procedure; they had never practised it.",
      "Abdulrahman worked on organisational change and saw how slowly new procedures reached daily habits. Ifeoma had built retrieval systems that could answer questions from documents with citations, and adaptive models that could tell what someone had actually mastered.",
      "Skillora combines those: learning built from your own approved procedures, practice that feels like the job, and a clear view for trainers of where people need help."
    ],
    "visionTitle": "Where Skillora is going.",
    "visionIntro": "From procedure lessons to a learning layer for daily work.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with training teams."
      },
      {
        "stage": "Next",
        "title": "Academy pilots",
        "text": "Building lessons from real procedures with early partners and measuring mastery."
      },
      {
        "stage": "Then",
        "title": "Live learning",
        "text": "Role-based learning and grounded answers across whole organisations."
      },
      {
        "stage": "Later",
        "title": "Learning in the flow of work",
        "text": "Help that appears inside the tools staff use, when they need it."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Learning gap review",
    "subtitle": "Skill gaps detected across fictional teams after a procedure update, for trainer review.",
    "itemNoun": "learning gap",
    "itemNounPlural": "learning gaps",
    "groupLabel": "team",
    "queueTitle": "Gap queue",
    "humanNote": "Gaps guide coaching. Trainers decide what happens next.",
    "decisions": {
      "confirm": "Plan coaching",
      "dismiss": "No action needed",
      "escalate": "Refer to training lead"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Head of Learning",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Trainer",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Learning Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Compliance Reviewer",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which learning gaps need review first?",
      "Summarise the review status",
      "Show Branch 14",
      "Explain SKL-905"
    ],
    "refuse": "\\b(fire|sack|dismiss (him|her|them|the)|demot|promot|discipline|rank (the )?staff|performance review|who should be let go)",
    "refuseText": "Skillora reports learning gaps to support coaching. Hiring, promotion, discipline and performance ratings are decisions for managers and HR policy, not the model.",
    "refuseExamples": [
      "Who should we fire in Branch 14?",
      "Should we promote the top agent?",
      "Rank the staff for performance review"
    ]
  },
  "slug": "skillora",
  "url": "https://www.skillora.com",
  "email": "hello@skillora.com",
  "stepsNote": "Skillora recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every learning gap is confirmed, dismissed or escalated by trainers and team leads, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the approved procedures, assessments and practice results behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Skillora would run in production: ingestion of approved procedures, assessments and practice results, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for approved procedures, assessments and practice results."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Retrieval-grounded models turn approved procedures into lessons and scenarios; adaptive models estimate mastery per skill from assessments and practice, with every answer cited."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon Bedrock Knowledge Bases",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Skillora with your own team.",
    "text": "We are looking for a small number of early partners to shape Skillora. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
