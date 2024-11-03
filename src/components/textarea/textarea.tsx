import { IForm } from '@/app/contact/components/form/types';
import { TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<IForm>;
  name: keyof IForm;
  placeholder: string;
}

export default function Textarea({
  name,
  placeholder,
  register,
  ...props
}: Props) {
  return (
    <textarea
      className='bg-dark max-h-32 min-h-14'
      placeholder={placeholder}
      {...register(name)}
      {...props}
    ></textarea>
  );
}
