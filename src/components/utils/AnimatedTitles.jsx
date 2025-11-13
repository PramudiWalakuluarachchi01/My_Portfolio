import React,{ useEffect, useState }  from 'react'

function AnimatedTitles() {
    const roles = [
                {title:"Web Developer"}, 
                {title:"Full Stack Developer"},
                {title:"Software Developer"},
                {title:"Android Developer"},
                ]
                 ;

    const [currentRoleIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

                useEffect(() => {
                    const handleTyping = () => {
                        const current = roles[currentRoleIndex].title;
                        if (isDeleting) {
                            if(
                                currentText === current) {
                                    setTimeout(() => 
                                        setIsDeleting(true),2000);
                                        setOnTypingSpeed(500);
                                    } else {
                                        setCurrentText(
                                            current.substring(0, currentText.length +1)
                                        );
                                        setTypingSpeed(150);
                                    }

                                } else {
                                    if(currentText === '') {
                                        setIsDeleting(false);
                                        setCurrentIndex((prev) => (prev + 1) % roles.length);
                                        setTypingSpeed(500);
                                          }   else {
                                        setCurrentText(
                                            current.substring(0, currentText.length +1)
                                        );
                                        setTypingSpeed(150);
                                    }
                                 }
                    }    
                },[])


  return (
    <div>AnimatedTitles</div>
  )
}

export default AnimatedTitles