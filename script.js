document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form-container');
    const confirmationContainer = document.getElementById('confirmation-container');
    const waitlistForm = document.getElementById('waitlist-form');
    const thankYouElem = document.querySelector('.thank-you');
    const followUpElem = document.querySelector('.follow-up');
    const taglineElem = document.getElementById('tagline');
    const taglineContainer = document.getElementById('tagline-container');

    setTimeBasedTagline();
    
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const firstName = document.getElementById('firstName').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!firstName || !email) {
        return;
      }
      submitToWaitlist(firstName, email);
    });
    
    function setTimeBasedTagline() {
      const hour = new Date().getHours();
      let greeting = '';

      if (hour >= 5 && hour < 12) {
        greeting = 'good morning, sunshine';
      } else if (hour >= 12 && hour < 17) {
        greeting = 'hello, bright mind';
      } else if (hour >= 17 && hour < 22) {
        greeting = 'good evening, stargazer';
      } else {
        greeting = 'welcome, night owl';
      }
    
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= greeting.length) {
          taglineElem.textContent = greeting.substring(0, i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 60);
    }

    function submitToWaitlist(firstName, email) {
      //make an API call here
      console.log('Form submitted:', { firstName, email });

      taglineContainer.style.opacity = '0';
      formContainer.style.opacity = '0';
      formContainer.style.transform = 'translateY(10px)';

      setTimeout(() => {
        formContainer.style.display = 'none';
        confirmationContainer.style.display = 'block';

        confirmationContainer.style.opacity = '1';
        confirmationContainer.style.transform = 'translateY(0)';

        setTimeout(() => {
          thankYouElem.style.animation = 'fadeInText 1s forwards';
          
          setTimeout(() => {
    
            thankYouElem.style.opacity = '0';
            thankYouElem.style.transform = 'translateY(-20px)';
            thankYouElem.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
              followUpElem.style.animation = 'fadeInText 1s forwards';
            }, 800);
          }, 2000);
        }, 300);
      }, 600);
    }
  });