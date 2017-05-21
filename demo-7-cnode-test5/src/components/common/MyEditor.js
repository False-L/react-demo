import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'
import '../../stylesheets/RichEditor.less'

class MyEditor extends React.Component {
        constructor(props) {
          super(props);
          this.state = {editorState: EditorState.createEmpty()};
          this.focus = () => this.refs.editor.focus();
          this.onChange = (editorState) => this.setState({editorState});
          this.handleKeyCommand = (command) => this._handleKeyCommand(command);
          this.onTab = (e) => this._onTab(e);
          this.toggleBlockType = (type) => this._toggleBlockType(type);
          this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        }
        _handleKeyCommand(command) {
          const {editorState} = this.state;
          const newState = RichUtils.handleKeyCommand(editorState, command);
          if (newState) {
            this.onChange(newState);
            return true;
          }
          return false;
        }
        _onTab(e) {
          const maxDepth = 4;
          this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
        }
        _toggleBlockType(blockType) {
          this.onChange(
            RichUtils.toggleBlockType(
              this.state.editorState,
              blockType
            )
          );
        }
        _toggleInlineStyle(inlineStyle) {
          this.onChange(
            RichUtils.toggleInlineStyle(
              this.state.editorState,
              inlineStyle
            )
          );
        }
        render() {
          const {editorState} = this.state;
          let className = 'RichEditor-editor';
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }
          return (
            <div className="RichEditor-root">
              <div className={className} onClick={this.focus}>
                <Editor
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange}
                  onTab={this.onTab}
                  ref="editor"
                  spellCheck={true}
                />
              </div>
            </div>
          );
        }
      }
      // Custom overrides for "code" style.
      const styleMap = {
        CODE: {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
          fontSize: 16,
          padding: 2,
        },
      };
      function getBlockStyle(block) {
        switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          default: return null;
        }
      }
      class StyleButton extends React.Component {
        constructor() {
          super();
          this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
          };
        }
        render() {
          let className = 'RichEditor-styleButton';
          if (this.props.active) {
            className += ' RichEditor-activeButton';
          }
          return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
          );
        }
      }


export default MyEditor