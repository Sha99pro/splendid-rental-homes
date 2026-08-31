export const applications = [
  {
    id: 1,
    //property&lease
    property: "159 Joseph St Ofallon, MO 63366",
    rent: 1680,
    leaseTerm: "12months",
    startDate: "09/08/2026",

    //personal details
    firstName: "Shawn",
    lastName: "Miller",
    dateOfBirth: "01/15/1989",
    ssn: "758-87-9632",
    idNumber: "MO123456",
    email: "david876@gmail.com",
    phone: "963-562-5562",
    employer: "XYZ Company",

    //Occupants
    occupants: [
      {
        firstName: "Emily",
        middleName: "S",
        lastName: "Miller",
        dateOfBirth: "02/12/1985",
        relationship: "Spouse",
      },
    ],
    //Rental history
    rentalHistory: [
      {
        type: "Current Address",
        street: "123 Buckle street",
        city: "St.Louis",
        state: "MO",
        zip: "63101",
        howLong: "3 years",
        managerName: "James Houston",
        managerPhone: "133-859-7569",
      },
      {
        type: "Previous Address",
        street: "123 Main street",
        city: "Kansas",
        state: "MO",
        zip: "67201",
        howLong: "2 years",
        managerName: "Kayley",
        managerPhone: "756-859-8974",
      },
    ],

    //employment
    employment: [
      {
        employer: "XYZ company",
        position: "Manager",
        dates: "2022-present",
        income: "$100,000",
        supervisor: "Gabby",
        phone: "235-569-8965",
        state:"Texas",
        city:"McKelley",
        street:"123 Main street",
        zip:63750
      },
    ],

    //other income sources
    otherIncome: [
      {
        type: "Teaching",
        monthlyIncome: "$2500",
        providerName: "EducateStreams",
        street: "195 Groover street",
        city: "St.Louis",
        state: "MO",
        zip: "62534",
        phone: "123-456-7890",
      },
    ],

    //emergency contact info
    emergencyContact: {
      name: "Emily",
      phone: "123-896-4689",
      relationship: "Spouse",
      street: "105 fashion st.",
      city: "St.Louis",
      state: "MO",
      zip: "65310",
    },
    //Vehicles info
    vehicles: [
      {
        makeModel: "Toyota Camry",
        year: 2026,
        color: "Grey",
        plateNumber: "ZE42356",
        state: "MO",
      },
    ],
    //other info
    otherInfo: {
      evicted: "No",
      evictionWhen: "",
      evictionWhy: "",

      felony: "No",
      felonyWhen: "",
      felonyWhy: "",

      bankruptcy: "No",
      bankruptcyWhen: "",
      bankruptcyWhy: "",

      smoker: "No",

      pets: "Yes",
      petType: "Dog",
      petBreed: "Labrador",
      petWeight: "50 lbs",

      referralSource: "Friend",
    },
    //agreement & consent to BG check
    agreement: {
      backgroundCheckConsent: true,
      signature: "John Smith",
      date: "08/20/2026",
    },

    //cosigner
    coSigner: {
      cosigningFor: "John Smith",
      fullName: "Michael Smith",
      unitAppliedFor: "1214 Welsh Dr, St. Louis, MO",
      signature: "Michael Smith",
      date: "08/20/2026",
    },

    //Message
    message: "I'm interested in renting this property.",

    //status
    status: "Approved",
  },
  {
    id: 2,

    // property & lease
    property: "245 Oakwood Dr Columbia, MO 65203",
    rent: 1850,
    leaseTerm: "12 months",
    startDate: "10/01/2026",

    // personal details
    firstName: "Sarah",
    lastName: "Wilson",
    dateOfBirth: "06/22/1992",
    ssn: "421-63-8754",
    idNumber: "MO789456",
    email: "sarahwilson@gmail.com",
    phone: "573-684-2391",
    employer: "ABC Healthcare",

    // Occupants
    occupants: [
      {
        firstName: "Daniel",
        middleName: "R",
        lastName: "Wilson",
        dateOfBirth: "11/05/1990",
        relationship: "Spouse",
      },
    ],

    // Rental history
    rentalHistory: [
      {
        type: "Current Address",
        street: "456 Pine Street",
        city: "Columbia",
        state: "MO",
        zip: "65201",
        howLong: "2 years",
        managerName: "Robert Miller",
        managerPhone: "573-456-7821",
      },
      {
        type: "Previous Address",
        street: "789 Maple Avenue",
        city: "Jefferson City",
        state: "MO",
        zip: "65101",
        howLong: "3 years",
        managerName: "Linda Johnson",
        managerPhone: "573-789-3456",
      },
    ],

    // employment
    employment: [
      {
        employer: "ABC Healthcare",
        position: "Registered Nurse",
        dates: "2021-present",
        income: "$82,000",
        supervisor: "Karen Williams",
        phone: "573-321-6789",
        state:"Illinois",
        city:"Chicago",
        street:"456 Lincoln street.",
        zip:45678
      },
    ],

    // other income sources
    otherIncome: [
      {
        type: "Freelance",
        manthlyIncome: "$1200",
        providerName: "Sarah Design Services",
        street: "456 Cedar Road",
        city: "Columbia",
        state: "MO",
        zip: "65202",
        phone: "573-456-1234",
      },
    ],

    // emergency contact info
    emergencyContact: {
      name: "Jennifer Wilson",
      phone: "573-852-7410",
      relationship: "Sister",
      street: "321 Elm Street",
      city: "Columbia",
      state: "MO",
      zip: "65203",
    },

    // Vehicles info
    vehicles: [
      {
        makeModel: "Honda CR-V",
        year: 2024,
        color: "Blue",
        plateNumber: "MO78921",
        state: "MO",
      },
    ],

    // other info
    otherInfo: {
      evicted: "No",
      evictionWhen: "",
      evictionWhy: "",

      felony: "No",
      felonyWhen: "",
      felonyWhy: "",

      bankruptcy: "No",
      bankruptcyWhen: "",
      bankruptcyWhy: "",

      smoker: "No",

      pets: "Yes",
      petType: "Cat",
      petBreed: "Domestic Shorthair",
      petWeight: "12 lbs",

      referralSource: "Online Search",
    },

    // agreement & consent to BG check
    agreement: {
      backgroundCheckConsent: true,
      signature: "Sarah Wilson",
      date: "08/20/2026",
    },

    // cosigner
    coSigner: {
      cosigningFor: "Sarah Wilson",
      fullName: "David Wilson",
      unitAppliedFor: "245 Oakwood Dr, Columbia, MO 65203",
      signature: "David Wilson",
      date: "08/20/2026",
    },

    // Message
    message:
      "I am very interested in this property and would love the opportunity to rent it.",

    // status
    status: "Pending",
  },
];
