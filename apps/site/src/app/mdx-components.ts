import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

// Get the default MDX components
const themeComponents = getThemeComponents()

// Get the unexported type of Components from getThemeComponents (useMDXComponents)
type Components = Parameters<typeof getThemeComponents>;

// Merge components
export function useMDXComponents(components: Components) {
  return {
    ...themeComponents,
    ...components
  }
}
