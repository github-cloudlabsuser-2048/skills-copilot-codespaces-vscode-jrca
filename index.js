import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div>
            <Head>
                <title>Markdown Editor</title>
            </Head>
            <h1>Markdown Editor</h1>
            <textarea
                value={markdown}
                onChange={handleChange}
                rows="10"
                cols="50"
                style={{ width: '100%', height: '200px' }}
            />
            <h2>Preview</h2>
            <div style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world from copilot";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "Copilot from world hello"

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    
const names = data.flat().map(person => person.name);
console.log(names); // Output: ["John", "Jane", "Bob"]


const extractNames = (data) => {
    return data.flat().map(person => person.name);
};

// Example usage:
const namesList = extractNames(data);
console.log(namesList); // Output: ["John", "Jane", "Bob"]
