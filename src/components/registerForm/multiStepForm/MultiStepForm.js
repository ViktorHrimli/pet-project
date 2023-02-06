import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormData } from './MultiStepForm.styled';
import FormNavigation from '../formNavigation/FormNavigation';

export default function MultiStepForm({ children, initialValues, onSubmit }) {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;
  console.log('step', step);
  const next = values => {
    console.log('values', values);
    console.log('next', next);
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
    console.log('values', values);
  };

  return (
    <>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {formik => (
          <FormData onSubmit={formik.handleSubmit}>
            {step}

            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(formik.values)}
            />
          </FormData>
        )}
      </Formik>
    </>
  );
}

export const FormStep = ({ stepName = '', children }) => children;
