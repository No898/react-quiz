# REACT QUIZ

## Installation & Getting Started

1. Clone the repo
2. Run `yarn install`
3. Run `yarn start`

## Description

Implement a feature to allow item selection with the following requirements:

1. Clicking an item selects/unselects it.
2. Multiple items can be selected at a time.
3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
4. Currently selected items should be visually highlighted.
5. Currently selected items' names should be shown at the top of the page.
6. Show all boxer's details in the list item.

Feel free to change project structure or refactor any code at will.

## Submit your solution

1. Fork this repo.
2. Commit your solution to your fork.
3. Send us a link to your fork.
4. We will review your solution and get back to you.
5. Good luck!

// 3 hours
// m using the index because the data doesn’t include any IDs, and I didn’t want to use the name as a unique key, since that would require checking for duplicates first. An alternative could be using a UUID library, which generates a random string that can be assigned as an ID to each object.
// I’m aware that relying on the index is not an optimal solution — especially when sorting or modifying the data, where using the index becomes a no-go.

