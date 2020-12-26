
(function() {
    var inputs = document.querySelectorAll('input');

    inputs.forEach((input, index) => {
        console.group(index);
        console.log(input);

        console.table({
            type: input.type,
            name: input.name || undefined,
            id: input.id || undefined,
            class: input.className || undefined,
            hidden: input.hidden,
            required: input.required || input.getAttribute('data-val-required') ? true : false,
            min: input.min || undefined,
            max: input.max || undefined,
            minLength: input.minLength || undefined,
            maxLength: input.maxLength || undefined,
            pattern: input.pattern || input.getAttribute('data-val-regex-pattern') || undefined,
            placeholder: input.placeholder || undefined,
            value: input.value || undefined,
            form: input.form ? true : false
        });
        
        console.groupEnd();
    });
})();