import React from 'react';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {$getSelection, $isRangeSelection, COMMAND_PRIORITY_LOW, FORMAT_TEXT_COMMAND} from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";
import {INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, insertList} from "@lexical/list";
import { ReactComponent as ListOlIcon } from './icons/list-ol.svg';
import { ReactComponent as ListUlIcon} from "./icons/list-ul.svg";
import { ReactComponent as H1Icon} from "./icons/type-h1.svg";
import { ReactComponent as H2Icon} from "./icons/type-h2.svg";
import { ReactComponent as H3Icon} from "./icons/type-h3.svg";
import { ReactComponent as BoldIcon} from "./icons/type-strikethrough.svg";

import './style.css'
import {Button, ButtonGroup, Grid} from "@mui/material";


const eventType = {
    paragraph: "paragraph",
    h1: "h1",
    h2: "h2",
    ul: "ul",
    ol: "ol",
    quote: "quote",
    formatCode: "formatCode",
    formatUndo: "formatUndo",
    formatRedo: "formatRedo",
    formatBold: "formatBold",
    formatItalic: "formatItalic",
    formatUnderline: "formatUnderline",
    formatStrike: "formatStrike",
    formatInsertLink: "formatInsertLink",
    formatAlignLeft: "formatAlignLeft",
    formatAlignCenter: "formatAlignCenter",
    formatAlignRight: "formatAlignRight",
    insertImage: "insertImage",
}

function HeadingToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const headingTags = [
        { tag: eventType.h1, icon: <H1Icon /> },
        { tag: eventType.h2, icon: <H2Icon /> },
        { tag: eventType.h3, icon: <H3Icon /> },
    ];

    const onClick = (tag) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(tag));
            }
        });
    };

    return (
        <ButtonGroup color="primary"
                     orientation="horizontal"
                     size="small"
                     variant="filledTonal" style={{ height: '100%', borderRight: '1px solid #1976D2', borderRadius:'0px' }}>
            {headingTags.map((item) => (
                <Button
                    className={"ToolbarButton-Heading"}
                    onClick={() => {
                        onClick(item.tag);
                    }}
                    key={item.tag}
                    style={{ border: "none", height: '100%' }} // Adicione esta linha para definir a altura do botão
                >
                    {item.icon}
                </Button>
            ))}
        </ButtonGroup>


    );

}
function ListToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    editor.registerCommand(INSERT_UNORDERED_LIST_COMMAND, () => {
        insertList(editor, 'bullet');
        return true;
    }, COMMAND_PRIORITY_LOW);

    editor.registerCommand(INSERT_ORDERED_LIST_COMMAND, () => {
        insertList(editor, 'number');
        return true;
    }, COMMAND_PRIORITY_LOW);

    const onClick = (tag) => {
        if (tag === eventType.ol) {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
        else if (tag === eventType.ul){
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }
    };


    return (
        <ButtonGroup color="primary"
                     orientation="horizontal"
                     size="small"
                     variant="filledTonal" style={{ height: '100%' }}>
            <Button className={"ToolbarButton-List"}
                    onClick={() => {
                        onClick(eventType.ol);
                    }}
            > <ListOlIcon/>
            </Button>
            <Button className={"ToolbarButton-List"}
                    onClick={() => {
                        onClick(eventType.ul);
                    }}
            > <ListUlIcon/>
            </Button>
        </ButtonGroup>
    );
}



function SetToBoldPlugin(){
    const [editor] = useLexicalComposerContext();

    const onClick = (tag) => {

        if(tag === eventType.formatBold){
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")
        }
    };

    return(
        <ButtonGroup color="primary"
                     orientation="horizontal"
                     size="small"
                     variant="filledTonal" style={{ height: '100%' }}>
            <Button className={"ToolbarButton-formatBold"}
                    onClick={() => {
                        onClick(eventType.formatBold);
                    }}
            > <BoldIcon/>
            </Button>
        </ButtonGroup>
    )
}
export default function ToolbarPlugin() {
    return (
        <Grid container md={12} className={"Toolbar-Container"}>
            <Grid item md={3.4} className={"ToolbarButton-Heading"}>
                <HeadingToolbarPlugin/>
            </Grid>
            <Grid item md={3.4} className={"ToolbarButton-List"}>
                <ListToolbarPlugin/>
                <SetToBoldPlugin/>
            </Grid>

        </Grid>

    );
}
