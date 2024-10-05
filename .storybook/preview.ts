import '../src/app/globals.css'
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import GlobalStyles from '../src/app/@theme/GlobalStyles'
import FontsStyles from '../src/app/fonts/FontsStyles'
import { themed } from '../src/app/@theme/themed'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    default: themed,
  },
  defaultTheme: 'default',
  Provider: ThemeProvider,
  GlobalStyles,
  FontsStyles,
})];

export default preview;
