const records = {
  sensitive: [
    {
      item: "Dell Latitude 5550 Laptop",
      meta: "12 of 12 with signed 2062",
      lin: "LPT-5550 / 7021-01-RCCE-001",
      holder: "RCC-E ISB, SSG Cruz",
      status: "green",
      action: "Review",
      detail: "All assigned laptops have DA Form 2062 or required custody documentation attached. Monthly end user inventory is initiated automatically by the system.",
      due: "Today 1600",
    },
    {
      item: "TACLANE Micro Encryption Device",
      meta: "1 serial pending 2062",
      lin: "ENC-KG175D / 5810-01-RCCE-002",
      holder: "Crypto Room",
      status: "amber",
      action: "Resolve",
      detail: "Serial KG175D-4421 is pending CAC signature correction before it can count as property on hand.",
      due: "Today 1300",
    },
    {
      item: "Dell PowerEdge R760 Server",
      meta: "Missing equipment report",
      lin: "SRV-R760 / 7025-01-RCCE-003",
      holder: "Server Room",
      status: "red",
      action: "Escalate",
      detail: "End user reported a server component missing. Escalation path is End User to SHRH to Supply SGT/PHRH.",
      due: "Today 1200",
    },
  ],
  property: [
    {
      item: "HP Z2 Desktop Workstation",
      meta: "6 desktops checked",
      lin: "DSK-Z2 / 7025-01-RCCE-004",
      holder: "RCC-E Admin",
      status: "amber",
      action: "Inspect",
      detail: "Two desktops need updated location notes before the SHRH inventory can close.",
      due: "Fri 0900",
    },
    {
      item: "Dell 27-inch Monitor Set",
      meta: "2 of 2 complete",
      lin: "MON-27 / 7025-01-RCCE-005",
      holder: "IMO",
      status: "green",
      action: "View",
      detail: "All components accounted for with signed custody documentation attached.",
      due: "Complete",
    },
    {
      item: "Network Encryption Device Kit",
      meta: "Short 1 device",
      lin: "ENC-KIT / 5810-01-RCCE-006",
      holder: "Crypto Custodian",
      status: "red",
      action: "Reconcile",
      detail: "Missing equipment packet exists, but SHRH approval has not been CAC signed.",
      due: "Today 1500",
    },
  ],
  pending: [
    {
      item: "Laptop HR Transfer Approval",
      meta: "DA Form 3161 handshake",
      lin: "C18244 / 7021-01-663-1845",
      holder: "SPC Hines to SPC Vale",
      status: "amber",
      action: "Review",
      detail: "Both end users must CAC sign the DA Form 3161. The receiving SHRH gives final approval before the laptop moves.",
      due: "Today 1600",
      route: "HRH: SPC Hines -> HRH: SPC Vale -> Receiving SHRH approval",
      custody: "DA Form 3161 is generated as a digital handshake between both HRHs.",
    },
    {
      item: "Monitor Location Change",
      meta: "Location approval required",
      lin: "M91710 / 7025-01-619-8451",
      holder: "SPC James Hines",
      status: "amber",
      action: "Approve",
      detail: "End user updated equipment location from B-214 to B-219. PHRH, SHRH, or Supply SGT must approve the location change before any equipment transaction can continue.",
      due: "Today 1300",
      route: "HRH location update -> PHRH/SHRH/Supply SGT approval -> transaction unlocked",
      custody: "No turn-in, transfer, equipment request, or new DA Form 2062 validation proceeds until the location approval is recorded.",
    },
    {
      item: "Section Move Location Approval",
      meta: "New SHRH may be triggered",
      lin: "LPT-5550 / MON-27 / Multiple",
      holder: "SPC James Hines",
      status: "red",
      action: "Approve",
      detail: "End user moved from ISB POD-07 to IMO POD-12. Approval determines whether equipment is turned in, transferred to the gaining SHRH, or split between old and new locations.",
      due: "Today 1500",
      route: "HRH location update -> losing SHRH review -> gaining SHRH/Supply SGT/PHRH approval",
      custody: "Approval gate must close before DA Form 3161 or a new DA Form 2062 is generated.",
    },
    {
      item: "Contractor Laptop Acknowledgment",
      meta: "Letter of understanding",
      lin: "C18244 / 7021-01-663-1845",
      holder: "Mr. Nolan Reed",
      status: "red",
      action: "Sign",
      detail: "Contractor cannot sign a DA Form 2062. Letter of understanding is pending CAC-enabled government approval.",
      due: "Past due",
      route: "SHRH -> Contractor user acknowledgment",
      custody: "Letter of understanding is used instead of DA Form 2062.",
    },
    {
      item: "FOI Research: Unidentified Laptop",
      meta: "Found on Installation",
      lin: "Unknown / serial provided",
      holder: "Found in C-118 / POD-14",
      status: "amber",
      action: "Research",
      detail: "User reported unidentified equipment. Supply SGT/PHRH must research serial number in GCSS-Army to determine if it is on anyone's books.",
      due: "Today 1700",
      route: "Finder -> Supply SGT/PHRH GCSS-Army research",
      custody: "FOI item is on hold and cannot be issued, transferred, or added to excess until research is complete.",
    },
    {
      item: "AAR Change: Serial Number Correction",
      meta: "Inventory data correction",
      lin: "LPT-5550 / 7021-01-RCCE-001",
      holder: "SPC James Hines",
      status: "amber",
      action: "Approve",
      detail: "End user found a serial number mismatch during inventory reverification. Supply SGT/PHRH must approve the AAR change before the corrected DA Form 2062 is finalized.",
      due: "Today 1600",
      route: "HRH AAR change request -> Supply SGT/PHRH approval -> master property listing update",
      custody: "AAR corrections update serial number, nomenclature, and historical notes in the user's profile file cabinet.",
    },
  ],
  missing: [
    {
      item: "Dell 24-inch Monitor",
      meta: "Missing equipment report",
      lin: "M91710 / 7025-01-619-8451",
      holder: "PFC Mateo Diaz",
      status: "amber",
      action: "Escalate",
      detail: "End user reported monitor missing. SHRH is reviewing before escalation to Supply SGT/PHRH.",
      due: "Today 1500",
      route: "HRH -> SHRH -> Supply SGT/PHRH",
    },
    {
      item: "TACLANE Micro Encryption Device",
      meta: "Missing equipment report",
      lin: "ENC-KG175D / 5810-01-RCCE-002",
      holder: "SGT Lina Park",
      status: "red",
      action: "Review",
      detail: "SHRH confirmed item is missing. Supply SGT/PHRH review is pending.",
      due: "Past due",
      route: "HRH -> SHRH -> Supply SGT/PHRH",
    },
    {
      item: "HP EliteDesk 800 Desktop",
      meta: "Missing equipment report",
      lin: "DSK-800 / 7025-01-RCCE-007",
      holder: "SPC James Hines",
      status: "green",
      action: "Close",
      detail: "End user found desktop after room move. SHRH can close the missing equipment report.",
      due: "Ready",
      route: "HRH -> SHRH",
    },
  ],
  transfer: [
    {
      item: "HP EliteBook 840 G10 Laptop",
      meta: "HR transfer: ISB SHRH to IMO SHRH",
      lin: "LPT-840G10 / 7021-01-RCCE-008",
      holder: "From ISB, SSG Cruz",
      status: "amber",
      action: "Approve",
      detail: "Internal HR transfer request from one SHRH to another SHRH. Both holders CAC sign before the receiving SHRH approves final movement.",
      due: "Today 1400",
      route: "ISB SHRH -> IMO SHRH",
      custody: "DA Form 3161 records the transfer handshake. DA Form 2062 is generated if the equipment is then assigned to a military or DOD civilian end user.",
      reason: "IMO needs the laptop for a newly inprocessing analyst; ISB has a spare laptop available.",
    },
    {
      item: "Dell 27-inch Monitor Set",
      meta: "HR transfer: NMB SHRH to OPS SHRH",
      lin: "MON-27 / 7025-01-RCCE-005",
      holder: "From NMB, SGT Park",
      status: "green",
      action: "Route",
      detail: "Both SHRHs have signed the DA Form 3161. Receiving SHRH final approval is pending before movement.",
      due: "Fri 1000",
      route: "NMB SHRH -> OPS SHRH",
      custody: "DA Form 3161 must be CAC signed by both sides before the equipment moves.",
      reason: "OPS gained a new workstation and needs the monitors moved to the correct SHRH.",
    },
    {
      item: "Dell Latitude 5550 Laptop",
      meta: "HR transfer: NMB SHRH to Arms Room SHRH",
      lin: "LPT-5550 / 7021-01-RCCE-001",
      holder: "From NMB, SFC Mills",
      status: "red",
      action: "Fix",
      detail: "Transfer packet is missing losing SHRH CAC signature and serial photo.",
      due: "Past due",
      route: "NMB SHRH -> Arms Room SHRH",
      custody: "If assigned to a contractor after transfer, the system generates a letter of understanding instead of DA Form 2062.",
      reason: "Laptop is being returned to Supply control after a section reorganization.",
    },
  ],
  turnin: [
    {
      item: "Dell Latitude 5550 Laptop",
      meta: "Unserviceable turn-in",
      lin: "LPT-5550 / 7021-01-RCCE-001",
      holder: "IMO",
      status: "amber",
      action: "Schedule",
      detail: "End user turn-in request is awaiting SHRH review. Internal turn-in requests only move End User to SHRH or SHRH to Supply SGT.",
      due: "Tomorrow",
      reason: "Laptop no longer powers on and user is outprocessing from the office.",
    },
    {
      item: "HP Z2 Desktop Workstation",
      meta: "Excess equipment",
      lin: "DSK-Z2 / 7025-01-RCCE-004",
      holder: "Supply Room",
      status: "green",
      action: "Prepare",
      detail: "SHRH turn-in request is staged for Supply SGT review. No outside routing is part of this prototype.",
      due: "Fri 1300",
      reason: "Desktop is excess to mission need after room consolidation.",
    },
    {
      item: "Dell PowerEdge R760 Server",
      meta: "Condemnation requested",
      lin: "SRV-R760 / 7025-01-RCCE-003",
      holder: "Server Room",
      status: "red",
      action: "Review",
      detail: "End user turn-in request lacks damage photos and SHRH remarks.",
      due: "Today",
      reason: "Server is damaged and cannot be safely issued to another user.",
    },
  ],
  equipreq: [
    {
      item: "HP EliteBook 840 G10 Laptop",
      meta: "New issue request",
      lin: "LPT-840G10 / 7021-01-RCCE-008",
      holder: "ISB",
      status: "red",
      action: "Source",
      detail: "Property book equipment request is pending Supply SGT/PHRH review. If approved, custody documentation is required.",
      due: "Today",
      reason: "New personnel require laptops before being added to the RCC-E duty roster.",
    },
    {
      item: "Dell 27-inch Monitor",
      meta: "Mission requirement",
      lin: "MON-27 / 7025-01-RCCE-005",
      holder: "IMO",
      status: "amber",
      action: "Validate",
      detail: "End user property book equipment request is awaiting SHRH review before it can move to Supply SGT/PHRH.",
      due: "Tomorrow",
      reason: "IMO needs an additional monitor for a newly assigned technician.",
    },
    {
      item: "TACLANE Micro Encryption Device",
      meta: "Mission requirement",
      lin: "ENC-KG175D / 5810-01-RCCE-002",
      holder: "Crypto Room",
      status: "green",
      action: "Issue",
      detail: "End user property book equipment request can be filled by the SHRH from currently assigned equipment with custody documentation.",
      due: "Fri",
      reason: "New mission cell requires an encryption device with custody documentation before use.",
    },
  ],
  excess: [
    {
      item: "HP EliteBook 840 G10 Laptop",
      meta: "Open equipment: supply room shelf A2",
      lin: "C18244 / 7021-01-663-1845",
      holder: "Supply Room Excess",
      status: "green",
      action: "Request",
      detail: "Available excess asset held by Supply SGT/PHRH. End User or SHRH can request this exact laptop by serial number.",
      due: "Available now",
      route: "Requester -> SHRH endorsement -> Supply SGT/PHRH approval -> physical delivery",
      custody: "Serial HP840G10-23A91. If approved, Supply SGT/PHRH physically delivers to the inprocessing user and generates DA Form 2062 or contractor letter as required.",
    },
    {
      item: "HP EliteBook 840 G10 Laptop",
      meta: "Open equipment: supply room shelf A2",
      lin: "C18244 / 7021-01-663-1845",
      holder: "Supply Room Excess",
      status: "green",
      action: "Request",
      detail: "Second available HP laptop. Requester selects this asset so approval is tied to this serial number, not a generic laptop.",
      due: "Available now",
      route: "Requester -> SHRH endorsement -> Supply SGT/PHRH approval -> physical delivery",
      custody: "Serial HP840G10-23A94. If approved for a military or DOD civilian user, the system creates a DA Form 2062.",
    },
    {
      item: "Dell 24-inch Monitor",
      meta: "Open equipment: supply room rack M1",
      lin: "M91710 / 7025-01-619-8451",
      holder: "Supply Room Excess",
      status: "green",
      action: "Request",
      detail: "Available monitor for workstation buildout. Can be requested by End User during inprocessing or by SHRH for assigned personnel.",
      due: "Available now",
      route: "Requester -> SHRH endorsement -> Supply SGT/PHRH approval -> physical delivery",
      custody: "Serial DELL24-77Q12. Added to the receiving end user's DA Form 2062 after delivery.",
    },
    {
      item: "TACLANE Micro Encryption Device",
      meta: "Open equipment: pending inspection",
      lin: "ENC-KG175D / 5810-01-RCCE-002",
      holder: "Supply Room Excess",
      status: "amber",
      action: "Hold",
      detail: "Asset is visible in excess but cannot be approved until Supply SGT completes inspection.",
      due: "Inspection today",
      route: "Supply SGT inspection -> requester approval decision",
      custody: "Serial KG175D-19K42. Request can be queued, but physical delivery waits for inspection.",
    },
  ],
  expendable: [
    {
      item: "Copy Paper, Letter",
      meta: "Open expendable supply: 12 reams available",
      lin: "Expendable / 7530-00-222-3521",
      holder: "Supply Room Stock",
      status: "green",
      action: "Request",
      detail: "Open expendable supply available for End User or SHRH office request. Supply SGT fulfills approved requests to the customer.",
      due: "Available now",
      route: "Requester -> SHRH endorsement if required -> Supply SGT/PHRH approval -> pickup or delivery",
      custody: "Expendable supply request is recorded for consumption tracking; no DA Form 2062 is generated.",
    },
    {
      item: "Dry Erase Markers",
      meta: "Open expendable supply: 8 packs available",
      lin: "Expendable / 7520-01-365-6122",
      holder: "Supply Room Stock",
      status: "amber",
      action: "Request",
      detail: "Low stock consumable. Request can be fulfilled by Supply SGT while Supply SGT/PHRH decides whether to reorder.",
      due: "Low stock",
      route: "Requester -> Supply SGT/PHRH approval",
      custody: "Issued as expendable office supply and logged against the requesting office.",
    },
    {
      item: "Staples and File Folders",
      meta: "Open expendable supply: admin bundle",
      lin: "Expendable / Multiple",
      holder: "Supply Room Stock",
      status: "green",
      action: "Request",
      detail: "Common expendable supply bundle available for offices that need admin restock.",
      due: "Available now",
      route: "Requester -> Supply SGT/PHRH approval",
      custody: "Bundle is documented as an expendable supply issue.",
    },
    {
      item: "Printer Toner, MFP",
      meta: "Open expendable supply: 3 cartridges available",
      lin: "Expendable / 7510-01-624-7312",
      holder: "Supply Room Stock",
      status: "green",
      action: "Request",
      detail: "Available expendable toner cartridge for office printer replacement.",
      due: "Available now",
      route: "Requester -> Supply SGT/PHRH approval -> pickup or delivery",
      custody: "Issue is logged against the office, printer location, and requestor.",
    },
    {
      item: "Item not listed",
      meta: "Submit expendable supply request form",
      lin: "Documents Depository / Expendable Supply Form",
      holder: "Supply SGT/PHRH maintained form",
      status: "amber",
      action: "Open Form",
      detail: "Use this when the office supply is not listed in open expendable supplies. The request form is uploaded and maintained in the Documents Depository by Supply SGT/PHRH.",
      due: "Form available",
      route: "Requester -> SHRH endorsement if required -> Supply SGT/PHRH review",
      custody: "The form captures requested item, quantity, office, justification, needed-by date, and delivery or pickup preference.",
    },
  ],
  custody: [
    {
      item: "Dell Latitude 5550 Laptop",
      meta: "HRH end user custody: DA Form 2062",
      lin: "C18244 / 7021-01-663-1845",
      holder: "SPC James Hines",
      status: "green",
      action: "Open 2062",
      detail: "Military end user has direct custody of one laptop and two monitors on DA Form 2062.",
      due: "Signed 20 May",
      route: "SHRH: SSG Cruz -> HRH: SPC Hines",
      custody: "DA Form 2062 required for military and DOD civilian users.",
    },
    {
      item: "Two Dell 24-inch Monitors",
      meta: "HRH end user custody: DA Form 2062",
      lin: "M91710 / 7025-01-619-8451",
      holder: "SPC James Hines",
      status: "green",
      action: "View",
      detail: "End user can see these items, request room location change, and start turn-in during outprocessing.",
      due: "Room B-214",
      route: "SHRH: SSG Cruz -> HRH: SPC Hines",
      custody: "Location changes remain visible to SHRH, PHRH, and Supply SGT.",
    },
    {
      item: "Contractor Laptop",
      meta: "Contractor custody: Letter of understanding",
      lin: "C18244 / 7021-01-663-1845",
      holder: "Mr. Nolan Reed",
      status: "amber",
      action: "Review",
      detail: "Contractor cannot sign for equipment on a DA Form 2062; system uses a letter of understanding.",
      due: "Needs update",
      route: "SHRH: SFC Mills -> Contractor user",
      custody: "Letter of understanding is generated from the Documents Depository template.",
    },
    {
      item: "SHRH Personal Laptop and Monitors",
      meta: "SHRH as end user: DA Form 2062",
      lin: "LPT-5550 / MON-24 / Multiple",
      holder: "SSG Cruz",
      status: "green",
      action: "Open 2062",
      detail: "SHRH has personally used equipment tracked separately from the section equipment they manage.",
      due: "Room B-214 / POD-07",
      route: "PHRH/Supply SGT -> SHRH: SSG Cruz",
      custody: "Everyone is also an end user. The SHRH personal DA Form 2062 tracks serials, location, and signed custody history.",
    },
  ],
};

const masterEquipmentRecords = [
  {
    lin: "LPT-5550",
    nomenclature: "Dell Latitude 5550 Laptop",
    nsn: "7021-01-RCCE-001",
    part: "Dell Latitude 5550",
    serial: "DELL5550-91A23",
    endUser: "SPC James Hines",
    location: "B-214 / POD-07 / ISB",
    status: "Signed 2062",
    file: {
      profile: "HRH End User / ISB / SHRH SSG Cruz",
      forms: ["DA Form 2062 signed 20 May 2026", "DA Form 3161 laptop transfer draft", "Monthly inventory certification"],
      movements: ["Issued by ISB SHRH to SPC Hines", "Room update B-214 to B-219 pending approval", "Telework status reported 22 May"],
      notes: ["User may move to IMO section; split-equipment option available.", "Laptop can transfer while monitors remain in losing section."],
    },
  },
  {
    lin: "MON-24",
    nomenclature: "Dell 24-inch Monitor",
    nsn: "7025-01-RCCE-005",
    part: "Dell P2422H",
    serial: "DELL24-77Q12",
    endUser: "SPC James Hines",
    location: "B-214 / POD-07 / ISB",
    status: "Signed 2062",
    file: {
      profile: "HRH End User / ISB / SHRH SSG Cruz",
      forms: ["DA Form 2062 signed 20 May 2026", "Location movement request pending"],
      movements: ["Assigned to POD-07 workstation", "Can remain with losing section during laptop-only transfer"],
      notes: ["Monitor should not travel for telework.", "Validate serial during next inventory reverification."],
    },
  },
  {
    lin: "DSK-Z2",
    nomenclature: "HP Z2 Desktop Workstation",
    nsn: "7025-01-RCCE-004",
    part: "HP Z2 G9",
    serial: "HPZ2-PHRH04",
    endUser: "SFC Mills",
    location: "PHRH Desk / POD-01 / NMB",
    status: "Signed 2062",
    file: {
      profile: "PHRH user personal end-user custody",
      forms: ["DA Form 2062 signed by SFC Mills", "Annual inventory certification"],
      movements: ["Added to PHRH desk during equipment refresh", "No location changes pending"],
      notes: ["PHRH also appears as an end user for personally used equipment."],
    },
  },
  {
    lin: "ENC-KG175D",
    nomenclature: "TACLANE Micro Encryption Device",
    nsn: "5810-01-RCCE-002",
    part: "KG-175D",
    serial: "KG175D-SHRH07",
    endUser: "SSG Cruz",
    location: "Controlled storage / POD-07 / ISB",
    status: "Signed 2062",
    file: {
      profile: "SHRH personal end-user custody",
      forms: ["DA Form 2062 signed by SSG Cruz", "Controlled storage memo"],
      movements: ["Stored in controlled area", "Validated during SHRH-initiated inventory"],
      notes: ["SHRH manages section equipment separately from personally used equipment."],
    },
  },
  {
    lin: "SRV-R760",
    nomenclature: "Dell PowerEdge R760 Server",
    nsn: "7025-01-RCCE-003",
    part: "Dell PowerEdge R760",
    serial: "R760-SRV-118",
    endUser: "Server Operations",
    location: "C-118 / POD-14 / DCO",
    status: "Missing report open",
    file: {
      profile: "DCO server operations custody file",
      forms: ["Missing equipment packet draft", "SHRH review pending"],
      movements: ["Installed in server room", "Component reported missing during inventory"],
      notes: ["Cannot count as fully ready until missing equipment packet is reconciled."],
    },
  },
];

const masterEquipmentGroups = [
  {
    lin: "LPT-5550",
    nomenclature: "Dell Latitude 5550 Laptop",
    nsn: "7021-01-RCCE-001",
    part: "Dell Latitude 5550",
    section: "ISB",
    shrh: "SSG Cruz",
    assets: [masterEquipmentRecords[0]],
  },
  {
    lin: "LPT-5550",
    nomenclature: "Dell Latitude 5550 Laptop",
    nsn: "7021-01-RCCE-001",
    part: "Dell Latitude 5550",
    section: "Excess / Supply Room",
    shrh: "Supply SGT / PHRH Controlled",
    assets: [
      {
        lin: "LPT-5550",
        nomenclature: "Dell Latitude 5550 Laptop",
        nsn: "7021-01-RCCE-001",
        part: "Dell Latitude 5550",
        serial: "DELL5550-EXC14",
        endUser: "Unassigned excess",
        location: "Supply Room / POD-01 / Excess",
        status: "Open excess",
        file: {
          profile: "Excess equipment file / Supply SGT controlled",
          forms: ["GCSS-Army import 21 May 2026", "Available excess review"],
          movements: ["Turned in by NMB SHRH", "Moved to Supply Room excess shelf"],
          notes: ["Available for approved request by HRH or SHRH.", "Supply SGT/PHRH approval required before issue."],
        },
      },
    ],
  },
  {
    lin: "MON-24",
    nomenclature: "Dell 24-inch Monitor",
    nsn: "7025-01-RCCE-005",
    part: "Dell P2422H",
    section: "ISB",
    shrh: "SSG Cruz",
    assets: [masterEquipmentRecords[1]],
  },
  {
    lin: "DSK-Z2",
    nomenclature: "HP Z2 Desktop Workstation",
    nsn: "7025-01-RCCE-004",
    part: "HP Z2 G9",
    section: "NMB",
    shrh: "SFC Mills",
    assets: [masterEquipmentRecords[2]],
  },
  {
    lin: "ENC-KG175D",
    nomenclature: "TACLANE Micro Encryption Device",
    nsn: "5810-01-RCCE-002",
    part: "KG-175D",
    section: "ISB",
    shrh: "SSG Cruz",
    assets: [masterEquipmentRecords[3]],
  },
  {
    lin: "SRV-R760",
    nomenclature: "Dell PowerEdge R760 Server",
    nsn: "7025-01-RCCE-003",
    part: "Dell PowerEdge R760",
    section: "DCO",
    shrh: "CW2 Novak",
    assets: [masterEquipmentRecords[4]],
  },
];

const personalCustodyGroups = {
  supply: [
    {
      lin: "LPT-5550",
      nomenclature: "Dell Latitude 5550 Laptop",
      nsn: "7021-01-RCCE-001",
      part: "Dell Latitude 5550",
      assets: [
        {
          serial: "DELL5550-SUP91",
          endUser: "Supply SGT / PHRH",
          location: "RCC-E Supply Office / POD-01",
          status: "Signed 2062",
        },
      ],
    },
    {
      lin: "MON-27",
      nomenclature: "Dell 27-inch Monitor",
      nsn: "7025-01-RCCE-005",
      part: "Dell P2722H",
      assets: [
        {
          serial: "MON27-SUP12",
          endUser: "Supply SGT / PHRH",
          location: "RCC-E Supply Office / POD-01",
          status: "Signed 2062",
        },
      ],
    },
    {
      lin: "DSK-Z2",
      nomenclature: "HP Z2 Desktop Workstation",
      nsn: "7025-01-RCCE-004",
      part: "HP Z2 G9",
      assets: [
        {
          serial: "HPZ2-PHRH04",
          endUser: "SFC Mills",
          location: "PHRH Desk / POD-01",
          status: "Signed 2062",
        },
      ],
    },
  ],
  shrh: [
    {
      lin: "LPT-5550",
      nomenclature: "Dell Latitude 5550 Laptop",
      nsn: "7021-01-RCCE-001",
      part: "Dell Latitude 5550",
      assets: [
        {
          serial: "DELL5550-SHRH22",
          endUser: "SSG Cruz",
          location: "ISB SHRH Desk / POD-07",
          status: "Signed 2062",
        },
      ],
    },
    {
      lin: "MON-24",
      nomenclature: "Dell 24-inch Monitor",
      nsn: "7025-01-RCCE-005",
      part: "Dell P2422H",
      assets: [
        {
          serial: "MON24-SHRH31",
          endUser: "SSG Cruz",
          location: "ISB SHRH Desk / POD-07",
          status: "Signed 2062",
        },
        {
          serial: "MON24-SHRH32",
          endUser: "SSG Cruz",
          location: "ISB SHRH Desk / POD-07",
          status: "Signed 2062",
        },
      ],
    },
    {
      lin: "ENC-KG175D",
      nomenclature: "TACLANE Micro Encryption Device",
      nsn: "5810-01-RCCE-002",
      part: "KG-175D",
      assets: [
        {
          serial: "KG175D-SHRH07",
          endUser: "SSG Cruz",
          location: "Controlled storage / POD-07",
          status: "Signed 2062",
        },
      ],
    },
  ],
  hrh: [
    {
      lin: "LPT-5550",
      nomenclature: "Dell Latitude 5550 Laptop",
      nsn: "7021-01-RCCE-001",
      part: "Dell Latitude 5550",
      assets: [
        {
          serial: "DELL5550-91A23",
          endUser: "SPC James Hines",
          location: "B-214 / POD-07 / ISB",
          status: "Signed 2062",
        },
      ],
    },
    {
      lin: "MON-24",
      nomenclature: "Dell 24-inch Monitor",
      nsn: "7025-01-RCCE-005",
      part: "Dell P2422H",
      assets: [
        {
          serial: "DELL24-77Q12",
          endUser: "SPC James Hines",
          location: "B-214 / POD-07 / ISB",
          status: "Signed 2062",
        },
        {
          serial: "DELL24-77Q13",
          endUser: "SPC James Hines",
          location: "B-214 / POD-07 / ISB",
          status: "Signed 2062",
        },
      ],
    },
  ],
};

const rolePermissions = {
  supply: {
    title: "Supply SGT / PHRH Visibility",
    cards: [
      ["Scope", "Sees every request, HR transfer, custody form, inventory report, and document update across the ecosystem."],
      ["Permissions", "Can approve equipment property requests, fulfill expendable supply requests, approve excess asset requests, monitor HR transfers, update documents, and initiate SHRH inventory reporting."],
      ["Custody", "Can review DA Form 2062, DA Form 3161, and contractor letters of understanding with CAC-enabled digital signatures."],
    ],
  },
  phrh: {
    title: "Supply SGT / PHRH Visibility",
    cards: [
      ["Scope", "Sees every request, HR transfer, custody form, inventory report, and document update across the ecosystem."],
      ["Permissions", "Can approve equipment property requests, fulfill expendable supply requests, approve excess asset requests, monitor HR transfers, update documents, and initiate SHRH inventory reporting."],
      ["Custody", "Can review DA Form 2062, DA Form 3161, and contractor letters of understanding with CAC-enabled digital signatures."],
    ],
  },
  shrh: {
    title: "SHRH Dashboard",
    cards: [
      ["Scope", "Only sees equipment signed down to their SHRH account and the HRH end users using that equipment."],
      ["Actions", "Can initiate inventory reporting to their end users, HR transfer requests, turn-in requests, equipment property requests, excess asset requests, and expendable supply requests for their own office or end users."],
      ["Custody", "Can assign equipment to end users, trigger DA Form 2062 or contractor letters, and approve final receipt before equipment moves to another SHRH or location."],
    ],
  },
  hrh: {
    title: "HRH End User Dashboard",
    cards: [
      ["Scope", "Only sees equipment directly assigned to them, such as a laptop and two monitors."],
      ["Actions", "Can request equipment while inprocessing, pick a serialized excess asset from the listing, request turn-in while outprocessing, request open expendable supplies or submit a form if not listed, request location changes, and initiate a DA Form 3161 transfer handshake to another end user."],
      ["Accountability", "Always sees their SHRH and turn-in point, plus their DA Form 2062 or contractor letter of understanding."],
    ],
  },
};

const shrhDirectory = {
  ISB: ["SSG Cruz", "ISB / DSN 555-0188 / ssg.cruz@example.mil"],
  NMB: ["SFC Mills", "NMB / DSN 555-0104 / sfc.mills@example.mil"],
  TCO: ["SGT Park", "TCO / DSN 555-0172 / sgt.park@example.mil"],
  OPS: ["SSG Nolan", "OPS / DSN 555-0199 / ssg.nolan@example.mil"],
  "Arms Room": ["SSG Vega", "Arms Room / DSN 555-0166 / ssg.vega@example.mil"],
  IMO: ["SFC Allen", "IMO / DSN 555-0121 / sfc.allen@example.mil"],
  SMB: ["SSG Hayes", "SMB / DSN 555-0155 / ssg.hayes@example.mil"],
  DCO: ["SFC Rivera", "DCO / DSN 555-0138 / sfc.rivera@example.mil"],
};

const podNotes = {
  "POD-01": "B-201 / POD-01: RCC-E ISB desks. Shared supply cabinet is against the east wall.",
  "POD-07": "B-214 / POD-07: Laptop stored in locked desk drawer. Two monitors remain on assigned workstation.",
  "POD-08": "B-219 / POD-08: Temporary onboarding room. Equipment is staged on the west workstation until network account is active.",
  "POD-12": "C-102 / POD-12: IMO work area. Desktop and monitor remain on the rear workstation.",
  "POD-14": "C-118 / POD-14: DCO counter. Encryption devices are stored in the locked supply cabinet.",
};

const inventoryModes = {
  "auto-monthly": {
    label: "Auto monthly HRH report",
    title: "Automatic monthly HRH inventory",
    percent: "42%",
    text: "System automatically asks HRH end users to self-report equipment. Supply SGT/PHRH can change this cadence in settings.",
  },
  "auto-weekly": {
    label: "Auto weekly HRH report",
    title: "Automatic weekly HRH inventory",
    percent: "68%",
    text: "Weekly automatic HRH inventory can run for high-risk equipment, telework-heavy sections, or commander-directed focus areas.",
  },
  "auto-quarterly": {
    label: "Auto quarterly HRH report",
    title: "Automatic quarterly HRH inventory",
    percent: "81%",
    text: "Quarterly automatic HRH inventory can run alongside monthly or annual options when Supply SGT/PHRH enables multiple schedules.",
  },
  "auto-biannual": {
    label: "Auto bi-annual HRH report",
    title: "Automatic bi-annual HRH inventory",
    percent: "89%",
    text: "Bi-annual reporting reflects the selected automatic inventory cycle and only measures responses for that cycle.",
  },
  "auto-annual": {
    label: "Auto annual HRH report",
    title: "Automatic annual HRH inventory",
    percent: "94%",
    text: "Annual automatic reporting can be used for broad accountability checks, with the percentage tied to that annual request.",
  },
  shrh: {
    label: "SHRH-to-HRH report",
    title: "SHRH requested inventory from End Users",
    percent: "57%",
    text: "This percentage reflects an independent SHRH request to their assigned HRH end users, separate from automatic system reporting.",
  },
  supply: {
    label: "Supply-to-SHRH report",
    title: "Supply SGT/PHRH requested inventory from SHRH",
    percent: "76%",
    text: "This percentage reflects Supply SGT/PHRH asking SHRH holders to report their equipment status.",
  },
};

const tasks = {
  today: [
    ["Review DA 3161 laptop handshake", "1200", false],
    ["Approve monitor location change", "1300", false],
    ["Prep pending signature brief", "1450", false],
    ["Close found monitor report", "1600", true],
  ],
  week: [
    ["Review SHRH-to-Supply turn-ins", "Fri", false],
    ["Validate SHRH hand receipt accounts", "Fri", false],
    ["Update missing equipment packets", "Thu", true],
  ],
  month: [
    ["System monthly HRH inventory review", "31 May", false],
    ["Review SHRH-initiated reports", "29 May", false],
    ["Archive CAC-signed custody forms", "28 May", true],
  ],
};

let activeTab = "sensitive";
let activeStatus = "all";
let activeMetric = "all";
let searchTerm = "";
let activeScreen = "supply";
let currentProfileSection = "ISB";
let ledgerStatusFilter = "all";
let ledgerSectionFilter = "all";
let ledgerTypeFilter = "all";
let ledgerSearchTerm = "";

const rowsEl = document.querySelector("#supplyRows");
const masterLedgerRowsEl = document.querySelector("#masterLedgerRows");
const ledgerTotalCountEl = document.querySelector("#ledgerTotalCount");
const ledgerSignedCountEl = document.querySelector("#ledgerSignedCount");
const ledgerExcessCountEl = document.querySelector("#ledgerExcessCount");
const ledgerExceptionCountEl = document.querySelector("#ledgerExceptionCount");
const ledgerSectionFilterEl = document.querySelector("#ledgerSectionFilter");
const ledgerTypeFilterEl = document.querySelector("#ledgerTypeFilter");
const ledgerSearchEl = document.querySelector("#ledgerSearch");
const ledgerClearFiltersBtn = document.querySelector("#ledgerClearFilters");
const supplyPersonalRowsEl = document.querySelector("#supplyPersonalRows");
const shrhPersonalRowsEl = document.querySelector("#shrhPersonalRows");
const hrhPersonalRowsEl = document.querySelector("#hrhPersonalRows");
const viewTitleEl = document.querySelector("#viewTitle");
const topEyebrowEl = document.querySelector(".top-bar .eyebrow");
const drawer = document.querySelector("#detailDrawer");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerBody = document.querySelector("#drawerBody");
const toast = document.querySelector("#toast");
const screenPanels = document.querySelectorAll("[data-screens]");

function showScreen(screen = "supply") {
  activeScreen = screen;
  screenPanels.forEach((panel) => {
    const screens = panel.dataset.screens.split(" ");
    panel.classList.toggle("is-hidden", !screens.includes(screen));
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === screen);
  });

  document.querySelectorAll(".role-tab").forEach((item) => {
    item.classList.toggle("active", item.dataset.goScreen === screen);
  });

  if (rolePermissions[screen]) {
    renderPermissions(screen);
  }

  if (topEyebrowEl) {
    topEyebrowEl.textContent =
      {
        supply: "Supply SGT Dashboard",
        phrh: "PHRH Dashboard",
        shrh: "SHRH Dashboard",
        hrh: "HRH End User Dashboard",
        ledger: "Master Equipment Ledger Hub",
        profile: "Profile Setup",
        inventory: "Inventory Reporting",
        excess: "Excess Assets",
        receipts: "Hand Receipts",
        missing: "Missing Equipment",
        workorders: "Pending Signatures",
        reports: "Reports",
        documents: "Documents Depository",
      }[screen] || "A.N.G.E.L.S.";
  }

  closeDrawer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function titleForTab(tab) {
  return {
    sensitive: "Accountability Focus",
    property: "Property Book Exceptions",
    pending: "Pending Signatures and Approvals",
    missing: "Missing Equipment Reports",
    transfer: "HR Transfer Requests",
    turnin: "Turn-In Equipment Requests",
    equipreq: "Equipment Property Requests",
    excess: "Excess Asset Listing",
    expendable: "Expendable Supply Fulfillment",
    custody: "End User Custody Forms",
  }[tab];
}

function visibleRecords() {
  return records[activeTab].filter((record) => {
    const statusMatch = activeStatus === "all" || record.status === activeStatus;
    const metricMatch =
      activeMetric === "all" ||
      (activeMetric === "missing" && activeTab === "missing") ||
      (activeMetric === "pending" && activeTab === "pending") ||
      (activeMetric === "aar-changes" && activeTab === "pending" && record.item.toLowerCase().includes("aar change")) ||
      (activeMetric === "location-approvals" && activeTab === "pending" && record.item.toLowerCase().includes("location")) ||
      (activeMetric === "inventory" && ["sensitive", "property"].includes(activeTab)) ||
      (activeMetric === "equipment-requests" && activeTab === "equipreq") ||
      (activeMetric === "hr-actions" && ["transfer", "turnin"].includes(activeTab)) ||
      (activeMetric === "excess" && activeTab === "excess") ||
      (activeMetric === "supplies" && activeTab === "expendable") ||
      activeMetric === "reporting";
    const haystack = `${record.item} ${record.meta} ${record.lin} ${record.holder} ${record.route || ""}`.toLowerCase();
    return statusMatch && metricMatch && haystack.includes(searchTerm);
  });
}

function renderRows() {
  viewTitleEl.textContent = titleForTab(activeTab);
  const list = visibleRecords();
  rowsEl.innerHTML = "";

  if (!list.length) {
    rowsEl.innerHTML = '<div class="table-row"><span>No matching records</span><span></span><span></span><span></span><span></span></div>';
    return;
  }

  list.forEach((record, index) => {
    const row = document.createElement("div");
    row.className = "table-row";
    row.setAttribute("role", "row");
    row.innerHTML = `
      <span class="item-name"><strong>${record.item}</strong><small>${record.meta}</small></span>
      <span>${record.lin}</span>
      <span>${record.holder}</span>
      <span><span class="status-chip ${record.status}">${record.status.toUpperCase()}</span></span>
      <span><button class="row-action" type="button" data-index="${index}">${record.action}</button></span>
    `;
    row.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      openDrawer(record);
    });
    row.querySelector("button").addEventListener("click", () => openDrawer(record));
    rowsEl.appendChild(row);
  });
}

function renderMasterLedger() {
  if (!masterLedgerRowsEl) return;
  masterLedgerRowsEl.innerHTML = "";

  updateLedgerStatusCounts();
  const filteredGroups = visibleLedgerGroups();

  filteredGroups.forEach((group) => {
    masterLedgerRowsEl.appendChild(createLedgerGroup(group, "master"));
  });

  if (!filteredGroups.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "ledger-empty-state";
    emptyState.textContent = "No equipment matches the selected ledger filters.";
    masterLedgerRowsEl.appendChild(emptyState);
  }
}

function updateLedgerStatusCounts() {
  const allAssets = masterEquipmentGroups.flatMap((group) => group.assets);
  const signedCount = allAssets.filter((asset) => asset.status.toLowerCase().includes("signed")).length;
  const excessCount = allAssets.filter((asset) => asset.status.toLowerCase().includes("excess")).length;
  const exceptionCount = allAssets.filter((asset) => isLedgerException(asset)).length;

  if (ledgerTotalCountEl) ledgerTotalCountEl.textContent = allAssets.length;
  if (ledgerSignedCountEl) ledgerSignedCountEl.textContent = signedCount;
  if (ledgerExcessCountEl) ledgerExcessCountEl.textContent = excessCount;
  if (ledgerExceptionCountEl) ledgerExceptionCountEl.textContent = exceptionCount;

  document.querySelectorAll("[data-ledger-status]").forEach((button) => {
    button.classList.toggle("active", button.dataset.ledgerStatus === ledgerStatusFilter);
  });
}

function visibleLedgerGroups() {
  return masterEquipmentGroups
    .map((group) => {
      const sectionLabel = `${group.section} / ${group.shrh}`.toLowerCase();
      const groupMatch =
        ledgerSectionFilter === "all" ||
        group.section === ledgerSectionFilter ||
        sectionLabel.includes(ledgerSectionFilter.toLowerCase());

      if (!groupMatch || !ledgerGroupMatchesType(group)) return null;

      const visibleAssets = group.assets.filter((asset) => ledgerAssetMatches(group, asset));
      if (!visibleAssets.length) return null;

      return { ...group, assets: visibleAssets };
    })
    .filter(Boolean);
}

function ledgerGroupMatchesType(group) {
  if (ledgerTypeFilter === "all") return true;
  const text = `${group.nomenclature} ${group.part}`.toLowerCase();
  if (ledgerTypeFilter === "encryption") return text.includes("encryption") || text.includes("taclane") || text.includes("kg-");
  return text.includes(ledgerTypeFilter);
}

function ledgerAssetMatches(group, asset) {
  const status = asset.status.toLowerCase();
  const statusMatch =
    ledgerStatusFilter === "all" ||
    (ledgerStatusFilter === "signed" && status.includes("signed")) ||
    (ledgerStatusFilter === "excess" && status.includes("excess")) ||
    (ledgerStatusFilter === "exception" && isLedgerException(asset));
  const haystack = `${group.section} ${group.shrh} ${group.lin} ${group.nomenclature} ${group.nsn} ${group.part} ${asset.serial} ${asset.endUser} ${asset.location} ${asset.status}`.toLowerCase();
  return statusMatch && haystack.includes(ledgerSearchTerm);
}

function isLedgerException(asset) {
  const status = asset.status.toLowerCase();
  return status.includes("missing") || status.includes("pending") || status.includes("aar") || status.includes("correction");
}

function renderPersonalLedgers() {
  if (supplyPersonalRowsEl) {
    supplyPersonalRowsEl.innerHTML = "";
    personalCustodyGroups.supply.forEach((group) => supplyPersonalRowsEl.appendChild(createLedgerGroup(group, "personal")));
  }
  if (shrhPersonalRowsEl) {
    shrhPersonalRowsEl.innerHTML = "";
    personalCustodyGroups.shrh.forEach((group) => shrhPersonalRowsEl.appendChild(createLedgerGroup(group, "personal")));
  }
  if (hrhPersonalRowsEl) {
    hrhPersonalRowsEl.innerHTML = "";
    personalCustodyGroups.hrh.forEach((group) => hrhPersonalRowsEl.appendChild(createLedgerGroup(group, "personal")));
  }
}

function createLedgerGroup(group, scope) {
  const details = document.createElement("details");
  details.className = `ledger-group ${scope}-ledger-group`;
  const sectionLabel = group.section ? `${group.section} / ${group.shrh}` : "Personal custody";
  const summaryCells =
    scope === "master"
      ? `
        <span>${sectionLabel}</span>
        <span>${group.lin}</span>
        <span>${group.nomenclature}</span>
        <span>${group.nsn}</span>
        <span>${group.part}</span>
        <span>${group.assets.length} EA</span>
      `
      : `
        <span>${group.lin}</span>
        <span>${group.nomenclature}</span>
        <span>${group.nsn}</span>
        <span>${group.part}</span>
        <span>${group.assets.length} EA</span>
      `;
  details.innerHTML = `
    <summary class="${scope === "master" ? "master-ledger-row" : "personal-ledger-row"} ledger-summary">
      ${summaryCells}
    </summary>
    <div class="ledger-detail-panel">
      <div class="ledger-detail-head">
        <span>Serial Number</span>
        <span>End User</span>
        <span>Location</span>
        <span>Signed Custody Status</span>
        <span>File</span>
        <span>Actions</span>
      </div>
      ${group.assets
        .map(
          (asset, index) => `
            <div class="ledger-serial-row">
              <span>${asset.serial}</span>
              <span>${asset.endUser}</span>
              <span>${asset.location}</span>
              <span>${asset.status}</span>
              <button class="ledger-file-btn" type="button" data-asset-index="${index}">Open cabinet</button>
              <span class="ledger-actions">
                <button type="button" data-ledger-action="Turn-In" data-asset-index="${index}">Turn-In</button>
                <button type="button" data-ledger-action="Transfer" data-asset-index="${index}">Transfer</button>
                <button type="button" data-ledger-action="AAR" data-asset-index="${index}">AAR</button>
                <button type="button" data-ledger-action="Lost" data-asset-index="${index}">Lost</button>
                <button type="button" data-ledger-action="Notes" data-asset-index="${index}">Notes</button>
              </span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
  details.querySelectorAll("[data-ledger-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const asset = group.assets[Number(button.dataset.assetIndex)];
      openLedgerAction(button.dataset.ledgerAction, group, asset);
    });
  });
  details.querySelectorAll(".ledger-file-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const asset = group.assets[Number(button.dataset.assetIndex)];
      openMasterFileCabinet({
        lin: group.lin,
        nomenclature: group.nomenclature,
        nsn: group.nsn,
        part: group.part,
        ...asset,
      });
    });
  });
  return details;
}

function openLedgerAction(action, group, asset = group.assets[0]) {
  drawerTitle.textContent = `${action}: ${asset.serial}`;
  drawerBody.innerHTML = `
    <div class="detail-line"><span>LIN / Nomenclature</span><strong>${group.lin} - ${group.nomenclature}</strong></div>
    <div class="detail-line"><span>NSN / Model</span><p>${group.nsn} / ${group.part}</p></div>
    <div class="detail-line"><span>Serial number</span><strong>${asset.serial}</strong></div>
    <div class="detail-line"><span>Current holder</span><p>${asset.endUser}</p></div>
    <div class="detail-line"><span>Current location</span><p>${asset.location}</p></div>
    <form class="status-question-form" aria-label="${action} serial selection">
      <label>
        <span>Reason / notes</span>
        <textarea>${action === "AAR" ? "Explain the serial number, nomenclature, NSN, or model correction requested." : `Explain why this ${action.toLowerCase()} action is needed for the selected serial number.`}</textarea>
      </label>
    </form>
    <div class="detail-line"><span>Action rule</span><p>${action} is recorded against the specific serial number and retained in the equipment file cabinet with historical notes, custody records, and location movement history.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function openMasterFileCabinet(record = masterEquipmentRecords[0]) {
  const file = record.file || {
    profile: "Personal end-user custody file",
    forms: ["DA Form 2062 or applicable custody document"],
    movements: ["Current location validated from personal custody dashboard"],
    notes: ["Actions and notes are retained against this specific serial number."],
  };
  drawerTitle.textContent = `${record.endUser} File Cabinet`;
  drawerBody.innerHTML = `
    <div class="detail-line"><span>LIN / Nomenclature</span><strong>${record.lin} - ${record.nomenclature}</strong></div>
    <div class="detail-line"><span>NSN</span><strong>${record.nsn}</strong></div>
    <div class="detail-line"><span>Part / Make / Model</span><strong>${record.part}</strong></div>
    <div class="detail-line"><span>Serial number</span><strong>${record.serial}</strong></div>
    <div class="detail-line"><span>End user</span><strong>${record.endUser}</strong></div>
    <div class="detail-line"><span>Current location</span><p>${record.location}</p></div>
    <div class="detail-line"><span>Custody status</span><strong>${record.status}</strong></div>
    <div class="detail-line"><span>Profile context</span><p>${file.profile}</p></div>
    <div class="detail-line"><span>Signed forms</span><p>${file.forms.join("<br />")}</p></div>
    <div class="detail-line"><span>Location / movement history</span><p>${file.movements.join("<br />")}</p></div>
    <div class="detail-line"><span>Notes and comments</span><p>${file.notes.join("<br />")}</p></div>
    <div class="detail-line"><span>Historical visibility</span><p>This is the master historical file: 2062s, 3161s, profile actions, location movements, inventory validations, and comments stay visible to Supply SGT/PHRH.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function renderTasks(range = "today") {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";

  tasks[range].forEach(([label, time, done]) => {
    const li = document.createElement("li");
    li.className = `task-item${done ? " done" : ""}`;
    li.innerHTML = `
      <input type="checkbox" ${done ? "checked" : ""} aria-label="${label}" />
      <span>${label}</span>
      <strong class="task-time">${time}</strong>
    `;
    li.querySelector("input").addEventListener("change", (event) => {
      li.classList.toggle("done", event.target.checked);
      showToast(event.target.checked ? "Task marked complete" : "Task reopened");
    });
    taskList.appendChild(li);
  });
}

function openDrawer(record) {
  const isExcessAsset = activeTab === "excess";
  const isOpenSupply = activeTab === "expendable";
  const isSupplyForm = isOpenSupply && record.action === "Open Form";
  const isLocationApproval = activeTab === "pending" && record.item.toLowerCase().includes("location");
  drawerTitle.textContent = isExcessAsset || (isOpenSupply && !isSupplyForm) ? `Request ${record.item}` : record.item;
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Status</span><strong>${record.status.toUpperCase()}</strong></div>
    <div class="detail-line"><span>LIN / NSN</span><strong>${record.lin}</strong></div>
    <div class="detail-line"><span>Responsible holder</span><strong>${record.holder}</strong></div>
    ${record.route ? `<div class="detail-line"><span>Transfer route</span><strong>${record.route}</strong></div>` : ""}
    ${record.custody ? `<div class="detail-line"><span>Custody proof</span><p>${record.custody}</p></div>` : ""}
    ${record.reason ? `<div class="detail-line"><span>Transaction reason</span><p>${record.reason}</p></div>` : ""}
    <div class="detail-line"><span>Suspense</span><strong>${record.due}</strong></div>
    <div class="detail-line"><span>Notes</span><p>${record.detail}</p></div>
    ${
      isLocationApproval
        ? `<div class="detail-line"><span>Approval authority</span><p>PHRH, SHRH, or Supply SGT can approve the location change from their dashboard. SHRH approval is limited to HRH users under that SHRH section.</p></div>
           <div class="detail-line"><span>Transaction gate</span><p>Until this approval is complete, the system blocks turn-in, transfer, equipment request, split-equipment decisions, and new 2062 validation.</p></div>`
        : ""
    }
    ${
      isExcessAsset
        ? `<div class="detail-line"><span>Request outcome</span><p>If Supply SGT/PHRH approves, the item is reserved, physically delivered to the inprocessing user or SHRH, and the correct custody document is generated for digital signature.</p></div>`
        : ""
    }
    ${
      isOpenSupply && !isSupplyForm
        ? `<div class="detail-line"><span>Fulfillment outcome</span><p>If approved, the expendable supply is issued from open shelf stock, fulfilled by the Supply SGT to the customer, and logged against the requesting office.</p></div>`
        : ""
    }
    ${
      isSupplyForm
        ? `<div class="detail-line"><span>Documents Depository</span><p>The Expendable Supply Form is uploaded and maintained by Supply SGT/PHRH so users submit the current version when the needed consumable is not listed.</p></div>`
        : ""
    }
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function statusVisibilityText() {
  if (activeScreen === "shrh") {
    return "Visible to this SHRH only for HRH end users assigned under the selected section.";
  }

  if (["supply", "phrh"].includes(activeScreen)) {
    return "Visible to Supply SGT and PHRH for every HRH and SHRH across the RCC-E ecosystem.";
  }

  return "Visible to the end user, their SHRH, and Supply SGT/PHRH according to role permissions.";
}

function dutyStatusQuestions(statusValue) {
  if (statusValue === "Teleworking") {
    return `
      <form class="status-question-form" aria-label="Telework status questions">
        <label>
          <span>How long?</span>
          <input type="text" value="Today only" />
        </label>
        <label>
          <span>Telework address</span>
          <input type="text" value="Enter street address, city, country" />
        </label>
        <label>
          <span>What equipment is going home?</span>
          <textarea>Dell Latitude 5550 Laptop. Monitors remain in POD-07.</textarea>
        </label>
      </form>
      <div class="detail-line"><span>Routing</span><p>Telework status is visible to the HRH, their SHRH, and Supply SGT/PHRH so equipment location is clear during inventory checks.</p></div>
    `;
  }

  if (statusValue === "On leave" || statusValue === "TDY") {
    return `
      <form class="status-question-form" aria-label="${statusValue} status questions">
        <label>
          <span>How long?</span>
          <input type="text" value="Enter start date, return date, and total days" />
        </label>
        <label>
          <span>If more than 30 days, who will take their place?</span>
          <input type="text" value="Enter temporary user or acting replacement" />
        </label>
        <label>
          <span>Equipment requiring temporary custody</span>
          <textarea>Laptop, monitors, desktop, server access device, or encryption device as applicable.</textarea>
        </label>
      </form>
      <div class="detail-line"><span>Over 30 days</span><p>If the absence is more than 30 days, the system triggers temporary custody routing for the replacement individual to digitally sign for the equipment until the original user returns.</p></div>
      <div class="detail-line"><span>Signature trigger</span><p>The temporary custodian receives the required DA Form 2062, DA Form 3161, or applicable statement/memo based on personnel type and equipment movement.</p></div>
    `;
  }

  if (statusValue === "Outprocessing") {
    return `
      <form class="status-question-form" aria-label="Outprocessing status questions">
        <label>
          <span>Projected final day</span>
          <input type="text" value="Enter final duty day" />
        </label>
        <label>
          <span>Equipment to turn in</span>
          <textarea>List laptop, monitors, desktop, server, or encryption device assigned to the user.</textarea>
        </label>
      </form>
      <div class="detail-line"><span>Turn-in trigger</span><p>Outprocessing status prompts the user to start turn-in to their SHRH and keeps Supply SGT/PHRH aware of pending custody closure.</p></div>
    `;
  }

  return `<div class="detail-line"><span>Follow-up</span><p>No additional questions are required while the user is on site.</p></div>`;
}

function setDutyStatus(statusValue, sourceButton) {
  document.querySelectorAll(".status-action").forEach((button) => {
    button.classList.toggle("active", button.dataset.statusValue === statusValue);
  });

  const statusLabel = document.querySelector("#teleworkStatus");
  if (statusLabel) statusLabel.textContent = statusValue;

  drawerTitle.textContent = `${statusValue} Status`;
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Current status</span><strong>${statusValue}</strong></div>
    <div class="detail-line"><span>Visibility</span><p>${statusVisibilityText()}</p></div>
    <div class="detail-line"><span>Equipment note</span><p>Duty status helps authorized users understand where assigned equipment may be located and whether inventory follow-up should go through the HRH, SHRH, Supply SGT, or PHRH.</p></div>
    ${dutyStatusQuestions(statusValue)}
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  showToast(`${statusValue} status reported`);
}

function renderPermissions(role = "supply") {
  const config = rolePermissions[role];
  document.querySelector("#roleTitle").textContent = config.title;
  document.querySelector("#permissionCards").innerHTML = config.cards
    .map(([label, value]) => `<div class="permission-card"><span>${label}</span><p>${value}</p></div>`)
    .join("");
}

function updateAssignedShrh() {
  const section = document.querySelector("#sectionSelect").value;
  const [name, contact] = shrhDirectory[section];
  document.querySelector("#assignedShrh").textContent = name;
  document.querySelector("#assignedShrhContact").textContent = contact;
}

function openSectionChangeWorkflow(previousSection, newSection) {
  const [newShrh, newContact] = shrhDirectory[newSection];
  drawerTitle.textContent = "Section / SHRH Change";
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Section changed</span><p>${previousSection} to ${newSection}. This changes the assigned SHRH to ${newShrh}.</p></div>
    <div class="detail-line"><span>New SHRH contact</span><p>${newContact}</p></div>
    <div class="detail-line"><span>Approval gate</span><p>This section change also creates a location change request. PHRH, SHRH, or Supply SGT approval is required before equipment transfer, turn-in, request, or new DA Form 2062 validation can continue.</p></div>
    <form class="status-question-form" aria-label="Section change location and equipment questions">
      <label>
        <span>New room number</span>
        <input type="text" value="Enter new room" />
      </label>
      <label>
        <span>New POD number</span>
        <input type="text" value="Enter new POD" />
      </label>
      <label>
        <span>Current equipment assigned to you</span>
        <textarea>Dell Latitude 5550 Laptop - DELL5550-91A23
Dell 24-inch Monitor - DELL24-77Q12
Dell 24-inch Monitor - DELL24-77Q13</textarea>
      </label>
      <label>
        <span>What should happen to the equipment?</span>
        <select>
          <option>Transfer all equipment to the new SHRH</option>
          <option>Turn in equipment and request new equipment from the new SHRH</option>
          <option>Split equipment: keep laptop, leave monitors in current section</option>
        </select>
      </label>
      <label>
        <span>Reason / notes</span>
        <textarea>Explain why the section changed and where the equipment will physically be located.</textarea>
      </label>
    </form>
    <div class="detail-line"><span>Split option</span><p>The user can keep their laptop, leave monitors behind for the losing section, and use monitors already available in the new section location.</p></div>
    <div class="detail-line"><span>Custody output</span><p>After approval, the system routes either turn-in, HR transfer, split-equipment action, and the required DA Form 2062 or DA Form 3161 signature.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function updateSignatureRule() {
  const personnelType = document.querySelector("#personnelType").value;
  const rule = document.querySelector("#signatureRule");
  const ruleText = document.querySelector("#signatureRuleText");

  if (personnelType === "Contractor") {
    rule.textContent = "Statement or memo required";
    ruleText.textContent = "Contractors cannot sign for equipment. They sign a FAR-aligned statement or memo of understanding uploaded by Supply SGT/PHRH.";
    return;
  }

  rule.textContent = "DA Form 2062 required";
  ruleText.textContent = `${personnelType} users can sign for equipment. Their DA Form 2062 becomes part of the profile's historical records.`;
}

function openProfileRecord(title) {
  drawerTitle.textContent = title;
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Profile record</span><p>This record stays attached to the user's profile as part of their historical accountability file.</p></div>
    <div class="detail-line"><span>Documents source</span><p>Current templates, SOPs, regulations, request forms, statements, and memos are maintained by Supply SGT/PHRH in the Documents Depository.</p></div>
    <div class="detail-line"><span>Access</span><p>The user can view applicable records. SHRH, PHRH, and Supply SGT access follows role permissions.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function updateInventoryMode() {
  const mode = inventoryModes[document.querySelector("#inventoryTypeSelect").value];
  document.querySelector("#inventoryMetricLabel").textContent = mode.label;
  document.querySelector("#inventoryPercent").textContent = mode.percent;
  document.querySelector("#inventoryScopeTitle").textContent = mode.title;
  document.querySelector("#inventoryScopeText").textContent = mode.text;
}

function openInventoryReverificationFlow() {
  drawerTitle.textContent = "End User Inventory Reverification";
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Step 1</span><p>Reverify current room, POD, physical location, section, and assigned SHRH before validating any equipment.</p></div>
    <form class="status-question-form" aria-label="Inventory location reverification">
      <label>
        <span>Current location</span>
        <input type="text" value="B-214 / POD-07" />
      </label>
      <label>
        <span>Current section</span>
        <input type="text" value="ISB" />
      </label>
      <label>
        <span>New section, if changed</span>
        <input type="text" value="Leave blank if no section change" />
      </label>
    </form>
    <div class="detail-line"><span>Approval gate</span><p>If the location, POD, room, section, or SHRH changes, PHRH, SHRH, or Supply SGT approval is required before any equipment transaction or new DA Form 2062 validation can continue.</p></div>
    <div class="detail-line"><span>Step 2</span><p>After location approval is complete, validate each serialized item and generate a fresh DA Form 2062 for the equipment the end user is keeping in custody.</p></div>
    <form class="status-question-form" aria-label="Equipment 2062 validation">
      <label>
        <span>Laptop serial</span>
        <input type="text" value="DELL5550-91A23" />
      </label>
      <label>
        <span>Monitor serials</span>
        <textarea>DELL24-77Q12, DELL24-77Q13</textarea>
      </label>
      <label>
        <span>Desktop serial, if applicable</span>
        <input type="text" value="Not assigned" />
      </label>
    </form>
    <div class="detail-line"><span>If SHRH changes</span><p>The system asks what the end user wants to do before the inventory can be completed.</p></div>
    <div class="detail-line"><span>Turn-in equipment</span><p>User turns equipment in to the losing SHRH and requests new equipment from the gaining SHRH.</p></div>
    <div class="detail-line"><span>Transfer equipment</span><p>User keeps assigned equipment and requests the gaining SHRH to sign for the equipment through the correct HR transfer and custody workflow.</p></div>
    <div class="detail-line"><span>Split equipment</span><p>User can leave monitors at the old section and transfer only the laptop, then use monitors already assigned at the new section location.</p></div>
    <div class="detail-line"><span>Custody output</span><p>The final choice updates SHRH accountability and generates the needed DA Form 2062 or DA Form 3161 for CAC-enabled digital signature.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function openBlueprintDocument() {
  drawerTitle.textContent = "Building Blueprint and POD Locator";
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Maintainer</span><strong>Supply SGT / PHRH</strong></div>
    <div class="detail-line"><span>Purpose</span><p>Shows room numbers, POD numbers, and equipment location notes so users can identify where accountable equipment is normally located.</p></div>
    <div class="detail-line"><span>Notes</span><p>${document.querySelector("#blueprintNotesInput").value}</p></div>
    <div class="detail-line"><span>Documents Depository</span><p>The current building schematic and POD notes are uploaded and updated by Supply SGT/PHRH.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".role-tab").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.goScreen);
  });
});

document.querySelector("#sectionSelect").addEventListener("change", () => {
  const previousSection = currentProfileSection;
  const newSection = document.querySelector("#sectionSelect").value;
  updateAssignedShrh();
  currentProfileSection = newSection;
  openSectionChangeWorkflow(previousSection, newSection);
  showToast("Section change started a location approval workflow");
});

document.querySelector("#personnelType").addEventListener("change", () => {
  updateSignatureRule();
  showToast("Signature rule updated");
});

document.querySelectorAll(".status-action").forEach((button) => {
  button.addEventListener("click", () => {
    setDutyStatus(button.dataset.statusValue, button);
  });
});

document.querySelectorAll(".status-card").forEach((button) => {
  button.addEventListener("click", () => {
    const statusValue = button.dataset.personStatus;
    const count = button.querySelector("strong").textContent;
    drawerTitle.textContent = `${statusValue} Personnel`;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>Status count</span><strong>${count}</strong></div>
      <div class="detail-line"><span>Visibility</span><p>${statusVisibilityText()}</p></div>
      <div class="detail-line"><span>Available actions</span><p>Open assigned equipment, review location notes, send an inventory reminder, or notify the responsible SHRH when follow-up is required.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  });
});

document.querySelector("#profileSaveBtn").addEventListener("click", () => {
  const first = document.querySelector("#firstName").value.trim();
  const last = document.querySelector("#lastName").value.trim();
  drawerTitle.textContent = `${first} ${last} Profile`;
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Saved profile</span><strong>${document.querySelector("#profileRole").value}</strong></div>
    <div class="detail-line"><span>DOD ID</span><strong>${document.querySelector("#dodIdNumber").value}</strong></div>
    <div class="detail-line"><span>Contact</span><p>${document.querySelector("#emailAddress").value} / ${document.querySelector("#phoneNumber").value}</p></div>
    <div class="detail-line"><span>Assigned SHRH</span><p>${document.querySelector("#assignedShrh").textContent} - ${document.querySelector("#assignedShrhContact").textContent}</p></div>
    <div class="detail-line"><span>Duty status</span><strong>${document.querySelector("#teleworkStatus").textContent}</strong></div>
    <div class="detail-line"><span>Location</span><p>Room ${document.querySelector("#roomNumber").value}, ${document.querySelector("#podNumber").value}. ${document.querySelector("#locationDetails").value}</p></div>
    <div class="detail-line"><span>ID expiration</span><strong>${document.querySelector("#idExpiration").value}</strong></div>
    <div class="detail-line"><span>Notes</span><p>${document.querySelector("#profileNotes").value}</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

document.querySelectorAll(".record-card").forEach((button) => {
  button.addEventListener("click", () => openProfileRecord(button.dataset.record));
});

document.querySelectorAll(".pod-room").forEach((button) => {
  button.addEventListener("click", () => {
    const room = button.dataset.room;
    const pod = button.dataset.pod;
    document.querySelector("#roomNumber").value = room;
    document.querySelector("#podNumber").value = pod;
    document.querySelector("#blueprintNoteText").textContent = podNotes[pod];
    document.querySelectorAll(".pod-room").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    showToast(`${room} / ${pod} selected`);
  });
});

document.querySelector("#blueprintDocsBtn").addEventListener("click", openBlueprintDocument);

document.querySelector("#inventoryTypeSelect").addEventListener("change", () => {
  updateInventoryMode();
  showToast("Inventory reporting type updated");
});

document.querySelector("#inventoryReverifyBtn").addEventListener("click", openInventoryReverificationFlow);
document.querySelector("#openMasterLedgerBtn").addEventListener("click", () => openMasterFileCabinet(masterEquipmentGroups[0].assets[0]));

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeTab = button.dataset.tab;
    renderRows();
  });
});

document.querySelectorAll(".pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeStatus = button.dataset.status;
    renderRows();
  });
});

document.querySelectorAll(".metric-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".metric-card").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (button.dataset.screenLink) {
      showScreen(button.dataset.screenLink);
      showToast(`${button.textContent.trim()} opened`);
      return;
    }
    activeMetric = button.dataset.filter;
    if (button.dataset.template === "notifications") {
      openWorkflow("Automatic email notifications", "notifications");
      return;
    }
    if (button.dataset.jumpTab) {
      activeTab = button.dataset.jumpTab;
      document.querySelectorAll(".segment").forEach((item) => {
        item.classList.toggle("active", item.dataset.tab === activeTab);
      });
      showScreen(button.dataset.jumpTab === "excess" ? "excess" : activeScreen === "phrh" ? "phrh" : "supply");
    }
    renderRows();
    if (button.dataset.panel === "inventory-reporting") {
      showScreen("inventory");
      document.querySelector("#inventoryReportingPanel").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    const tabByView = {
      excess: "excess",
      receipts: "custody",
      missing: "missing",
      workorders: "pending",
      reports: "property",
    };

    if (tabByView[view]) {
      activeTab = tabByView[view];
      activeMetric = view === "excess" ? "excess" : "all";
      document.querySelectorAll(".segment").forEach((item) => {
        item.classList.toggle("active", item.dataset.tab === activeTab);
      });
      document.querySelectorAll(".metric-card").forEach((item) => {
        item.classList.toggle("active", item.dataset.filter === activeMetric);
      });
      renderRows();
    }

    showScreen(view);
    showToast(`${button.textContent.trim()} screen opened`);
  });
});

document.querySelectorAll(".mini-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mini-tab").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTasks(button.dataset.range);
  });
});

document.querySelectorAll(".quick-card, .workflow-action").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.screenLink) {
      showScreen(button.dataset.screenLink);
      showToast(`${button.textContent.trim()} opened`);
      return;
    }
    if (button.dataset.template === "excess" || button.dataset.template === "expendable") {
      const targetTab = button.dataset.template === "excess" ? "excess" : "expendable";
      const targetMetric = button.dataset.template === "excess" ? "excess" : "supplies";
      activeTab = targetTab;
      activeMetric = targetMetric;
      document.querySelectorAll(".segment").forEach((item) => {
        item.classList.toggle("active", item.dataset.tab === activeTab);
      });
      document.querySelectorAll(".metric-card").forEach((item) => {
        item.classList.toggle("active", item.dataset.filter === activeMetric);
      });
      renderRows();
      showScreen(button.dataset.template === "excess" ? "excess" : activeScreen === "phrh" ? "phrh" : "supply");
      document.querySelector(".main-panel").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(button.dataset.template === "excess" ? "Showing excess assets available from the supply room" : "Showing open expendable supplies");
      return;
    }
    openWorkflow(button.dataset.action, button.dataset.template);
  });
});

function openWorkflow(title, template) {
  const selectedShrhSection = document.querySelector("#shrhScreenSection")?.value || "selected section";
  if (template === "notifications") {
    drawerTitle.textContent = title;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>System email rule</span><p>A.N.G.E.L.S. automatically emails the user tied to the action when the system needs them to know something or complete a step.</p></div>
      <div class="detail-line"><span>Inventory notices</span><p>End users receive email when an automatic or SHRH/Supply SGT inventory is opened, when the due date is approaching, and when they are past due.</p></div>
      <div class="detail-line"><span>Signature notices</span><p>Users receive email when a DA Form 2062, DA Form 3161, contractor memo, or temporary custody document is waiting for their CAC-enabled signature.</p></div>
      <div class="detail-line"><span>Approval notices</span><p>SHRH, PHRH, and Supply SGT users receive email when location changes, HR transfers, turn-ins, equipment requests, AAR changes, or FOI research need approval or review.</p></div>
      <div class="detail-line"><span>Status notices</span><p>The requester receives email when a request is approved, rejected, returned for correction, fulfilled, or when a signed document is stored in their profile filing system.</p></div>
      <div class="detail-line"><span>Example sent today</span><p>12 automatic emails: 4 pending inventory count notices, 3 signature reminders, 2 location approval alerts, 1 AAR correction approval request, 1 FOI research update, and 1 new SOP/document availability notice.</p></div>
      <div class="detail-line"><span>Profile source</span><p>Email is pulled from the user's profile. Supply SGT/PHRH can audit sent notices and notification history from the user's file cabinet.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    return;
  }

  if (template === "aar") {
    drawerTitle.textContent = title;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>AAR Change</span><p>Request a correction when an end user discovers an inventory data error, such as a wrong serial number, nomenclature, LIN, NSN, or make/model.</p></div>
      <form class="status-question-form" aria-label="AAR change request">
        <label>
          <span>Equipment item</span>
          <input type="text" value="Laptop, monitor, server, encryption device, or desktop" />
        </label>
        <label>
          <span>Current record shown</span>
          <input type="text" value="Current serial number, nomenclature, LIN, NSN, or make/model" />
        </label>
        <label>
          <span>Requested correction</span>
          <input type="text" value="Correct serial number, nomenclature, LIN, NSN, or make/model" />
        </label>
        <label>
          <span>Inventory or 2062 where discovered</span>
          <input type="text" value="Automatic inventory, SHRH inventory, or Supply SGT/PHRH inventory" />
        </label>
        <label>
          <span>Reason / notes</span>
          <textarea>Explain what appears wrong, where the corrected information was found, and any tags, labels, photos, or documents that support the change.</textarea>
        </label>
      </form>
      <div class="detail-line"><span>Routing</span><p>AAR change requests go directly to Supply SGT/PHRH for review and approval before the master property listing or DA Form 2062 record is changed.</p></div>
      <div class="detail-line"><span>Control rule</span><p>The correction is retained in the user's profile file cabinet with the original record, requested change, approval decision, date, and notes for historical visibility.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    return;
  }

  if (template === "foi") {
    drawerTitle.textContent = title;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>FOI</span><p>Found on Installation report for unidentified equipment. This routes directly to Supply SGT/PHRH for GCSS-Army research.</p></div>
      <form class="status-question-form" aria-label="Found on Installation equipment report">
        <label>
          <span>Make / model</span>
          <input type="text" value="Enter make, model, or part number" />
        </label>
        <label>
          <span>Nomenclature, if known</span>
          <input type="text" value="Laptop, monitor, server, encryption device, desktop" />
        </label>
        <label>
          <span>Serial number</span>
          <input type="text" value="Required for GCSS-Army research" />
        </label>
        <label>
          <span>Location found</span>
          <input type="text" value="Room, POD, desk, storage area, or building location" />
        </label>
        <label>
          <span>Finder / section</span>
          <input type="text" value="Name and section reporting FOI" />
        </label>
        <label>
          <span>Notes / condition</span>
          <textarea>Describe where it was found, condition, tags, labels, or any visible markings.</textarea>
        </label>
      </form>
      <div class="detail-line"><span>Routing</span><p>FOI report goes directly to Supply SGT/PHRH to research in GCSS-Army and determine if the item is on anyone's books.</p></div>
      <div class="detail-line"><span>Hold rule</span><p>Found equipment cannot be issued, transferred, or added to open excess until Supply SGT/PHRH completes research and approval.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    return;
  }

  const workflowCopy = {
    transfer: [
      ["Location gate", "Any room, POD, section, or SHRH change must be approved by PHRH, SHRH, or Supply SGT before the transfer can proceed."],
      ["Workflow", "One HRH or SHRH starts the transfer, the other side accepts, DA Form 3161 is generated, both sides CAC sign, then the receiving SHRH gives final approval before equipment moves."],
      ["Reason notes", "Requester must explain why the equipment needs to move, who needs it, and any location details that help the receiving SHRH validate the transfer."],
      ["Required fields", "Losing holder, gaining holder, receiving SHRH, item, LIN or NSN, serials, quantity, location, reason notes, effective date, and CAC signatures."],
      ["Current queue", "3 open HR transfer requests, 1 missing CAC signature, 2 ready for receiving SHRH approval."],
    ],
    turnin: [
      ["Location gate", "If the request includes a location or section change, that change must be approved by PHRH, SHRH, or Supply SGT before turn-in routing continues."],
      ["Workflow", "End User submits turn-in to SHRH, or SHRH submits turn-in to Supply SGT. That is the full internal routing path."],
      ["Reason notes", "Requester must explain why the equipment is being turned in, such as outprocessing, excess to need, damaged, replaced, or no longer required."],
      ["Required fields", "Requester, current holder, receiving holder, item, LIN or NSN, serials, condition, reason notes, photos, and CAC signature."],
      ["Current queue", "3 turn-in requests, 1 missing supporting documents, all internal only."],
    ],
    equipment: [
      ["Location gate", "If the request depends on a room, POD, section, or SHRH change, approval must be completed before equipment can be issued or reassigned."],
      ["Workflow", "Equipment requests are for property book items. End User requests go to SHRH, and SHRH requests go to Supply SGT/PHRH."],
      ["Property book rule", "If approved, the equipment must be issued with the correct custody document, such as DA Form 2062 or contractor statement."],
      ["Reason notes", "Requester must explain why the property book item is needed and how it supports the mission, inprocessing, replacement, or reassignment."],
      ["Required fields", "Requester, SHRH, item, LIN or NSN, quantity, reason notes, needed-by date, receiving location, and CAC approval."],
    ],
    excess: [
      ["Workflow", "End User or SHRH selects a specific open asset from the Supply SGT/PHRH excess listing, then waits for approval."],
      ["Approval", "Supply SGT/PHRH approves or denies the request. If approved, the equipment is reserved and physically delivered to the new person or receiving SHRH."],
      ["Custody", "After delivery, the system generates DA Form 2062 for military/DOD civilians or a contractor letter of understanding when required."],
    ],
    expendable: [
      ["Workflow", "Expendable supply requests are for consumables, not property book equipment. Supply SGT fulfills approved requests to the customer."],
      ["Fulfillment", "The item is issued from open shelf stock or reviewed through the Expendable Supply Form if it is not listed."],
      ["Not listed", "If the needed consumable is not shown, the user opens the Expendable Supply Form maintained in the Documents Depository by Supply SGT/PHRH."],
      ["Required fields", "Requester, office, SHRH if applicable, supply type, quantity, justification, delivery point, desired date, and approval status."],
    ],
    location: [
      ["Workflow", "Location changes are reviewed before transactions continue. PHRH, SHRH, or Supply SGT can approve from their dashboard."],
      ["Approval scope", "Supply SGT and PHRH can approve across the ecosystem. SHRH can approve only HRH end users under their section."],
      ["Required fields", "User, current room, new room, current POD, new POD, current section, new section, current SHRH, gaining SHRH if changed, equipment staying, equipment moving, and reason notes."],
      ["Transaction gate", "No transfer, turn-in, request, split-equipment decision, or new DA Form 2062 validation proceeds until this approval is complete."],
    ],
    foi: [
      ["Workflow", "Any user can report FOI, Found on Installation, when unidentified equipment is found and the owner or accountable hand receipt is unknown."],
      ["Required fields", "Make/model, nomenclature if known, most importantly serial number, location found, date found, finder, section, photos if available, and any notes on condition."],
      ["GCSS-Army research", "The report routes directly to Supply SGT/PHRH so they can research GCSS-Army and determine whether the item is on anyone's books."],
      ["Outcome", "Supply SGT/PHRH can match the item to an accountable holder, add it to an exception queue, create a missing/found reconciliation packet, or add it to the ecosystem if appropriate."],
      ["Transaction control", "FOI equipment cannot be issued, transferred, or counted as available excess equipment until Supply SGT/PHRH completes research and approval."],
    ],
    inventory: [
      ["On-demand SHRH option", `An SHRH can initiate an inventory report whenever needed for their own section only. Current selected section: ${selectedShrhSection}. This is separate from the automatic monthly HRH inventory.`],
      ["Workflow", "The end user first reverifies location, room, POD, section, and assigned SHRH before any equipment is validated."],
      ["Location approval", "If that reverification changes location or SHRH, PHRH, SHRH, or Supply SGT approval is required before equipment validation or transaction routing continues."],
      ["2062 validation", "After location approval is complete, the user validates serialized equipment such as laptop, monitors, desktop, server, or encryption device and signs a fresh DA Form 2062 when required."],
      ["Section change", "If the location update changes the user's section and SHRH, the system asks whether to turn in equipment, transfer equipment to the gaining SHRH, or split equipment by leaving monitors and taking only the laptop."],
      ["Automatic inventory", "The system still initiates the automatic monthly HRH inventory unless Supply SGT/PHRH changes that cadence in settings."],
    ],
  }[template];

  drawerTitle.textContent = title;
  drawerBody.innerHTML = workflowCopy
    .map(([label, value]) => `<div class="detail-line"><span>${label}</span><p>${value}</p></div>`)
    .join("");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

document.querySelector("#globalSearch").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderRows();
});

document.querySelectorAll("[data-ledger-status]").forEach((button) => {
  button.addEventListener("click", () => {
    ledgerStatusFilter = button.dataset.ledgerStatus;
    renderMasterLedger();
  });
});

ledgerSectionFilterEl?.addEventListener("change", (event) => {
  ledgerSectionFilter = event.target.value;
  renderMasterLedger();
});

ledgerTypeFilterEl?.addEventListener("change", (event) => {
  ledgerTypeFilter = event.target.value;
  renderMasterLedger();
});

ledgerSearchEl?.addEventListener("input", (event) => {
  ledgerSearchTerm = event.target.value.trim().toLowerCase();
  renderMasterLedger();
});

ledgerClearFiltersBtn?.addEventListener("click", () => {
  ledgerStatusFilter = "all";
  ledgerSectionFilter = "all";
  ledgerTypeFilter = "all";
  ledgerSearchTerm = "";
  if (ledgerSectionFilterEl) ledgerSectionFilterEl.value = "all";
  if (ledgerTypeFilterEl) ledgerTypeFilterEl.value = "all";
  if (ledgerSearchEl) ledgerSearchEl.value = "";
  renderMasterLedger();
});

document.querySelector("#unitSelect").addEventListener("change", (event) => {
  showToast(`Switched dashboard context to ${event.target.value}`);
});

document.querySelector("#newIssueBtn").addEventListener("click", () => {
  drawerTitle.textContent = "New Issue";
  drawerBody.innerHTML = `
    <label class="detail-line"><span>Issue type</span><strong>Missing equipment / Signature issue / Approval delay</strong></label>
    <label class="detail-line"><span>Required information</span><p>Item, LIN or NSN, serial if applicable, holder, SHRH, location, custody or request form, and suspense.</p></label>
    <label class="detail-line"><span>Prototype note</span><p>The next iteration can turn this panel into a real form with validation and routing.</p></label>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

function openEquipmentIntake(mode) {
  const isUpload = mode === "upload";
  drawerTitle.textContent = isUpload ? "Upload GCSS-Army Equipment File" : "Manual Equipment Entry";
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Allowed roles</span><p>Only Supply SGT and PHRH can add new equipment into the ecosystem.</p></div>
    <div class="detail-line"><span>Input method</span><strong>${isUpload ? "GCSS-Army Excel, CSV, PDF, or approved source document upload" : "Manual entry for one item or small batch"}</strong></div>
    <form class="status-question-form" aria-label="Equipment intake required fields">
      <label>
        <span>Amount</span>
        <input type="text" value="Quantity received or imported" />
      </label>
      <label>
        <span>Nomenclature</span>
        <input type="text" value="Laptop, monitor, server, encryption device, or desktop" />
      </label>
      <label>
        <span>NSN</span>
        <input type="text" value="NSN from GCSS-Army or source document" />
      </label>
      <label>
        <span>Part number / make / model</span>
        <input type="text" value="Manufacturer, model, or part number" />
      </label>
      <label>
        <span>Serial numbers, if applicable</span>
        <textarea>One serial number per line or parsed from uploaded rows.</textarea>
      </label>
    </form>
    <div class="detail-line"><span>Import mapping</span><p>The upload maps Amount, Nomenclature, NSN, Part Number/Make/Model, and Serial Number columns into the property listing.</p></div>
    <div class="detail-line"><span>Review step</span><p>Supply SGT/PHRH reviews exceptions, duplicate serials, missing NSNs, and non-allowed equipment types before records become active.</p></div>
    <div class="detail-line"><span>Property listing update</span><p>Approved equipment updates the property book view, excess/open equipment list, or assigned custody records depending on status.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

document.querySelector("#manualEquipmentBtn").addEventListener("click", () => openEquipmentIntake("manual"));
document.querySelector("#uploadEquipmentBtn").addEventListener("click", () => openEquipmentIntake("upload"));

document.querySelector("#updateDocsBtn").addEventListener("click", () => {
  drawerTitle.textContent = "Documents Depository Update";
  drawerBody.innerHTML = `
    <div class="detail-line"><span>Maintainer</span><strong>Supply SGT</strong></div>
    <div class="detail-line"><span>Visible to</span><p>PHRH, SHRH, HRH end users, and Supply SGT users can see current approved documents.</p></div>
    <div class="detail-line"><span>Document types</span><p>Letters, memorandums, DA Forms, SOPs, and local custody instructions.</p></div>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

document.querySelectorAll(".document-card").forEach((button) => {
  button.addEventListener("click", () => {
    drawerTitle.textContent = button.dataset.doc;
    const isSupplyRequestForm = button.dataset.doc === "Expendable Supply Request Form";
    const isBlueprint = button.dataset.doc === "Building Blueprint and POD Locator";
    const isLockedRecord = button.dataset.docState === "locked";
    const isSharedDownload = button.dataset.docState === "download";
    const scopeLabel = {
      shrh: "SHRH filing system",
      hrh: "HRH profile filing system",
      shared: "Shared documents depository",
    }[button.dataset.docScope] || "Documents Depository";
    drawerBody.innerHTML = `
      <div class="detail-line"><span>Source</span><strong>${scopeLabel}</strong></div>
      <div class="detail-line"><span>Owner</span><p>Updated and controlled by the Supply SGT/PHRH so every user works from the current approved version.</p></div>
      <div class="detail-line"><span>Use</span><p>${button.querySelector("span").textContent}</p></div>
      ${
        isLockedRecord
          ? `<div class="detail-line"><span>Retention rule</span><p>Once signed and uploaded, this record cannot be deleted by SHRH or HRH users. It stays in the profile or section filing system until the Supply SGT or PHRH deletes it from their Document Depository.</p></div>`
          : ""
      }
      ${
        isSharedDownload
          ? `<div class="detail-line"><span>Download access</span><p>This document can be downloaded by users when the Supply SGT/PHRH has uploaded it and allowed visibility for that dashboard.</p></div>`
          : ""
      }
      <div class="detail-line"><span>Available actions</span><p>${isLockedRecord ? "View, download, and route a note. Delete is Supply SGT/PHRH only." : "View and download the approved current version."}</p></div>
      ${
        isSupplyRequestForm
          ? `<div class="detail-line"><span>When used</span><p>Used only when the needed expendable supply is not available in the open supplies listing.</p></div>`
          : ""
      }
      ${
        isBlueprint
          ? `<div class="detail-line"><span>Location notes</span><p>${document.querySelector("#blueprintNotesInput").value}</p></div>`
          : ""
      }
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll(".personal-equipment-card").forEach((button) => {
  button.addEventListener("click", () => {
    drawerTitle.textContent = button.dataset.personalEquipment;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>Personal custody</span><p>This item is directly used by the signed-in person, separate from any equipment they manage as Supply SGT, PHRH, or SHRH.</p></div>
      <div class="detail-line"><span>Serial</span><strong>${button.dataset.personalSerial}</strong></div>
      <div class="detail-line"><span>Location</span><p>${button.dataset.personalLocation}</p></div>
      <div class="detail-line"><span>Custody proof</span><p>Tracked on the user's own DA Form 2062 or applicable custody document with location history.</p></div>
      <div class="detail-line"><span>Visibility</span><p>Visible to the user, their accountable holder, and Supply SGT/PHRH according to role permissions.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll(".personal-equipment-action").forEach((button) => {
  button.addEventListener("click", () => {
    drawerTitle.textContent = `${button.dataset.personalRole} Personal 2062`;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>Purpose</span><p>Shows the equipment this user personally uses, not the equipment they manage for other people or sections.</p></div>
      <div class="detail-line"><span>Required tracking</span><p>Every role is also an end user. Personal equipment must show serial numbers, location, custody document, and signed record history.</p></div>
      <div class="detail-line"><span>Location control</span><p>If the user moves rooms, PODs, or sections, the same location approval workflow applies before transactions or new 2062 validation.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  });
});

document.querySelector("#inventoryLaunchBtn").addEventListener("click", () => {
  openWorkflow("Initiate end user inventory reporting", "inventory");
});

document.querySelectorAll(".compliance-card").forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.querySelector("span").textContent;
    const count = button.querySelector("strong").textContent;
    drawerTitle.textContent = `${label} Inventory Reports`;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>Count</span><strong>${count}</strong></div>
      <div class="detail-line"><span>Inventory type</span><strong>${document.querySelector("#inventoryScopeTitle").textContent}</strong></div>
      <div class="detail-line"><span>Inventory routing</span><p>${document.querySelector("#inventoryScopeText").textContent}</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll(".mini-list-row").forEach((button) => {
  button.addEventListener("click", () => {
    drawerTitle.textContent = button.dataset.person;
    drawerBody.innerHTML = `
      <div class="detail-line"><span>Inventory status</span><strong>Not reported</strong></div>
      <div class="detail-line"><span>Section</span><strong>${button.dataset.section}</strong></div>
      <div class="detail-line"><span>Due date</span><strong>${button.dataset.due}</strong></div>
      <div class="detail-line"><span>Available actions</span><p>Send reminder, notify SHRH, mark excused, or open the end user's assigned equipment list.</p></div>
    `;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  });
});

document.querySelector("#exportBtn").addEventListener("click", () => showToast("Dashboard export queued"));
document.querySelector("#drawerClose").addEventListener("click", closeDrawer);
document.querySelector("#noteBtn").addEventListener("click", () => showToast("Note added to prototype activity log"));
document.querySelector("#routeBtn").addEventListener("click", () => showToast("Action routed to approval queue"));
document.querySelector("#briefToggle").addEventListener("click", () => {
  document.querySelector(".brief-panel").classList.toggle("collapsed");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});

renderRows();
renderMasterLedger();
renderPersonalLedgers();
renderTasks();
renderPermissions();
updateAssignedShrh();
updateSignatureRule();
updateInventoryMode();
showScreen("supply");
