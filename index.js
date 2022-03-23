import React from "react";
import { StyleSheet } from "react-native";

class WebView extends React.Component {
    iframeRef = React.createRef(null);

    componentDidMount() {
        this.loadIFrame();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.source?.html !== this.props.source?.html) {
            this.loadIFrame();
        }
    }

    loadIFrame = () => {
        this.iframeRef.current.srcdoc = this.props.source.html || "";
    }

    postMessage = (...args) => {
        this.iframeRef.current?.contentWindow.postMessage(...args);
    }

    requestFocus = () => {
        this.iframeRef.current?.contentDocument.body.focus();
    }

    render () {
        return ( <iframe ref={this.iframeRef} allowtransparency="true" style={StyleSheet.flatten([this.props.style, {height: '100%', width: '100%', border: 0, seamless: true, backgroundColor: "transparent" }])} /> );
    }
}
    
export default WebView;
export { WebView };