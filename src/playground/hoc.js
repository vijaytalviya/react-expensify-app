// HOC a component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
    </div>
);
  
const withAdminWarining = (WrappedComponent)=>{
    return (props)=>(
        <div>
        <p>This is private info please don't share!</p>
        <WrappedComponent {...props}/>
        </div>
    );
};

const requiredAuthontication =(WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAuthenticated?(<WrappedComponent {...props}/>):(<p>please login</p>)}
        
        </div>
    );
};
const AdminInfo = withAdminWarining(Info);
const AuthInfo=requiredAuthontication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details "/>,document.getElementById("app"));