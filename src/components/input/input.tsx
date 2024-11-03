import { IForm } from '@/app/contact/components/form/types';
import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<IForm>;
  name: keyof IForm;
  placeholder: string;
}

export default function Input({
  name,
  placeholder,
  register,
  ...props
}: Props) {
  return (
    <input
      className='bg-dark'
      placeholder={placeholder}
      {...register(name)}
      {...props}
    />
  );
}
