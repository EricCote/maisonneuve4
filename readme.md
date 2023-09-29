# Simple MDX Slides

This is a really simple slide engine running from MDX, with no frills. Light and speedy.

To see an example of it in action, visit https://slides.reactAcademy.live

Press the letter `g` to navigate to another slide

The technologies used:

- **Vite** - Simple framework using swc, React and TypeScript
- **MDX** - Transforms _mdx_ files to _html_, compatible with React components.
  - **remark-gfm** - Github Markdown: enables autolink, tables, strikethrough, tasklist
  - **rehype-prism** - Colorizes code blocks using Prism
- **Bootstrap** - Popular css library
  - **React-Bootstrap** - Bootstrap friendly React components
- **React-Router** - Routing engine

---

## Files and Folders

**vite.config.ts** : Vite configuration file. Added configuration for MDX and 3 MDX extensions:

- remark-gfm (Github Markdown)
- rehype-prism (code block coloring)
- rehype-simple-slides: generates slides separated by --- separator, allows hash navigation

**components** : Folder with custom components:

- Goto Popup: a navigation popup that appears when the user presses the letter `g`. Type a slide number to navigate to the slide.
- rehype-simple-slides: generates slides separated by --- separator, alloes hash navigation
- slides.css: css for the slide generator
- dark-mode: Dark mode theme for react-bootstrap

**decks** : Folder to store mdx slide decks. Pictures and images go to public/img

**homepage**: Folder for the homepage and navigation menu

### Wish list

[ ] Remove Bootstrap and replace it with Tailwind CSS.
