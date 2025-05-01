// Predefined responses from DianaBot
// DianaBot upgraded response list (upselling + interview Q&A + secret easter eggs)
const botResponses = {
    "hi": "Hi there! 👋 I’m DianaBot, your personal tech guide. Ready to discover what makes Diana a top-tier candidate?",
    "hello": "Hey! I'm here to brag about Diana — just ask me anything!",
  
    // Portfolio insights
    "what do you do": "Diana specializes in backend troubleshooting, SQL magic, and creating customer-first technical solutions.",
    "skills": "SQL, APIs, .NET, AWS, React, DevTools, and writing crystal-clear documentation. Basically a one-woman toolbox 🧰",
    "github": "Explore her projects: <a href=\"https://github.com/dianadevsit\" target=\"_blank\">github.com/dianadevsit</a>",
     "resume": "Sure thing! <a href='assets/Diana-Saasaa-Resume.pdf' target='_blank'>Click here to view her resume</a>.",

    // Interview Q&A
    "api experience": "Diana has worked extensively with REST APIs — including debugging payload issues, fixing auth errors, and helping clients integrate cleanly.",
    "sql example": "She once solved a login issue by finding and deleting duplicate users with SQL — the client got access, and the bug never returned.",
    "team conflict": "Handled a tough team situation by leaning on documentation, collaboration, and staying focused. It built her confidence and toolkit.",
    "strengths": "Quick learner, perfectionist with documentation, and genuinely passionate about solving tough technical problems.",
    "weakness": "Perfectionism — but she’s learning to give herself more grace and focus on growth over perfection.",
    "career goals": "To grow into a technical lead or mentor role, helping junior engineers thrive while staying hands-on with code and support.",
    "why leaving starrez": "Looking for stronger growth opportunities, a better compensation match, and a company that aligns with her passion for learning.",
  
    // Easter eggs
    "tell me a secret": "🤫 Sometimes she says 'brb' to reboot her brain with iced coffee and SQL memes.",
    "coffee": "Her debugging fuel of choice? Cold brew with caramel creamer and a dash of JavaScript.",
    "vibe": "Helpful. Fast. Calm under pressure. Slightly allergic to vague error messages. 😉",
  
    // Help catch-all
    "help": "Try asking about her resume, experience with SQL or APIs, her GitHub, or what she’s proud of. Or type 'tell me a secret' for a surprise."
  };
  
  
  // Handle form submission
  document.getElementById('chatForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const input = document.getElementById('userInput');
    const userMessage = input.value.trim();
  
    if (userMessage === "") return;
  
    appendMessage(userMessage, "user-message");
    respondTo(userMessage.toLowerCase());
  
    input.value = "";
  });
  
  // Append user/bot message to chat
  function appendMessage(text, className) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.innerHTML = text; // Use innerHTML to allow for links
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Bot logic
  function respondTo(input) {
    let response = botResponses[input];
  
    // If unknown question
    if (!response) {
      response = "Hmm, I’m not sure about that. Try 'help' for examples!";
    }
  
    // Simulate typing delay
    setTimeout(() => {
      appendMessage(response, "bot-message");
    }, 700);
  }
  