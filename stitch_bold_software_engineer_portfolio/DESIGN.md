---
name: Lumina Portfolio System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#124af0'
  primary: '#0040e0'
  on-primary: '#ffffff'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#a23f00'
  on-secondary: '#ffffff'
  secondary-container: '#fc7127'
  on-secondary-container: '#5c2000'
  tertiary: '#993100'
  on-tertiary: '#ffffff'
  tertiary-container: '#c24100'
  on-tertiary-container: '#ffece6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb595'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7c2e00'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 60px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 120px
---

## Brand & Style

This design system is built on the principles of **Glassmorphism**, aiming to evoke a sense of premium, futuristic "human-centric" technology. The visual language prioritizes depth through light refraction, translucency, and multi-layered surfaces. 

The brand personality is professional yet visionary. It leverages high-quality typography and vibrant background gradients to contrast against ethereal, frosted UI elements. The emotional response should be one of clarity, sophistication, and digital craftsmanship, making it ideal for a personal portfolio that showcases high-end creative or technical work.

## Colors

The palette is driven by two high-vibrancy base colors: **Cobalt Blue** and **Deep Terracotta**. These are rarely used as flat fills for large components; instead, they exist as blurred background shapes or mesh gradients that "peek" through the frosted glass layers.

The functional surfaces utilize semi-transparent whites and light grays. 
- **Primary (Cobalt):** Used for key calls-to-action and active states.
- **Secondary (Terracotta):** Used for accents, highlights, and secondary visual interests.
- **Surface:** A high-transparency white (`rgba(255, 255, 255, 0.65)`) with a `backdrop-filter: blur(20px)`.
- **Borders:** A 1px solid white stroke at 40% opacity to simulate light catching the edge of a glass pane.

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels to maintain a modern, friendly, yet professional tone. 

- **Headlines:** Use heavy weights (700-800) with tight letter spacing to create a strong visual anchor against the soft glass backgrounds.
- **Body Text:** Maintained at a medium weight or regular for maximum legibility. Contrast is key; ensure text color is high-contrast (Deep Slate or Black) against the translucent backgrounds.
- **Display Type:** For portfolio hero sections, use the `display-lg` style to create impact.

## Layout & Spacing

This design system uses a **Fluid Grid** model with generous white space to allow the "glass" elements room to breathe. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered in a 1280px container.
- **Mobile:** Single column with 20px side margins. 
- **Rhythm:** Spacing follows a base-8 scale. Larger gaps (section-gap) are used between major portfolio items to reinforce the premium, editorial feel.
- **Padding:** Glass cards should have internal padding of at least `32px` to ensure content does not feel cramped against the rounded corners.

## Elevation & Depth

Depth is the core of this system. It is achieved through a combination of three effects:
1.  **Backdrop Blur:** Every "elevated" surface must have a `backdrop-filter: blur(16px to 32px)`.
2.  **Inner Glow/Border:** A 1px top-left aligned light border (`rgba(255,255,255,0.5)`) simulates a light source hitting the edge.
3.  **Soft Ambient Shadows:** Shadows should be very large, very soft, and low opacity (e.g., `box-shadow: 0 20px 40px rgba(0,0,0,0.06)`).

Higher elevation levels (e.g., modals) increase the blur strength and the shadow spread, while decreasing the opacity of the surface fill.

## Shapes

The shape language is overtly organic and soft. High corner radii are essential to the glass aesthetic, making the "panes" feel tactile and safe.

- **Small Components (Buttons, Inputs):** 16px radius.
- **Medium Components (Cards, Modals):** 24px radius.
- **Large Sections:** 32px or fully rounded for accent decorative elements.

## Components

### Buttons
Primary buttons use the Cobalt Blue gradient with a subtle drop shadow. Secondary buttons are "glass" panes with white text and the signature 1px border. On hover, the backdrop-blur should increase in intensity.

### Cards
Portfolio items are housed in glass cards. They should feature a `24px` radius and a `1px` white border. Images inside cards should also have a `16px` radius to maintain nested harmony.

### Input Fields
Inputs are semi-transparent with a `16px` radius. When focused, the border transitions from 40% white to 100% Cobalt Blue, and the backdrop-blur stays constant.

### Navigation Bar
The navbar is a floating glass "dock" at the top of the screen. It should use a higher blur value (`40px`) to ensure legibility of links as they scroll over background content.

### Chips/Tags
Small, pill-shaped glass elements with `label-md` typography. Used for categorizing projects (e.g., "UI Design", "Frontend").