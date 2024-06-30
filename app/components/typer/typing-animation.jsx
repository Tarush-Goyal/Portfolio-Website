import React, { useState, useEffect } from 'react';

const TypingText = ({ children, speed = 50, onLetterTyped }) => {
  const [currentText, setCurrentText] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const getText = (element) => {
    if (typeof element === 'string') {
      return element;
    } else {
      const text = [];
      React.Children.forEach(element.props.children, (child) => {
        // if(child == 'TARUSH GOYAL'){
        // console.log(child);
        // }
        text.push(getText(child));
      });
      return text.join('');
    }
  };

  const text = getText(children); // Extract text recursively

  useEffect(() => {
    const typeWriter = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setCurrentText(text.substring(0, i + 1));
          setLetterCount(prevCount => prevCount + 1);
          console.log(i);
          if(i == 25){
            
          }
          if (onLetterTyped) onLetterTyped(prevCount + 1); // Call callback with updated count
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    };

    typeWriter();
  }, [text, speed]);

  // Preserve original props
  
  const clonedElement = React.cloneElement(children, { ...children.props, children: currentText });
  console.log("Cloned element props:", clonedElement.props); 
  return clonedElement;
  
};

export default TypingText;
