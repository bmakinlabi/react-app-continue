import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
            }
            // I'm assigning it a variable name so that I can unmount these changes.
            /** 
             * Also note that the instructor didn't use constructor at all. He used componentWillMount() which hass been deprecated.
             * To get the same functionality, I'm using the constructor as recommended by the instructor. 
            */

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        // I moved the code into constructor because the is showing the spinner. That's due to componentDidMount being called first. We should have used ComponentWillMount but it's been deprecated. Using the constructor is the best option.

        // componentDidMount() {
        //     /*
        //     axios.interceptors.request.use(req => {
        //         this.setState({error: null});
        //         return req;
        //     })
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     });
        //     */
        // }

        componentWillUnmount() {
            console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
