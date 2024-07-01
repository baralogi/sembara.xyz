// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
        author: fields.relationship({
          label: "Author",
          collection: "authors",
          validation: {
            isRequired: true,
          },
        }),
      },
    }),
    authors: collection({
      label: "Author",
      slugField: "name",
      path: "src/content/author/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
      },
    }),
  },
});
