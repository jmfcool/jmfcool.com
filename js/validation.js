import { forms } from "./forms.js";

const validation = {};

validation.regex = {
    empty: /\w/,
    email: /^\S+@\S+\.\S+$/
};

validation.required = (elements) => {
    
    for (let i=0; i<elements.length; i++)
    {
        if (elements[i].classList.contains("required")) 
        {
            if (!validation.regex.empty.test(elements[i].value))
            {
                elements[i].classList.add('error');
            }
            else
            {
                elements[i].classList.remove('error');
            }
        }
        if (elements[i].classList.contains("email")) 
        {
            if (!validation.regex.email.test(elements[i].value))
            {
                elements[i].classList.add('error');
            }
            else
            {
                elements[i].classList.remove('error');
            }
        }
    }

};

validation.flag = (elements) => {

    var flag = true;
        
    for (let i=0; i<elements.length; i++)
    {
        if (elements[i].classList.contains("required")) 
        {
            if (!validation.regex.empty.test(elements[i].value))
            {
                flag = false;
            }
        }
        if (elements[i].classList.contains("email")) 
        {
            if (!validation.regex.email.test(elements[i].value))
            {
                flag = false;
            }
        }
    }

    return flag;

};

validation.init = () => {

    const _forms = document.getElementsByTagName('form');
    
    for (let form of _forms)
    {
        form.addEventListener('click', (event) => {

            const elements = form.getElementsByClassName('required');

            validation.required(elements);
              
            if (validation.flag(elements))
            {
                return forms[form.id]({ form: form });
            }

        });
    }

};

export { validation }