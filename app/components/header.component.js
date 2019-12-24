import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    _onMore = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        const { title } = this.props;
        return (
            <Appbar.Header style={{elevation:6, backgroundColor:'#fff'}}>
                <Appbar.Action icon="menu" onPress={() => { this._onMore() }} />
                <Appbar.Content
                    title={title}
                />
            </Appbar.Header>
        );
    }
}

export default withNavigation(HeaderComponent);