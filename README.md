# Noble Palace Tay Thang Long

A luxury hotel website built with Next.js and configured for GitHub Pages deployment.

## 🌐 Live Site
Visit: https://twillightsparkle.github.io/NoblePalaceTayThangLong/

## 🌟 Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Meta tags and Open Graph support
- **Mobile Responsive**: Works perfectly on all devices
- **Dark Mode Support**: Automatic theme detection

## 🚀 Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To build the static site for deployment:

```bash
npm run build
```

This will generate a `dist` folder with all the static files ready for deployment.

## 📦 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"
3. **Automatic Deployment**: The workflow will automatically deploy your site when you push to the `main` branch

### Manual Deployment:

If you prefer manual deployment:

```bash
npm run build
# Then upload the 'dist' folder contents to your GitHub Pages repository
```

## 🛠️ Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── public/
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.ts
└── package.json
```

## ⚙️ Configuration

The project includes the following configurations for GitHub Pages:

- **Static Export**: `output: 'export'` in `next.config.ts`
- **Image Optimization**: Disabled for static hosting
- **Trailing Slashes**: Enabled for GitHub Pages compatibility
- **Base Path**: Automatically configured by GitHub Actions

## 🎨 Customization

- **Colors**: Modify the color scheme in `src/app/page.tsx`
- **Content**: Update the hotel information and features
- **Images**: Add your images to the `public` folder
- **Styles**: Customize the design using Tailwind CSS classes

## 📱 Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **GitHub Actions** - CI/CD pipeline

## 🌐 Live Demo

Once deployed, your site will be available at:
`https://[your-username].github.io/[repository-name]`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and deployed on GitHub Pages.
