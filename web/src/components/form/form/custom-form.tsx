import { FormStyled, FormWrapper } from "./form.styled"

interface CustomFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
}

export const CustomForm: React.FunctionComponent<CustomFormProps> = ({children,...props}) => {
  return (
    <FormWrapper>
      <FormStyled {...props} >
        {children}
      </FormStyled>
    </FormWrapper>
  )
}