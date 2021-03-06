export default {
    name: "project",
    title: "Project",
    type: "document",
    fields : [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "company",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "school", title: "School"},
                ],
            },
        },
        {
            name: "github",
            type: "url",
        },
        {
            name: "demo",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
}