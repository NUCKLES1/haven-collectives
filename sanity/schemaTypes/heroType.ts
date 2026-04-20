import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'document',
    icon:TagIcon,
    fields: [
        defineField({
         name: 'title',
         title: 'Title',
         type: 'string',    
        })
    ]
})