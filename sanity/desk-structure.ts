import type { StructureResolver } from 'sanity/structure'

const singletonTypes = new Set(['homePage', 'servicesPage', 'careerPage', 'workPage', 'blogPage'])

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .schemaType('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Services Page')
        .schemaType('servicesPage')
        .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
      S.listItem()
        .title('Career Page')
        .schemaType('careerPage')
        .child(S.document().schemaType('careerPage').documentId('careerPage')),
      S.listItem()
        .title('Work Page')
        .schemaType('workPage')
        .child(S.document().schemaType('workPage').documentId('workPage')),
      S.listItem()
        .title('Blog Page')
        .schemaType('blogPage')
        .child(S.document().schemaType('blogPage').documentId('blogPage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
