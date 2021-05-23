import React from 'react'

function CloseButton({ modal }) {
    return (<button className="btn btn-danger position-absolute top-0 end-0 mt-3 me-3" onClick={() => modal.hide()}>Close</button>);
};

export default CloseButton
