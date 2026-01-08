// Audio Logic Hints
export const SOUND_EFFECTS = {
    HUM: 'assets/synth_hum.mp3',
    GLITCH: 'assets/glitch_snap.mp3',
    THUNDER: 'assets/thunder_distant.mp3',
};

// Image Assets
export const IMAGES = {
    // Blueish mystical forest for "Reality"
    WOODS_REALITY: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2832&auto=format&fit=crop', 
    // Red hellscape for "Upside Down"
    WOODS_UPSIDE_DOWN: 'https://images.unsplash.com/photo-1542259659-43c162657d47?q=80&w=2938&auto=format&fit=crop', 
    MONSTER_SILHOUETTE: 'https://images.unsplash.com/photo-1626278664285-f796b96180af?q=80&w=2787&auto=format&fit=crop',
    LAB_TEXTURE: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    COKE_CAN: '/images/coke.png',
    HEART_ORGAN: 'https://images.unsplash.com/photo-1605218427368-35b026cc065e?q=80&w=1000&auto=format&fit=crop',
    WALL_PAPER: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop', // Floral wallpaper pattern
    DEMOGORGON_TARGET: '/images/demogorgon.png',
    CRUSHED_COKE: '/images/crushed-coke.png',
    CRUSHED_DEMOGORGON: '/images/crushed-demogorgon.png',
};

export const NAVIGATION_LINKS = [
    { name: 'ARCHIVES', href: '#lore' },
    { name: 'SUBJECTS', href: '#characters' },
    { name: 'MESSAGES', href: '#lights' },
    { name: 'RADIO', href: '#transmission' },
    { name: 'TK_TEST', href: '#psychic' },
    { name: 'LOCATIONS', href: '#locations' },
    { name: 'MISSING', href: '#missing' },
    { name: 'FACILITY', href: '#lab' },
];

export const CONTENT = {
    REALITY: {
        TITLE: "HAWKINS",
        SUBTITLE: "CHAPTER ONE",
        LORE_HEADER: "CASE FILES // TOP SECRET",
        LORE_BODY: "Accessing archived files...",
        CHARACTERS_TITLE: "Test Subjects",
        LOCATIONS_TITLE: "Key Locations",
        MISSING_TITLE: "Missing Persons",
        LAB_TITLE: "HAWKINS LAB",
        LAB_SUBTITLE: "DEPARTMENT OF ENERGY",
        LAB_DESC: "AUTHORIZED PERSONNEL ONLY",
        TRANSMISSION_TITLE: "CEREBRO INTERCEPT",
        TRANSMISSION_DESC: "TUNE FREQUENCY TO DECODE RUSSIAN SIGNAL",
        PSYCHIC_TITLE: "TELEKINESIS SCREENING",
        PSYCHIC_ACTION: "HOLD TO FOCUS ENERGY",
        LIGHTS_TITLE: "THE WALL",
        LIGHTS_DESC: "TYPE TO COMMUNICATE",
    },
    UPSIDEDOWN: {
        TITLE: "THE UPSIDE DOWN",
        SUBTITLE: "THE NETHER",
        LORE_HEADER: "HIVE MEMORIES // FRAGMENTED",
        LORE_BODY: "Connecting to the host...",
        CHARACTERS_TITLE: "Threat Entities",
        LOCATIONS_TITLE: "Corrupted Zones",
        MISSING_TITLE: "The Claimed",
        LAB_TITLE: "THE GATE",
        LAB_SUBTITLE: "DIMENSIONAL TEAR",
        LAB_DESC: "CONTAINMENT BREACH DETECTED",
        TRANSMISSION_TITLE: "VOID WHISPERS",
        TRANSMISSION_DESC: "LISTEN TO THE SHADOW",
        PSYCHIC_TITLE: "SEVER CONNECTION",
        PSYCHIC_ACTION: "HOLD TO DESTROY HOST",
        LIGHTS_TITLE: "SPORE SIGNALS",
        LIGHTS_DESC: "DISTURB THE PARTICLES",
    }
}

// Frequencies for the Transmission Section
export const RADIO_CHANNELS = [
    { freq: 11.0, label: "EL", msg_real: "FRIENDS... DON'T... LIE...", msg_ud: "MAMA? MAMA??" },
    { freq: 65.2, label: "RUSSIAN", msg_real: "THE WEEK IS LONG... THE SILVER CAT FEEDS...", msg_ud: "OPEN THE DOOR. OPEN IT." },
    { freq: 84.5, label: "DUSTIN", msg_real: "DO YOU COPY? CODE RED! CODE RED!", msg_ud: "*SCREECHING DEMOBAT NOISES*" },
    { freq: 99.0, label: "WILL", msg_real: "SHOULD I STAY OR SHOULD I GO?", msg_ud: "IT'S COLD. IT'S LIKE... A SHADOW." },
];

export const HAWKINS_CHARACTERS = [
    {
        id: 1,
        name: "ELEVEN",
        role: "The Mage",
        desc: "Psychokinetic abilities. Escaped subject. Loves Eggos.",
        img: "/images/eleven.png"
    },
    {
        id: 2,
        name: "MIKE",
        role: "The Paladin",
        desc: "Leader of the party. Loyal to a fault.",
        img: "/images/mike.png"
    },
    {
        id: 3,
        name: "HOPPER",
        role: "The Chief",
        desc: "Police Chief. Coffee and contemplation.",
        img: "/images/hopper.png"
    },
    {
        id: 4,
        name: "DUSTIN",
        role: "The Bard",
        desc: "Compass technology expert. Missing teeth, big heart.",
        img: "/images/dustin.png"
    },
    {
        id: 5,
        name: "HOLLY",
        role: "The Innocent",
        desc: "Nancy's little sister. Kidnapped by Demogorgon.",
        img: "/images/holly.png"
    },
    {
        id: 6,
        name: "LUCAS",
        role: "The Ranger",
        desc: "Wrist rocket expert. Voice of reason.",
        img: "/images/lucas.png"
    },
    {
        id: 7,
        name: "MAX",
        role: "The Rogue",
        desc: "Skateboard champion. Vecna's target.",
        img: "/images/max.png"
    },
    {
        id: 8,
        name: "NANCY",
        role: "The Investigator",
        desc: "Journalist. Monster hunter. Holly's sister.",
        img: "/images/nancy.png"
    },
    {
        id: 9,
        name: "STEVE",
        role: "The Babysitter",
        desc: "Hair icon. Bat wielder. Mom friend.",
        img: "/images/steve.png"
    },
    {
        id: 10,
        name: "WILL",
        role: "The Cleric",
        desc: "The boy who came back. Connected to the hive.",
        img: "/images/will.png"
    }
];

export const UPSIDEDOWN_ENTITIES = [
    {
        id: 101,
        name: "DEMOGORGON",
        role: "Apex Predator",
        desc: "Interdimensional humanoid creature. Bloodthirsty.",
        img: "/images/demogorgon.png"
    },
    {
        id: 102,
        name: "MIND FLAYER",
        role: "The Shadow",
        desc: "A colossal spider-like entity. Controls the hive.",
        img: "/images/mindflair.png"
    },
    {
        id: 103,
        name: "VECNA",
        role: "The General",
        desc: "Psychic lich. Opens gates through trauma.",
        img: "/images/vecna.png"
    },
    {
        id: 104,
        name: "DEMODOGS",
        role: "The Pack",
        desc: "Adolescent stage. Pack hunters.",
        img: "/images/demodogs.png"
    }
];

export const LOCATIONS = [
    {
        id: 'L1',
        name_real: "STARCOURT MALL",
        desc_real: "The place to be in '85. Neon lights and Scoops Ahoy.",
        img_real: "/images/starcourt mall.png",
        name_ud: "RUINED MALL",
        desc_ud: "A skeletal structure. Flesh monster nesting ground.",
        img_ud: "/images/starcourt mall.png"
    },
    {
        id: 'L2',
        name_real: "PALACE ARCADE",
        desc_real: "High scores and pizza. Where the party meets.",
        img_real: "/images/palace arcade.png",
        name_ud: "THE VOID",
        desc_ud: "Infinite blackness. Water on the floor. Silence.",
        img_ud: "/images/void.png"
    },
    {
        id: 'L3',
        name_real: "HAWKINS HIGH",
        desc_real: "Home of the Tigers. Pep rallies and hallways.",
        img_real: "/images/hawkins high.png",
        name_ud: "SPORE TUNNELS",
        desc_ud: "Living organic matter under the city.",
        img_ud: "/images/tunnels.png"
    }
];

export const MISSING_PERSONS = [
    { id: 'M1', name: 'WILL BYERS', last_seen: 'Nov 6, 1983', status: 'MISSING', status_ud: 'HOST' },
    { id: 'M2', name: 'BARB HOLLAND', last_seen: 'Nov 7, 1983', status: 'MISSING', status_ud: 'DECEASED' },
    { id: 'M3', name: 'BENNY HAMMOND', last_seen: 'Nov 7, 1983', status: 'FOUND', status_ud: 'CLAIMED' },
];

export const EXPERIMENTS = [
    { id: '001', title: 'DEPRIVATION_TANK', status: 'FAILURE', date: '1983-11-04' },
    { id: '002', title: 'PROJECT_MKULTRA', status: 'ONGOING', date: '1983-09-01' },
    { id: '003', title: 'THE_GATE', status: 'CRITICAL', date: '1983-11-06' },
    { id: '004', title: 'DEMOGORGON', status: 'ESCAPED', date: '1983-11-07' },
];

export const SEASONS_DATA = [
    {
        id: 'S1',
        title: 'SEASON 1',
        year: '1983',
        content: [
            "The story begins with the disappearance of Will Byers, who goes missing after biking home from his friend Mike Wheeler's house in Hawkins, Indiana.",
            "After a search, Will's body is found in a quarry, but his mother, Joyce, is convinced he's still alive and communicating to her from another realm. Jim Hopper realizes Joyce isn't crazy after he breaks into the morgue and discovers Will's body is a fake.",
            "It soon becomes clear that Will has been taken into an alternate dimension known as the Upside Down, a gate to which is located inside a government laboratory in Hawkins run by Dr. Martin Brenner.",
            "A girl with telekinetic powers, who was a test subject at the lab, escapes and runs into Mike and his friends Dustin and Lucas. The trio helps protect the girl, known as Eleven.",
            "Along the way, Eleven and Mike develop feelings for each other. While investigating Will's disappearance, Joyce and Hopper visit Eleven's birth mother, Terry Ives, but find she is in a catatonic state.",
            "By the finale, Joyce and Hopper travel into the Upside Down and bring Will home, the Demogorgon appears to kill Dr. Brenner, and Eleven seemingly dies using her powers to defeat the creature."
        ]
    },
    {
        id: 'S2',
        title: 'SEASON 2',
        year: '1984',
        content: [
            "Eleven lives! Immediately after the events of Season 1, Eleven wakes up in the Upside Down and returns to the real world, where Hopper finds her in the woods. To keep her hidden, Hopper makes a home for Eleven in an isolated cabin.",
            "Mike, Dustin, Lucas and Will befriend Max Mayfield, who moved to Hawkins with her stepbrother Billy. But ever since returning home at the end of Season 1, Will has been having flashes of the Upside Down and of a large shadow monster, which the kids dub the Mind Flayer.",
            "It's eventually discovered that Will is possessed by the Mind Flayer, which is using him to spy on the real world. An army of monsters from the Upside Down that are connected to the Mind Flayer via a hive mind soon begin attacking.",
            "Eleven subsequently tracks down Kali, a former test subject at Hawkins Lab. Kali leads a group of criminals hunting down anyone who was involved in the lab experiments.",
            "Eleven ultimately comes home and reunites with her friends after realizing they're in danger. The group saves Will by using heat to make his body uninhabitable to the Mind Flayer, and Eleven seals the gate to the Upside Down."
        ]
    },
    {
        id: 'S3',
        title: 'SEASON 3',
        year: '1985',
        content: [
            "Over in Starcourt Mall, the hot new spot in Hawkins, Steve has started working at an ice cream parlor. Dustin, Steve and Steve's coworker Robin Buckley investigate a Russian transmission that Dustin intercepted.",
            "This leads them to discover a hidden base under the mall, where Russians have been building a machine to open a gate to the Upside Down.",
            "Max's stepbrother, Billy, is possessed by the Mind Flayer and serving as its new host. While under the Mind Flayer's control, Billy begins kidnapping people and bringing them to the creature, which has taken the form of a giant, spider-like blob made of rat flesh.",
            "The Mind Flayer attacks Eleven and leaves a piece of itself inside her leg, which she is forced to remove. Eleven helps Billy fight the Mind Flayer's control, and he saves her life. The creature kills Billy in front of a distraught Max.",
            "Joyce, Hopper and Murray sneak into the Russian base and destroy the machine. They close the gate to the Upside Down, which in turn kills the Mind Flayer's fleshy body. But Hopper seemingly dies."
        ]
    },
    {
        id: 'S4V1',
        title: 'SEASON 4 VOL 1',
        year: '1986',
        content: [
            "Eight months after Season 3, Joyce, Will, Jonathan and Eleven are still living in California. In Hawkins, Mike, Dustin and Lucas have joined a Dungeons & Dragons group led by Eddie Munson called Hellfire Club.",
            "Chrissy Cunningham begins having disturbing visions and is killed by a monster, later dubbed Vecna. Eddie is blamed for the murder.",
            "Dr. Owens tracks down Eleven. He tells her Hawkins is in danger, and the only hope of saving the town is to restore her abilities. He brings Eleven to a silo in Nevada, and she reunites with the very much alive Dr. Brenner.",
            "Steve, Nancy, Robin and Eddie wind up in the Upside Down after traveling through a gate at the bottom of the lake. While inside, they discover the Upside Down is stuck in the past ‒ specifically, Nov. 6, 1983.",
            "Eleven relives repressed memories. She recalls becoming friends with an orderly, who turned out to have telekinetic powers like hers. The orderly is revealed to be Brenner's first test subject, a.k.a. One, and also Henry Creel."
        ]
    },
    {
        id: 'S4V2',
        title: 'SEASON 4 VOL 2',
        year: '1986',
        content: [
            "The group concludes that when Vecna kills again and opens another gate, Hawkins will fall. So they formulate a plan to have Max, still cursed by Vecna, serve as bait while everyone else sneaks into his lair.",
            "After reliving her memories of Vecna's origin, Eleven gets her powers back. Military men raid the silo, and as Brenner carries Eleven out, he is shot and seemingly killed.",
            "Steve, Robin, Nancy, Eddie and Dustin head to the Upside Down. Dustin and Eddie loudly play music to draw bats away from Vecna's lair, and Eddie is killed.",
            "Eleven enters a makeshift sensory deprivation tank and telepathically projects herself into Max's mind to battle Vecna.",
            "Vecna falls out of a window, but his body is gone. As Max dies, rifts begin to form in the fabric of reality, causing widespread destruction. Eleven uses her powers to bring Max back to life, but she remains unconscious."
        ]
    },
    {
        id: 'S5',
        title: 'SEASON 5',
        year: '1987',
        content: [
            "More than a year after the events of Season 4, Hawkins is under quarantine. The rifts in reality have been sealed with a 'giant metal Band-Aid'.",
            "Hopper leads 'crawls': Excursions into the Upside Down to search for Vecna zone by zone. A Demogorgon kidnaps Holly Wheeler, Mike and Nancy's sister.",
            "Holly is taken to 'Camazotz', Vecna's memory prison. Max's consciousness is found hiding there in a cave.",
            "Will begins having visions after tapping back into Vecna's hive mind. He discovers that when he taps into the hive mind, he can take control of it.",
            "The group discovers a mysterious wall made of fleshy material inside the Upside Down. Eleven believes Holly is on the other side. A prisoner in the Upside Down turns out to be Kali (Eight)."
        ]
    }
];

export const ALPHABET_GRID = [
    ['A','B','C','D','E','F','G','H'],
    ['I','J','K','L','M','N','O','P'],
    ['Q','R','S','T','U','V','W','X'],
    ['Y','Z',' ','!','?','.']
];
