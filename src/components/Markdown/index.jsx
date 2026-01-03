import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "./highLighter";
import rehypeRaw from "rehype-raw";
// import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import "github-markdown-css";

import "./index.css";

function Shapes({ mdText }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                className="my-code"
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {mdText}
      </ReactMarkdown>
    </div>
  );
}

export default Shapes;
