import React from 'react'
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import './style.css';
import {$createHeadingNode, HeadingNode} from "@lexical/rich-text";
import {$getSelection, $isRangeSelection} from "lexical";
import {$setBlocksType} from "@lexical/selection";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import {INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListItemNode, ListNode} from "@lexical/list";
import {Button, Grid} from "@mui/material";


const theme = {
    heading: {
        h1: 'aulaOnline-Editor-H1',
        h2: 'aulaOnline-Editor-h2',
        H3: 'aulaOnline-Editor-H3'
    }
}
function onError(error) {
    console.error(error);
}

function HeadingToolbarPlugin(){
    const [editor] = useLexicalComposerContext();
    const onClick = (TAG) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(TAG));
            }
        });
    };
    return (
        <div>
            {['h1', 'h2', 'h3'].map((tag) => (
                <button key={tag} onClick={() => onClick(tag)}>
                    {tag.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
function ListToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag) => {
        if (tag === "ol") {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
            return;
        }
        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    };

    return (
        <div>
            <Button onClick={() => {onClick('ol')}}>
                OL
            </Button>
        </div>
    );
}

function ToolBarPlugin() {
    return (
        <Grid container md={12} sx={{backgroundColor: 'white', margin:'0'}}>
            <HeadingToolbarPlugin/>
            <ListToolbarPlugin/>
        </Grid>

)}
export default function Editor(){
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode
        ]
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <ToolBarPlugin/>
            <RichTextPlugin
                contentEditable={<ContentEditable className="contentEditable" />}
                placeholder={<div className="NotepadPlaceholder"></div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin/> {/*Adiciona a funcionalidade do CTRL + Z*/}

        </LexicalComposer>
    );
}