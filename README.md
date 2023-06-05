# PODOROZH ZHYTTIA 

Welcome to "Podorozh Zhyttia" repository! This repository contains the source code and assets for "Podorozh Zhyttia" website. "Podorozh Zhyttia" is a charitable organization that collects funds for the Ukrainian military and provides them with psychological assistance.

## Technologies Used

- Next.js: A framework for building server-rendered React applications.
- Tailwind CSS: A utility-first CSS framework for quickly styling web applications.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

1. Clone the repository:

```
   bash
   git clone https://github.com/SoftRyzen-internship/podorozh-zhyttia.git

```

2. Install the dependencies:

```
   bash
   npm install

```

3. Start the development server:

```
   bash
   npm run dev

```

4. Open your browser and visit http://localhost:3000 to view the website.

## Folder Structure

- `pages/`: Contains the Next.js pages for each route of the website.
- `sections/`: Contains the Next.js sections for each part of the website.
- `components/`: Contains reusable React components used throughout the website.
- `public/`: Contains static assets such as images and fonts.
- `styles/`: Contains global styles and Tailwind CSS configuration.
- `types/`: Contains global types of the project.
- `constants/`: Contains global variables of the project.
- `Layout/`: Contains main layout of the project.

## Component Documentation

### LinkButton

The LinkButton component is a reusable component for displaying interactive links that lead to an external resource.

#### Props

| Name      | Type       | Default Value | Description                                    |
|-----------|------------|---------------|------------------------------------------------|
| href      | string     | -             | The path to an external resource.              |
| children  | ReactNode  | -             | The content to be displayed inside the link.   |
| width     | string     | "full"        | The width of the link.                         |

### ScrollLink

The ScrollLink component is a reusable component for displaying interactive links that smoothly scroll to the corresponding section.

#### Props

| Name      | Type       | Default Value | Description                                    |
|-----------|------------|---------------|------------------------------------------------|
| path      | string     | -             | The path to the corresponding section.         |
| children  | ReactNode  | -             | The content to be displayed inside the link.   |
| offset    | number     | 0             | The indent from the top of the section.        |

### NavLink

The NavLink component is a reusable component for displaying interactive links that smoothly scroll to the corresponding section and are used in navigation.

#### Props

| Name        | Type       | Default Value | Description                                    |
|-------------|------------|---------------|------------------------------------------------|
| path        | string     | -             | The path to the corresponding section.         |
| children    | ReactNode  | -             | The content to be displayed inside the link.   |
| offset      | number     | 0             | The indent from the top of the section.        |
| handleClick | function   | -             | The callback function to be executed on click. |

### Logo

The Logo component is a reusable component for displaying logo with the possibility of changing styles.

#### Props

| Name      | Type       | Default Value | Description                                     |
|-----------|------------|---------------|-------------------------------------------------|
| className | string     | -             | The styles of the component.                    |

### Heading

The Heading component is a reusable component for displaying headings with various weights.

#### Props

| Name      | Type       | Default Value | Description                                     |
|-----------|------------|---------------|-------------------------------------------------|
| weight    | string     | "bold"        | The weight of the heading.                      |
| children  | ReactNode  | -             | The content to be displayed inside the heading. |

## Customization

- Update the content: Modify the text, images, and styles in the respective components to customize the website content according to your requirements.
- Add new pages: Create new files in the `pages/` directory to add additional pages to the website.
- Customize the design: Adjust the styles in the `styles/` directory and tailor the website's appearance to match your branding.

## Layout

Open your browser and visit https://www.figma.com/file/MWrdEuBVuIFZAjXL6zDo9O/%D0%9F%D0%9E%D0%94%D0%9E%D0%A0%D0%9E%D0%96-%D0%96%D0%98%D0%A2%D0%A2%D0%AF?type=design&node-id=0-1&t=N7AdleFwSHZru62c-0 to view the layout of the website.

## Deployment

To deploy the website, follow the deployment instructions provided by the hosting platform of your choice. Some popular options include Vercel, Netlify, and AWS Amplify.

## Contributing

We welcome contributions to enhance the "Podorozh Zhyttia" website. If you find any issues or have ideas for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.












