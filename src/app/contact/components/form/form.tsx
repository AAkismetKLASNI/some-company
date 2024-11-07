'use client';

import Button from '@/components/button/button';
import Error from '@/components/error/error';
import Input from '@/components/input/input';
import Textarea from '@/components/textarea/textarea';
import { useForm } from 'react-hook-form';
import { IForm } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactScheme } from '@/schemes/contact';
import { useFeedback } from '@/app/hooks/useFeedback';
import { useAtomValue } from 'jotai';
import { formAtom } from '@/store/form';
import { feedbackNameAtom } from '@/store/feedbackName';
import Loader from '@/components/loader/loader';

export default function Form() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IForm>({ resolver: yupResolver(contactScheme) });

  const { formSubmitted, loading } = useAtomValue(formAtom);
  const feedbackName = useAtomValue(feedbackNameAtom);
  const { getFeedback } = useFeedback();

  const error =
    errors.name?.message || errors.email?.message || errors.message?.message;

  return (
    <div className='space-y-section w-[600px]'>
      {formSubmitted ? (
        <h1 className='text-center'>
          Thanks you for your interest,{' '}
          <span className='text-blue-400'>{feedbackName}</span>🎉
        </h1>
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <h2>Join us</h2>
            {error && <Error>{error}</Error>}
            {loading && <Loader />}
          </div>
          <form
            onSubmit={handleSubmit(getFeedback)}
            className='flex flex-col gap-4 w-full'
          >
            <Input placeholder='name' name='name' register={register} />
            <Input placeholder='email' name='email' register={register} />
            <Textarea
              placeholder='message'
              name='message'
              register={register}
            />
            <Button size='full' type='submit'>
              Send
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
