// Greenwich, CT area (location) pages. Content comes from the page documents in /data/*.docx.
// Rendered by components/AreaPage.jsx; each route under app/<slug>/page.jsx picks one entry by slug.

const steps = (items) => items.map(([title, desc], i) => ({ num: String(i + 1).padStart(2, "0"), title, desc }));

export const areaPages = [
  {
    slug: "general-contractor-greenwich-ct",
    navLabel: "General Contractor Greenwich CT",
    serviceType: "General Contractor",
    title: "General Contractor in Greenwich, CT",
    metaTitle: "General Contractor Greenwich CT | NZ Home Improvement",
    metaDescription:
      "Looking for a general contractor in Greenwich, CT? NZ Home Improvement handles kitchen, bathroom and basement remodeling, additions and whole-home renovations. Free estimate.",
    heroImage: "/img/full/11.jpg",
    gallery: "home-renovation",
    galleryAlt: "Home renovation project by NZ Home Improvement - general contractor Greenwich CT",
    intro: {
      heading: "Reliable General Contractor Services in Greenwich, Connecticut",
      paragraphs: [
        "Planning a home renovation, remodeling project, or major improvement in Greenwich, CT? NZ Home Improvement provides professional general contracting and remodeling services for homeowners looking to improve, expand, or completely transform their homes.",
        "From kitchen and bathroom remodeling to basement renovations, home additions, and larger whole-home projects, our team helps manage the construction process from planning through completion.",
        "We understand that every Greenwich home is different. Whether you are updating an older property, improving an existing layout, or creating a more modern and functional living space, our goal is to deliver quality workmanship, clear communication, and a finished project that fits your home and your needs.",
      ],
      callout: "Looking for a general contractor in Greenwich, CT? Contact NZ Home Improvement for a free consultation and estimate.",
    },
    overview: {
      heading: "Home Remodeling and General Contracting in Greenwich",
      paragraphs: [
        "A successful remodeling project requires more than individual trades working separately. It requires proper planning, coordination, material selection, scheduling, and attention to the details that affect the finished result.",
        "NZ Home Improvement provides a coordinated approach to residential construction and remodeling. Depending on the project, our services can include demolition, framing, drywall, flooring, painting, cabinetry, tile work, electrical and plumbing coordination, and final finishing.",
        "Whether you are planning one major room renovation or a complete home transformation, we work with you to understand the scope of the project and develop a practical plan before construction begins.",
      ],
    },
    serviceCards: {
      heading: "Our General Contractor Services in Greenwich, CT",
      items: [
        {
          title: "Kitchen Remodeling",
          href: "/kitchen-remodeling-greenwich-ct",
          img: "/img/gallery/kitchen/3.jpeg",
          paragraphs: [
            "Your kitchen should work for the way your family lives. We provide kitchen remodeling services including layout improvements, cabinetry, countertops, flooring, lighting, and other upgrades.",
            "Whether you want a modern kitchen, a more functional layout, or a complete kitchen renovation, we can help coordinate the project from demolition through final installation.",
          ],
        },
        {
          title: "Bathroom Remodeling",
          href: "/bathroom-remodeling-greenwich-ct",
          img: "/img/gallery/bathroom/3.jpeg",
          paragraphs: [
            "A bathroom renovation can improve both the comfort and functionality of your home. Our bathroom remodeling services can include new vanities, showers, tubs, tile, flooring, lighting, fixtures, and layout improvements.",
            "We help homeowners create bathrooms that are practical for everyday use while matching the style of the rest of the home.",
          ],
        },
        {
          title: "Basement Remodeling",
          href: "/basement-remodeling-greenwich-ct",
          img: "/img/gallery/basement-remodeling/3.jpeg",
          paragraphs: [
            "An unfinished or underused basement can become valuable additional living space. NZ Home Improvement can help transform basements into comfortable family rooms, entertainment spaces, home offices, gyms, guest areas, or other functional spaces based on your needs.",
            "Before finishing a basement, we consider important factors such as moisture, layout, lighting, electrical requirements, plumbing, ceiling height, and applicable code requirements.",
          ],
        },
        {
          title: "Whole-Home Remodeling",
          href: "/home-renovation",
          img: "/img/gallery/home-renovation/5.jpeg",
          paragraphs: [
            "Some homeowners do not need a single-room renovation. They need a larger transformation.",
            "Our general contracting services can coordinate multiple areas of a home as part of a larger renovation, helping create a consistent design and avoiding the complications of managing multiple contractors independently.",
          ],
        },
        {
          title: "Home Additions and Expansion Projects",
          href: "/home-addition",
          img: "/img/gallery/home-addition/2.jpeg",
          paragraphs: [
            "When your existing home no longer provides enough space, an addition may be a better solution than moving.",
            "Depending on the property and project requirements, we can help with planning and construction for additional living space, expanded kitchens, new bedrooms, larger living areas, or other home improvements.",
          ],
        },
      ],
    },
    process: {
      heading: "A Remodeling Process Built Around Your Project",
      steps: steps([
        ["Consultation", "We start by understanding your goals, the existing space, your priorities, and the overall scope of the project."],
        ["Planning", "We discuss the proposed work, materials, layout, project requirements, and expected timeline so you have a clearer understanding of what the project involves."],
        ["Construction", "Our team coordinates the construction process and manages the work according to the agreed project scope."],
        ["Finishing and Final Review", "We focus on the finishing details and review the completed work with you to make sure the project meets the agreed expectations."],
      ]),
    },
    whyUs: {
      heading: "Why Choose NZ Home Improvement?",
      items: [
        { title: "Experience Across Multiple Remodeling Services", desc: "From individual room renovations to larger home improvement projects, our services cover multiple areas of residential construction." },
        { title: "One Team for Your Remodeling Project", desc: "Working with a general contractor can make it easier to coordinate different stages and trades involved in a larger renovation." },
        { title: "Quality-Focused Work", desc: "We focus on proper preparation, quality materials, careful installation, and attention to the details that make a difference in the finished project." },
        { title: "Clear Communication", desc: "A remodeling project can involve many decisions. We keep homeowners informed throughout the process so they understand what is happening at each stage." },
        { title: "Customized Solutions", desc: "No two homes or remodeling projects are exactly alike. We develop solutions around your home's existing layout, your goals, and your budget." },
      ],
    },
    closingSections: [
      {
        heading: "General Contractor for Greenwich Homeowners",
        paragraphs: [
          "Greenwich homeowners may have very different renovation goals. One homeowner may want to modernize an outdated kitchen, while another may need a complete bathroom renovation or want to turn an unfinished basement into usable living space.",
          "That is why we do not take a one-size-fits-all approach.",
          "We look at the existing space, understand what you want to accomplish, and help develop a remodeling plan that makes sense for the property.",
          "Whether your project is a focused renovation or a larger home improvement project, NZ Home Improvement is here to help you move from the initial idea to the finished space.",
        ],
      },
      {
        heading: "Planning a Home Remodeling Project in Greenwich?",
        paragraphs: [
          "Before starting a major renovation, it is important to understand the scope of work, materials, timeline, budget, and any local requirements that may apply to the project.",
          "Our team can discuss your goals, review the project with you, and provide a detailed estimate based on the work required.",
          "If you are considering kitchen remodeling, bathroom remodeling, basement remodeling, or a larger home renovation in Greenwich, we would be happy to discuss your project.",
        ],
      },
    ],
    faqs: [
      { q: "Do you provide general contractor services in Greenwich, CT?", a: "Yes. NZ Home Improvement provides residential remodeling and general contracting services for homeowners in Greenwich and surrounding areas." },
      { q: "What remodeling services do you offer in Greenwich?", a: "Our services include kitchen remodeling, bathroom remodeling, basement remodeling, home renovations, whole-home remodeling, and other residential construction and improvement projects." },
      { q: "Can you remodel an entire home?", a: "Yes. Larger projects can involve multiple areas of a home, including kitchens, bathrooms, living spaces, flooring, walls, and other improvements. The exact scope depends on the property and the homeowner's goals." },
      { q: "Do you remodel basements in Greenwich?", a: "Yes. We can help transform unfinished or underused basements into functional living spaces such as family rooms, entertainment areas, offices, gyms, or guest spaces." },
      { q: "Can you help with kitchen and bathroom remodeling?", a: "Yes. Kitchen and bathroom remodeling are among the core residential remodeling services we provide, including layout improvements, cabinetry, countertops, flooring, tile, fixtures, lighting, and related work." },
      { q: "How much does a home remodeling project cost in Greenwich?", a: "The cost depends on the size and scope of the project, existing conditions, materials, design choices, and the work required. We recommend an on-site evaluation and detailed estimate rather than relying on a generic price range." },
      { q: "Do remodeling projects require permits?", a: "Some remodeling and construction projects require permits or inspections depending on the type and scope of work. Requirements can vary by project, so applicable requirements should be confirmed before construction begins." },
      { q: "How do I get started with NZ Home Improvement?", a: "Contact NZ Home Improvement to discuss your project and schedule a consultation. We can review your goals, discuss the scope of work, and provide an estimate based on your project requirements." },
    ],
    cta: {
      heading: "Start Your Greenwich Home Improvement Project",
      lead: "Ready to improve your home?",
      paragraphs: [
        "Whether you are planning a kitchen remodel, bathroom renovation, basement transformation, whole-home renovation, or another residential construction project, NZ Home Improvement can help you plan the next step.",
        "Contact NZ Home Improvement today to schedule your consultation and request a free estimate.",
      ],
    },
  },

  {
    slug: "kitchen-remodeling-greenwich-ct",
    navLabel: "Kitchen Remodeling Greenwich CT",
    serviceType: "Kitchen Remodeling",
    title: "Kitchen Remodeling in Greenwich, CT",
    metaTitle: "Kitchen Remodeling Greenwich CT | NZ Home Improvement",
    metaDescription:
      "Kitchen remodeling in Greenwich, CT by NZ Home Improvement — layouts, cabinetry, countertops, flooring, lighting and complete kitchen renovations. Request an estimate.",
    heroImage: "/img/full/09.jpg",
    gallery: "kitchen",
    galleryAlt: "Kitchen remodeling project by NZ Home Improvement - Greenwich CT",
    intro: {
      heading: "Professional Kitchen Remodeling in Greenwich, Connecticut",
      paragraphs: [
        "Planning to update your kitchen or completely transform the space? NZ Home Improvement provides kitchen remodeling services for homeowners in Greenwich, CT, with a focus on practical layouts, quality materials, and a finished kitchen that fits your home and lifestyle.",
        "Whether you want to modernize an outdated kitchen, improve storage, change the layout, or complete a full kitchen renovation, we can help you plan and manage the remodeling project from start to finish.",
        "A kitchen should be more than just a good-looking space. It should be comfortable to use, provide enough storage, and work well for the way your household lives every day.",
      ],
      callout: "Planning a kitchen remodel in Greenwich, CT? Contact NZ Home Improvement to discuss your project and request an estimate.",
    },
    serviceList: {
      heading: "Kitchen Remodeling Services in Greenwich",
      lead: "Every kitchen has different requirements. Some homeowners may only need updated cabinets, countertops, and finishes, while others may want a complete transformation involving the layout and multiple parts of the room.",
      listIntro: "Our kitchen remodeling services can include:",
      items: [
        "Complete kitchen renovations",
        "Kitchen layout improvements",
        "Custom cabinetry and storage",
        "Countertops",
        "Backsplashes",
        "Kitchen flooring",
        "Lighting improvements",
        "Sinks and faucets",
        "Kitchen fixtures and hardware",
        "Painting and finishing",
        "Open-concept kitchen improvements",
        "Kitchen additions and expanded spaces",
      ],
      outro: "We can discuss your existing kitchen, your goals, and the scope of work before the remodeling project begins.",
    },
    details: [
      {
        heading: "Custom Kitchen Remodeling for Greenwich Homes",
        paragraphs: [
          "A successful kitchen remodel starts with understanding how you actually use the space.",
          "The right layout can make cooking, preparing meals, storing items, and moving around the kitchen much easier. Depending on the existing space, remodeling may involve improving the location of cabinets and appliances, creating additional storage, or changing the overall arrangement of the kitchen.",
          "We focus on developing a remodeling plan that combines functionality, appearance, and the practical requirements of your home.",
        ],
      },
      {
        heading: "Kitchen Cabinets and Storage",
        paragraphs: [
          "Cabinetry has a major impact on both the appearance and functionality of a kitchen.",
          "During a kitchen renovation, homeowners may choose to replace outdated cabinets, improve storage capacity, change cabinet configurations, or create more efficient use of available wall and floor space.",
          "Thoughtful cabinet planning can provide easier access to everyday items while helping the kitchen stay organized.",
        ],
      },
      {
        heading: "Kitchen Countertops and Backsplashes",
        paragraphs: [
          "Countertops and backsplashes are important parts of a kitchen's design and everyday functionality.",
          "A kitchen remodel can include new countertop surfaces and backsplash materials selected to complement the cabinets, flooring, fixtures, and overall style of the space.",
          "Different materials, colors, patterns, and finishes can be considered depending on your preferences and the requirements of the project.",
        ],
      },
      {
        heading: "Kitchen Flooring and Lighting",
        paragraphs: [
          "Flooring and lighting can significantly change the look and usability of a kitchen.",
          "New flooring can help give an older kitchen a completely different appearance, while improved lighting can make food preparation and everyday activities more comfortable.",
          "Depending on the project, kitchen remodeling may include flooring updates, ceiling lighting, recessed lighting, under-cabinet lighting, or other appropriate lighting improvements.",
        ],
      },
      {
        heading: "Kitchen Layout and Open-Concept Remodeling",
        paragraphs: [
          "Many kitchen renovations involve more than simply replacing cabinets and countertops.",
          "If the existing layout does not work well for your household, remodeling may provide an opportunity to improve the flow of the space or create a more open connection between the kitchen and nearby living areas.",
          "Layout changes need to be considered carefully based on the existing structure, plumbing, electrical requirements, and overall project scope.",
        ],
      },
      {
        heading: "Complete Kitchen Renovation in Greenwich",
        paragraphs: [
          "For homeowners planning a complete kitchen renovation, several parts of the room may need to be coordinated together.",
          "Depending on the project, this can include demolition, layout changes, cabinetry, countertops, flooring, lighting, plumbing, electrical work, painting, fixtures, and final finishing.",
          "Coordinating the different stages as part of one remodeling project can make the process easier to manage and help keep the work organized.",
        ],
      },
    ],
    process: {
      heading: "Our Kitchen Remodeling Process",
      steps: steps([
        ["Consultation", "We begin by discussing your current kitchen, what you want to change, and how you would like the finished space to function."],
        ["Planning", "We review the proposed layout, materials, cabinetry, finishes, fixtures, and other important details before construction begins."],
        ["Remodeling and Construction", "The existing kitchen is prepared and the agreed remodeling work is completed according to the project scope."],
        ["Finishing and Final Review", "After the main remodeling work is completed, we focus on the finishing details and review the completed kitchen with you."],
      ]),
    },
    whyUs: {
      heading: "Why Choose NZ Home Improvement for Kitchen Remodeling?",
      items: [
        { title: "Designed Around Your Needs", desc: "Your kitchen should reflect how you actually use your home. We focus on practical solutions rather than taking a one-size-fits-all approach." },
        { title: "Functional and Attractive Spaces", desc: "A successful kitchen renovation should balance appearance with everyday functionality, storage, accessibility, and comfort." },
        { title: "Attention to Detail", desc: "From cabinetry and countertops to tile, fixtures, lighting, and finishing work, the smaller details contribute to the overall quality of the completed kitchen." },
        { title: "Coordinated Remodeling", desc: "Kitchen renovations can involve several different types of work. Coordinating these stages as one project can make the process easier for homeowners to manage." },
        { title: "Remodeling Based on Your Home", desc: "Every home has different dimensions, layouts, and existing conditions. The remodeling plan should take these factors into account before construction begins." },
      ],
    },
    closingSections: [
      {
        heading: "Kitchen Remodeling for Greenwich Homeowners",
        paragraphs: [
          "Whether you are updating an older kitchen or planning a complete renovation, the goal should be to create a space that works better for your household.",
          "A kitchen remodel can improve storage, layout, lighting, functionality, and the overall appearance of your home.",
          "NZ Home Improvement can help you evaluate your existing kitchen and determine the improvements that make sense for your remodeling goals.",
        ],
      },
    ],
    faqs: [
      { q: "Do you provide kitchen remodeling in Greenwich, CT?", a: "Yes. NZ Home Improvement provides kitchen remodeling and renovation services for homeowners in Greenwich, CT." },
      { q: "What is included in a kitchen remodel?", a: "Depending on the project, kitchen remodeling can include demolition, layout changes, cabinetry, countertops, backsplashes, flooring, lighting, fixtures, plumbing, electrical work, painting, and finishing." },
      { q: "Can you remodel an existing kitchen without changing the layout?", a: "Yes. A kitchen does not always need a complete layout change. Depending on the condition and design of the existing space, updating cabinets, countertops, flooring, lighting, fixtures, and finishes can significantly improve the kitchen." },
      { q: "Can you change the layout of my kitchen?", a: "Depending on the property and project requirements, the kitchen layout may be modified. Any changes involving walls, plumbing, electrical systems, or structural elements need to be evaluated as part of the project planning." },
      { q: "Can you create a more open kitchen?", a: "Depending on the existing structure, a remodeling project may be able to improve the connection between the kitchen and nearby living areas. Structural and other project requirements should be evaluated before making layout changes." },
      { q: "How long does a kitchen remodel take?", a: "The timeline depends on the size and complexity of the kitchen, the materials selected, existing conditions, and the scope of work. A more accurate timeline can be discussed after evaluating the specific project." },
      { q: "How much does kitchen remodeling cost in Greenwich?", a: "Kitchen remodeling costs vary based on the size of the kitchen, materials, cabinetry, countertops, fixtures, layout changes, and overall scope of work. A project-specific estimate is more useful than a general price range." },
      { q: "Do kitchen remodeling projects require permits?", a: "Some kitchen remodeling work may require permits or inspections depending on what is being changed. Applicable requirements should be confirmed before construction begins." },
      { q: "How do I get started with a kitchen remodel?", a: "Contact NZ Home Improvement to discuss your existing kitchen, your remodeling goals, and the improvements you are considering. We can then discuss the project scope and next steps." },
    ],
    cta: {
      heading: "Start Your Greenwich Kitchen Remodeling Project",
      lead: "Ready to create a kitchen that works better for your home?",
      paragraphs: [
        "Whether you are planning a complete kitchen renovation, updating your cabinets and countertops, improving storage, or changing the layout, NZ Home Improvement can help you plan your remodeling project.",
        "Contact NZ Home Improvement today to discuss your kitchen remodeling project in Greenwich, CT and request an estimate.",
      ],
    },
  },

  {
    slug: "bathroom-remodeling-greenwich-ct",
    navLabel: "Bathroom Remodeling Greenwich CT",
    serviceType: "Bathroom Remodeling",
    title: "Bathroom Remodeling in Greenwich, CT",
    metaTitle: "Bathroom Remodeling Greenwich CT | NZ Home Improvement",
    metaDescription:
      "Bathroom remodeling in Greenwich, CT by NZ Home Improvement — showers, tubs, tile, vanities, lighting and complete bathroom renovations. Request an estimate.",
    heroImage: "/img/full/20.jpg",
    gallery: "bathroom",
    galleryAlt: "Bathroom remodeling project by NZ Home Improvement - Greenwich CT",
    intro: {
      heading: "Professional Bathroom Remodeling in Greenwich, Connecticut",
      paragraphs: [
        "Planning to update an outdated bathroom or create a completely new bathroom space? NZ Home Improvement provides bathroom remodeling services for homeowners in Greenwich, CT, with a focus on practical layouts, quality materials, and careful finishing.",
        "Whether you are looking for a simple bathroom update or a complete renovation, we can help coordinate the remodeling process from the initial planning stage through completion.",
        "A well-designed bathroom should be comfortable, functional, and suited to the way you use your home. Our goal is to help you create a bathroom that looks great while also working well for everyday life.",
      ],
      callout: "Planning a bathroom remodel in Greenwich, CT? Contact NZ Home Improvement to discuss your project and request an estimate.",
    },
    serviceList: {
      heading: "Bathroom Remodeling Services in Greenwich",
      lead: "Every bathroom remodeling project is different. Some homeowners want to modernize an older bathroom, while others want to completely change the layout, fixtures, finishes, and overall appearance.",
      listIntro: "NZ Home Improvement can help with a range of bathroom remodeling improvements, including:",
      items: [
        "Bathroom layout improvements",
        "Shower and tub renovations",
        "Bathroom vanities and cabinetry",
        "Countertops",
        "Tile installation",
        "Bathroom flooring",
        "Lighting improvements",
        "Fixtures and hardware",
        "Painting and finishing",
        "Storage solutions",
        "Complete bathroom renovations",
      ],
      outro: "We can discuss the existing bathroom, your goals, and the scope of work before construction begins.",
    },
    details: [
      {
        heading: "Custom Bathroom Renovations for Greenwich Homes",
        paragraphs: [
          "A bathroom remodel should be planned around the existing space and the needs of the homeowner.",
          "Some bathrooms may benefit from a better layout, while others may need updated plumbing fixtures, improved storage, new tile, or a complete renovation.",
          "We look at the space as a whole and help develop a remodeling approach that balances appearance, functionality, and the practical requirements of the project.",
        ],
      },
      {
        heading: "Shower and Tub Remodeling",
        paragraphs: [
          "The shower or tub is often one of the most noticeable parts of a bathroom.",
          "Whether you want to replace an outdated tub, create a more modern shower area, or completely redesign the space, the right materials and layout can make a significant difference.",
          "Bathroom remodeling can include new shower surrounds, tile, fixtures, glass, tubs, and other finishing details based on the project.",
        ],
      },
      {
        heading: "Bathroom Tile and Flooring",
        paragraphs: [
          "Tile plays an important role in both the appearance and durability of a bathroom.",
          "We can help with tile installation for floors, shower walls, backsplashes, and other bathroom surfaces. Different materials, patterns, sizes, and finishes can be considered depending on the design you want.",
          "Proper preparation and installation are important because bathroom surfaces are regularly exposed to moisture and water.",
        ],
      },
      {
        heading: "Bathroom Vanities, Storage and Countertops",
        paragraphs: [
          "A bathroom needs practical storage as well as attractive finishes.",
          "Replacing an old vanity can improve storage, functionality, and the overall appearance of the room. Depending on the project, we can coordinate cabinetry, countertops, sinks, hardware, and related improvements.",
          "For smaller bathrooms especially, thoughtful use of available space can make the room feel more comfortable and functional.",
        ],
      },
      {
        heading: "Bathroom Lighting and Finishing Details",
        paragraphs: [
          "Lighting can change the way a bathroom looks and functions.",
          "During a bathroom renovation, homeowners may consider improved vanity lighting, ceiling fixtures, recessed lighting, or other lighting options appropriate for the space.",
          "Finishing details such as mirrors, hardware, paint, trim, and fixtures can then bring the design together.",
        ],
      },
      {
        heading: "Complete Bathroom Remodeling in Greenwich",
        paragraphs: [
          "For homeowners planning a complete bathroom renovation, multiple elements may need to be coordinated at the same time.",
          "Depending on the project, this can involve demolition, layout changes, plumbing and electrical coordination, walls, flooring, tile, cabinetry, fixtures, painting, and final finishing.",
          "Having the different stages coordinated through one remodeling project can make the process easier to manage and help keep the work organized.",
        ],
      },
    ],
    process: {
      heading: "Our Bathroom Remodeling Process",
      steps: steps([
        ["Consultation", "We begin by discussing what you want to change, what is currently working or not working in the bathroom, and what you would like the finished space to look like."],
        ["Project Planning", "We review the proposed scope, materials, layout, fixtures, and other important project details before construction begins."],
        ["Remodeling and Construction", "The existing space is prepared and the agreed remodeling work is completed according to the project scope."],
        ["Finishing and Final Review", "Once the main work is complete, we focus on the finishing details and review the completed bathroom with you."],
      ]),
    },
    whyUs: {
      heading: "Why Choose NZ Home Improvement for Bathroom Remodeling?",
      items: [
        { title: "Practical Remodeling Solutions", desc: "We focus on creating bathrooms that are not only attractive but also functional for everyday use." },
        { title: "Attention to Detail", desc: "Bathroom remodeling involves many small details, from tile alignment and fixtures to cabinetry and finishing work. Careful attention to these details contributes to a better finished result." },
        { title: "Coordinated Remodeling", desc: "A bathroom renovation can involve several different types of work. Coordinating these stages as part of one project can make the remodeling process easier for homeowners." },
        { title: "Customized to Your Home", desc: "We do not use the same approach for every bathroom. The existing layout, available space, design preferences, and project goals all affect the remodeling plan." },
      ],
    },
    closingSections: [
      {
        heading: "Bathroom Remodeling for Greenwich Homeowners",
        paragraphs: [
          "Whether you are updating a guest bathroom, renovating a primary bathroom, or completely changing an older bathroom, the project should be planned around the way you use the space.",
          "A bathroom renovation can improve storage, lighting, layout, comfort, and the overall appearance of your home.",
          "NZ Home Improvement can help you evaluate the existing space and determine the improvements that make sense for your remodeling goals.",
        ],
      },
    ],
    faqs: [
      { q: "Do you provide bathroom remodeling in Greenwich, CT?", a: "Yes. NZ Home Improvement provides bathroom remodeling and renovation services for homeowners in Greenwich, CT." },
      { q: "What is included in a bathroom remodel?", a: "Depending on the project, bathroom remodeling can include demolition, layout changes, tile, flooring, showers, tubs, vanities, countertops, fixtures, lighting, painting, and finishing work." },
      { q: "Can you remodel a small bathroom?", a: "Yes. Small bathrooms can often benefit significantly from thoughtful layout, storage, lighting, and fixture choices. The available space and existing conditions determine what changes are practical." },
      { q: "Can you change the layout of a bathroom?", a: "Depending on the property and project requirements, bathroom layouts can sometimes be modified. Any changes involving plumbing, electrical work, walls, or other structural elements need to be evaluated as part of the project planning." },
      { q: "How long does a bathroom remodel take?", a: "The timeline depends on the size and complexity of the renovation, materials selected, existing conditions, and the amount of work involved. A more accurate timeline can be discussed after evaluating the specific project." },
      { q: "How much does bathroom remodeling cost in Greenwich?", a: "Bathroom remodeling costs vary considerably depending on the size of the bathroom, materials, fixtures, layout changes, and overall scope of work. A project-specific estimate is more useful than a generic price range." },
      { q: "Do I need permits for a bathroom renovation?", a: "Some bathroom remodeling projects may require permits or inspections depending on the work involved. Requirements can vary by project, so applicable requirements should be confirmed before construction begins." },
      { q: "How do I start a bathroom remodeling project?", a: "Contact NZ Home Improvement to discuss your bathroom, the improvements you are considering, and the scope of the project. We can then discuss the next steps and provide an estimate based on the work required." },
    ],
    cta: {
      heading: "Start Your Greenwich Bathroom Remodeling Project",
      lead: "Ready to update your bathroom?",
      paragraphs: [
        "Whether you are planning a modern bathroom renovation, a shower or tub upgrade, improved storage, or a complete bathroom remodel, NZ Home Improvement can help you plan the project.",
        "Contact NZ Home Improvement today to discuss your bathroom remodeling project in Greenwich, CT and request an estimate.",
      ],
    },
  },

  {
    slug: "basement-remodeling-greenwich-ct",
    navLabel: "Basement Remodeling Greenwich CT",
    serviceType: "Basement Remodeling",
    title: "Basement Remodeling in Greenwich, CT",
    metaTitle: "Basement Remodeling Greenwich CT | NZ Home Improvement",
    metaDescription:
      "Basement remodeling in Greenwich, CT by NZ Home Improvement — family rooms, home offices, entertainment and guest spaces built around how you live. Request an estimate.",
    heroImage: "/img/full/21.jpg",
    gallery: "basement-remodeling",
    galleryAlt: "Basement remodeling project by NZ Home Improvement - Greenwich CT",
    intro: {
      heading: "Basement Remodeling Services in Greenwich",
      paragraphs: [
        "A basement can be much more than extra storage space. With the right planning and remodeling approach, an unfinished or underused basement can become a comfortable and functional part of your home.",
        "NZ Home Improvement provides basement remodeling services for homeowners in Greenwich, CT, with solutions designed around the way each family wants to use the space. Whether you are planning a family room, home office, entertainment area, guest space, or a combination of uses, we can help turn your basement into a finished living area that fits your home and lifestyle.",
      ],
    },
    details: [
      {
        heading: "Transforming an Unfinished Basement",
        paragraphs: [
          "Many Greenwich homeowners have basement space that is unfinished, underused, or simply no longer meets the needs of the household. A remodeling project can improve the appearance, comfort, and functionality of that space.",
          "We can help with the planning and construction involved in creating finished walls, ceilings, flooring, lighting, storage, and other interior improvements while keeping the overall design consistent with the rest of the home.",
        ],
      },
      {
        heading: "Basement Family Rooms and Living Spaces",
        paragraphs: [
          "A finished basement can provide valuable additional living space for everyday family use. A basement family room can be designed for relaxing, watching movies, playing games, or spending time together.",
          "The layout, finishes, lighting, and storage can all be planned around how you expect to use the room, making the finished basement feel like a natural extension of your home.",
        ],
      },
      {
        heading: "Basement Home Offices",
        paragraphs: [
          "Working from home has made dedicated office space increasingly useful. A basement can provide a quiet area away from the main living spaces.",
          "NZ Home Improvement can help create a practical basement office with appropriate flooring, lighting, wall finishes, electrical improvements, and storage based on your requirements.",
        ],
      },
      {
        heading: "Basement Entertainment and Recreation Areas",
        paragraphs: [
          "Basements can also be designed for entertainment and recreation. Depending on the available space, homeowners may create areas for movie nights, gaming, hobbies, exercise, or gatherings with family and friends.",
          "We can help organize the space so different functions work together while maintaining a clean and comfortable overall design.",
        ],
      },
      {
        heading: "Basement Guest Spaces",
        paragraphs: [
          "A remodeled basement can provide additional space for visiting family members or guests. Depending on the project and existing conditions, the space may include a comfortable bedroom area, sitting area, storage, or other features.",
          "Our team can help plan the layout and finishes so the basement feels welcoming while remaining practical for everyday use.",
        ],
      },
      {
        heading: "Basement Flooring, Walls and Ceilings",
        paragraphs: [
          "The right interior finishes can make a major difference in a basement. Flooring, wall finishes, ceilings, trim, and paint can transform an unfinished space into a comfortable finished area.",
          "We can help coordinate these elements as part of the overall remodeling project so the finished basement has a consistent and polished appearance.",
        ],
      },
      {
        heading: "Basement Lighting and Electrical Improvements",
        paragraphs: [
          "Basements often need thoughtful lighting because they may receive less natural light than other areas of the home. A remodeling project can provide an opportunity to improve lighting, outlets, switches, and other electrical features according to the needs of the finished space.",
          "Lighting can be planned for general use as well as specific areas such as an office, entertainment space, stairs, or storage.",
        ],
      },
      {
        heading: "Basement Moisture and Existing Conditions",
        paragraphs: [
          "Before beginning a basement remodeling project, it is important to consider the condition of the existing space. Moisture, ventilation, insulation, plumbing, electrical systems, and other existing conditions can affect the remodeling plan.",
          "NZ Home Improvement can evaluate the space as part of the project planning process and help identify issues that should be addressed before new finishes are installed.",
        ],
      },
      {
        heading: "Complete Basement Remodeling in Greenwich",
        paragraphs: [
          "A successful basement renovation requires more than installing new flooring and paint. The project should be planned around the structure, existing systems, intended use, and overall design of the home.",
          "NZ Home Improvement can coordinate the remodeling process from the initial planning stage through construction and finishing, helping homeowners create a basement that is functional, comfortable, and suited to their needs.",
        ],
      },
    ],
    process: {
      heading: "Our Basement Remodeling Process",
      steps: steps([
        ["Consultation and Planning", "We discuss how you want to use the basement, review the existing space, and identify the improvements needed."],
        ["Layout and Design", "The layout is planned around the available space, desired features, lighting, storage, and overall flow."],
        ["Construction and Remodeling", "The remodeling work is completed according to the project plan, including the required interior improvements and finishes."],
        ["Finishing and Review", "Final details are completed and the remodeled space is reviewed to make sure it meets the planned design and functionality."],
      ]),
    },
    whyUs: {
      heading: "Why Choose NZ Home Improvement",
      paragraphs: [
        "Homeowners need a remodeling contractor who understands that every basement project is different. NZ Home Improvement focuses on practical planning, quality workmanship, clear communication, and solutions tailored to each property.",
        "Our goal is to make the remodeling process organized and straightforward while creating a finished basement that adds useful space to your Greenwich home.",
      ],
    },
    closingSections: [
      {
        heading: "Basement Remodeling for Greenwich Homeowners",
        paragraphs: [
          "Whether you have an unfinished basement that needs a complete transformation or an existing finished space that needs an update, NZ Home Improvement can help you plan the next step.",
          "A well-designed basement can provide additional space without changing the footprint of your home. From family rooms and home offices to entertainment areas and guest spaces, the possibilities depend on your home and how you want to use it.",
        ],
      },
    ],
    faqs: [
      { q: "How much does basement remodeling cost in Greenwich, CT?", a: "The cost depends on the size of the basement, its existing condition, the scope of construction, and the materials and finishes selected. A project assessment is the best way to determine the likely cost." },
      { q: "How long does a basement remodeling project take?", a: "Project timelines vary depending on the size and complexity of the renovation and the work required in the existing space." },
      { q: "Can you remodel an unfinished basement?", a: "Yes. An unfinished basement can often be transformed into a finished living area with the appropriate planning and construction." },
      { q: "Can a basement be converted into a home office or family room?", a: "Yes. Basement layouts can be designed for a variety of uses, including offices, family rooms, entertainment areas, and guest spaces." },
      { q: "Do you handle the entire basement remodeling project?", a: "NZ Home Improvement can coordinate the major stages of the remodeling project, from planning through construction and finishing, depending on the scope of work." },
    ],
    cta: {
      heading: "Ready to Remodel Your Basement in Greenwich?",
      paragraphs: [
        "If you are considering finishing or remodeling your basement in Greenwich, CT, NZ Home Improvement can help you plan a space that works for your home and your lifestyle.",
        "Contact NZ Home Improvement to discuss your basement remodeling project and explore your options.",
      ],
    },
  },
];

export function getAreaPage(slug) {
  return areaPages.find((p) => p.slug === slug);
}
