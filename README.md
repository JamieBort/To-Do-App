# To-Do-App

A to-do app created using the React library.

TODO: replace Airtable.com with Google Drive.

## Directories and Files

### Directories

- node_modules/ -

- public/ -

- src/ -

### Files

- ToDo.md - This file is for listing the to-do items that still need to be addressed in this repo.

- package-lock.json -

- package.json -

- README.md - This readme file.

## Branches

```
+-main - the live branch
    |
    +-dev - the development branch
        |
        +-feature - used to build the app out.
            |
            +-container_presentation - For separating the presentation from the logic.
            |
            +-search - For implementing a search feature.
            |   |
            |   +-search_without_filter - For implementing a basic search feature without filtering the To-Do list(s).
            |   |
            |   +-search_with_filter - For implementing a search feature along with filtering the To-Do list(s).
            |
            +-performance - For improving performance by integrating `PropTypes` and/or `TypeScript`.
            |
            +-accessibility - For implementing accessibility features and logic.
            |
            +-lists_component - For creating a component and implementing the logic that allows the user to create lists, delete lists, and edit the names and descriptions of lists.
            |
            +-mobile - For establishing a version on this app on my personal mobile.
            |
            +-online - For establishing a version online.
            |
            +-styling - For adding styling.
```

## To-do tasks for this repo

[ ] 1. Separate logic from presentation. Look into using containers.

[ ] 2. Add search with filtering to those list(s). Search by

1.  title
2.  date created
3.  And when there are other fields such as description or notes, by those too.
4.  Etc

[ ] 3. Improve performance by integrating `PropTypes` and/or `TypeScript`. See [this](https://github.com/Code-the-Dream-School/react/wiki/Lesson-4.1).

[ ] 4. Create a component(s) that

        1.  creates an additional list,
        2.  edits the name of the list,
        3.  deletes the list

        As a stretch goal, functionality to

        1.  add additional field(s) to that new list,
        2.  edit the name of those field(s),
        3.  and deletes those fields.

[ ] 5. Make this app accessible.

[ ] 6. Establish a local version on my mobile.

[ ] 7. Host it online for anyone to access.

[ ] 8. Styling - add css files. See [this](https://github.com/Code-the-Dream-School/react/wiki/Lesson-3.1).

[ ] 9. See how she is incorporating AI. See https://github.com/Ekaterina-Bondareva/react-bald-eagle/blob/main/src/components/ChatGPT.js

[ ] 10. Add a "Description" and/or "Notes" field(s).

[ ] 11. Finish using filter/search library. First push my version. Use different branch for library version.

[ ] 12. For another branch: Add a completion date to the fields. The appearance changes when it's past due.

[ ] 13. For another branch, add sort by completion date and sort by due date.

[ ] 14. For another branch, generalize sort toggle so that the logic is the same for all three.

[ ] 15. For another branch, add a completed component that marks it as completed.

[ ] 16. For another branch, add a feature/component that toggles between the completed tasks, the incomplete tasks, and "display all" tasks. When completed is displayed, date completed is also displayed.
