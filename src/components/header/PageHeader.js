import React from "react"
import { connect } from 'react-redux';

function PageHeader(props) {
    const { background, header, sub } = props;

    return (
        <header className="masthead" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                            <h1>{header}</h1>
                            <span className="subheading">{sub}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        background: state.headerBg,
        header: state.headerTitle,
        sub: state.headerSub,
    }
}

export default connect(mapStateToProps)(PageHeader)