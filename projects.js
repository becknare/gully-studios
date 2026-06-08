/*
 * ──────────────────────────────────────────────
 *  PROJECTS
 *
 *  Order here = order on the page.
 *  To reorder: cut a whole { ... } block and move it.
 *  To add: copy any block, paste it, fill in your details.
 *
 *  thumbnail      → the image/video shown on the main scroll
 *  thumbnailSmall → (optional) compressed version for faster loading
 *                   if omitted, falls back to thumbnail
 *  images         → all media in the gallery (left side)
 *                   supports: .jpg .png .webp .avif .gif .mp4 .webm .mov
 *  title          → shown on hover (main page) and in the gallery
 *  text           → HTML string shown in the gallery (right side)
 * ──────────────────────────────────────────────
 */

const projects = [

  {
    title: 'Beckmans Fashion Collaboration 2026',
    thumbnail: 'images/50fifty/fifty00009.webp',
    images: [
      'images/50fifty/fifty00001.webp',
      'images/50fifty/fifty00002.webp',
      'images/50fifty/fifty00003.webp',
      'images/50fifty/fifty00004.webp',
      'images/50fifty/fifty00005.webp',
      'images/50fifty/fifty00006.webp',
      'images/50fifty/fifty00007.webp',
      'images/50fifty/fifty00008.webp',
      'images/50fifty/fifty00009.webp',
      'images/50fifty/fifty00010.webp',
    ],
    text: `
      <h2>Beckmans Fashion Collaboration 2026</h2>
      <p>Art direction, design & photography for the 50/Fifty fashion show.
      Lookbook, visual identity, branding, invitations, merch, runway backdrop and social media campaign in collaboration with the best team possible.</p>
      <p class="meta">
      Art direction & graphic design: Bobby Rahman, Ella Farestam, Stephanie Holmén, Tyra Östlund, Wilma Reichardt
      </p>
    `,
  },

    {
    title: 'Beckmans Graduation Project – Se men inte höra',
    thumbnail: 'images/examen/examen01.webp',
    images: [
      'images/examen/examen01.webp',
      'images/examen/examen02.webp',
      'images/examen/examen03.webp',
    ],
    text: `
      <h2>Se men inte höra</h2>
      <p>A series of album covers without music, designed using a modular system that mirrors the structure of music production. A space reserved for songs that do not yet exist.
      “Se men inte höra” explores what happens when graphic design becomes the starting point for music, expressed through CD covers without accompanying songs. The covers are constructed using a modular system of layers that mirrors the structure of music production, using graphic elements sampled from found material, in the same way that music is sampled from existing sound. 
      The project began with a longing to return to making music and to portray it visually. Throughout the process it became a reserved space for the music to return to, when ready.
      </p>
      <p class="meta">
      Graphic design
      </p>
    `,
  },

  {
    title: 'Sellofán',
    thumbnail: 'images/sellofan/Sellofan01.mp4',
    images: [
      'images/sellofan/Sellofan01.mp4',
      'images/sellofan/Sellofan02.png',
      'images/sellofan/Sellofan03.png',
      'images/sellofan/Sellofan04.png',
    ],
    text: `
      <h2>Sellofán</h2>
      <p>3D animated animated music video for the song "Sellofán" by Hannes Arason.</p>
      <p class="meta">
animation, motion design, 3D design
      </p>
    `,
  },

  {
    title: 'Från 165 med kärlek / From 165 With Love',
    thumbnail: 'images/165/165_01.mp4',
    images: [
      'images/165/165_02.mp4',
      'images/165/165_03.png',
      'images/165/165_04.png',
      'images/165/165_05.png',
    ],
    text: `
      <h2>Från 165 med kärlek / From 165 With Love</h2>
      <p>What happens when we cling to a place, never wanting it to change,
      despite what that means? 
      An ode to Hässelby, frozen in time and displaced.</p>
      <p class="meta">
      spatial design, 3D design
      </p>
    `,
  },

  {
    title: "Heaven's Gate",
    thumbnail: 'images/heavensgate/hg06.webp',
    images: [
      'images/heavensgate/hg01.webp',
      'images/heavensgate/hg02.webp',
      'images/heavensgate/hg03.webp',
      'images/heavensgate/hg04.webp',
      'images/heavensgate/hg05.webp',
    ],
    text: `
      <h2>Heaven's Gate</h2>
      <p>A study in graphic identity. What would it look like if an infamous cult were to be be rebooted today?</p>
      <p class="meta">graphic design, 3D design, interactive design</p>
    `,
  },

  {
    title: 'A magazine about Amelis',
    thumbnail: 'images/amelis/amelis01.webp',
    images: [
      'images/amelis/amelis02.webp',
      'images/amelis/amelis03.webp',
      'images/amelis/amelis04.webp',
    ],
    text: `
      <h2>A magazine about Amelis</h2>
      <p>Editorial design and photography for a magazine about Amelis, a dancer from the Juice collective.</p>
      <p class="meta">
Art direction & graphic design: Bobby Rahman, Hanna Hedberg, Mika Hyvönen, Tyra Östlund</p>
    `,
  },

  {
    title: 'Baubari Studios',
    thumbnail: 'images/backstage-look-1/baubari01.jpg',
    images: [
      'images/backstage-look-1/baubari01.jpg',
      'images/backstage-look-1/baubari02.jpg',
      'images/backstage-look-1/baubari03.jpg',
      'images/backstage-look-1/baubari04.jpg',
    ],
    text: `
      <h2>Backstage, Look 4</h2>
      <p>Backstage for Baubari Studios lookbook shoot.</p>
      <p class="meta">photography</p>
    `,
  },

  {
    title: 'Supper',
    thumbnail: 'images/supper/supper01.jpg',
    images: [
      'images/supper/supper01.jpg',
      'images/supper/supper02.jpg',
      'images/supper/supper03.jpg',
    ],
    text: `
      <h2>Supper</h2>
      <p>Art direction & photography for The Family of Supper.</p>
      <p class="meta">art direction, photography</p>
    `,
  },

];
