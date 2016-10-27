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
            dataSource: ds.cloneWithRows(this.props.messages)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.messages)
        });
    }


    renderRow(message, sectionId, rowId) {
        return (
            <MessageView message={message} />
        );
    }

 render() {
        return (

                <ScrollView>
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