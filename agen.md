# Project Context
You are an Expert Frontend Developer and UI Designer specializing in **Astro**. Your goal is to build a high-performance static Landing Page for **Transi Aracil, Integral Psychologist**.

[cite_start]The design must project an image of **"warmth, professionalism, and holistic spirituality"**[cite: 6].

## Tech Stack
- **Framework:** Astro (Static Site Generation).
- **Styling:** Tailwind CSS.
- **Iconography:** Lucide React or Astro Icon.
- **Fonts:** Google Fonts (Cinzel/Trajan alternative & Montserrat/Open Sans alternative).

---

## 1. Visual Design System

### 1.1. Color Palette
Use these specific hex codes to ensure consistency. [cite_start]The palette combines calm neutrals with vibrant accents[cite: 7, 9].

| Variable | Color Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `primary` | Violet/Purple | `#7A3EFE` | Main CTA buttons. [cite_start]Represents transformation & spirituality[cite: 10]. |
| `secondary` | Gold/Soft Orange | `#FFC350` | Secondary buttons ("Online Therapy"), accents. [cite_start]Represents warmth[cite: 10]. |
| `background` | Off-White/Cream | `#FAFAFA` | Main background. [cite_start]Represents clarity and peace[cite: 10]. |
| `text-main` | Dark Gray | `#333333` | Body text. [cite_start]Ensures readability and seriousness[cite: 10]. |
| `text-inv` | White | `#FFFFFF` | [cite_start]Text inside primary buttons[cite: 18]. |

### 1.2. Typography
[cite_start]A combination of Serif and Sans-serif is used to create an elegant hierarchy[cite: 12].

* **Headings (H1, H2, H3):**
    * [cite_start]*Style:* **Elegant Serif** (Ref: Cinzel or Trajan)[cite: 13].
    * *Rules:* Uppercase, **wide letter-spacing (tracking)**.
    * [cite_start]*Vibe:* Transmits authority, elegance, and timeless spirituality[cite: 13].
* **Body Text:**
    * [cite_start]*Style:* **Clean Sans-serif** (Ref: Montserrat or Open Sans)[cite: 13].
    * [cite_start]*Rules:* High readability, modern, accessible[cite: 13].
* **Buttons / Navigation:**
    * [cite_start]*Style:* **Bold Sans-serif**[cite: 13].
    * *Rules:* Concise text, Uppercase or Capitalized.

### 1.3. UI Components: Buttons
[cite_start]Buttons are a key visual element[cite: 15].
* [cite_start]**Shape:** **Pill-shaped** (Fully rounded borders / `rounded-full`)[cite: 16].
* [cite_start]**Primary CTA:** Purple Fill (`#7A3EFE`) + White Text[cite: 17, 18].
* [cite_start]**Secondary Action:** Gold/Orange Fill (`#FFC350`)[cite: 19].

### 1.4. Graphic Style & Imagery
* **Shapes:** Use **organic forms** (circles, curves) to frame content. [cite_start]Avoid rigid, sharp boxes[cite: 27].
* [cite_start]**Motifs:** Subtle use of butterflies (transformation) or golden curved lines (connection/holism)[cite: 27].
* [cite_start]**Atmosphere:** Images should look natural and "bohemian," with warm/earthy filters and soft lighting[cite: 24, 26].

---

## 2. Voice & Tone (For Design Placeholders)
*Use these guidelines when generating placeholder text or UI labels to ensure the design fits the content length and emotional vibe.*

* **Tone:** Close, empathetic, and professional. [cite_start]A "helping hand"[cite: 32].
* **UI Copy (CTAs):**
    * Avoid: "Click here".
    * [cite_start]Use: **"Start," "Online Therapy," "I want to feel better"**[cite: 10, 35].
* [cite_start]**Headlines:** Should feel inspirational and motivational (e.g., "It is never too late for an inner challenge")[cite: 35].
* **Layout Implication:** The content requires generous **whitespace** to convey "peace" and "introspection." [cite_start]Do not clutter the interface[cite: 9, 25].

---

## 3. Implementation Instructions (Tailwind Config)

Configure your `tailwind.config.mjs` as follows to strictly adhere to the Style Guide:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#7A3EFE', // Violet - Transformation
        secondary: '#FFC350', // Gold - Warmth
        background: '#FAFAFA', // Cream - Peace
        surface: '#FFFFFF', 
        text: {
          DEFAULT: '#333333',
          muted: '#666666',
        }
      },
      fontFamily: {
        // Ensure you import these from Google Fonts or Fontsource
        serif: ['"Cinzel"', 'serif'], 
        sans: ['"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px', // For buttons
      }
    },
  },
}