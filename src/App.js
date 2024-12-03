import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>React.js Framework</h1>
      <section>
        <h2>Installing</h2>
        <ol>
          <li>
            The first thing I did was download node.js from: <a href="https://nodejs.org/">Node.js website</a>.
          </li>
          <li>
            After downloading, I used the command npx create-react-app lab10c to create a project for React
          </li>
        </ol>
      </section>

      <section>
        <h2>Building the page</h2>
        <p>It was very easy to create this simple webpage using React. 
        </p>

        <ol>
          <li>
            I navigated to the App.js file. It already contained some necessary statements.
          </li>
          <li>
            What was needed for my page was an "import React from 'react';", importing my css file, a default function (function App()) and 
            "export default App;" (This statement creates html based on what was returned in function App()).
          </li>
          <li>
            Then I wrote the html for this page, and surrounded it with a div tag. (This is because React functions can only return one element, by 
            surrounding my html with div tag, it makes it one element).
          </li>
          <li>
            After I'm done with my html content, I simply made function App() return my html content. This will construct this page when App.js
            is invoked. App.js is the default file, so user will see this page when they visit my website. 
          </li>
        </ol>
      </section>

      <section>
        <h2>Hosting website</h2>

        <p>React can be hosted by running npm start at the root folder. But it is only visible to LAN. So I had to find a hosting service</p>

        <ol> 
          <li>
            The hosting service I found was <a href='https://vercel.com/'>vercel</a>. It is a provides a free front-end server hosting.
          </li>
          <li>
            Then I had to link my GitHub account to vercel.
          </li>
          <li>
            Then I uploaded this lab to my GitHub
          </li>
          <li>
            From there, I was able to just select this lab from vercel for it to host.
          </li>
        </ol>
      </section>

      <section>
        <h2>Difficulties Encountered and Solutions</h2>
        <p>There wasn't much difficulty when I was working on this page. React's syntax for creating a simple webpage was really easy.</p>
        <ul>
          <li>
            I guess one of the difficulty I encountered was the time it took to create the project folder. It took a few minutes for it to create,
            which at first I thought something was wrong. I had to stop it and restart. It turns out it just have a lot of files.
          </li>
          <li> 
            Another difficulty would be uploading this folder onto GitHub. I don't know what part of the project is necessary, what part isn't. 
            So I uploaded the whole thing. It also took fairly long. 
          </li>
          <li>
            Another difficulty I had was with all the other extra files (index.css, index.js...). I didn't know what they do and which one to edit
            because it wasn't covered on React's official website. I had to find a tutorial on the correct files to edit. 
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;