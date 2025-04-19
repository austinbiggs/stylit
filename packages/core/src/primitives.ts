import * as React from 'react';
import { clsx } from 'clsx';

import { domElements, SupportedHTMLElements } from './domElements';

// Helper type to extract props type from a component
type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

// Type for the primitive component creator function
type PrimitiveCreator<T extends keyof React.JSX.IntrinsicElements> = (
  className?: string | string[],
) => React.FC<React.JSX.IntrinsicElements[T]>;

// Type for the styled component creator function
type StylitComponentCreator = <T extends React.ComponentType<any>>(
  Component: T,
  className?: string | string[],
) => React.FC<ComponentProps<T>>;

// Create the primitive component
const createPrimitive = <T extends keyof React.JSX.IntrinsicElements>(
  element: T,
): PrimitiveCreator<T> => {
  return (className?: string | string[]) => {
    const PrimitiveComponent: React.FC<React.JSX.IntrinsicElements[T]> = (
      props,
    ) => {
      // todo: refactor classname logic into a reusable util for components and elements
      // allow multiple classnames to be passed at once
      const classNameArgAsString = Array.isArray(className)
        ? clsx(className)
        : className;

      // combine all classNames
      const classNamesAsString = clsx(classNameArgAsString, props?.className);

      return React.createElement(element, {
        ...props,
        className: classNamesAsString,
      });
    };
    return PrimitiveComponent;
  };
};

// Create the stylit component
const createStylitComponent: StylitComponentCreator = (
  Component,
  className?,
) => {
  return (props) => {
    // allow multiple classnames to be passed at once
    const classNameArgAsString = Array.isArray(className)
      ? clsx(className)
      : className;

    // combine all classNames
    const classNamesAsString = clsx(classNameArgAsString, props?.className);

    return React.createElement(Component, {
      ...props,
      className: classNamesAsString,
    });
  };
};

// Type for the primitives object
type Primitives = {
  [K in SupportedHTMLElements]: PrimitiveCreator<
    K & keyof React.JSX.IntrinsicElements
  >;
} & {
  react: StylitComponentCreator;
};

// Create the primitives object with proper typing
const primitives = {} as Primitives;

// Add all DOM elements to the primitives object
domElements.forEach((domElement) => {
  primitives[domElement] = createPrimitive(
    domElement as keyof React.JSX.IntrinsicElements,
  );
});

// Add the React primitive for styling custom components
primitives.react = createStylitComponent;

export { primitives as stylit };

// Usage example:
// const Wrapper = stylit.div('wrapper-class');  // Type: FC<HTMLDivElement>
// const List = stylit.ul('list-class');         // Type: FC<HTMLUListElement>
