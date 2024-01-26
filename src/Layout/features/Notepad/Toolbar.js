import React from 'react';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";
import { insertList } from "@lexical/list";

function HeadingToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const headingTags = ['h1', 'h2', 'h3'];
    const onClick = (tag) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(tag));
            }
        });
    };
    return (
        <>
            {headingTags.map((tag) => (
                <button
                    onClick={() => {
                        onClick(tag);
                    }}
                    key={tag}
                >
                    {tag.toUpperCase()}
                </button>
            ))}
        </>
    );
}

function ListToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag) => {
        if (tag === 'ol') {
            insertList(editor, 'number');
            return;
        }
        insertList(editor, 'bullet');
    };
    return (
        <>
            <button
                onClick={() => {
                    onClick('ol');
                }}
            >
                ol
            </button>
            <button
                onClick={() => {
                    onClick('ul');
                }}
            >
                ul
            </button>
        </>
    );
}

export default function ToolbarPlugin() {
    return (
        <div>
            <HeadingToolbarPlugin />
            <ListToolbarPlugin />
        </div>
    );
}
