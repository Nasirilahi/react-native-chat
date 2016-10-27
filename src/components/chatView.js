'use strict';
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, TouchableHighlight, Text, ListView, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';

import MessageView from './messageView';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

class ChatView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(this.props.messages),
            listHeight: 0,
            scrollViewHeight: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.messages),

        });
    }

    scrollToBottom(){
        const bottomOfList =  this.state.listHeight - this.state.scrollViewHeight
        console.log('scrollToBottom');
        this.scrollView.scrollTo({ y: bottomOfList })
    }

    componentDidUpdate(){
        this.scrollToBottom()
    }

    renderRow(message, sectionId, rowId) {
        return (
            <MessageView message={message} />
        );
    }


 render() {
        return (

                <ScrollView
                    keyboardDismissMode="on-drag"
                    onContentSizeChange={ (contentWidth, contentHeight) => {
                                                    this.setState({listHeight: contentHeight })
                                         }}
                    onLayout={(e) => {
                                        const height = e.nativeEvent.layout.height
                                        this.setState({scrollViewHeight: height })
                                      }}
                    ref={ (ref) => this.scrollView = ref }>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        enableEmptySections={true}

                    />
                </ScrollView>

         );
 }
}

function mapStateToProps(state){
    return{
        messages: state.messages.messages
    }
}



export default connect(mapStateToProps)(ChatView);