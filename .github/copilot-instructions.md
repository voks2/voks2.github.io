# Copilot Instructions for Portfolio Site

## Project Overview
A personal portfolio website for Vojin Mitrović showcasing professional experience, projects, and expertise. The site has two main versions:
- **index.html** - Main portfolio (4-column layout)
- **dev.html** - Developer-focused version (3-column layout with centered middle column)

Both pages share the same styling system and JavaScript functionality.

## Architecture & Key Components

### Data-Driven Item System (`items.json` → `index.js`)
The portfolio uses a JSON-based item management system that automatically generates filterable project cards:
- **Data source**: `items.json` contains portfolio items with `projectname`, `projectdescription`, `tags`, and `link`
- **Processing flow**: `loadItemsData()` → `processItemsData(items)` → DOM creation
- **Filtering**: `filterItemsByTags()` handles tag-based filtering with `data-tags` attributes
- **Key insight**: Tags are extracted dynamically from all items; clicking tags toggles `.active` class and filters display

### Responsive CSS Grid
- **Desktop**: Flex-based responsive layout (`.layout-1` = 4 columns, `.layout-2` = 3 cols with centered middle)
- **Mobile**: Single column at 768px breakpoint
- **Color system**: CSS custom properties (`:root` variables) - primary, background, text, and line colors
- **Font**: Inter from Google Fonts, 16px base with -0.2px letter-spacing

## Development Patterns

### Adding New Portfolio Items
1. Add entry to `items.json` with structure:
   ```json
   {
     "projectname": "Title",
     "projectdescription": "Brief description",
     "tags": ["tag1", "tag2"],
     "link": "items/page.html"
   }
   ```
2. Create corresponding HTML file in `items/` directory
3. Item pages should link back using `<link rel="stylesheet" href="../styles.css">` for styling

### HTML Structure Pattern
- All box containers use `.box` > `.box-title` > `.box-content` pattern
- Titles use `.title` class with ::after pseudo-element for line decoration
- Items inside boxes use `.item` > `.item-title` + `.item-desc` structure
- External links use `.arrow` span with `&#8594;` character

### Styling Conventions
- **No hard-coded colors**: Use CSS variables (`var(--background-color)`, `var(--primary-color)`, etc.)
- **Spacing**: Consistent use of rem units (3rem padding, 30px margins for items)
- **Responsive**: Mobile media query at 768px adjusts padding and flex layout

## Important Files & Directories
- `index.html` - Main portfolio page (edit for primary layout changes)
- `dev.html` - Developer version (experiment area, uses `.layout-2`)
- `styles.css` - Single shared stylesheet; all styling here
- `index.js` - Only loads items, handles filtering; no other interactivity
- `items.json` - Portfolio data; single source of truth for projects
- `items/` - Individual project detail pages (static HTML)
- `assets/` - Images, favicon, profile pictures

## Deployment & Git Context
Repository: `voks2.github.io` (GitHub Pages)
- Site is live at https://voks2.github.io
- Changes to master branch deploy automatically
- `arhiva/` folder contains previous versions and experimental branches

## Common Tasks

**Update profile/bio**: Edit box with `.special` class in index.html
**Modify colors**: Change `:root` variables in styles.css (affects both layouts)
**Add portfolio item**: Add to items.json, create HTML in items/
**Change layout**: Adjust flex values in `.layout-1/.layout-2` or modify responsive breakpoint
**Test mobile**: Use 768px viewport width breakpoint
