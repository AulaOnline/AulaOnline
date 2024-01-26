import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {HeadingNode} from "@lexical/rich-text";
import './style.css'

import {
    ListItemNode,
    ListNode
} from "@lexical/list";
import ToolbarPlugin from "./Toolbar";

const theme = {
    heading: {
        h1: 'Editor-H1',
        h2: 'Editor-H2',
        h3: 'Editor-H3'
    }
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
            HeadingNode, ListNode, ListItemNode
        ]
    };
    return (
        <LexicalComposer initialConfig={initialConfig}>
            <ToolbarPlugin/>
            <RichTextPlugin
                contentEditable={<ContentEditable className="contentEditable" />}
                placeholder={<div className="placeholder">Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    );}