import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from "./style.css";
const RichTextEditor = () => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ];

    const handleEditorContentChange = (content) => {
        console.log('content: ', content);
        localStorage.setItem('content', content);
    };

    return (
            <div className="text-editor" style={{ height: '100%', overflow: 'hidden', backgroundColor: '#1E1E1E' }}>
                <ReactQuill
                    modules={modules}
                    formats={formats}
                    onChange={handleEditorContentChange}
                    placeholder="Anotar..."
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#D4D4D4',
                    }}
                >
                    <div
                        className="my-editing-area"
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            backgroundColor: '#D4D4D4',
                            color: 'black',
                        }}
                    />
                </ReactQuill>
            </div>
    );
};

export default RichTextEditor;
