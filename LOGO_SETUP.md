# Logo Setup Instructions

## Adding Your Logo

To replace the placeholder logo with your actual `TayThangLongIcon.png` file:

1. Copy your `TayThangLongIcon.png` file to the `public` folder
2. The navbar component is already configured to use this file
3. Recommended logo specifications:
   - Size: 40x40 pixels (minimum)
   - Format: PNG with transparent background
   - Style: Should work well on white background

## Current Logo Location

The logo is used in the navbar component at:
- File: `src/components/Navbar.tsx`
- Currently using: `public/TayThangLongIcon.svg` (placeholder)
- Will automatically use: `public/TayThangLongIcon.png` when you add it

## Logo Usage

The logo appears in:
- Desktop navigation (left side with "Noble Palace" text)
- Mobile navigation (in header)
- Responsive design: Logo is always visible, text may hide on smaller screens