import axios from 'axios';
import { IForm } from '../contact/components/form/types';
import { useSetAtom } from 'jotai';
import { formAtom } from '@/store/form';
import { feedbackNameAtom } from '@/store/feedbackName';

export function useFeedback() {
  const setFormSubmitted = useSetAtom(formAtom);
  const setFeedbackName = useSetAtom(feedbackNameAtom);

  const getFeedback = (data: IForm) => {
    setFormSubmitted({ formSubmitted: false, loading: true });

    setTimeout(async () => {
      await axios
        .post('/api/contact/feedback', { ...data })
        .then(({ data }) => {
          setFormSubmitted({ formSubmitted: true, loading: false });
          setFeedbackName(data.name);
        });
    }, 1000);
  };

  return { getFeedback };
}
