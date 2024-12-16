import { Meta, StoryObj } from '@storybook/angular'; // Import the necessary types from Storybook
import { AppComponent } from './app.component'; // Import the component you're creating stories for

// Define the metadata for the story
export default {
  title: 'App/Calculator', // Storybook title
  component: AppComponent, // The component being documented
} as Meta<AppComponent>;

// Define a template for the story
const Template: StoryObj<AppComponent> = {
  render: (args: AppComponent) => ({
    component: AppComponent,
    props: args,
  }),
};

// Define the default state of the story
export const Default: StoryObj<AppComponent> = {
  ...Template,
  args: {
    title: 'Calculator',
    display: '',
  },
};

// Define a state with numbers in the display
export const WithNumbers: StoryObj<AppComponent> = {
  ...Template,
  args: {
    title: 'Calculator',
    display: '1+2',
  },
};

// Define a state with an error in the display
export const WithError: StoryObj<AppComponent> = {
  ...Template,
  args: {
    title: 'Calculator',
    display: '1/0',  // This would show an error based on your logic
  },
};
