import React from 'react';

function Def(props) { // Note that we're accepting 'props'
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {props.children} {/* Use 'props.children' to render the child components */}
            </body>
        </html>
    );
}

export default Def; // Export the component using 'export default'
