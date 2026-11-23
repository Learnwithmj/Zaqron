/**
 * Sanity Studio schema definitions for the ZAQRON content model.
 *
 * These are plain schema objects (no `sanity` import) so this repo carries no Studio
 * dependency. To use them, create a Studio (`npm create sanity@latest`) and register:
 *
 *   import { schemaTypes } from "../zaqron/sanity/schemas";
 *   export default defineConfig({ ..., schema: { types: schemaTypes } });
 *
 * Field names mirror src/types/content.ts, and the GROQ projections in src/lib/content.ts.
 */

const author = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    { name: "name", type: "string", validation: (r: { required: () => unknown }) => r.required() },
    { name: "role", type: "string" },
  ],
};

const post = {
  name: "post",
  title: "Insight / Article",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: (r: { required: () => unknown }) => r.required() },
    { name: "slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r: { required: () => unknown }) => r.required() },
    { name: "excerpt", type: "text", rows: 3, validation: (r: { required: () => unknown }) => r.required() },
    { name: "category", type: "string", options: { list: ["Automation", "AI", "Engineering", "Growth", "Strategy"] } },
    { name: "author", type: "reference", to: [{ type: "author" }] },
    { name: "publishedAt", type: "date", validation: (r: { required: () => unknown }) => r.required() },
    { name: "updatedAt", type: "date" },
    { name: "featured", type: "boolean", initialValue: false },
    { name: "cover", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] },
    { name: "tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
    {
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
      ],
    },
  ],
};

const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "industry", type: "string", description: "Must match an industry name to appear on that industry page" },
    {
      name: "client",
      type: "object",
      description: "Only fill in when the client has given written permission to be named",
      fields: [
        { name: "name", type: "string" },
        { name: "website", type: "url" },
        { name: "permissionConfirmed", type: "boolean" },
      ],
    },
    { name: "summary", type: "text" },
    { name: "services", type: "array", of: [{ type: "string" }], description: "Solution slugs, e.g. web-development" },
    { name: "coverImage", type: "image", fields: [{ name: "alt", type: "string" }] },
    { name: "challenge", type: "array", of: [{ type: "text" }] },
    { name: "strategy", type: "array", of: [{ type: "text" }] },
    { name: "solution", type: "array", of: [{ type: "text" }] },
    { name: "techStack", type: "array", of: [{ type: "string" }] },
    { name: "screenshots", type: "array", of: [{ type: "image", fields: [{ name: "alt", type: "string" }] }] },
    {
      name: "outcomes",
      type: "array",
      description: "Verified, client-approved outcomes only",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }, { name: "note", type: "string" }] }],
    },
    { name: "publishedAt", type: "date" },
  ],
};

export const schemaTypes = [author, post, caseStudy];
