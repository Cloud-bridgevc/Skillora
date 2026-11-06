// Fictional sample data for the Skillora prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Mrs Bisi Olawale",
      "role": "Head of Learning"
    },
    {
      "name": "Chinedu Okeke",
      "role": "Trainer"
    },
    {
      "name": "Zainab Aliyu",
      "role": "Trainer"
    },
    {
      "name": "Kemi Ogundipe",
      "role": "Learning Analyst"
    },
    {
      "name": "Ahmed Bello",
      "role": "Compliance Reviewer"
    }
  ],
  "items": [
    {
      "id": "SKL-901",
      "title": "Chargeback handling — new 5-step process",
      "subtitle": "Circular 24/03 · effective 1 April",
      "group": "Branch 14",
      "metrics": [
        [
          "Agents",
          "9"
        ],
        [
          "Below mastery",
          "6"
        ],
        [
          "Avg mastery",
          "54%"
        ],
        [
          "Most-missed step",
          "Step 3: evidence upload"
        ]
      ],
      "flags": [
        {
          "label": "Skill gap",
          "severity": "high",
          "confidence": 0.84,
          "explanation": "Six of nine agents scored below mastery on the new chargeback process, mostly missing the evidence-upload step introduced in the circular.",
          "evidence": [
            [
              "Practice results",
              "6 of 9 below 70%",
              "Simulation scores"
            ],
            [
              "Most-missed step",
              "Step 3 (missed 71%)",
              "Simulation analytics"
            ],
            [
              "Procedure change",
              "Step 3 added",
              "Circular 24/03 §2"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-902",
      "title": "KYC refresh for dormant accounts",
      "subtitle": "Compliance procedure v4.1",
      "group": "Branch 22",
      "metrics": [
        [
          "Staff",
          "12"
        ],
        [
          "Below mastery",
          "3"
        ],
        [
          "Avg mastery",
          "78%"
        ],
        [
          "Questions to assistant",
          "41"
        ]
      ],
      "flags": [
        {
          "label": "Repeated questions",
          "severity": "medium",
          "confidence": 0.72,
          "explanation": "Staff asked the assistant 41 questions about acceptable ID documents for dormant-account reactivation. A short refresher on §3.4 may help.",
          "evidence": [
            [
              "Assistant questions",
              "41 on §3.4",
              "Assistant logs (anonymised)"
            ],
            [
              "Practice errors",
              "ID type selection",
              "Simulation analytics"
            ],
            [
              "Procedure",
              "KYC v4.1 §3.4",
              "Approved documents"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-903",
      "title": "Pension enrolment — new agency form",
      "subtitle": "Agency procedure PEN-07",
      "group": "Ministry HR Desk",
      "metrics": [
        [
          "Officers",
          "15"
        ],
        [
          "Completed lesson",
          "15"
        ],
        [
          "Passed practice",
          "8"
        ],
        [
          "Common error",
          "Wrong beneficiary section"
        ]
      ],
      "flags": [
        {
          "label": "Completion without mastery",
          "severity": "medium",
          "confidence": 0.78,
          "explanation": "All officers completed the lesson, but only eight passed the practice task. Most errors are in the beneficiary section of the new form.",
          "evidence": [
            [
              "Lesson completion",
              "100%",
              "Learning records"
            ],
            [
              "Practice pass rate",
              "53%",
              "Simulation scores"
            ],
            [
              "Error location",
              "Section D (beneficiaries)",
              "Simulation analytics"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-904",
      "title": "Outdated procedure in use",
      "subtitle": "Escalation matrix referenced from v2",
      "group": "Contact Centre B",
      "metrics": [
        [
          "Agents",
          "40"
        ],
        [
          "References to v2",
          "17 this week"
        ],
        [
          "Current version",
          "v3 (Feb)"
        ],
        [
          "Impact",
          "Wrong escalation tier"
        ]
      ],
      "flags": [
        {
          "label": "Version confusion",
          "severity": "high",
          "confidence": 0.8,
          "explanation": "Agents are quoting the old escalation matrix in practice and assistant questions. The v3 lesson has not been assigned to this centre.",
          "evidence": [
            [
              "v2 references",
              "17 this week",
              "Assistant logs (anonymised)"
            ],
            [
              "v3 lesson assigned",
              "No",
              "Learning assignments"
            ],
            [
              "Approved version",
              "v3, Feb 2026",
              "Document register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-905",
      "title": "Machine lockout procedure",
      "subtitle": "Safety SOP LOTO-02",
      "group": "Plant Line 3",
      "metrics": [
        [
          "Operators",
          "22"
        ],
        [
          "Below mastery",
          "5"
        ],
        [
          "Avg mastery",
          "81%"
        ],
        [
          "Safety-critical",
          "Yes"
        ]
      ],
      "flags": [
        {
          "label": "Safety-critical gap",
          "severity": "high",
          "confidence": 0.86,
          "explanation": "Five operators missed the verification step in lockout practice. Because this is safety-critical, a supervised walkthrough is suggested before their next maintenance shift.",
          "evidence": [
            [
              "Practice results",
              "5 below mastery",
              "Simulation scores"
            ],
            [
              "Missed step",
              "Zero-energy verification",
              "Simulation analytics"
            ],
            [
              "SOP",
              "LOTO-02 §5",
              "Approved documents"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-906",
      "title": "New data bundle plans",
      "subtitle": "Product sheet Q2",
      "group": "Contact Centre B",
      "metrics": [
        [
          "Agents",
          "40"
        ],
        [
          "Avg mastery",
          "88%"
        ],
        [
          "Assistant questions",
          "12"
        ],
        [
          "Customer-facing",
          "Yes"
        ]
      ],
      "flags": [
        {
          "label": "Minor gap",
          "severity": "low",
          "confidence": 0.66,
          "explanation": "Most agents have mastered the new plans; a few confuse rollover rules between two bundles.",
          "evidence": [
            [
              "Mastery",
              "88% average",
              "Assessment results"
            ],
            [
              "Confused rule",
              "Rollover (Plan M vs L)",
              "Assessment analytics"
            ],
            [
              "Source",
              "Product sheet Q2 p.2",
              "Approved documents"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-907",
      "title": "Procurement threshold rules",
      "subtitle": "Agency procurement manual §6",
      "group": "Ministry HR Desk",
      "metrics": [
        [
          "Officers",
          "15"
        ],
        [
          "Low confidence answers",
          "9"
        ],
        [
          "Avg mastery",
          "61%"
        ],
        [
          "Content gap",
          "Possible"
        ]
      ],
      "flags": [
        {
          "label": "Possible content gap",
          "severity": "medium",
          "confidence": 0.6,
          "explanation": "Officers ask about thresholds for emergency procurement, but the approved manual section is ambiguous. The issue may be the document rather than the learners.",
          "evidence": [
            [
              "Assistant could not answer",
              "9 questions",
              "Assistant logs (anonymised)"
            ],
            [
              "Manual coverage",
              "§6.3 unclear on emergencies",
              "Approved documents"
            ],
            [
              "Mastery",
              "61%",
              "Assessment results"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-908",
      "title": "Cash handling — end-of-day balancing",
      "subtitle": "Branch operations manual §2",
      "group": "Branch 22",
      "metrics": [
        [
          "Tellers",
          "8"
        ],
        [
          "Below mastery",
          "2"
        ],
        [
          "Avg mastery",
          "76%"
        ],
        [
          "New joiners",
          "2"
        ]
      ],
      "flags": [
        {
          "label": "New joiner support",
          "severity": "low",
          "confidence": 0.71,
          "explanation": "The two tellers below mastery joined this month. Their errors match early learning patterns; extra practice is likely enough.",
          "evidence": [
            [
              "Below mastery",
              "2 (both new joiners)",
              "Learning records"
            ],
            [
              "Errors",
              "Float reconciliation",
              "Simulation analytics"
            ],
            [
              "Tenure",
              "< 30 days",
              "HR feed (role only)"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "SKL-909",
      "title": "Customer complaint logging",
      "subtitle": "Service procedure CS-03",
      "group": "Branch 14",
      "metrics": [
        [
          "Agents",
          "9"
        ],
        [
          "Avg mastery",
          "91%"
        ],
        [
          "Below mastery",
          "0"
        ],
        [
          "Status",
          "On track"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
