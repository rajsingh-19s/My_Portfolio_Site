
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRegNewspaper } from 'react-icons/fa';

function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    useEffect(() => {
        document.body.style.overflow = selectedPost ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedPost]);

    const blogPosts = [
        {
            title: 'Mastering Flexbox in CSS',
            summary: 'A quick guide to mastering CSS Flexbox for modern layouts.',
            content: `Flexbox is a layout model that allows elements to align and distribute space within a container. 
            It’s ideal for designing responsive layout structures. In this guide, we’ll explore the properties of 
            flex container and flex items with real-world use cases.

            **Flex Container Properties**:

            - **\`display: flex\`**: This property makes the container a flex container, turning its children into flex items.
            - **\`flex-direction\`**: Controls the direction of the flex items (row, column, etc.).
            - **\`justify-content\`**: Aligns the flex items along the main axis (horizontal or vertical).
            - **\`align-items\`**: Aligns the flex items along the cross axis (perpendicular to the main axis).
            - **\`align-content\`**: Controls alignment of multiple lines of flex items (useful in multi-line layouts).

            **Flex Item Properties**:

            - **\`flex-grow\`**: Defines how much a flex item should grow relative to the other items.
            - **\`flex-shrink\`**: Defines how much a flex item should shrink when there’s not enough space.
            - **\`flex-basis\`**: Specifies the initial size of the flex item before any growing or shrinking happens.
            - **\`flex\`**: A shorthand property that combines \`flex-grow\`, \`flex-shrink\`, and \`flex-basis\`.
            - **\`align-self\`**: Allows an individual item to override the \`align-items\` property.

            **Real-World Use Cases**:

            - **Centering Content**: Flexbox allows you to center content both horizontally and vertically.
            - **Responsive Navigation Menu**: Creating a navigation bar that adjusts between horizontal and vertical based on screen size.
            - **Equal Height Columns**: Flexbox ensures that columns of varying heights are adjusted to match the tallest column.
            - **Card Layouts**: Flexbox can be used to create a responsive grid layout, making cards adjust automatically based on the screen width.
            - **Equal Space Between Items**: Flexbox is ideal for distributing items with equal spacing, such as in a navigation bar.

            Flexbox is a powerful and flexible tool for building responsive, dynamic layouts with minimal effort.
            Its ability to control alignment, spacing, and distribution of items within a container makes it ideal 
            for modern web design.`
        },
        {
            title: 'React Hooks Demystified',
            summary: 'Understanding useState, useEffect, and custom hooks in React.',
            content: `React Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components, without the need to write a class-based component. Before the introduction of hooks, managing state and side effects in React required class components. However, hooks allow you to achieve the same functionality with simpler, more readable code that leverages the power of functional components.
        
            In this post, we’ll dive deeper into two of the most commonly used hooks: \`useState\` and \`useEffect\`, and explain how they work:
        
            ### 1. \`useState\` Hook
        
            This hook allows functional components to have state. In class-based components, state was typically declared inside the constructor, but with hooks, state can be declared anywhere in a function. \`useState\` returns an array where the first element is the current state value, and the second is a function to update that state.
        
            **Example:**
        
            \`\`\`javascript
            const [count, setCount] = useState(0);
            \`\`\`
        
            In this example:
            - \`count\` holds the current value of the state.
            - \`setCount\` is the function used to update the \`count\` state.
        
            You can call \`setCount(newCount)\` to update the state. The component will re-render with the new value.
        
            ### 2. \`useEffect\` Hook
        
            This hook allows you to run side effects in your components. It’s equivalent to lifecycle methods in class components, such as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`. You can use \`useEffect\` to perform actions like fetching data, updating the DOM, or subscribing to an event listener.
        
            **Example:**
        
            \`\`\`javascript
            useEffect(() => {
                // This effect runs after the component renders
                document.title = \`You clicked \${count} times\`;
            }, [count]); // The effect runs only when 'count' changes
            \`\`\`
        
            In this example:
            - The effect runs every time the \`count\` state changes.
            - It updates the document's title to display the current count.
        
            You can also perform cleanup actions in \`useEffect\` by returning a function that React will call when the component unmounts or when the dependencies change.
        
            ### Custom Hooks
        
            React allows you to create **custom hooks**. Custom hooks are a way to reuse stateful logic across multiple components. They enable you to encapsulate and share logic in a modular way without modifying the component hierarchy. Custom hooks can be thought of as functions that utilize other hooks to manage logic that can be reused.
        
            **Example of a custom hook:**
        
            \`\`\`javascript
            function useLocalStorage(key, initialValue) {
                const [storedValue, setStoredValue] = useState(() => {
                    try {
                        const item = window.localStorage.getItem(key);
                        return item ? JSON.parse(item) : initialValue;
                    } catch (error) {
                        console.error(error);
                        return initialValue;
                    }
                });
        
                const setValue = (value) => {
                    try {
                        setStoredValue(value);
                        window.localStorage.setItem(key, JSON.stringify(value));
                    } catch (error) {
                        console.error(error);
                    }
                };
        
                return [storedValue, setValue];
            }
            \`\`\`
        
            In this example:
            - \`useLocalStorage\` is a custom hook that manages state synchronized with \`localStorage\`.
            - It retrieves the value stored in \`localStorage\` (if any) when the component mounts, and it allows you to update the value and store it back in \`localStorage\`.
        
            You can use this custom hook like so:
        
            \`\`\`javascript
            const [name, setName] = useLocalStorage('name', 'John Doe');
            \`\`\`
        
            This hook allows you to store and retrieve data from \`localStorage\` without writing the same logic in every component.
        
            ### Conclusion
        
            By using hooks and custom hooks, we can write more modular, maintainable, and reusable code in React. This makes it easier to manage complex state and side effects within functional components. React’s introduction of hooks has revolutionized the way developers approach building React applications, allowing us to write clean, concise, and more efficient code.`
        },
        
        {
            title: 'Dark Mode with Tailwind CSS',
            summary: 'Learn how to implement dark mode in your Tailwind projects.',
            content: `Dark mode has become a popular feature for modern web applications, providing a more comfortable viewing experience, especially in low-light environments. Tailwind CSS makes it incredibly simple to implement dark mode across your projects.
        
            In this post, we’ll walk through how to enable dark mode in your Tailwind project, set up toggles, and customize styles to create a sleek and accessible design.
        
            ### 1. Enabling Dark Mode in Tailwind CSS
        
            By default, Tailwind CSS doesn't apply dark mode styles. However, it can be enabled by configuring the \`darkMode\` option in your \`tailwind.config.js\` file. You can configure it in two main ways: media-based or class-based dark mode.
        
            **a. Media-based Dark Mode (Automatic)**
        
            This option applies dark mode styles based on the user's system preferences. If the user has dark mode enabled in their operating system, Tailwind will automatically switch to dark mode.
        
            To enable it, add this to your \`tailwind.config.js\`:
        
            \`\`\`javascript
            module.exports = {
                darkMode: 'media', // 'media' uses the prefers-color-scheme media query
                // Other configurations
            }
            \`\`\`
        
            Tailwind will now automatically apply dark mode styles based on the system's dark mode preference.
        
            **b. Class-based Dark Mode (Manual Toggle)**
        
            In some cases, you may want to provide a manual toggle for dark mode. With class-based dark mode, you have full control over when dark mode is applied, typically toggling a class on the root element (like \`<html>\` or \`<body>\`) using JavaScript.
        
            To enable class-based dark mode, update your \`tailwind.config.js\` like this:
        
            \`\`\`javascript
            module.exports = {
                darkMode: 'class', // 'class' allows you to toggle dark mode manually
                // Other configurations
            }
            \`\`\`
        
            After this, you can add the \`dark\` class to your root element when the user toggles dark mode.
        
            ### 2. Setting Up a Dark Mode Toggle
        
            Once dark mode is enabled, you can create a button to toggle dark mode manually. Here's an example of how to set up a simple dark mode toggle button:
        
            **Example of Dark Mode Toggle Button:**
        
            \`\`\`javascript
            import React, { useState, useEffect } from 'react';
        
            function DarkModeToggle() {
                const [isDarkMode, setIsDarkMode] = useState(false);
        
                // On initial load, check if dark mode was previously enabled
                useEffect(() => {
                    if (localStorage.getItem('darkMode') === 'enabled') {
                        setIsDarkMode(true);
                    }
                }, []);
        
                const toggleDarkMode = () => {
                    setIsDarkMode(!isDarkMode);
                    localStorage.setItem('darkMode', !isDarkMode ? 'enabled' : 'disabled');
                };
        
                useEffect(() => {
                    if (isDarkMode) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }, [isDarkMode]);
        
                return (
                    <button
                        onClick={toggleDarkMode}
                        className="bg-gray-200 text-gray-900 p-2 rounded-md dark:bg-gray-800 dark:text-white transition-colors duration-300"
                    >
                        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                );
            }
        
            export default DarkModeToggle;
            \`\`\`
        
            In this example:
            - \`useState\` is used to track the dark mode state.
            - \`localStorage\` is used to persist the dark mode preference across sessions.
            - The \`document.documentElement.classList.add('dark')\` and \`document.documentElement.classList.remove('dark')\` are used to add or remove the \`dark\` class from the root element of the page.
        
            ### 3. Customizing Dark Mode Styles
        
            Once dark mode is enabled, you can easily customize the styles for dark mode by adding the \`dark:\` prefix to your Tailwind classes.
        
            **Example of Customizing Styles for Dark Mode:**
        
            \`\`\`html
            <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-4 rounded-md">
                <h2 className="text-xl font-bold">Welcome to Dark Mode</h2>
                <p>This text will change color based on the dark mode setting.</p>
            </div>
            \`\`\`
        
            In this example:
            - The \`dark:bg-gray-800\` class applies a dark background color when dark mode is active.
            - The \`dark:text-white\` class changes the text color to white when dark mode is active.
        
            You can customize other styles in a similar way, such as borders, shadows, and buttons, to make sure your site is optimized for both light and dark themes.
        
            ### 4. Accessibility Considerations
        
            When implementing dark mode, it's important to keep accessibility in mind. Ensure that text remains legible and that there’s enough contrast between the text and the background. You can use tools like the WebAIM Contrast Checker to ensure that the contrast ratios are within acceptable ranges.
        
            ### Conclusion
        
            Tailwind CSS makes it easy to implement dark mode in your web applications, either by automatically detecting the user's preference or by providing a manual toggle. With a few simple steps, you can add dark mode support to your project, offering a more flexible and accessible user experience.
            `
        },

        {
            title: 'The Role of AI and Machine Learning in Modern Web Development',
            summary: 'Explore how AI and ML are revolutionizing frontend and backend development processes.',
            content: `Artificial Intelligence (AI) and Machine Learning (ML) are transforming the landscape of web development. From enhancing user experience to automating code generation, AI is making websites smarter, faster, and more personalized.
        
            In this blog post, we'll explore how AI and ML are being used in modern web development, real-world applications, and how developers can begin integrating these technologies into their workflow.
        
            ### 1. AI in Frontend Development
        
            AI has brought several enhancements to the frontend:
        
            - **Personalized User Experience**: Websites can now analyze user behavior and adjust the UI dynamically. For example, Netflix or Spotify uses AI algorithms to recommend content based on usage patterns.
            - **Chatbots and Virtual Assistants**: AI-powered chatbots like Drift or Intercom can answer user queries in real-time, improving support and engagement.
            - **Smart Search Suggestions**: As users type, AI can predict what they're searching for based on prior data and patterns (e.g., Google search, Amazon search).
        
            ### Example: Integrating an AI Chatbot
        
            Here's how you can integrate a simple AI chatbot using an API like OpenAI's:
        
            \`\`\`javascript
            import React, { useState } from 'react';
        
            function AIChatbot() {
                const [input, setInput] = useState('');
                const [response, setResponse] = useState('');
        
                const handleSend = async () => {
                    const res = await fetch('/api/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ prompt: input })
                    });
                    const data = await res.json();
                    setResponse(data.reply);
                };
        
                return (
                    <div className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">AI Chatbot</h3>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                            className="w-full p-2 rounded text-black"
                        />
                        <button onClick={handleSend} className="mt-3 bg-purple-600 px-4 py-2 rounded text-white">
                            Send
                        </button>
                        {response && <p className="mt-4">AI: {response}</p>}
                    </div>
                );
            }
        
            export default AIChatbot;
            \`\`\`
        
            This example assumes you have a backend route at \`/api/chat\` that communicates with an AI model like GPT.
        
            ### 2. ML in Backend and Data Processing
        
            Machine Learning helps analyze massive datasets and automate backend processes:
        
            - **Predictive Analytics**: ML algorithms can predict trends, behaviors, or issues based on historical data.
            - **User Behavior Tracking**: ML helps you understand how users interact with your app, and suggest improvements.
            - **Fraud Detection**: Platforms like Stripe or PayPal use ML to detect suspicious activity in real-time.
        
            ### 3. Code Optimization and Automation
        
            Tools powered by AI are helping developers write better code faster:
        
            - **AI Code Assistants**: Tools like GitHub Copilot use machine learning to suggest entire code snippets as you type.
            - **Bug Detection**: AI can analyze your codebase and suggest fixes before bugs go live.
            - **Design to Code**: Tools like Anima or Figma plugins use AI to convert UI designs into clean HTML/CSS/React code.
        
            ### 4. AI in Testing and QA
        
            AI-driven testing frameworks are speeding up quality assurance:
        
            - **Automated Test Generation**: Tools like Testim or Mabl create smart test cases from your UI flows.
            - **Visual Testing**: AI can detect minor visual changes in UIs that humans might overlook.
            - **Performance Monitoring**: ML models can alert developers when metrics like load time or uptime deviate from the norm.
        
            ### 5. Getting Started with AI/ML as a Web Developer
        
            Here’s how you can begin:
        
            - **Use AI APIs**: Services like OpenAI, Hugging Face, Google Cloud AI, or IBM Watson offer easy-to-integrate APIs.
            - **Explore TensorFlow.js**: A JavaScript library that allows you to train and run ML models in the browser.
            - **Experiment with Edge AI**: Libraries like ONNX.js let you run ML models directly in the frontend without a backend.
        
            ### Conclusion
        
            AI and ML are no longer just buzzwords—they're practical tools shaping how modern websites are built. Whether it's improving UX, automating code, or analyzing data, developers can use AI to build smarter, more responsive applications.
        
            As these technologies become more accessible, now is the perfect time to start experimenting and integrating them into your projects.
            `
        },
        
        
    ];

    return (
        <div id='blogs' className='text-gray-300 py-10 relative' ref={containerRef}>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline decoration-purple-500'
                >
                    Blog
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='mb-12 text-gray-400'
                >
                    Thoughts, tutorials, and tips from my dev journey.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            className='bg-[#1c1a2b] backdrop-blur-md bg-opacity-60 rounded-2xl p-6 text-left shadow-md hover:shadow-purple-700 transition-shadow duration-500 cursor-pointer'
                            onClick={() => setSelectedPost(post)}
                        >
                            <FaRegNewspaper className='text-purple-500 text-4xl mb-4' />
                            <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
                            <p className='text-gray-400'>{post.summary}</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='mt-4 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg transition-all hover:bg-purple-500 hover:text-white'
                            >
                                Read More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedPost && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className='fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black/40 z-50'
                    onClick={() => setSelectedPost(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        className='bg-[#1c1a2b] backdrop-blur-lg bg-opacity-80 w-[90%] md:w-[70%] max-w-3xl p-8 rounded-2xl shadow-xl text-left border border-purple-700 overflow-y-auto max-h-[80vh]'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className='text-3xl font-bold text-purple-500 mb-4'>{selectedPost.title}</h2>
                        <p className='text-gray-400 whitespace-pre-line'>{selectedPost.content}</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedPost(null)}
                            className='mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all'
                        >
                            Close
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

export default Blog;
