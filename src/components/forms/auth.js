import React, {Fragment} from "react"
import Signin from "./signin"
import Signup from "./signup"
import Button from '@material-ui/core/Button';

class Auth extends React.Component {
    state = {
        haveAccount: true
    };
    changeForm = () => {
        this.setState({haveAccount: !this.state.haveAccount})
    };

    renderForms = () =>
         (
            this.state.haveAccount ?
                <Fragment>
                    <Signin/>
                    <span>Нет аккаунта? </span><Button onClick={this.changeForm}>Зарегистрируйтесь!</Button>
                </Fragment> :

                <Fragment>
                    <Signup/>
                    <span>Есть аккаунт? </span><Button onClick={this.changeForm}>Войти</Button>
                </Fragment>
        );

    render() {
        return (this.renderForms())
    }
}

export default Auth