import { Check } from 'phosphor-react';
import { ComponentProps } from 'react';
import { CheckboxContainer, CheckboxIndicator } from './styles';

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = "Checkbox";
