import React from 'react';

class UserAction extends React.Component {
    render() {
        return (
            <div className={'user-action'}>
                <button type={'button'} className={'btn btn-form'}>log in</button>
                <button type={'button'} className={'btn btn-form btn-blue'}>sign up</button>
            </div>
        );
    }
}

export default UserAction;