export const frcpTopics = [
  // Ground & Underground Stability
  {
    id: "FRCP 1",
    title: "Rock Mass Management",
    description:
      "Controls and procedures for assessing, monitoring, and managing rock mass stability to prevent rockfalls, slope failures, and seismic incidents in underground and surface mining environments.",
    icon: "Mountain",
    image: "Rock_Mass_Management.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 2",
    title: "Shafts and Winders",
    description:
      "Safety controls for shaft access, conveyance operations, and winder systems, covering maintenance standards, signal protocols, overspeed protection, and emergency procedures.",
    icon: "ArrowDownUp",
    image: "Shafts_and_Winders.jpg",
    cost: 146395,
  },
  // Mobile Machinery & Traffic
  {
    id: "FRCP 3",
    title: "Trackless Mobile Machinery",
    description:
      "Controls and procedures for the safe operation of trackless mobile machinery (TMM) in processing environments, preventing collision and run-over incidents.",
    icon: "Truck",
    image: "Trackless_Mobile_Machinery.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 4",
    title: "Track-Bound Mobile Machinery",
    description:
      "Safety standards for the operation of rail-bound locomotives and related equipment in underground environments, covering collision prevention, speed controls, and signalling procedures.",
    icon: "Train",
    image: "Track-Bound_Mobile_Machinery.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 5",
    title: "Traffic Management",
    description:
      "Site traffic management plans, right-of-way rules, pedestrian exclusion zones, and vehicle segregation controls to prevent collision and run-over incidents on surface and underground roads.",
    icon: "TrafficCone",
    image: "Traffic_Management.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 6",
    title: "Scraping and Rigging",
    description:
      "Safe operating procedures for scraper winch systems and rigging practices in underground stope environments, covering equipment inspection, signal protocols, and exclusion zone management.",
    icon: "Link",
    image: "Scraping_and_Rigging.jpg",
    cost: 146395,
  },
  // Working at Height & Confined Space
  {
    id: "FRCP 7",
    title: "Working at Heights",
    description:
      "Safety protocols for all work conducted at elevation, including fall prevention, harness requirements, and inspection procedures for elevated platforms.",
    icon: "ArrowUp",
    image: "Working_at_Heights.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 8",
    title: "Confined Space",
    description:
      "Entry permits, atmospheric testing, and rescue procedures for confined spaces where workers face risks from toxic gas, oxygen deficiency, or engulfment.",
    icon: "CircleDashed",
    image: "Confined_Space.jpg",
    cost: 146395,
  },
  // Energy & Fire Hazards
  {
    id: "FRCP 9",
    title: "Isolation / Lockout",
    description:
      "Lockout/tagout procedures to ensure machinery is safely de-energised before maintenance work begins, preventing unexpected equipment start-up.",
    icon: "Lock",
    image: "Isolation___Lockout.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 10",
    title: "Electrical Safety",
    description:
      "Controls for working on or near electrical systems, including isolation and lockout of electrical equipment, arc flash protection, cable management, and authorisation requirements.",
    icon: "Zap",
    image: "Electrical_Safety.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 11",
    title: "Gases, Fires and Explosions",
    description:
      "Detection, prevention, and response protocols for gas accumulation, fire events, and explosive atmospheres in underground and surface environments.",
    icon: "Flame",
    image: "Gases,_Fires_and_Explosions.jpg",
    cost: 146395,
    featured: true,
  },
  {
    id: "FRCP 12",
    title: "Explosives & Blasting",
    description:
      "Prevention, storage, and handling protocols for explosive materials, including blasting procedures, detonator controls, exclusion zones, and emergency response in mining operations.",
    icon: "Bomb",
    image: "Explosives_&_Blasting.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 13",
    title: "Hot and Molten Materials",
    description:
      "Handling procedures and protective controls when working with extreme heat sources, molten metals, and high-temperature processes in processing operations.",
    icon: "Thermometer",
    image: "Hot_and_Molten_Materials.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 14",
    title: "Bulk Water",
    description:
      "Controls and emergency procedures for managing bulk water hazards including inrushes, flooding risks, and safe water management in mining operations.",
    icon: "Droplets",
    image: "Bulk_Water.jpg",
    cost: 146395,
  },
  // Materials & Equipment
  {
    id: "FRCP 15",
    title: "Hazardous Materials",
    description:
      "Safe handling, storage, and disposal of hazardous chemical substances, including the use of Safety Data Sheets and personal protective equipment.",
    icon: "AlertTriangle",
    image: "Hazardous_Materials.jpg",
    cost: 146395,
  },
  {
    id: "FRCP 16",
    title: "Equipment Safeguarding",
    description:
      "Guarding requirements for machinery and equipment to prevent contact with moving parts, nip points, and other mechanical hazards across all operations.",
    icon: "Shield",
    image: "Equipment_Safeguarding.jpg",
    cost: 146395,
  },
];

export const timeline = [
  {
    phase: "Kick-off & Asset Hand-over",
    week: "Week 0",
    milestone: "Signed SOW + 50% deposit",
    color: "bg-red-600",
  },
  {
    phase: "Storyboard & Script",
    week: "Week 1",
    milestone: "Approved script & storyboard",
    color: "bg-red-500",
  },
  {
    phase: "On-Site Film Shoot (if selected)",
    week: "Week 2",
    milestone: "Raw footage delivered",
    color: "bg-red-500",
  },
  {
    phase: "Animation Production",
    week: "Weeks 2–3",
    milestone: "Alpha MP4 for review",
    color: "bg-red-500",
  },
  {
    phase: "SME Review & Revisions",
    week: "Week 4",
    milestone: "Feedback received & applied",
    color: "bg-red-500",
  },
  {
    phase: "Final Delivery & Handover",
    week: "Week 4",
    milestone: "Master MP4 + remaining 50% invoice",
    color: "bg-green-600",
  },
];

export const paymentMilestones = [
  {
    percentage: 50,
    label: "Mobilisation",
    detail: "On kick-off — covers scripting & asset preparation",
  },
  {
    percentage: 40,
    label: "Animation Lock-off",
    detail: "All MP4s reviewed and approved by client",
  },
  {
    percentage: 10,
    label: "Final Delivery",
    detail: "Master MP4 files released upon final payment",
  },
];

export const scopeDeliverables = [
  {
    ref: "A",
    title: "On-Site Film Shoot (1 Day) — Optional",
    activities: [
      "One day of on-site filming at your operations",
      "Filming operational environments and safety-relevant workstations",
      "Demonstration of correct procedures and critical controls",
      "Capturing real work scenarios and hazard situations",
      "Filming supporting visuals for safety messaging",
    ],
    output: "Raw unedited stills and video footage",
    cost: 30000,
    optional: true,
  },
  {
    ref: "B",
    title: "1 × Safety Video",
    activities: [
      "Creation of 3D environments and custom safety scenarios",
      "Visualisation of hazards, risks, and critical control points",
      "Animated demonstrations of correct procedures and behaviours",
      "Development of safety infographics and iconography",
      "Integration of animation with filmed footage (if film shoot selected)",
    ],
    output: "1 × MP4 (1080p) Animated Video — 5 minutes",
    cost: 146395,
  },
];

export const assumptions = [
  "Client will provide all relevant safety documentation and procedures",
  "One consolidated feedback cycle per deliverable (two rounds total)",
  "Filming access will be arranged by the client",
  "English only — no translation or subtitling at this phase",
];

export const exampleScript = {
  title: "FRCP 13 – Gases, Fires and Explosions",
  subtitle: "4–5 Minute Safety Video Script",
  sections: [
    {
      heading: "1. Introduction of the Hazard",
      content:
        "Working underground or in processing environments means working around hazards that are often invisible. Gases, fires, and explosions are among the most dangerous risks in mining operations. These hazards can develop rapidly and without warning, creating situations where workers may be exposed to toxic gases, smoke, heat, or oxygen-deficient atmospheres. In underground environments especially, fires or explosions can quickly create irrespirable atmospheres, where the air can no longer sustain life.",
    },
    {
      heading: "2. Explanation of the FRCP Requirement",
      content:
        "The purpose of the FRCP is to ensure that systems, procedures, and people are in place to prevent fires, explosions, and hazardous gas exposure.",
      bullets: [
        "Poor or ineffective ventilation",
        "Accumulation of flammable gases",
        "Failure to test for gases",
        "Ventilation system failures",
        "Conducting blasting operations in a flammable gas atmosphere",
      ],
    },
    {
      heading: "3. Demonstration of Correct Procedures",
      content:
        "Before entering any underground workplace, employees must ensure that the area is safe. This includes testing the atmosphere for harmful gases and confirming that ventilation systems are operating correctly.",
      bullets: [
        "Static carbon monoxide and smoke sensors installed underground",
        "Gas detection systems linked to control rooms",
        "Portable gas detection instruments issued to employees",
      ],
    },
    {
      heading: "4. Key Controls and Responsibilities",
      bullets: [
        "Properly installed fire detection systems",
        "Regular inspection and maintenance of equipment",
        "Pre-use checks of gas detection instruments",
        "Monitoring of ventilation systems",
        "Adherence to safe work procedures",
      ],
    },
    {
      heading: "5. Summary of Critical Safety Rules",
      content:
        "Because when it comes to safety — prevention is always the most powerful control.",
      bullets: [
        "Test the atmosphere before entering a workplace",
        "Ensure gas detection equipment is inspected and functioning correctly",
        "Follow ventilation and fire prevention procedures at all times",
        "Respond immediately to alarms or abnormal conditions",
        "Follow the Trigger Action Response Plan whenever hazards are detected",
      ],
    },
  ],
};
