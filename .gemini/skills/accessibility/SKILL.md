---
name: fix-template-a11y
description: Expertise in refactoring Angular templates (files that end in .html) for semantic HTML and Accessibility (A11y). Use when the user asks to "refactor", "check" or "improve" the accessibility of an Angular HTML template.
---
# Update HTML templates to use semantic HTML
Analyze the selected HTML and perform the following structural and interactive refactors:

1. Interactive Element Refactoring
  - **Replace `<div>` or `<span>` with `<a>`**: If the element contains a `[routerLink]` directive.
  - **Replace `<div>` or `<span>` with `<button>`**: If the element contains a `(click)` event binding.
  - **Logic Optimization**: If a `(click)` binding calls a function that only executes `router.navigate`, replace the element with an `<a>` tag and convert the `(click)` event into a `[routerLink]` directive.

2. Semantic & Landmark Refactoring
- **Landmarks**: Replace generic `<div>` containers with `<main>`, `<header>`, `<footer>`, or `<nav>` based on their class names, IDs, or position.
- **Headings**: Replace `<div>` elements used as titles with appropriate `<h1-h6>` tags.
- **Clarification**: If the semantic intent is ambiguous (e.g., a div that could be an `<aside>` or just a wrapper), pause and ask for clarification before proceeding.

3. Success Criteria & Constraints
- The template should not contain `tabindex` attributes
- Only change the element as described in steps 1 and 2. Do not delete or replace other attributes or directives.
- Run the bash command `ng lint` to verify that the HTML meets basic accessibility requirements

# Output
Provide only the refactored HTML code block. If you have questions about ambiguous elements, list them clearly after the code block.
