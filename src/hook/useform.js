import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},formValidators = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation,setFormValidation]=useState({})


    useEffect(() => {
      createValidators()
    
     
    }, [formState])

    const isFormValid = useMemo(() => {
        for(const formValue of Object.keys(formValidation)){
            if (formValidation[formValue] !== null) return false            
            
        }
        return true

    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    const createValidators = () => {
         const fromCheckedValue={};

        for(const formfield of Object.keys(formValidators)){
           const [fn,errorMessage]= formValidators[formfield];

           fromCheckedValue[`${formfield}Valido`] = fn(formState[formfield]) ?null :errorMessage

        }
        setFormValidation(fromCheckedValue);
        console.log(fromCheckedValue);
    }

    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    }
}