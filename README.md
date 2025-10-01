# Scyne Skill

A modern React application built with Vite, Tailwind CSS, shadcn UI components, and a custom hierarchy chart implementation for visualizing organizational structures.

## 🚀 Features

- **Modern React Setup**: Built with React 19 and Vite for fast development
- **Beautiful UI**: Styled with Tailwind CSS and shadcn UI components
- **Custom Hierarchy Charts**: Built-in hierarchy visualization with no external dependencies
- **SCSS Styling**: Advanced styling with SCSS variables, mixins, and nested selectors
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Routing**: Client-side routing with React Router
- **Dark Mode Ready**: Built-in support for dark/light themes

## 🛠️ Tech Stack

- **React** - UI Library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - Advanced CSS preprocessor with variables and mixins
- **shadcn/ui** - Re-usable component library
- **React Router** - Client-side routing
- **Custom Hierarchy Chart** - Built-in organizational structure visualization
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scyne-skill
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn UI components
│   │   ├── button.jsx
│   │   └── card.jsx
│   └── hierarchy/    # Custom hierarchy chart components
│       ├── HierarchyNode.jsx
│       ├── ReactHierarchy.jsx
│       ├── hierarchy-chart.scss
│       ├── _mixins.scss
│       ├── types.js
│       └── index.js
├── lib/
│   └── utils.js      # Utility functions
├── pages/
│   ├── Home.jsx      # Home page
│   └── HierarchyChart.jsx  # Hierarchy chart page
├── App.jsx           # Main app component
├── main.jsx          # App entry point
└── index.css         # Global styles
```

## 🎨 Components

### UI Components
- **Button**: Multiple variants (default, outline, secondary, ghost, link)
- **Card**: Flexible card component with header, content, and footer sections

### Hierarchy Chart Components
- **ReactHierarchy**: Main component for rendering hierarchy charts
- **HierarchyNode**: Individual node component with recursive rendering
- **SCSS Styling**: Advanced styling with variables, mixins, and nested selectors
- **Custom Node Types**: Different node types with gradient backgrounds and hover effects

### Pages
- **Home**: Landing page with feature overview and navigation
- **Hierarchy Chart**: Interactive organizational structure visualization

## 🎯 Usage

### Navigation
- Use the navigation bar to switch between pages
- The hierarchy chart page includes zoom controls and interactive features

### Hierarchy Chart
- Click and drag to pan around the chart
- Use zoom controls to adjust the view
- Hover over nodes to highlight them
- The chart displays a sample company organizational structure with different node types

### Customizing the Chart
The hierarchy chart accepts the following data structure:
```javascript
const hierarchyData = [
  {
    key: "unique-key",
    cssClass: "custom-css-class",
    childs: [
      {
        key: "child-key",
        cssClass: "child-css-class",
        childs: []
      }
    ]
  }
]
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS with shadcn UI design tokens and SCSS for advanced styling:

- **Colors**: Modify CSS variables in `src/index.css`
- **Components**: Edit component files in `src/components/ui/`
- **Hierarchy Chart**: Customize styles in `src/components/hierarchy/hierarchy-chart.scss`
- **SCSS Mixins**: Reusable patterns in `src/components/hierarchy/_mixins.scss`
- **Layout**: Adjust Tailwind classes in component files

### SCSS Features Used
- **Variables**: Color schemes, spacing, and sizing
- **Nesting**: Organized and readable selectors
- **Mixins**: Reusable styling patterns
- **Functions**: Dynamic color manipulation
- **Partials**: Modular SCSS structure

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Update navigation as needed

### Customizing Hierarchy Chart
1. Modify the data structure in `src/pages/HierarchyChart.jsx`
2. Add custom CSS classes in `src/components/hierarchy/hierarchy-chart.scss`
3. Create new mixins in `src/components/hierarchy/_mixins.scss`
4. Update the `renderNode` function for custom node content

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.js` - Vite configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions, please open an issue on the repository.
