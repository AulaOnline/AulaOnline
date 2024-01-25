import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {$createHeadingNode, HeadingNode} from "@lexical/rich-text";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$getSelection, $isRangeSelection} from "lexical";
import {$setBlocksType} from "@lexical/selection";

import './style.css'
const theme = {
    heading: {
        h1: 'Editor-H1',
        h2: 'Editor-H2',
        h3: 'Editor-H3'
    }
}

function HeadingToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const headingTags= ['h1', 'h2', 'h3'];
    const onClick = (tag)  => {
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

export default function Editor() {
    function onError(error) {
        console.error(error);
    }
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [
            HeadingNode
        ]
    };
    return (
        <LexicalComposer initialConfig={initialConfig}>
            <HeadingToolbarPlugin />
            <RichTextPlugin
                contentEditable={<ContentEditable className="contentEditable" />}
                placeholder={<div className="placeholder">Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    );}