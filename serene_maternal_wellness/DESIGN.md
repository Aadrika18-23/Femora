---
name: Serene Maternal & Wellness
colors:
  surface: '#fff8f8'
  surface-dim: '#e2d8d9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf1f2'
  surface-container: '#f6ebed'
  surface-container-high: '#f0e6e7'
  surface-container-highest: '#eae0e1'
  on-surface: '#1f1a1c'
  on-surface-variant: '#504447'
  inverse-surface: '#342f30'
  inverse-on-surface: '#f9eef0'
  outline: '#827377'
  outline-variant: '#d4c2c6'
  surface-tint: '#805062'
  primary: '#805062'
  on-primary: '#ffffff'
  primary-container: '#f8bbd0'
  on-primary-container: '#76485a'
  inverse-primary: '#f2b6cb'
  secondary: '#b80f55'
  on-secondary: '#ffffff'
  secondary-container: '#fd4e87'
  on-secondary-container: '#590025'
  tertiary: '#605d69'
  on-tertiary: '#ffffff'
  tertiary-container: '#cfc9d8'
  on-tertiary-container: '#575460'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e4'
  primary-fixed-dim: '#f2b6cb'
  on-primary-fixed: '#330f1f'
  on-primary-fixed-variant: '#65394b'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c2'
  on-secondary-fixed: '#3f0018'
  on-secondary-fixed-variant: '#8f003f'
  tertiary-fixed: '#e6e0ef'
  tertiary-fixed-dim: '#c9c4d3'
  on-tertiary-fixed: '#1c1a25'
  on-tertiary-fixed-variant: '#484551'
  background: '#fff8f8'
  on-background: '#1f1a1c'
  surface-variant: '#eae0e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 57px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-mobile: 16px
  container-padding-desktop: 32px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The design system is anchored in the concept of "Nurturing Precision." It aims to bridge the gap between clinical reliability and empathetic care. The target audience is women seeking a secure, private, and elevated digital healthcare experience. 

The visual style is a hybrid of **Modern Corporate** (Material Design 3 logic) and **Glassmorphism**. It utilizes soft, layered surfaces to create a sense of depth and privacy without feeling heavy. High whitespace, intentional breathing room, and a soft-focus aesthetic evoke an emotional response of calm, safety, and professional excellence.

## Colors
The palette is designed to be soothing yet functional. The **Primary Pink (#F8BBD0)** serves as the main brand identifier for large surfaces and containers, while the **Accent Rose Pink (#EC407A)** is reserved for high-emphasis actions and critical UI states. 

**Soft Lavender** and **Baby Blue** are used as secondary tonal accents for categorization (e.g., different health metrics or calendar events). 

In **Dark Mode**, the system shifts to a deep charcoal base (#1C1B1F) to maintain privacy and reduce eye strain during nighttime use. Pink accents are preserved but adjusted for high contrast against dark surfaces, ensuring accessibility standards are met.

## Typography
This design system utilizes **Plus Jakarta Sans** for headings to provide a friendly, modern, and slightly rounded geometric feel that aligns with the "pill" shape language. **Inter** is used for body text and labels to ensure maximum legibility for medical data and instructional content.

Vertical rhythm is strictly maintained with a 4px baseline grid. Headlines should use "Optical" kerning where available to maintain a premium editorial feel.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on a 12-column structure for desktop and a 4-column structure for mobile. 

We utilize a soft spacing scale where 8px (2 units) is the standard increment. To reinforce the "calm" brand attribute, horizontal margins are generous. On mobile devices, a minimum 16px side margin is required, while desktop layouts should cap the content width at 1280px to prevent excessive line lengths in medical articles.

## Elevation & Depth
Elevation is conveyed through **Tonal Layers** and **Glassmorphism**, moving away from harsh black shadows. 

1.  **Low Elevation (Surface):** Uses subtle shifts in background saturation (e.g., #FFF8FA to #FCE4EC).
2.  **Medium Elevation (Cards):** Uses a "Soft Glow" shadow—a wide-spread, low-opacity shadow tinted with the primary pink color (e.g., `box-shadow: 0 4px 20px rgba(248, 187, 208, 0.3)`).
3.  **High Elevation (Overlays/Modals):** Employs a backdrop-blur (12px to 20px) with a semi-transparent white or dark-gray fill to create a premium glass effect, ensuring the user's current context remains visible but non-distracting.

## Shapes
The shape language is dominated by high-radius curves. The "Pill" shape (Level 3) is the primary geometric motif, used for buttons, input fields, and chips. This choice removes "sharpness" from the UI, contributing to the safe and approachable healthcare environment. 

Large containers and cards should use `rounded-xl` (1.5rem / 24px) to maintain consistency with the pill-shaped smaller elements.

## Components

-   **Buttons:** All buttons must be pill-shaped. Primary buttons use a solid Accent Rose Pink fill with white text. Secondary buttons use a primary-pink tinted ghost style with a 1px border.
-   **Cards:** Premium cards feature a subtle gradient (White to #FFF8FA) and the "Soft Glow" primary-tinted shadow. Content inside cards should follow the `stack-md` (16px) spacing rule.
-   **Chips:** Used for health tags (e.g., "Cycle Day 12"). Use the Soft Lavender or Baby Blue backgrounds with high-transparency to indicate secondary categories.
-   **Input Fields:** Pill-shaped with a 1px stroke. Focus states should transition the stroke to Accent Rose Pink and add a subtle 4px outer glow.
-   **Lists:** Items are separated by generous whitespace rather than heavy lines. Use a subtle 1px divider in a low-opacity Neutral color only when absolutely necessary for data clarity.
-   **Icons:** Use "Rounded Outline" style icons. The stroke weight should be consistent at 1.5px or 2px. For illustrations, use soft, organic shapes with no sharp angles.