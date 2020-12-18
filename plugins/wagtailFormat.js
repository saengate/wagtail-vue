export default {
    type: {
        singleline: "text",
        email: "email",
        number: "number",
        url: "url",
        checkbox: "checkbox",
        radio: "radio",
        date: "date",
        datetime: "datetime-local",
        hidden: "hidden",
        checkboxes: "tag",
        dropdown: "tag",
        multiselect: "tag",
        multiline: "tag",
    },
    html(value) {
        if (this.type[value] !== "tag") {
            return this.type[value];
        }
    },
}
