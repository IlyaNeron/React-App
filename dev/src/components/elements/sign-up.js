import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div className="sign-up">
                <div className="caption-block">
                    <h2>Sign up for newsletter!</h2>
                    <span>Stay informed of the last company news</span>
                </div>
                <form action="#">
                    <input type="email" placeholder={'Your email'}/>
                    <button type={'submit'} className={'btn'}>subscribe</button>
                </form>
            </div>
        );
    }
}

export default SignUp;