import React from 'react'
import { auth } from '../firebase'
import { Button } from 'react-bootstrap'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'right', backgroundColor: '#FAFAFA',  zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut
