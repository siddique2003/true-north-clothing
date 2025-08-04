# True North - Sober & Free Clothing

A dynamic e-commerce website for True North clothing brand, celebrating the journey to sobriety and freedom.

## Features

- **Modern Design**: Clean, professional design with red, black, and white color theme
- **Product Customization**: Interactive clothing customization with color, design, and size options
- **Community Focus**: Pages dedicated to events, team, and support resources
- **Recovery Support**: Detox and treatment resources for those in need
- **Art Submissions**: Platform for community artists to submit designs
- **Responsive Design**: Mobile-friendly layout that works on all devices

## Pages

1. **Home** - Welcome page with brand introduction and featured products
2. **Clothing** - Interactive product catalog with customization options
3. **Meet the Team** - Team member profiles and career opportunities
4. **Events** - Community events and meetups
5. **Detox & Treatment** - Recovery resources and support information
6. **Art Submission** - Platform for artists to submit designs
7. **About Us** - Company story, mission, and values
8. **Contact** - Contact form and support resources

## Products

- **T-Shirts** - $15 (Default: Black with logo, moose, or custom designs)
- **Hats** - $20 (Available with moose design)
- **Coming Fall 2024** - Sweaters, hoodies, and sweatpants

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Headless UI** - Accessible UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd true-north-clothing
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
true-north-clothing/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── art/               # Art submission page
│   ├── clothing/          # Product catalog
│   ├── contact/           # Contact page
│   ├── detox/             # Recovery resources
│   ├── events/            # Community events
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   └── Navbar.tsx         # Navigation bar
├── public/                # Static assets
│   └── images/            # Product and team images
└── README.md              # This file
```

## Customization

### Colors

The brand colors are defined in `tailwind.config.js`:
- `true-north-red`: #DC2626
- `true-north-black`: #1F2937
- `true-north-white`: #FFFFFF

### Adding Products

To add new products, update the `products` array in `app/clothing/page.tsx`.

### Adding Team Members

Update the `teamMembers` array in `app/team/page.tsx`.

## Support

For support with this website or True North products:
- Email: support@truenorthclothing.com
- Phone: +1 (555) 123-4567

## Recovery Resources

If you or someone you know needs help:
- National Suicide Prevention Lifeline: 988
- SAMHSA National Helpline: 1-800-662-4357
- Crisis Text Line: Text HOME to 741741

## License

© 2024 True North - Sober & Free. All rights reserved.
