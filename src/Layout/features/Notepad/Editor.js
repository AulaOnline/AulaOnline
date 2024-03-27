import "./style.css";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: "", theme: "snow" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
        this.props.onChange(html);
    }

    render() {
        return (
            <div style={{ backgroundColor: "#f5f5f5"}}>
                <ReactQuill
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    style={{ height: "65vh", backgroundColor: "#f5f5f5" }}
                />
            </div>
        );
    }
}

