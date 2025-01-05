1. Create a new directory for the component under the `src/` directory in it's specific category.
2. Copy over an existing components Story and index file and past into the new directory
3. Index file and define properties for the component
4. Import Figma generated code to start building component.
5. The component should be rendered in the Storybook underit's respective category.

## Marcus' method

### Settings
1. Create a new directory for the component under the `src/` directory in it's specific category.
2. Copy over an existing components Story and index file and past into the new directory
4. Switch all the old names with the new name with (Cmd+Fn+F2)
3. Set the component Interface (proprieties) and bring to the main fuction on `index.tsx`
4. Paste from Figma the code on the main function
5. Switch the fixed proprieties values by your Interface proprieties you created
6. Set argTypes on `{component}.stories.ts` exatcly as it is on your `index.tsx` with the control modes
7. Set the args for the variants previews too

### Stylishing
1. Link all colors unliked to the Design System tokens using ⌘+Fn+F2
    e.g: "text-#000000" -> "text-text-strong-950"
2. Link all fonts to the Design System tokens using ⌘+Fn+F2
    e.g: "text-text-strong-950 text-base font-medium font-['Inter'] leading-normal" -> "text-text-strong-950 text-label-md"
3. Set all the icons right with Remix Icons components
4. Make the Tailwind proprieties equal Auto-layout on Figma