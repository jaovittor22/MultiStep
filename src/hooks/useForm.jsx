import { useState } from "react";

import React from 'react'

export default function useForm(steps) {

    const [currentStep, setCurrenStep] = useState(0)

    function changeStep(i, e) {
       if(e) e.preventDefault()

        if(i < 0 || i >= steps.length) return

        setCurrenStep(i)
    }

  return {currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
