export const projects = {
  teaching: [
    { type: 'header', label: 'academic' },
    { slug: 'course-assistant-award', date: '', title: 'stanford school of engineering course assistant award' },
    { slug: 'design-160r', date: 'fall 2026, fall 2025', title: 'design 160r: design formation, ta — stanford university' },
    { slug: 'design-242', date: 'spring 2026, spring 2025', title: 'design 242: wild ways of making, ta — stanford university' },
    { slug: 'design-255', date: 'winter 2026', title: 'design 255: design of data, ta — stanford university' },
    { slug: 'design-170', date: 'winter 2025', title: 'design 170: visual frontiers, ta — stanford university' },
    { slug: 'data-8', date: 'autumn 2018', title: 'data 8: "foundations of data science", lab assistant — uc berkeley' },
    { type: 'header', label: 'other' },
    { slug: 'bootcamp-instructor', date: '2024', title: 'data science, storytelling, and ethics bootcamp, main instructor & curriculum designer — jakarta, indonesia' },
    { slug: 'code-nation', date: '2022', title: 'code nation, software engineering instructor — chicago il (remote)' },
    { slug: 'bem', date: '2020', title: 'berkeley engineers & mentors — berkeley ca' },
  ],
  'selected work': [
    {
      slug: 'tropical-technologies-body',
      date: '2025–present',
      title: 'tropical technologies, a body of work by anastasha rachel gunawan',
      hoverText: 'i am building a body of work around tropical technologies, which are physical, embodied, ritual-based technological artifacts rooted in tropical material culture (with specific focus on Indonesia and Southeast Asia) as sites of sociocultural learning that expand dominant technological imaginaries beyond the virtual/digital. coming soon.',
    },

    { type: 'header', label: 'initiatives' },

    {
      slug: 'pixar-innovation-lab',
      date: '2025–present',
      title: 'pixar innovation lab, partner & collaborator',
      hoverText: `what started as an exchange of tours between Pixar and the Stanford d.school hosted by myself and 'Albert Lozano'[link: https://www.imdb.com/name/nm1145760/] turned into a grassroots partnership & friendship that has shaped Pixar's nascent innovation lab. at their infant stages, they have yet to reveal themselves to the world. more very, very, soon…`,
    },
    {
      slug: 'creative-computing-studio',
      date: '2025–present',
      title: 'creative computing studio, founding member & lead',
      href: 'https://ccsdschool.stanford.edu/',
    },
    {
      slug: 'silly-bots-makeathon',
      date: '2026',
      title: 'silly bots makeathon, lead & host & dreamer',
      hoverText: `to cut through the dominant silicon valley culture at stanford, i am hosting our first "Silly Bots Makeathon", where engineers and makers and artists come together to make, well, a silly bot. happening May 9. see updates 'here'[link: https://www.instagram.com/sillybots_stanford/]!`,
    },

    { type: 'header', label: 'talks & exhibitions' },

    {
      slug: 'horizontal-talk',
      date: '2026',
      title: 'horizontal, "tropical technologies: redefining technology and innovation in indonesia", talk, indonesia (remote)',
      href: 'https://www.instagram.com/p/DWeMgiZlAuP/',
    },
    {
      slug: 'future-finds',
      date: '2026',
      title: 'future finds, "tea & tropical technologies", talk and workshop, bathers library, oakland ca',
      href: 'https://futurefinds.cargo.site/#participants',
    },
    {
      slug: 'personal-statements',
      date: '2026',
      title: '"personal statements", group exhibition, stanford university',
      to: '/selected work/personal-statements',
    },
    {
      slug: 'timepiece',
      date: '2024',
      title: '"time(piece)", group exhibition, stanford university',
      to: '/selected work/timepiece',
    },

    { type: 'header', label: 'other' },

    {
      slug: 'lagu-hantu',
      date: '2026',
      title: `"lagu hantu: creating computationally-mediated ensembles across time", publication, 'NIME 2026'[link: https://nime2026.org/], london, uk`,
    },
    {
      slug: 'amicreo-extreme',
      date: '2025',
      title: 'amicreo, design for extreme affordability, costa rica',
      hoverText: `as part of the 2025 cohort of stanford's legacy two-quarter course, 'Extreme'[link: https://extreme.stanford.edu/], i partnered with an organization in costa rica to establish a coalition of women in business`,
    },
    {
      slug: 'bootcamp-instructor',
      date: '2024',
      title: 'data science, storytelling & ethics bootcamp, main instructor & curriculum designer, jakarta, indonesia',
      to: '/selected work/bootcamp-instructor',
    },
  ],
  making: [
    {
      slug: 'open-studio-collective',
      title: 'open studio collective',
      year: '2023–ongoing',
      description: 'placeholder — a peer-run studio access program providing free workspace and materials to artists without institutional affiliation.',
      tags: ['access', 'community', 'ongoing'],
    },
    {
      slug: 'craft-archive',
      title: 'craft archive',
      year: '2022',
      description: 'placeholder — a collaborative oral history project documenting traditional craft knowledge held within diasporic communities in the bay area.',
      tags: ['archive', 'diaspora', 'oral history'],
    },
    {
      slug: 'slow-school',
      title: 'slow school',
      year: '2021–ongoing',
      description: 'placeholder — an informal learning space organized around slowness, repair, and reciprocal teaching.',
      tags: ['education', 'repair', 'ongoing'],
    },
  ],
}

export const allSections = ['teaching', 'exhibits', 'initiatives']

export function getProject(section, slug) {
  return projects[section]?.find((p) => p.slug === slug) ?? null
}
