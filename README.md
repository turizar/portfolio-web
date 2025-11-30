# Personal Portfolio Website

A simple, clean portfolio website built with Next.js and Tailwind CSS to showcase your experience and projects.

## Getting Started

### Install Dependencies

First, install all the required packages:

```bash
npm install
```

### Run Development Server

Start the development server to see your website:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

### Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Customization

### Update Your Information

1. **Personal Details**: Edit `app/page.tsx` and replace:
   - "Your Name" with your actual name
   - Job titles and company names in the Experience section
   - Project descriptions and links in the Projects section
   - Contact information (email, LinkedIn, GitHub links)

2. **Skills**: Update the skills array in the About section with your own skills

3. **Metadata**: Update the title and description in `app/layout.tsx`

### Styling

The website uses Tailwind CSS. You can customize colors, spacing, and other styles by:
- Modifying Tailwind classes directly in the components
- Adding custom styles in `app/globals.css`
- Extending the theme in `tailwind.config.js`

## Project Structure

```
portfolio_website/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main homepage with all sections
│   └── globals.css     # Global styles and Tailwind imports
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## Deployment

You can deploy this website to:
- **Vercel** (recommended for Next.js): Connect your GitHub repo
- **Netlify**: Drag and drop the build folder
- **Any hosting service**: Run `npm run build` and deploy the `.next` folder

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript

