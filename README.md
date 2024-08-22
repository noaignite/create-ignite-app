# Creating a new NoA Ignite project

(Explain why monorepo... Playground for packages... etc.)

## Creating a new monorepo

Start by creating a monorepo project with Turborepo from Vercel. A guide for this can be found at https://turbo.build/repo/docs/getting-started/create-new. If you plan on working with `TailwindCSS` in your project then make sure to initialize your project with the tailwind template.

```bash
npx create-turbo@latest -e with-tailwind -m pnpm
```

## Installing the NoA Ignite docs

[Storybook](https://storybook.js.org/) is a popular way to build UI components in an isolated environment. By putting Storybook into your Turborepo, you can easily develop your design system right alongside your applications. A guide for this can be found at https://turbo.build/repo/docs/handbook/tools/storybook.

```bash
cd my-project/apps
rm -rf docs
npx @noaignite/create-app docs --branch docs
```

## Read the NoA Ignite docs

Make sure to read the `Getting Started` section in the docs for additional setup instructions. To open the docs run the command below:

```bash
pnpm dev
```
