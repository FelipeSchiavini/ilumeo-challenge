
import { ButtonComponentStyled, FormButtonWrapper } from "./input-button.component.styled";

interface ButtonProps extends React.FormHTMLAttributes<HTMLInputElement>{
  title: string;
  width?: number;
}

export const CustomFormButton: React.FC<ButtonProps> = ({title, width}) => {
  return (
    <FormButtonWrapper>
      <ButtonComponentStyled value={title} type="submit" width={width}/>
    </FormButtonWrapper>
  )
}