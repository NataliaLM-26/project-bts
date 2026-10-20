export type Category = 'debut' | 'group' | 'solo' | 'brand' | 'military' | 'reunion';

export interface TimelineEvent {
  id: number;
  date: string;          // ISO-ish for sorting: YYYY-MM-DD
  displayDate: string;   // human-friendly
  year: number;
  title: string;
  description: string;
  category: Category;
  emoji: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  debut: 'Debut',
  group: 'Grupo · BTS',
  solo: 'Trabajo Solista',
  brand: 'Embajador de Marca',
  military: 'Servicio Militar',
  reunion: 'Reencuentro / 2025',
};

export const CATEGORY_COLORS: Record<Category, string> = {
  debut: '#B39DDB',
  group: '#90CAF9',
  solo: '#4DD0E1',
  brand: '#F48FB1',
  military: '#A5D6A7',
  reunion: '#CE93D8',
};

export const TIMELINE: TimelineEvent[] = [
  {
    id: 1,
    date: '2013-06-13',
    displayDate: '13 de junio de 2013',
    year: 2013,
    title: 'Debut de BTS',
    description:
      'BTS debuta bajo Big Hit Entertainment con el sencillo "2 Cool 4 Skool" y el álbum homónimo. RM, Jin, SUGA, J-Hope, Jimin, V y Jungkook suben a su primer escenario oficial.',
    category: 'debut',
    emoji: '🌟',
  },
  {
    id: 2,
    date: '2015-11-30',
    displayDate: '30 de noviembre de 2015',
    year: 2015,
    title: '"The Most Beautiful Moment in Life"',
    description:
      'Lanzamiento de la serie "Hwayangyeonhwa" (花様年華). La canción "I NEED U" le da a BTS su primera victoria en un programa de música, impulsando su ascenso en Corea.',
    category: 'group',
    emoji: '🌸',
  },
  {
    id: 3,
    date: '2017-09-18',
    displayDate: '18 de septiembre de 2017',
    year: 2017,
    title: 'BBMAs & "Love Yourself: Her"',
    description:
      'BTS se convierte en el primer grupo de K-pop en ganar un Billboard Music Award (Top Social Artist). Lanzan "Love Yourself: Her", cuyo sencillo "DNA" entra al Billboard Hot 100.',
    category: 'group',
    emoji: '🏆',
  },
  {
    id: 4,
    date: '2018-08-24',
    displayDate: '24 de agosto de 2018',
    year: 2018,
    title: '"Love Yourself: Tear" #1 en Billboard 200',
    description:
      'BTS se convierte en el primer acto de K-pop en encabezar el Billboard 200 con "Love Yourself: Tear", y se dirigen a la Asamblea General de la ONU a través de la campaña "Love Myself" de UNICEF.',
    category: 'group',
    emoji: '💜',
  },
  {
    id: 5,
    date: '2019-04-12',
    displayDate: '12 de abril de 2019',
    year: 2019,
    title: '"Map of the Soul: Persona"',
    description:
      'El álbum debuta en el #1 del Billboard 200. BTS encabeza una gira mundial de estadios, convirtiéndose en el primer acto coreano en agotar el Wembley Stadium.',
    category: 'group',
    emoji: '🎤',
  },
  {
    id: 6,
    date: '2020-08-21',
    displayDate: '21 de agosto de 2020',
    year: 2020,
    title: '"Dynamite" — #1 en el Hot 100',
    description:
      'BTS lanza su primer sencillo totalmente en inglés, "Dynamite", debutando en el #1 del Billboard Hot 100 — el primer acto de K-pop en lograrlo. "BE" sigue más tarde ese año.',
    category: 'group',
    emoji: '🪩',
  },
  {
    id: 7,
    date: '2021-05-21',
    displayDate: '21 de mayo de 2021',
    year: 2021,
    title: '"Butter" — 10 semanas en el #1',
    description:
      '"Butter" debuta en el #1 del Hot 100 y se mantiene ahí durante 10 semanas no consecutivas. BTS recibe una nominación al Grammy y es nombrado Artista Global de Grabación del Año por la IFPI.',
    category: 'group',
    emoji: '🧈',
  },
  {
    id: 8,
    date: '2021-07-09',
    displayDate: '9 de julio de 2021',
    year: 2021,
    title: 'Louis Vuitton — Embajadores Globales',
    description:
      'BTS es nombrado embajador global de marca de Louis Vuitton, apareciendo en la campaña Otoño-Invierno 2021 de caballero y representando a la casa en semanas de la moda a nivel mundial.',
    category: 'brand',
    emoji: '👜',
  },
  {
    id: 9,
    date: '2022-06-10',
    displayDate: '10 de junio de 2022',
    year: 2022,
    title: '"Proof" y anuncio de pausa',
    description:
      'BTS lanza el álbum antología "Proof" con el sencillo principal "Yet To Come". Durante el FESTA, el grupo anuncia una pausa en las actividades grupales para enfocarse en proyectos solistas y el servicio militar.',
    category: 'group',
    emoji: '📦',
  },
  {
    id: 10,
    date: '2022-07-25',
    displayDate: '25 de julio de 2022',
    year: 2022,
    title: 'J-Hope — "Jack In The Box"',
    description:
      'J-Hope lanza su álbum debut solista "Jack In The Box" y encabeza Lollapalooza Chicago, el primer artista surcoreano en encabezar el festival.',
    category: 'solo',
    emoji: '🎭',
  },
  {
    id: 11,
    date: '2022-12-02',
    displayDate: '2 de diciembre de 2022',
    year: 2022,
    title: 'RM — "Indigo"',
    description:
      'RM lanza su primer álbum de estudio solista "Indigo", con colaboraciones de Anderson .Paak y Erykah Badu. El álbum debuta en el Billboard 200.',
    category: 'solo',
    emoji: '🎨',
  },
  {
    id: 12,
    date: '2023-03-24',
    displayDate: '24 de marzo de 2023',
    year: 2023,
    title: 'Jimin — "FACE"',
    description:
      'Jimin lanza su álbum debut solista "FACE" con el sencillo principal "Like Crazy", que debuta en el #1 del Billboard Hot 100 — el primer solista coreano en encabezar la lista.',
    category: 'solo',
    emoji: '💫',
  },
  {
    id: 13,
    date: '2023-04-17',
    displayDate: '17 de abril de 2023',
    year: 2023,
    title: 'Dior — Jimin como Embajador Global',
    description:
      'Dior nombra a Jimin embajador global de moda masculina, debutando la alianza en el desfile Otoño 2023 de Dior en Bombay.',
    category: 'brand',
    emoji: '🕊️',
  },
  {
    id: 14,
    date: '2023-05-12',
    displayDate: '12 de mayo de 2023',
    year: 2023,
    title: 'SUGA — Gira Mundial "D-DAY"',
    description:
      'SUGA (como Agust D) lanza "D-DAY" e inicia una gira mundial solista con entradas agotadas por Asia y Norteamérica, incluyendo una presentación principal en el Kia Forum de Los Ángeles.',
    category: 'solo',
    emoji: '🔥',
  },
  {
    id: 15,
    date: '2023-06-09',
    displayDate: '9 de junio de 2023',
    year: 2023,
    title: 'V — Embajador de Celine y Cartier',
    description:
      'V es nombrado embajador global de Celine, apareciendo en la campaña de verano 2023, y posteriormente es designado embajador de "Panthère de Cartier".',
    category: 'brand',
    emoji: '💎',
  },
  {
    id: 16,
    date: '2023-09-08',
    displayDate: '8 de septiembre de 2023',
    year: 2023,
    title: 'Jungkook — "GOLDEN" y "Seven"',
    description:
      'Jungkook lanza su álbum debut solista "GOLDEN". El sencillo principal "Seven" debuta en el #1 del Hot 100, y "3D" y "Standing Next To You" consolidan su consagración solista global.',
    category: 'solo',
    emoji: '✨',
  },
  {
    id: 17,
    date: '2023-11-22',
    displayDate: '22 de noviembre de 2023',
    year: 2023,
    title: 'Calvin Klein — Jungkook Embajador Global',
    description:
      'Calvin Klein nombra a Jungkook embajador global de marca, lanzando con una campaña Primavera 2024 que se convierte en el debut más visto de la marca.',
    category: 'brand',
    emoji: '👖',
  },
  {
    id: 18,
    date: '2023-12-11',
    displayDate: '11 de diciembre de 2023',
    year: 2023,
    title: 'Comienza el Servicio Militar — Jin',
    description:
      'Jin se alista como soldado en servicio activo, el primer integrante de BTS en comenzar el servicio militar obligatorio. RM y V se alistan el 12 de diciembre; Jimin y Jungkook también el 12 de diciembre.',
    category: 'military',
    emoji: '🎖️',
  },
  {
    id: 19,
    date: '2024-04-18',
    displayDate: '18 de abril de 2024',
    year: 2024,
    title: 'J-Hope es Licenciado',
    description:
      'J-Hope completa su servicio como soldado de fuerzas especiales y es licenciado, seguido por la licencia de SUGA como trabajador de servicio social en junio de 2024.',
    category: 'military',
    emoji: '🌿',
  },
  {
    id: 20,
    date: '2025-06-13',
    displayDate: '13 de junio de 2025',
    year: 2025,
    title: 'Regresan Jin y RM — 12º Aniversario de Debut',
    description:
      'Jin y RM son licenciados a tiempo para el 12º aniversario del debut de BTS (BTS FESTA 2025). Los demás integrantes completan su servicio a lo largo de junio, marcando el reencuentro completo de los siete miembros.',
    category: 'reunion',
    emoji: '🎉',
  },
  {
    id: 21,
    date: '2025-07-15',
    displayDate: '15 de julio de 2025',
    year: 2025,
    title: 'Jin — Gira Solista "Happy" y Embajador Deportivo',
    description:
      'Jin lanza su álbum solista "Happy" e inicia su primera gira de fan-concerts solista "Run Seokjin". También es nombrado embajador de los Juegos Asiáticos Chuncheon 2027, continuando su impulso solista.',
    category: 'solo',
    emoji: '🎈',
  },
  {
    id: 22,
    date: '2025-09-12',
    displayDate: '12 de septiembre de 2025',
    year: 2025,
    title: 'J-Hope — "Echo" y Concierto en Gocheok',
    description:
      'J-Hope lanza su segundo álbum solista "Echo" y ofrece un concierto de tres noches en el Gocheok Sky Dome de Seúl, su primer show solista en una arena coreana desde su licencia.',
    category: 'solo',
    emoji: '🔊',
  },
  {
    id: 23,
    date: '2025-10-20',
    displayDate: 'Octubre de 2025 (actualidad)',
    year: 2025,
    title: 'Comeback de BTS como Grupo en Preparación',
    description:
      'Con los siete integrantes ya licenciados, Big Hit Music confirma que un nuevo álbum y gira mundial de BTS están en preparación para finales de 2025 / principios de 2026 — el primer lanzamiento grupal desde "Proof" de 2022.',
    category: 'reunion',
    emoji: '🚀',
  },
];
