import React from 'react'

export default function ComponentName (props){
    //all content for a functional component comes through props
    // you can directly access content from the props object passed in by this component's parent
    //all prop names used within this component must match what you defined inside the render of the parent component
    return (<div>Some Component Content</div>)
}