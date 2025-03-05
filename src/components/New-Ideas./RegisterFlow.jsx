import React from 'react';

const UncontrolledOnboardingFlow = ({ children, onFinish, currentIndex, onboardingData }) => {
const goToNext = stepData => {
    const nextIndex = currentIndex + 1;
    
    
    const updatedData = {
    ...onboardingData,
    ...stepData,
    
    };
    
    console.log(updatedData);

    if (nextIndex < children.length) {
        setCurrentIndex(nextIndex);
    } else {
        onFinish(updatedData);
    }
    

    setOnboardingData(updatedData);
    
    }
const currentChild = React.Children. toArray(children) [currentIndex] ;
if (React.isValidElement(currentChild)) {

return React.cloneElement(currentChild, { goToNext });
}

return currentChild;

};

export default UncontrolledOnboardingFlow;