// src/data/problems.js
// Central place to list problems & their assets.
// You can extend each entry with per-problem configs later (supports, regions, etc.)

const problems = [
  {
    id: 'p1',
    title: 'Problem 1',

    // (Optional) legacy single-field description (kept as fallback/reference)
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    // New: per-screen subtitles (edit these placeholders)
    descriptions: {
      start:
        'Observe the supported structure and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure.',
      exploded:
        '',
    },

    image: '/images/structure1.png',
    imageNoSupports: '/images/structure1_nosupports.png',
    solutionJson: '/solutions/structure1.json',
  },

  {
    id: 'p2',
    title: 'Problem 2',
    description:
      'For the given massless frame, draw the free body diagram by removing the supports and adding the appropriate reactions. Proceed to the exploded view when prompted.',

    descriptions: {
      start:
        'Observe the frame and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure. You may assume that this is a massless frame.',
      exploded:
        'Add internal action–reaction forces at the breakaway joints.',
    },

    image: '/images/structure2.png',
    imageNoSupports: '/images/structure2_nosupports.png',
    solutionJson: '/solutions/structure2.json',

    // Exploded stage assets
    explodedImage: '/images/structure2_exploded.png',
    explodedSolutionJson: '/solutions/structure2_exploded.json',
  },

  {
    id: 'p3',
    title: 'Problem 3',
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    descriptions: {
      start:
        'Observe the frame and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure. You may assume that this is a massless frame.',
      exploded:
        'Add internal action–reaction forces at the breakaway joints.',
    },

    image: '/images/structure3.png',
    imageNoSupports: '/images/structure3_nosupports.png',
    solutionJson: '/solutions/structure3.json',

    // Exploded stage assets
    explodedImage: '/images/structure3_exploded.png',
    explodedSolutionJson: '/solutions/structure3_exploded.json',
  },

  {
    id: 'p4',
    title: 'Problem 4',
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    descriptions: {
      start:
        'Observe the supported structure and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure.',
      exploded:
        '',
    },

    image: '/images/structure4.png',
    imageNoSupports: '/images/structure4_nosupports.png',
    solutionJson: '/solutions/structure4.json',
  },

  {
    id: 'p5',
    title: 'Problem 5',
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    descriptions: {
      start:
        'Observe the supported structure and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure.',
      exploded:
        '',
    },

    image: '/images/structure5.png',
    imageNoSupports: '/images/structure5_nosupports.png',
    solutionJson: '/solutions/structure5.json',
  },

  {
    id: 'p6',
    title: 'Problem 6',
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    descriptions: {
      start:
        'Observe the supported structure and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure.',
      exploded:
        '',
    },

    image: '/images/structure6.png',
    imageNoSupports: '/images/structure6_nosupports.png',
    solutionJson: '/solutions/structure6.json',
  },

  {
    id: 'p7',
    title: 'Problem 7',
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    descriptions: {
      start:
        'Observe the frame and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure. You may assume that this is a massless frame.',
      exploded:
        'Add internal action–reaction forces at the breakaway joints.',
    },

    image: '/images/structure7.png',
    imageNoSupports: '/images/structure7_nosupports.png',
    solutionJson: '/solutions/structure7.json',

    // Exploded stage assets
    explodedImage: '/images/structure7_exploded.png',
    explodedSolutionJson: '/solutions/structure7_exploded.json',
  }, 

  {
    id: 'p8',
    title: 'Problem 8',
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    descriptions: {
      start:
        'Observe the frame and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure. You may assume that this is a massless frame.',
      exploded:
        'Add internal action–reaction forces at the breakaway joints.',
    },

    image: '/images/structure8.png',
    imageNoSupports: '/images/structure8_nosupports.png',
    solutionJson: '/solutions/structure8.json',

    // Exploded stage assets
    explodedImage: '/images/structure8_exploded.png',
    explodedSolutionJson: '/solutions/structure8_exploded.json',
  }, 

  {
    id: 'p9',
    title: 'Problem 9',

    // (Optional) legacy single-field description (kept as fallback/reference)
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    // New: per-screen subtitles (edit these placeholders)
    descriptions: {
      start:
        'Observe the supported structure and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure.',
      exploded:
        '',
    },

    image: '/images/structure9.png',
    imageNoSupports: '/images/structure9_nosupports.png',
    solutionJson: '/solutions/structure9.json',
  }, 

  {
    id: 'p10',
    title: 'Problem 10',

    // (Optional) legacy single-field description (kept as fallback/reference)
    description:
      'Identify all external forces acting on the supported structure shown. Replace each support with the correct reaction forces and/or moments.',

    // New: per-screen subtitles (edit these placeholders)
    descriptions: {
      start:
        'Observe the supported structure and click to go to the next page when you are ready to solve it.',
      supports:
        'Add the appropriate forces acting on the unsupported structure.',
      exploded:
        '',
    },

    image: '/images/structure10.png',
    imageNoSupports: '/images/structure10_nosupports.png',
    solutionJson: '/solutions/structure10.json',
  } 
];

// Display order (top to bottom in the menu). Edit this list to reorder.
// Anything not listed here appears at the end of the menu with original title.
const displayOrder = ['p4', 'p1', 'p5', 'p7', 'p8', 'p9'];

// Display names. Any id not listed keeps its original title.
const displayTitles = {
  p4: 'Problem 3.1',
  p1: 'Problem 3.2',
  p5: 'Problem 3.3',
  p7: 'Problem 4.2',
  p8: 'Problem 4.3',
  p9: 'Problem 6.2',
};

const listed = displayOrder
  .map((id) => problems.find((p) => p.id === id))
  .filter(Boolean);

// Remaining problems (p2, p3, p6, p10) go at the end in their original order.
const remaining = problems.filter((p) => !displayOrder.includes(p.id));

const ordered = [...listed, ...remaining].map((p) => ({
  ...p,
  title: displayTitles[p.id] || p.title,
}));

export default ordered;



